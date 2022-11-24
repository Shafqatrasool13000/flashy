/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalanceCarrier,
  BalanceCarrierInterface,
} from "../BalanceCarrier";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ethTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060405160c638038060c6833981016040819052602a91604e565b600080546001600160a01b0319166001600160a01b0392909216919091179055607a565b600060208284031215605e578081fd5b81516001600160a01b03811681146073578182fd5b9392505050565b603f8060876000396000f3fe6080604052600080fdfea2646970667358221220c9ef3e0ae8d6fd4d45710ed1f037c8695bf9ba0675e96d790b846ba581163a3464736f6c63430008040033";

export class BalanceCarrier__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    ethTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalanceCarrier> {
    return super.deploy(
      ethTokenAddress,
      overrides || {}
    ) as Promise<BalanceCarrier>;
  }
  getDeployTransaction(
    ethTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(ethTokenAddress, overrides || {});
  }
  attach(address: string): BalanceCarrier {
    return super.attach(address) as BalanceCarrier;
  }
  connect(signer: Signer): BalanceCarrier__factory {
    return super.connect(signer) as BalanceCarrier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalanceCarrierInterface {
    return new utils.Interface(_abi) as BalanceCarrierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalanceCarrier {
    return new Contract(address, _abi, signerOrProvider) as BalanceCarrier;
  }
}
