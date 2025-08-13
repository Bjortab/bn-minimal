export async function onRequest({ request }) {
  const idea = await request.text();
  const reply = idea
    ? `Hej! Du skickade: “${idea}”. (Detta är bara ett demo-svar.)`
    : 'Hej från /api/hello (POSTa en idé i body för demo-svar).';
  return new Response(reply, { headers: { 'content-type': 'text/plain; charset=utf-8' }});
}
