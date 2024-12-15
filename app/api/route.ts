export async function GET(request: Request) {
  return Response.json({ message: `Welcome to Postl`, url: request.url });
}
