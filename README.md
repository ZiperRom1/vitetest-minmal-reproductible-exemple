# Vitetest minimal reproductible example

## Getting start

Install deps with `yarn install`.

## Bug

Run `yarn run test:unit`.

*Result*

```

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Error ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
TypeError: The "path" argument must be of type string. Received an instance of FileHandle
 ❯ new NodeError node:internal/errors:372:5
 ❯ validateString node:internal/validators:120:11
 ❯ Object.isAbsolute node:path:1157:5
 ❯ VirtualFS.mapToBase .pnp.cjs:10549:24
 ❯ VirtualFS.fsMapToBase .pnp.cjs:10467:19
 ❯ VirtualFS.writeFilePromise .pnp.cjs:10371:46
 ❯ PosixFS.writeFilePromise .pnp.cjs:10371:24
 ❯ URLFS.writeFilePromise .pnp.cjs:10371:24
 ❯ IndentedLogger.baseLog .yarn/__virtual__/vitest-virtual-bfd2c224b3/0/cache/vitest-npm-0.18.1-e5f5447995-0d3a77625e.zip/node_modules/vitest/dist/chunk-vite-node-externalize.6956d2d9.mjs:8023:53
 ❯ IndentedLogger.log .yarn/__virtual__/vitest-virtual-bfd2c224b3/0/cache/vitest-npm-0.18.1-e5f5447995-0d3a77625e.zip/node_modules/vitest/dist/chunk-vite-node-externalize.6956d2d9.mjs:7910:17

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_INVALID_ARG_TYPE",
}


```

*Expected*

Junit test report.