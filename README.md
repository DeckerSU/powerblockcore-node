Litecore Node
============

[![NPM Package](https://img.shields.io/npm/v/litecore-node.svg?style=flat-square)](https://www.npmjs.org/package/litecore-node)
[![Build Status](https://img.shields.io/travis/litecoin-project/litecore-node.svg?branch=master&style=flat-square)](https://travis-ci.org/litecoin-project/litecore-node)
[![Coverage Status](https://img.shields.io/coveralls/litecoin-project/litecore-node.svg?style=flat-square)](https://coveralls.io/r/litecoin-project/litecore-node)

A Litecoin blockchain indexing and query service. Intended to be used with as a Litecoin full node or in conjunction with a Litecoin full node.

## Upgrading from previous versions of Litecore Node

There is no upgrade path from previous versions of Litecore Node due to the removal of the included Litecoin Core software. By installing this version, you must resynchronize the indexes from scratch.

## Install

```bash
npm install
./bin/litecore-node start
```

Note: A default configuration file is placed in the litecore user's home directory (~/.litecore/litecore-node.json). Or, alternatively, you can copy the provided "litecore-node.json.sample" file to the project's root directory as litecore-node.json and edit it for your preferences. If you don't have a preferred block source (trusted peer), [Lcoin](TODO) will be started automatically and synchronized with the mainnet chain.

## Prerequisites

- Node.js v8.2.0+
- ~500GB of disk storage
- ~4GB of RAM

## Configuration

The main configuration file is called "litecore-node.json". This file instructs litecore-node for the following options:

- location of database files (datadir)
- tcp port for web services, if configured (port)
- litecoin network type (e.g. mainnet, testnet3, regtest), (network)
- what services to include (services)
- the services' configuration (servicesConfig)

## Add-on Services

There are several add-on services available to extend the functionality of Litecore:

- [Insight Lite API](https://github.com/litecoin-project/insight-lite-api)
- [Insight Lite UI](https://github.com/litecoin-project/insight-lite-ui)
- [Litecore Wallet Service](https://github.com/litecoin-project/litecore-wallet-service)

## Documentation

- [Services](docs/services.md)
  - [Fee](docs/services/fee.md) - Creates a service to handle fee queries
  - [Header](docs/services/header.md) - Creates a service to handle block headers
  - [Block](docs/services/block.md) - Creates a service to handle blocks
  - [Transaction](docs/services/transaction.md) - Creates a service to handle transactions
  - [Address](docs/services/address.md) - Creates a service to handle addresses
  - [Mempool](docs/services/mempool.md) - Creates a service to handle mempool
  - [Timestamp](docs/services/timestamp.md) - Creates a service to handle timestamp
  - [Db](docs/services/db.md) - Creates a service to handle the database
  - [p2p](docs/services/p2p.md) - Creates a service to handle the peer-to-peer network
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/litecoin-project/litecore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/litecoin-project/litecore-node/blob/master/LICENSE).

Copyright 2016-2017 The Litecoin Core Developers

- bitcore: Copyright (c) 2013-2017 BitPay, Inc. (MIT License)
- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
