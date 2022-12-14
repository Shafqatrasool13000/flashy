/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOwned, IOwnedInterface } from "../IOwned";

const _abi = [
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerCandidate",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOwned__factory {
  static readonly abi = _abi;
  static createInterface(): IOwnedInterface {
    return new utils.Interface(_abi) as IOwnedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOwned {
    return new Contract(address, _abi, signerOrProvider) as IOwned;
  }
}
