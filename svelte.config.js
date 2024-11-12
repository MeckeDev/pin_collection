import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: '_app',
      assets: '_app',
      fallback: 'index.html',  // Fallback for SPA mode
      strict: false
    }),
    paths: {
      base: '/pin_collection',  // Change this to match your repo name
    },
  }
};
