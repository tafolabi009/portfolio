import * as React from 'react';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server'; // Stable API

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: any // Use `EntryContext` type if available
) {
  const html = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );
  return new Response(`<!DOCTYPE html>${html}`, {
    status: responseStatusCode,
    headers: {
      ...responseHeaders,
      'Content-Type': 'text/html',
    },
  });
}