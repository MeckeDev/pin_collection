<script>
  import Pins from "$lib/pins.json";
  import { writable } from "svelte/store";
  import { faShoppingBasket, faSearch } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  let collected = [23, 10, 8, 41, 13, 9, 15, 17, 25, 28, 29, 42, 11, 30, 24, 18, 31, 37, 19, 38, 32, 26, 43, 39, 44, 33, 21, 27, 20, 40, 35, 34, 36];
  let giveaways = [{ id: 36, url: "https://x.com/Mecke_Dev/status/1856354302601695734" }];
  let sponsors = []; // { id: 36, url: "https://x.com/Mecke_Dev" }
  let sponsor_count;
  $: sponsor_count = sponsors.length;

  const showCollected = writable(false);

  $: visiblePins = $showCollected ? Pins.filter(pin => collected.includes(pin.id)) : Pins.filter(pin => !collected.includes(pin.id));

  $: console.log($showCollected); 
  $: console.log(visiblePins);
</script>

<h1>
  { $showCollected ? "Collected Pins" : "Missing Pins" } 
  <a target="_blank" href="https://steamcommunity.com/tradeoffer/new/?partner=348394482&token=WWvOt2Ly" class="pin-button tradeoffer">Tradeoffer</a>
</h1>
<button on:click={() => showCollected.update(v => !v)} class="toggle-button">
  Show { $showCollected ? "Missing Pins" : "Collected Pins" }
</button>

<div class="main-section">
  <!-- Missing Pins Section -->
  <div class="pins-grid">
    {#each visiblePins as pin}
      <div class="pin-box">
        <img src={pin.img} alt={pin.name} class="pin-img">
        <div class="pin-details">
          <p class="pin-name">{pin.name}</p>
          <div class="buttons">
            <a href={pin.market} target="_blank" class="icon-button">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </a>
            <a href={pin.inspect} class="icon-button">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Giveaway Section -->
  {#if !$showCollected}
    <div class="giveaway-section">
      <h2>Giveaway</h2>
      <div class="giveaway-grid">
        {#each giveaways as giveaway}
          {@const pin = Pins.find(p => p.id === giveaway.id)}
          {#if pin}
            <div class="pin-box">
              <img src={pin.img} alt={pin.name} class="pin-img">
              <div class="pin-details">
                <p class="pin-name">{pin.name}</p>
                <a href={giveaway.url} target="_blank" class="giveaway-button">Join</a>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>

<!-- Sponsored Pins Section -->
<div class="sponsored-section">
  <h2>Sponsored Pins</h2>
  {#if sponsor_count > 0}
    <div class="sponsored-grid">
      {console.log(sponsors)}
        {#each sponsors as sponsor}
          {@const pin = Pins.find(p => p.id === sponsor.id)}
          {#if pin}
            <div class="pin-box">
              <img src={pin.img} alt={pin.name} class="pin-img">
              <div class="pin-details">
                <p class="pin-name">{pin.name}</p>
                <a href={sponsor.url} target="_blank" class="sponsor-button">Sponsor</a>
              </div>
            </div>
          {/if}
        {/each}
    </div>
    {:else}
    <h1> No Sponsors, be the first one.</h1>
    {/if}
</div>