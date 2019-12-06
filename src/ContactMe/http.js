
const DEFAULT_PARAMS = {
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
    // eslint-disable-next-line no-console
    console.warn(err);
  }

  return res;
};

export const post = async (uri, body = {}) => {

  let res = await fetch(uri, {
    ...DEFAULT_PARAMS,
    method: 'POST',
    body: JSON.stringify(body),
  });

  const ok = res.ok;

  res = await tryParseJson(res);

  if (!ok) {
    return Promise.reject(res);
  }


  return res;
};