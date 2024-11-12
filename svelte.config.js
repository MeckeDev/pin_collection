import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/pin_collection',  // This should match your GitHub repository name
    },
  },
};
