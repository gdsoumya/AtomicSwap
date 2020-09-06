# AtomicSwap

Completely on-chain atomic swaps

## Setup

This guide will help you setup up an automated atomic swap for XTZ->ETH

1. Clone the repository

```sh
$ git clone https://github.com/gdsoumya/AtomicSwap.git
```

2. Install dependencies

```sh
$ cd AtomicSwap/try
$ npm i
```

3. Add config data

In the `try` directory there are 2 directories `createSwap` and `respond2Swap`, each directory has a `config.json` file which needs to be filled.
You need 2 Tezos and 2 Ethereum activated Addresses with some funds in it on the testnets - `carthagenet` and `goerli`.

You can use these faucets to get the test funds :

- [carthagenet](https://faucet.tzalpha.net/)
- [goerli](https://goerli-faucet.slock.it/)

Fill in the private keys for each network make sure you use separate accounts in each directory.

In the `createSwap` config there's a field for `swap_amount` which is by default set to 5XTZ and 0.04ETH.

4. Once the configs are set. You can run either `ethSwap.js` or `tezSwap.js` first one initates an ethereum swap while the second one initiates a tez swap first.

```sh
$ node createSwap/ethSwap.js
```

or

```sh
$ node createSwap/tezSwap.js
```

After starting this script you will recieve the `SWAP Secret` which you should note down.
Before starting the second script wait till you see this message :

```
SWAP Generated
```

Once the message pops up your swap for XTZ->ETH has been created, now you can start the second script parallely in a different terminal. You have to run the second script that corresponds to the first one :

- ethSwap.js : ethRespond.js
- tezSwap.js : tezRespond.js

```sh
$ node respond2Swap/ethRespond.js
```

or

```sh
$ node respond2Swap/tezRespond.js
```

You will be presented with a list of available swaps select the swap with the `hashedSecret` that was generated by the previous script.

Once you have selected the swap it should be completed automatically. Once both the scripts exit you can check your account balances to verify the same.

It can take about 15-20 mins for the swap to be completed from the start of the first script.
