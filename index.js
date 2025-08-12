export default {
  async fetch(request) {
    return new Response("Hej från BN!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
