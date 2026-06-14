import fs from 'node:fs';
import path from 'node:path';

const nativeFile = path.join(process.cwd(), 'node_modules/rollup/dist/native.js');

if (fs.existsSync(nativeFile)) {
  fs.writeFileSync(
    nativeFile,
    `'use strict';\n\nconst native = require('@rollup/wasm-node/dist/native.js');\n\nexports.parse = native.parse;\nexports.parseAsync = native.parseAsync;\nexports.xxhashBase64Url = native.xxhashBase64Url;\nexports.xxhashBase36 = native.xxhashBase36;\nexports.xxhashBase16 = native.xxhashBase16;\n`,
  );
}
