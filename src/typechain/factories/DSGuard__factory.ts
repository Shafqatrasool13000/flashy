/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DSGuard, DSGuardInterface } from "../DSGuard";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "src",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "dst",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
    ],
    name: "LogForbid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "src",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "dst",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
    ],
    name: "LogPermit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "LogSetAuthority",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "LogSetOwner",
    type: "event",
  },
  {
    inputs: [],
    name: "ANY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
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
        name: "src_",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst_",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
    ],
    name: "forbid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "src",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "dst",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
    ],
    name: "forbid",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "src",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "dst",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26108798061005e6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a8542f6611610066578063a8542f6614610121578063b700961314610138578063bf7e214f1461015b578063cbeea68c1461016e578063f0217ce51461018157600080fd5b806313af4035146100a35780632bc3217d146100b857806379d88d87146100cb5780637a9e5e4b146100de5780638da5cb5b146100f1575b600080fd5b6100b66100b13660046106f9565b610194565b005b6100b66100c636600461071c565b610219565b6100b66100d93660046107d2565b610243565b6100b66100ec3660046106f9565b6102ce565b600154610104906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61012a60001981565b604051908152602001610118565b61014b61014636600461075c565b610348565b6040519015158152602001610118565b600054610104906001600160a01b031681565b6100b661017c36600461071c565b61055d565b6100b661018f3660046107d2565b61057e565b6101aa336000356001600160e01b03191661060c565b6101cf5760405162461bcd60e51b81526004016101c6906107fd565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b61023e8360601b6001600160601b0319168360601b6001600160601b03191683610243565b505050565b610259336000356001600160e01b03191661060c565b6102755760405162461bcd60e51b81526004016101c6906107fd565b60008381526002602090815260408083208584528252808320848452909152808220805460ff19169055518291849186917f95ba64c95d85e67ac83a0476c4a62ac2cf8ab2d0407545b8c9d79c3eefa6282991a4505050565b6102e4336000356001600160e01b03191661060c565b6103005760405162461bcd60e51b81526004016101c6906107fd565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6bffffffffffffffffffffffff19606084811b821660008181526002602090815260408083209488901b9095168083529381528482206001600160e01b03198716835290529283205490919060ff16806103c5575060008281526002602090815260408083208484528252808320600019845290915290205460ff165b806103fd57506000828152600260209081526040808320600019845282528083206001600160e01b03198816845290915290205460ff165b80610428575060008281526002602090815260408083206000198452825280832090915290205460ff165b80610475575060008181527f38b5b2ceac7637132d27514ffcf440b705287635075af7b8bd5adcaa6a4cc5bb602090815260408083206001600160e01b03198816845290915290205460ff165b806104ba575060008181527f38b5b2ceac7637132d27514ffcf440b705287635075af7b8bd5adcaa6a4cc5bb60209081526040808320600019845290915290205460ff165b806104fd57506001600160e01b0319841660009081527f47fa60fbc027ac3984ea309688a33182f4193c478b40ba8d294eb2cd3ddc4d97602052604090205460ff165b8061055357506000196000527f47fa60fbc027ac3984ea309688a33182f4193c478b40ba8d294eb2cd3ddc4d976020527ff423d1317b37667cd26005728bffa7c8b0499e133951fcf8e814d4fc5f4c98f65460ff165b9695505050505050565b61023e8360601b6001600160601b0319168360601b6001600160601b031916835b610594336000356001600160e01b03191661060c565b6105b05760405162461bcd60e51b81526004016101c6906107fd565b60008381526002602090815260408083208584528252808320848452909152808220805460ff19166001179055518291849186917f6f50375045128971c5469d343039ba7b8e30a5b190453737b28bda6f7a30677191a4505050565b60006001600160a01b038316301415610627575060016106f3565b6001546001600160a01b0384811691161415610645575060016106f3565b6000546001600160a01b031661065d575060006106f3565b60005460405163b700961360e01b81526001600160a01b0385811660048301523060248301526001600160e01b0319851660448301529091169063b70096139060640160206040518083038186803b1580156106b857600080fd5b505afa1580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f091906107b2565b90505b92915050565b60006020828403121561070a578081fd5b81356107158161082b565b9392505050565b600080600060608486031215610730578182fd5b833561073b8161082b565b9250602084013561074b8161082b565b929592945050506040919091013590565b600080600060608486031215610770578283fd5b833561077b8161082b565b9250602084013561078b8161082b565b915060408401356001600160e01b0319811681146107a7578182fd5b809150509250925092565b6000602082840312156107c3578081fd5b81518015158114610715578182fd5b6000806000606084860312156107e6578283fd5b505081359360208301359350604090920135919050565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b6001600160a01b038116811461084057600080fd5b5056fea264697066735822122049737487c22e99130a991298813902530787ca0cb37e7bbbab665dfcaea7492264736f6c63430008040033";

export class DSGuard__factory extends ContractFactory {
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
  ): Promise<DSGuard> {
    return super.deploy(overrides || {}) as Promise<DSGuard>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DSGuard {
    return super.attach(address) as DSGuard;
  }
  connect(signer: Signer): DSGuard__factory {
    return super.connect(signer) as DSGuard__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DSGuardInterface {
    return new utils.Interface(_abi) as DSGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DSGuard {
    return new Contract(address, _abi, signerOrProvider) as DSGuard;
  }
}