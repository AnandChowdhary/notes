platform-v3 Node package in Staart main/module with types. Basically a wrapper around Axios that returns response.data. API client.
const api = new API(“api-key”);
const user = await api(“GET”, “users/anand”);
AND
const { users } = new API(“api-key”);
const user: User = users.get(“anand”);