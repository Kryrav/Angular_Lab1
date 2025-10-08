
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/lab_1Template/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lab_1Template"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YWACCYIZ.js"
    ],
    "route": "/Program%20Files/Git/lab_1Template/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6000, hash: '523c5b073019a987f9dd9ec83ab748854215777193bb006e2b20386a53a790fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6520, hash: '67f0d66eebbed831f252f04172ad8a119688da223125dcd4a6952dc0e61ff265', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
