export async function onRequest() {
  return Response.json({ ok: true, ts: new Date().toISOString() });
}
