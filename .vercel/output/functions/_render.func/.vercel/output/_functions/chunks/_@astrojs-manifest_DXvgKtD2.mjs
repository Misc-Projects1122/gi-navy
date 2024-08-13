import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_cuKTT-NG.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mac/Documents/VeestarProducts/gi-navy/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/ins-vikrant","isIndex":false,"type":"page","pattern":"^\\/ins-vikrant\\/?$","segments":[[{"content":"ins-vikrant","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ins-vikrant.astro","pathname":"/ins-vikrant","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/nistar-class-dsv","isIndex":false,"type":"page","pattern":"^\\/nistar-class-dsv\\/?$","segments":[[{"content":"nistar-class-dsv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nistar-class-dsv.astro","pathname":"/nistar-class-dsv","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/what-we-do/critical-structures","isIndex":false,"type":"page","pattern":"^\\/what-we-do\\/critical-structures\\/?$","segments":[[{"content":"what-we-do","dynamic":false,"spread":false}],[{"content":"critical-structures","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what-we-do/critical-structures.astro","pathname":"/what-we-do/critical-structures","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/what-we-do/engineering-solutions","isIndex":false,"type":"page","pattern":"^\\/what-we-do\\/engineering-solutions\\/?$","segments":[[{"content":"what-we-do","dynamic":false,"spread":false}],[{"content":"engineering-solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what-we-do/engineering-solutions.astro","pathname":"/what-we-do/engineering-solutions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/what-we-do/habitat-solutions","isIndex":false,"type":"page","pattern":"^\\/what-we-do\\/habitat-solutions\\/?$","segments":[[{"content":"what-we-do","dynamic":false,"spread":false}],[{"content":"habitat-solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what-we-do/habitat-solutions.astro","pathname":"/what-we-do/habitat-solutions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"inline","content":"#leadership[data-astro-cid-ymju6xud]:before{content:\"\";background:url(/assets/dark-hex.webp) repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;opacity:.2;z-index:0}#leadership[data-astro-cid-ymju6xud] .container[data-astro-cid-ymju6xud]{position:relative;z-index:1}\n"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/who-we-are","isIndex":false,"type":"page","pattern":"^\\/who-we-are\\/?$","segments":[[{"content":"who-we-are","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/who-we-are.astro","pathname":"/who-we-are","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CU4wPhXX.js"}],"styles":[{"type":"external","src":"/_astro/about.u9AYju4y.css"},{"type":"inline","content":".carousel_item[data-astro-cid-zi4ldr3x]{position:relative;min-width:100%;height:90vh;transition:all .5s linear;background-repeat:no-repeat;background-size:cover;background-attachment:fixed}.carousel_text[data-astro-cid-zi4ldr3x]{line-height:30px}@media (max-width: 425px){.carousel_item[data-astro-cid-zi4ldr3x]{height:30vh}.carousel_text[data-astro-cid-zi4ldr3x]{line-height:20px}}\n"},{"type":"external","src":"/_astro/_slug_.uHgTS539.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astroship.web3templates.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/ins-vikrant.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/nistar-class-dsv.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/critical-structures.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/engineering-solutions.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/what-we-do/habitat-solutions.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/pages/who-we-are.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mac/Documents/VeestarProducts/gi-navy/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/ins-vikrant@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/nistar-class-dsv@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/what-we-do/critical-structures@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/what-we-do/engineering-solutions@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/what-we-do/habitat-solutions@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/who-we-are@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/ins-vikrant@_@astro":"pages/ins-vikrant.astro.mjs","\u0000@astro-page:src/pages/nistar-class-dsv@_@astro":"pages/nistar-class-dsv.astro.mjs","\u0000@astro-page:src/pages/what-we-do/critical-structures@_@astro":"pages/what-we-do/critical-structures.astro.mjs","\u0000@astro-page:src/pages/what-we-do/engineering-solutions@_@astro":"pages/what-we-do/engineering-solutions.astro.mjs","\u0000@astro-page:src/pages/what-we-do/habitat-solutions@_@astro":"pages/what-we-do/habitat-solutions.astro.mjs","\u0000@astro-page:src/pages/who-we-are@_@astro":"pages/who-we-are.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/mac/Documents/VeestarProducts/gi-navy/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_FIYQRCwr.mjs","@components/ContactForm.tsx":"_astro/ContactForm.CvQKoxKw.js","/astro/hoisted.js?q=0":"_astro/hoisted.CU4wPhXX.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.uHgTS539.css","/_astro/about.u9AYju4y.css","/boat1.webp","/boat2.webp","/boat3.webp","/boat4.webp","/engineers-working.webp","/favicon.svg","/image.png","/image.webp","/india-map-background.webp","/india-map.webp","/leadership-background.webp","/location.png","/opengraph.webp","/robots.txt","/star.webp","/what-we-are-background.webp","/_astro/ContactForm.CvQKoxKw.js","/_astro/client.BIGLHmRd.js","/_astro/hoisted.CU4wPhXX.js","/_astro/index.DhYZZe0J.js","/alliance/alliance1.webp","/alliance/alliance2.webp","/alliance/alliance3.webp","/alliance/alliance4.webp","/alliance/alliance5.webp","/alliance/alliance6.webp","/assets/IAC-Vikrant.webp","/assets/critical-structures.webp","/assets/dark-hex.webp","/assets/habitat-services.webp","/assets/habitate-background.webp","/assets/hero-alt.webp","/assets/hero-source.svg","/assets/hero.webp","/assets/keyboard-arrow-right.svg","/assets/linkedin.svg","/assets/logo-black.webp","/assets/logo-white.webp","/assets/service1.svg","/assets/service2.svg","/assets/service3.svg","/assets/service4.svg","/assets/service5.svg","/assets/solutions1.webp","/assets/solutions2.webp","/assets/solutions3.webp","/assets/solutions4.webp","/assets/solutions5.webp","/assets/solutions6.webp","/assets/structure1.webp","/assets/structure2.webp","/assets/structure3.webp","/assets/structure4.webp","/assets/structure5.webp","/assets/vikrant2.webp","/assets/web1.svg","/assets/whatsapp.svg","/assets/x.svg","/font/SERIFAB.TTF","/habitate/background-left.webp","/habitate/background-right.webp","/hero/heroBanner1.webp","/hero/heroBanner2.webp","/hero/heroBanner3.webp","/hero/heroBanner4.webp","/leadership/abhishek.webp","/leadership/abhishek1.webp","/leadership/pabby.webp","/leadership/pabby1.webp","/leadership/rajesh.webp","/leadership/rajesh1.webp"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
