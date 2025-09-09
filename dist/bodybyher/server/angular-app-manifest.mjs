
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-MXVNZBU4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SY3JRX5M.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2253, hash: 'b946eacca3834c4c4d24b489541c19ad2bc835d46cd070849ab5fc7325fb827c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1956, hash: '1699764b78d7d0fbb0015b3a8f94474f1fc3b3469e89137408cb6c5517b6ea15', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MJBCG3NU.css': {size: 4302, hash: 'UqKbdXgAFUg', text: () => import('./assets-chunks/styles-MJBCG3NU_css.mjs').then(m => m.default)}
  },
};
