<script>
    import Pins from "$lib/pins.json";
    let collected = [23, 10, 8, 41, 13, 9, 15, 17, 25, 28, 29, 42, 11, 30, 24, 18, 31, 37, 19, 38, 32, 26, 43, 39, 44, 33, 21, 27, 20, 40, 35, 34, 36];
  </script>
  
  <style>
    :root {
      background-color: #1e1e2e;
      color: #e0e0e0;
      font-family: Arial, sans-serif;
    }
  
    h1 {
      text-align: center;
      font-size: 2rem;
      margin-top: 2rem;
      color: #f8f8f8;
    }
  
    .pins-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin: 2rem;
      padding: 0;
      list-style-type: none;
    }
  
    .pin-box {
      background-color: #2d2f3b;
      border-radius: 12px;
      text-align: center;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .pin-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    }
  
    .pin-img {
      width: 100%;
      max-width: 150px;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1rem;
      transition: transform 0.2s ease;
    }
  
    .pin-box:hover .pin-img {
      transform: scale(1.05);
    }
  
    .pin-details {
      margin-top: 0.5rem;
    }
  
    .pin-name {
      font-weight: bold;
      font-size: 1.1rem;
      margin: 0.5rem 0 0.8rem;
      color: #ffffff;
    }
  
    .pin-price-button, .pin-button {
      display: inline-block;
      width: 100px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      margin: 0.5rem;
      padding: 0 0.5rem;
      font-size: 0.9rem;
      border-radius: 6px;
      text-decoration: none;
      color: #ffffff;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
  
    .pin-price-button {
      background-color: #3d9970;
    }
  
    .pin-price-button:hover {
      background-color: #2e8b57;
      transform: translateY(-2px);
    }
  
    .pin-button {
      background-color: #6272a4;
    }
  
    .pin-button:hover {
      background-color: #4c567a;
      transform: translateY(-2px);
    }
  </style>
  
  
  <h1>Missing Pins</h1>
  <div class="pins-grid">
    {#each Pins as pin}
      {#if !collected.includes(pin.id)}
        <div class="pin-box">
          <img src={pin.img} alt={pin.name} class="pin-img">
          <div class="pin-details">
            <p class="pin-name">{pin.name}</p>
            <a href={pin.market} target="_blank" class="pin-price-button">Market</a>
            <a href={pin.inspect} class="pin-button">Inspect</a>
          </div>
        </div>
      {/if}
    {/each}
  </div>
  
  <h1>Collected Pins</h1>
  <div class="pins-grid">
    {#each Pins as pin}
      {#if collected.includes(pin.id)}
        <div class="pin-box">
          <img src={pin.img} alt={pin.name} class="pin-img">
          <div class="pin-details">
            <p class="pin-name">{pin.name}</p>
            <a href={pin.inspect} class="pin-button">Inspect</a>
          </div>
        </div>
      {/if}
    {/each}
  </div>
  