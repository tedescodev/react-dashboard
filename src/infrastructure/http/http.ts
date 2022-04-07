const publicHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const tokenHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

const get = async <T>(url: string, isPublic: boolean) => {
  const response = await fetch(url, {
    method: "GET",
    headers: isPublic ? publicHeaders : tokenHeaders,
  });
  return (await response.json()) as T;
};

const post = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: tokenHeaders,
    body: JSON.stringify(body),
  });
  return (await response.json()) as T;
};

const put = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: tokenHeaders,
    body: JSON.stringify(body),
  });
  return (await response.json()) as T;
};

const _delete = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: tokenHeaders,
    body: JSON.stringify(body),
  });
  return (await response.json()) as T;
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
