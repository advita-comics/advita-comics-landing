import superagent from 'superagent';

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

  let request = superagent[method.toLowerCase()](endpoint);

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
