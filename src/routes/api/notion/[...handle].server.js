const KAKAPOLY_STORE_INTEGRATION_TOKEN =
  'secret_15p3bH3ckvhGLc30OtC1tdJSdwlVNh0wB1Lfklb3uVb';

export async function api(request, {params}) {
  const url = new URL(request.url);
  const path = '/' + url.pathname.split('/').slice(3).join('/');
  const requestBody = await request.json();

  const response = await fetch(`https://api.notion.com/v1${path}`, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${KAKAPOLY_STORE_INTEGRATION_TOKEN}`,
      'Notion-Version': '2022-02-22',
    },
    body: JSON.stringify(requestBody),
  });
  const responseBody = await response.json();
  return new Response(JSON.stringify(responseBody), {
    status: response.status,
    statusText: response.statusText,
  });
}
