/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HMock, HMockInterface } from "../HMock";

const _abi = [
  {
    inputs: [],
    name: "MSG_SENDER_KEY",
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
    name: "NATIVE_TOKEN_ADDRESS",
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
    inputs: [],
    name: "PERCENTAGE_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POSTPROCESS_SIG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "cache",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "v",
        type: "uint256",
      },
    ],
    name: "drain",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "drainToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "drainTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "postProcess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stack",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "tokenApprove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "params",
        type: "bytes32[]",
      },
    ],
    name: "updatePostProcess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f5d806100206000396000f3fe6080604052600436106100c25760003560e01c8063bfa2c1d21161007f578063df2ebdbb11610059578063df2ebdbb146101cd578063f5f5ba721461020d578063fa2901a514610241578063fb3f4d291461027557600080fd5b8063bfa2c1d214610192578063c2722916146101a5578063dc9031c4146101ad57600080fd5b80630f532d18146100c75780637c64d0b61461010e57806387c139431461012357806399eb59b91461013f578063aced4cae1461016c578063b184be811461017f575b600080fd5b3480156100d357600080fd5b506100fb7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b61012161011c366004610cf8565b610288565b005b34801561012f57600080fd5b506100fb670de0b6b3a764000081565b34801561014b57600080fd5b506100fb61015a366004610dd8565b60016020526000908152604090205481565b61012161017a366004610c62565b610294565b61012161018d366004610c39565b610501565b6101216101a0366004610bfe565b610550565b610121610658565b3480156101b957600080fd5b506100fb6101c8366004610dd8565b61069b565b3480156101d957600080fd5b506101f573eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6040516001600160a01b039091168152602001610105565b34801561021957600080fd5b506040805180820182526005815264484d6f636b60d81b602082015290516101059190610e53565b34801561024d57600080fd5b5061025c636139148b60e11b81565b6040516001600160e01b03199091168152602001610105565b610121610283366004610bfe565b6106bc565b610291816106c7565b50565b60005b858110156104f8576103388585838181106102c257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906102d79190610bdd565b8888848181106102f757634e487b7160e01b600052603260045260246000fd5b905060200201602081019061030c9190610bdd565b85858581811061032c57634e487b7160e01b600052603260045260246000fd5b90506020020135610772565b86868281811061035857634e487b7160e01b600052603260045260246000fd5b905060200201602081019061036d9190610bdd565b6001600160a01b0316639d4323be86868481811061039b57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103b09190610bdd565b8585858181106103d057634e487b7160e01b600052603260045260246000fd5b6040516001600160e01b031960e087901b1681526001600160a01b0390941660048501526020029190910135602483015250604401600060405180830381600087803b15801561041f57600080fd5b505af1158015610433573d6000803e3d6000fd5b505050506104a985858381811061045a57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061046f9190610bdd565b88888481811061048f57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906104a49190610bdd565b6108dc565b6104e68585838181106104cc57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906104e19190610bdd565b610a2b565b806104f081610ee0565b915050610297565b50505050505050565b816001600160a01b0316639890220b826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561053c57600080fd5b505af11580156104f8573d6000803e3d6000fd5b61057d6040518060400160405280600b81526020016a546172676574737373737360a81b81525084610a6a565b6105a860405180604001604052806009815260200168546f6b656e7373737360b81b81525083610a6a565b6105d360405180604001604052806009815260200168416d6f756e7473737360b81b81525082610aaf565b6105de828483610772565b604051634ea191df60e11b81526001600160a01b03838116600483015260248201839052841690639d4323be90604401600060405180830381600087803b15801561062857600080fd5b505af115801561063c573d6000803e3d6000fd5b5050505061064a82846108dc565b61065382610a2b565b505050565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c696420706f73742070726f6365737360601b604482015260640160405180910390fd5b600081815481106106ab57600080fd5b600091825260209091200154905081565b610653838383610772565b80515b801561072757610715826106df600184610eb2565b815181106106fd57634e487b7160e01b600052603260045260246000fd5b60200260200101516000610af490919063ffffffff16565b8061071f81610ec9565b9150506106ca565b506000805460018101825581805290356001600160e01b0319167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015561029160006001610b0c565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401600060405180830381600087803b1580156107bc57600080fd5b505af19250505080156107cd575060015b6106535760405163095ea7b360e01b81526001600160a01b0383811660048301526000602483015284169063095ea7b390604401602060405180830381600087803b15801561081b57600080fd5b505af115801561082f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108539190610db8565b5060405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401602060405180830381600087803b15801561089e57600080fd5b505af11580156108b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d69190610db8565b50505050565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e9060440160206040518083038186803b15801561092757600080fd5b505afa15801561093b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095f9190610df0565b1115610a275760405163095ea7b360e01b81526001600160a01b0382811660048301526000602483015283169063095ea7b390604401600060405180830381600087803b1580156109af57600080fd5b505af19250505080156109c0575060015b610a275760405163095ea7b360e01b81526001600160a01b0382811660048301526001602483015283169063095ea7b390604401600060405180830381600087803b158015610a0e57600080fd5b505af1158015610a22573d6000803e3d6000fd5b505050505b5050565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015550565b610a278282604051602401610a80929190610e66565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052610b56565b610a278282604051602401610ac5929190610e90565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610b56565b81546001810183556000928352602090922090910155565b81816002811115610b2d57634e487b7160e01b600052602160045260246000fd5b81546001810183556000928352602090922060a09190911b6001600160a01b0319169101555050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b80356001600160a01b0381168114610b8e57600080fd5b919050565b60008083601f840112610ba4578081fd5b50813567ffffffffffffffff811115610bbb578182fd5b6020830191508360208260051b8501011115610bd657600080fd5b9250929050565b600060208284031215610bee578081fd5b610bf782610b77565b9392505050565b600080600060608486031215610c12578182fd5b610c1b84610b77565b9250610c2960208501610b77565b9150604084013590509250925092565b60008060408385031215610c4b578182fd5b610c5483610b77565b946020939093013593505050565b60008060008060008060608789031215610c7a578182fd5b863567ffffffffffffffff80821115610c91578384fd5b610c9d8a838b01610b93565b90985096506020890135915080821115610cb5578384fd5b610cc18a838b01610b93565b90965094506040890135915080821115610cd9578384fd5b50610ce689828a01610b93565b979a9699509497509295939492505050565b60006020808385031215610d0a578182fd5b823567ffffffffffffffff80821115610d21578384fd5b818501915085601f830112610d34578384fd5b813581811115610d4657610d46610f11565b8060051b604051601f19603f83011681018181108582111715610d6b57610d6b610f11565b604052828152858101935084860182860187018a1015610d89578788fd5b8795505b83861015610dab578035855260019590950194938601938601610d8d565b5098975050505050505050565b600060208284031215610dc9578081fd5b81518015158114610bf7578182fd5b600060208284031215610de9578081fd5b5035919050565b600060208284031215610e01578081fd5b5051919050565b60008151808452815b81811015610e2d57602081850181015186830182015201610e11565b81811115610e3e5782602083870101525b50601f01601f19169290920160200192915050565b602081526000610bf76020830184610e08565b604081526000610e796040830185610e08565b905060018060a01b03831660208301529392505050565b604081526000610ea36040830185610e08565b90508260208301529392505050565b600082821015610ec457610ec4610efb565b500390565b600081610ed857610ed8610efb565b506000190190565b6000600019821415610ef457610ef4610efb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220763cedc606add3c484586aab5f18daf9424de8aff5bf74c1bb9c02ffe69cf50864736f6c63430008040033";

export class HMock__factory extends ContractFactory {
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
  ): Promise<HMock> {
    return super.deploy(overrides || {}) as Promise<HMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HMock {
    return super.attach(address) as HMock;
  }
  connect(signer: Signer): HMock__factory {
    return super.connect(signer) as HMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HMockInterface {
    return new utils.Interface(_abi) as HMockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): HMock {
    return new Contract(address, _abi, signerOrProvider) as HMock;
  }
}
