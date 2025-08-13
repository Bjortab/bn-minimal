export default {
  async fetch(req) {
    return new Response("Hello World från BN Minimal!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
