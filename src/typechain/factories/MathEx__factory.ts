/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MathEx, MathExInterface } from "../MathEx";

const _abi = [
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204f8ff0589d41e32b88c899f36c669cb0e7239548bcb34c34f78bc0ea205f664c64736f6c63430008040033";

export class MathEx__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MathEx> {
    return super.deploy(overrides || {}) as Promise<MathEx>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MathEx {
    return super.attach(address) as MathEx;
  }
  connect(signer: Signer): MathEx__factory {
    return super.connect(signer) as MathEx__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathExInterface {
    return new utils.Interface(_abi) as MathExInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MathEx {
    return new Contract(address, _abi, signerOrProvider) as MathEx;
  }
}
