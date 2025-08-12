export default {
  async fetch(request) {
    return new Response("BN Minimal!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
