export async function POST(request: Request) {
  const formData = await request.formData();
  formData.append("access_key", "6c17110f-ec1b-45b0-988f-eb6b614f916a");

  // https://api.web3forms.com/submit
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return Response.json(data);
}
