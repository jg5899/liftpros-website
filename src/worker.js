const PASSWORD = "CVLP2026!";
const COOKIE_NAME = "site_auth";

function getLoginPage(error = "") {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lift Pros - Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a1628; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: white; padding: 2.5rem; border-radius: 12px; width: 100%; max-width: 380px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    h1 { color: #0a1628; font-size: 1.5rem; margin-bottom: 0.5rem; }
    p { color: #666; font-size: 0.9rem; margin-bottom: 1.5rem; }
    input { width: 100%; padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; margin-bottom: 1rem; }
    input:focus { outline: none; border-color: #e8a824; }
    button { width: 100%; padding: 0.75rem; background: #e8a824; color: #0a1628; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; }
    button:hover { background: #d4971e; }
    .error { color: #e53e3e; font-size: 0.85rem; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Lift Pros</h1>
    <p>This site is under development. Enter the password to preview.</p>
    ${error ? `<div class="error">${error}</div>` : ""}
    <form method="POST">
      <input type="password" name="password" placeholder="Enter password" autofocus required>
      <button type="submit">View Site</button>
    </form>
  </div>
</body>
</html>`,
    { status: error ? 401 : 200, headers: { "Content-Type": "text/html" } }
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cookies = request.headers.get("Cookie") || "";
    const isAuthed = cookies.includes(`${COOKIE_NAME}=authorized`);

    if (request.method === "POST") {
      const formData = await request.formData();
      const password = formData.get("password");
      if (password === PASSWORD) {
        return new Response(null, {
          status: 302,
          headers: {
            Location: url.pathname,
            "Set-Cookie": `${COOKIE_NAME}=authorized; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`,
          },
        });
      }
      return getLoginPage("Incorrect password. Please try again.");
    }

    if (!isAuthed) {
      return getLoginPage();
    }

    return env.ASSETS.fetch(request);
  },
};
