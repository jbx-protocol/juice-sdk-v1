# juice-sdk-v1

🧃 A JavaScript SDK for the [Juicebox V1 protocol](https://github.com/jbx-protocol/juice-contracts-v1).

> ⚠️ This library is experimental and we provide no guarantees. Use at your own risk.

## Overview

`juice-sdk-v1` helps you interact with the Juicebox V2 contracts using JavaScript.

Supports your favorite dev environment:

- ✅ Node.js
- ✅ Typescript
- ✅ Webpack (supports tree-shaking)
- ✅ Rollup (supports tree-shaking)
- ✅ Vite (supports tree-shaking)

## Installation

```bash
npm install juice-sdk-v1
```

## Usage

1. Import the factory function for a Juicebox contract.

   ```js
   import { getJBDirectory } from "juice-sdk-v1";
   ```

1. Create a JsonRpcProvider.
   The example below uses the [ethers](https://docs.ethers.io/v5/) library.

   ```js
   import { JsonRpcProvider } from "@ethersproject/providers";
   // ...);
   const provider = new JsonRpcProvider(YOUR_GATEWAY_HOST_URL);
   ```

1. Call the factory function to get an instance of the ethers.js `Contract`.

   ```js
   const JBDirectory = getJBDirectory(provider);
   ```

1. Start interacting with the contract.

   ```js
   const const terminals = await JBDirectory.terminalsOf(projectId);
   ```

### Examples

Inspect the `examples/` directory to learn how to use `juice-sdk-v1` for your project.

| Environment                    | Example                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| node.js                        | [./examples/node](./examples/node)                                                                               |
| node.js with Typescript        | [./examples/typescript-node](./examples/typescript-node)                                                         |
| create-react-app (webpack)     | [./examples/create-react-app](./examples/create-react-app)                                                       |
| Vue                            | [./examples/vue](./examples/vue)                                                                                 |
| Svelte                         | [./examples/svelte](./examples/svelte)                                                                           |
| Vanilla JavaScript (with Vite) | [juice-tools/embed/project/balance](https://github.com/jbx-protocol/juice-tools/tree/main/embed/project/balance) |

## Development

- [Build process](./doc/build-process.md)
