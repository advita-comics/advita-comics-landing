async function APICall(params) {
  const {
    method,
    endpoint,
    query,
    payload,
    headers,
    withCredentials = true,
    disableTLSCerts,
  } = params;

  const superagent = await import(
    /* webpackChunkName: "superagent" */
    'superagent'
  );

  let request = superagent.default[method.toLowerCase()](endpoint);

  if (query) {
    request = request.query(query);
  }

  if (payload) {
    request = request.send(payload);
  }

  if (headers) {
    request = request.set(headers);
  }

  if (withCredentials) {
    request.withCredentials();
  }

  if (disableTLSCerts) {
    request.disableTLSCerts();
  }

  return request;
}

export default APICall;
