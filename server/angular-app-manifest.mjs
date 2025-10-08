
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Angular_Lab1',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Angular_Lab1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YWACCYIZ.js"
    ],
    "route": "/Program%20Files/Git/Angular_Lab1/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5998, hash: '7a1166d513fd0c5c1ba0ac79c07e409f9969edd0bc8ea247273457455d35cc06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6518, hash: '53e18a21f2c18657e91a1579fa24b01dc84ebfc57595e6e05bb5e51534d40be6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
