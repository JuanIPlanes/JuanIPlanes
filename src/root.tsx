import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

// Same fallback the original page shipped: without JS, reveal everything and skip the intro.
const NOSCRIPT_CSS =
  "html{overflow:auto!important}.rv{opacity:1;filter:none}.pl{opacity:1}#dot,#amb,.sb,#cv{display:none}.hero{min-height:auto}";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${import.meta.env.BASE_URL}favicon.svg`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${import.meta.env.BASE_URL}apple-touch-icon.png`}
        />
        <noscript>
          <style dangerouslySetInnerHTML={NOSCRIPT_CSS} />
        </noscript>
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
