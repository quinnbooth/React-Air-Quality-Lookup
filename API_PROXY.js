
/*

The following code is being hosted on the Deno runtime acting as a proxy to keep API keys secure.
It does not have function here -- I've just included it to be comprehensive.
Sensitive information is removed.

*/

import { serve } from "https://deno.land/std@0.137.0/http/server.ts";

const OWTOKEN = "REDACTED";

async function handler(req) {

  const url = new URL(req.url);
  const pathname = url.pathname;

  const fetchURL = `https://api.openweathermap.org${pathname}${url.search}${OWTOKEN}`;

  if (pathname.length > 1) {
    const res = await fetch(fetchURL);

    if (res.body) {
      return new Response(await res.text(), {
        headers: { "Access-Control-Allow-Origin": "https://quinnbooth.github.io" }
      });
    }
  }

  return new Response("Invalid.");
}

serve(handler);
