import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/pin_collection',  // Change this to match your repo name
    },
  }
};
