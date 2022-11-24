/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HCEther, HCEtherInterface } from "../HCEther";

const _abi = [
  {
    inputs: [],
    name: "CETHER",
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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
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
    name: "postProcess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "redeem",
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
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "redeemUnderlying",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "repayBorrowBehalf",
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
  "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe6080604052600436106100c25760003560e01c8063aa553b611161007f578063dc9031c411610059578063dc9031c4146101ed578063df2ebdbb1461020d578063f5f5ba7214610235578063fa2901a51461026b57600080fd5b8063aa553b61146101bd578063c2722916146101d0578063db006a75146101da57600080fd5b8063092a5781146100c75780630f532d181461010c578063852a12e31461014e57806387c139431461016157806399eb59b91461017d578063a0712d68146101aa575b600080fd5b3480156100d357600080fd5b506100ef734ddc2d193948926d02f9b1fe9e1daa0718270ed581565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561011857600080fd5b506101407fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b604051908152602001610103565b61014061015c366004610dcb565b61029f565b34801561016d57600080fd5b50610140670de0b6b3a764000081565b34801561018957600080fd5b50610140610198366004610dcb565b60016020526000908152604090205481565b6101406101b8366004610dcb565b610527565b6101406101cb366004610dfb565b610758565b6101d8610973565b005b6101406101e8366004610dcb565b6109b7565b3480156101f957600080fd5b50610140610208366004610dcb565b610b12565b34801561021957600080fd5b506100ef73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561024157600080fd5b5060408051808201825260078152662421a2ba3432b960c91b602082015290516101039190610ec3565b34801561027757600080fd5b50610286636139148b60e11b81565b6040516001600160e01b03199091168152602001610103565b6040516370a0823160e01b8152306004820152600090734ddc2d193948926d02f9b1fe9e1daa0718270ed590829082906370a082319060240160206040518083038186803b1580156102f057600080fd5b505afa158015610304573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103289190610de3565b60405163852a12e360e01b8152600481018690529091506001600160a01b0383169063852a12e390602401602060405180830381600087803b15801561036d57600080fd5b505af192505050801561039d575060408051601f3d908101601f1916820190925261039a91810190610de3565b60015b610439576103a9611016565b806308c379a0141561040157506103be61102e565b806103c95750610403565b6103fb6040518060400160405280601081526020016f72656465656d556e6465726c79696e6760801b81525082610b33565b50610498565b505b6104346040518060400160405280601081526020016f72656465656d556e6465726c79696e6760801b815250610b8b565b610498565b610496816000146040518060400160405280601081526020016f72656465656d556e6465726c79696e6760801b81525061047284610bbb565b6040516020016104829190610e95565b604051602081830303815290604052610ce9565b505b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b1580156104da57600080fd5b505afa1580156104ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105129190610de3565b905061051e8183610f22565b95945050505050565b6040516370a0823160e01b8152306004820152600090734ddc2d193948926d02f9b1fe9e1daa0718270ed590829082906370a082319060240160206040518083038186803b15801561057857600080fd5b505afa15801561058c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b09190610de3565b90506105bd600085610cfd565b9350816001600160a01b0316631249c58b856040518263ffffffff1660e01b81526004016000604051808303818588803b1580156105fa57600080fd5b505af19350505050801561060c575060015b61068b57610618611016565b806308c379a01415610664575061062d61102e565b806106385750610666565b61065e604051806040016040528060048152602001631b5a5b9d60e21b81525082610b33565b5061068b565b505b61068b604051806040016040528060048152602001631b5a5b9d60e21b815250610b8b565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b1580156106cd57600080fd5b505afa1580156106e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107059190610de3565b60008054600181018255908052734ddc2d193948926d02f9b1fe9e1daa0718270ed57f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910155905061051e8282610f22565b6040516305eff7ef60e21b81526001600160a01b0382166004820152600090734ddc2d193948926d02f9b1fe9e1daa0718270ed590829082906317bfdfbc90602401602060405180830381600087803b1580156107b457600080fd5b505af11580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec9190610de3565b9050808510156107f95750835b60405163e597461960e01b81526001600160a01b03858116600483015283169063e59746199083906024016000604051808303818588803b15801561083d57600080fd5b505af19350505050801561084f575060015b6108e85761085b611016565b806308c379a014156108b4575061087061102e565b8061087b57506108b6565b6108ae604051806040016040528060118152602001703932b830bca137b93937bba132b430b63360791b81525082610b33565b506108e8565b505b6108e8604051806040016040528060118152602001703932b830bca137b93937bba132b430b63360791b815250610b8b565b6040516305eff7ef60e21b81526001600160a01b038581166004830152600091908416906317bfdfbc90602401602060405180830381600087803b15801561092f57600080fd5b505af1158015610943573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109679190610de3565b93505050505b92915050565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c696420706f73742070726f6365737360601b60448201526064015b60405180910390fd5b600047734ddc2d193948926d02f9b1fe9e1daa0718270ed56109d98185610cfd565b60405163db006a7560e01b8152600481018290529094506001600160a01b0382169063db006a7590602401602060405180830381600087803b158015610a1e57600080fd5b505af1925050508015610a4e575060408051601f3d908101601f19168201909252610a4b91810190610de3565b60015b610ad657610a5a611016565b806308c379a01415610aa85750610a6f61102e565b80610a7a5750610aaa565b610aa26040518060400160405280600681526020016572656465656d60d01b81525082610b33565b50610b07565b505b610ad16040518060400160405280600681526020016572656465656d60d01b815250610b8b565b610b07565b610b05816000146040518060400160405280600681526020016572656465656d60d01b81525061047284610bbb565b505b4761051e8382610f22565b60008181548110610b2257600080fd5b600091825260209091200154905081565b6040805180820190915260078152662421a2ba3432b960c91b60208201528282604051602001610b6593929190610e35565b60408051601f198184030181529082905262461bcd60e51b82526109ae91600401610ec3565b610bb8816040518060400160405280600b81526020016a155b9cdc1958da599a595960aa1b815250610b33565b50565b606081610bdf5750506040805180820190915260018152600360fc1b602082015290565b6000825b8015610c095781610bf381610fbb565b9250610c029050600a82610f0e565b9050610be3565b5060008167ffffffffffffffff811115610c3357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c5d576020820181803683370190505b509050815b8015610ce157610c73600a86610fd6565b610c7e906030610ef6565b60f81b82610c8d600184610f22565b81518110610cab57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610ccd600a86610f0e565b945080610cd981610f69565b915050610c62565b509392505050565b82610cf857610cf88282610b33565b505050565b60006000198214610d0f57508061096d565b6001600160a01b0383161580610d4157506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee145b15610d4d57504761096d565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a082319060240160206040518083038186803b158015610d8c57600080fd5b505afa158015610da0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc49190610de3565b9392505050565b600060208284031215610ddc578081fd5b5035919050565b600060208284031215610df4578081fd5b5051919050565b60008060408385031215610e0d578081fd5b8235915060208301356001600160a01b0381168114610e2a578182fd5b809150509250929050565b60008451610e47818460208901610f39565b605f60f81b9083019081528451610e65816001840160208901610f39565b6101d160f51b600192909101918201528351610e88816003840160208801610f39565b0160030195945050505050565b65032b93937b9160d51b815260008251610eb6816006850160208701610f39565b9190910160060192915050565b6020815260008251806020840152610ee2816040850160208701610f39565b601f01601f19169190910160400192915050565b60008219821115610f0957610f09610fea565b500190565b600082610f1d57610f1d611000565b500490565b600082821015610f3457610f34610fea565b500390565b60005b83811015610f54578181015183820152602001610f3c565b83811115610f63576000848401525b50505050565b600081610f7857610f78610fea565b506000190190565b601f8201601f1916810167ffffffffffffffff81118282101715610fb457634e487b7160e01b600052604160045260246000fd5b6040525050565b6000600019821415610fcf57610fcf610fea565b5060010190565b600082610fe557610fe5611000565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600060033d111561102b57600481823e5160e01c5b90565b600060443d101561103c5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561106c57505050505090565b82850191508151818111156110845750505050505090565b843d870101602082850101111561109e5750505050505090565b6110ad60208286010187610f80565b50909594505050505056fea2646970667358221220c1f3aa6263b6da203dd0a3d0ffcfe22b7169bba50d872bf3d4bd984f57f5d08f64736f6c63430008040033";

export class HCEther__factory extends ContractFactory {
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
  ): Promise<HCEther> {
    return super.deploy(overrides || {}) as Promise<HCEther>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HCEther {
    return super.attach(address) as HCEther;
  }
  connect(signer: Signer): HCEther__factory {
    return super.connect(signer) as HCEther__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HCEtherInterface {
    return new utils.Interface(_abi) as HCEtherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HCEther {
    return new Contract(address, _abi, signerOrProvider) as HCEther;
  }
}
