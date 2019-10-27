
const DEFAULT_PARAMS = {
  // 'Access-Control-Allow-Origin': true,
  credentials: 'include',
  cache: 'no-store',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const tryParseJson = async (res) => {

  try {
    res = await res.json();
  } catch (err) {
    console.warn(err);
  }

  return res;
};

export const post = async (uri, body = {}, type = 'json') => {

  let res = await fetch(uri, {
    ...DEFAULT_PARAMS,
    method: 'POST',
    body: JSON.stringify(body),
  });

  const ok = res.ok;

  if (type === 'json') {
    res = await tryParseJson(res);
  }

  if (!ok) {
    return Promise.reject(res);
  }


  return res;
};