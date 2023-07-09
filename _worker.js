export 默认 {
  async fetch(request, env) {
    const url = 新建 URL(request.url);
    url.host = "api.openai.com";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      内容: request.内容,
      redirect: 'follow'
    });
  }
}
