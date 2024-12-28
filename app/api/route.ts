export async function GET(request: Request) {
  return Response.json({ message: `Welcome to Postl`, url: request.url });
}

export async function POST(request: Request) {
  const data = await request.text();
  console.log(data);
  return Response.json({ message: `Welcome to Postl`, url: request.url, body: JSON.parse(data) });
}
