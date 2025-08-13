export default {
  async fetch() {
    return new Response("Hello from BN proxy!", { status: 200 });
  }
};
