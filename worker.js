export default {
  async fetch(request, env, ctx) {
    return new Response("Hej från BN!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
