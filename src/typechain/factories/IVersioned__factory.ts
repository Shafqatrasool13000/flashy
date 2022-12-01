/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVersioned, IVersionedInterface } from "../IVersioned";

const _abi = [
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVersioned__factory {
  static readonly abi = _abi;
  static createInterface(): IVersionedInterface {
    return new utils.Interface(_abi) as IVersionedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVersioned {
    return new Contract(address, _abi, signerOrProvider) as IVersioned;
  }
}