// index.js
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World från BN Minimal!', {
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  },
};
