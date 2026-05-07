// Cloudflare Pages Function placeholder for real Razorpay order creation.
// IMPORTANT: Put RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in Cloudflare Pages Environment Variables.
export async function onRequestPost(context) {
  const { request, env } = context;
  const body = await request.json().catch(() => ({}));
  const amount = Number(body.amount || 999900);
  if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
    return Response.json({ ok: false, message: 'Razorpay env variables missing. Demo checkout will still work.' }, { status: 400 });
  }
  const auth = btoa(`${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`);
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, currency: 'INR', receipt: `AI-PET-${Date.now()}` })
  });
  return new Response(await res.text(), { status: res.status, headers: { 'Content-Type': 'application/json' } });
}
