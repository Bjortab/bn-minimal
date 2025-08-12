export default {
  async fetch(request) {
    return new Response("BN Minimal körs nu!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
