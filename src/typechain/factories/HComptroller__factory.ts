/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HComptroller, HComptrollerInterface } from "../HComptroller";

const _abi = [
  {
    inputs: [],
    name: "COMPTROLLER",
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
    inputs: [],
    name: "claimComp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "claimComp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b11806100206000396000f3fe60806040526004361061009c5760003560e01c8063c272291611610064578063c272291614610179578063dc9031c414610183578063df2ebdbb146101a3578063e9af0292146101cb578063f5f5ba72146101de578063fa2901a51461021957600080fd5b80630f532d18146100a15780631bd85bdb146100e85780635f82c67e146100f057806387c139431461013057806399eb59b91461014c575b600080fd5b3480156100ad57600080fd5b506100d57fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b6100d561024d565b3480156100fc57600080fd5b50610118733d9819210a31b4961b30ef54be2aed79b9c9cd3b81565b6040516001600160a01b0390911681526020016100df565b34801561013c57600080fd5b506100d5670de0b6b3a764000081565b34801561015857600080fd5b506100d56101673660046108d3565b60016020526000908152604090205481565b610181610522565b005b34801561018f57600080fd5b506100d561019e3660046108d3565b610566565b3480156101af57600080fd5b5061011873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6100d56101d9366004610894565b610587565b3480156101ea57600080fd5b50604080518082018252600c81526b2421b7b6b83a3937b63632b960a11b602082015290516100df9190610963565b34801561022557600080fd5b50610234636139148b60e11b81565b6040516001600160e01b031990911681526020016100df565b600080733d9819210a31b4961b30ef54be2aed79b9c9cd3b90506000816001600160a01b0316639d1b5a0a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a257600080fd5b505afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da91906108b7565b9050600061032f7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b6040516370a0823160e01b81526001600160a01b0380831660048301529192506000918416906370a082319060240160206040518083038186803b15801561037657600080fd5b505afa15801561038a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ae91906108eb565b6040516374d7814960e11b81526001600160a01b0384811660048301529192509085169063e9af029290602401600060405180830381600087803b1580156103f557600080fd5b505af1925050508015610406575060015b61048f57610412610a24565b806308c379a014156104635750610427610a3c565b806104325750610465565b61045d604051806040016040528060098152602001680636c61696d436f6d760bc1b81525082610807565b5061048f565b505b61048f604051806040016040528060098152602001680636c61696d436f6d760bc1b815250610864565b6040516370a0823160e01b81526001600160a01b038381166004830152600091908516906370a082319060240160206040518083038186803b1580156104d457600080fd5b505afa1580156104e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050c91906108eb565b90506105188282610996565b9550505050505090565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c696420706f73742070726f6365737360601b60448201526064015b60405180910390fd5b6000818154811061057657600080fd5b600091825260209091200154905081565b600080733d9819210a31b4961b30ef54be2aed79b9c9cd3b90506000816001600160a01b0316639d1b5a0a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105dc57600080fd5b505afa1580156105f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061491906108b7565b6040516370a0823160e01b81526001600160a01b0386811660048301529192506000918316906370a082319060240160206040518083038186803b15801561065b57600080fd5b505afa15801561066f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069391906108eb565b6040516374d7814960e11b81526001600160a01b0387811660048301529192509084169063e9af029290602401600060405180830381600087803b1580156106da57600080fd5b505af19250505080156106eb575060015b610774576106f7610a24565b806308c379a01415610748575061070c610a3c565b80610717575061074a565b610742604051806040016040528060098152602001680636c61696d436f6d760bc1b81525082610807565b50610774565b505b610774604051806040016040528060098152602001680636c61696d436f6d760bc1b815250610864565b6040516370a0823160e01b81526001600160a01b038681166004830152600091908416906370a082319060240160206040518083038186803b1580156107b957600080fd5b505afa1580156107cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f191906108eb565b90506107fd8282610996565b9695505050505050565b60408051808201909152600c81526b2421b7b6b83a3937b63632b960a11b6020820152828260405160200161083e93929190610903565b60408051601f198184030181529082905262461bcd60e51b825261055d91600401610963565b610891816040518060400160405280600b81526020016a155b9cdc1958da599a595960aa1b815250610807565b50565b6000602082840312156108a5578081fd5b81356108b081610ac6565b9392505050565b6000602082840312156108c8578081fd5b81516108b081610ac6565b6000602082840312156108e4578081fd5b5035919050565b6000602082840312156108fc578081fd5b5051919050565b600084516109158184602089016109b9565b605f60f81b90830190815284516109338160018401602089016109b9565b6101d160f51b6001929091019182015283516109568160038401602088016109b9565b0160030195945050505050565b60208152600082518060208401526109828160408501602087016109b9565b601f01601f19169190910160400192915050565b6000828210156109b457634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156109d45781810151838201526020016109bc565b838111156109e3576000848401525b50505050565b601f8201601f1916810167ffffffffffffffff81118282101715610a1d57634e487b7160e01b600052604160045260246000fd5b6040525050565b600060033d1115610a3957600481823e5160e01c5b90565b600060443d1015610a4a5790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715610a7a57505050505090565b8285019150815181811115610a925750505050505090565b843d8701016020828501011115610aac5750505050505090565b610abb602082860101876109e9565b509095945050505050565b6001600160a01b038116811461089157600080fdfea2646970667358221220718d87c2a7f09ce48eb69405680541d529530fe7e4fca0b83c38bc6b3ca8593264736f6c63430008040033";

export class HComptroller__factory extends ContractFactory {
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
  ): Promise<HComptroller> {
    return super.deploy(overrides || {}) as Promise<HComptroller>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HComptroller {
    return super.attach(address) as HComptroller;
  }
  connect(signer: Signer): HComptroller__factory {
    return super.connect(signer) as HComptroller__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HComptrollerInterface {
    return new utils.Interface(_abi) as HComptrollerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HComptroller {
    return new Contract(address, _abi, signerOrProvider) as HComptroller;
  }
}
