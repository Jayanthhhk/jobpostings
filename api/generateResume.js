export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { prompt } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();

  return new Response(JSON.stringify({ output: data.choices[0].message.content }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // ✅ Allow all origins (for dev)
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}
