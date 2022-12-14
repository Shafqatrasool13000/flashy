/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDSProxyRegistry,
  IDSProxyRegistryInterface,
} from "../IDSProxyRegistry";

const _abi = [
  {
    inputs: [],
    name: "build",
    outputs: [
      {
        internalType: "contract IDSProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "build",
    outputs: [
      {
        internalType: "contract IDSProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "input",
        type: "address",
      },
    ],
    name: "proxies",
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
];

export class IDSProxyRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IDSProxyRegistryInterface {
    return new utils.Interface(_abi) as IDSProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDSProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as IDSProxyRegistry;
  }
}
