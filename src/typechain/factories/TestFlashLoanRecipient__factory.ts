/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestFlashLoanRecipient,
  TestFlashLoanRecipientInterface,
} from "../TestFlashLoanRecipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBancorNetwork",
        name: "network",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "callbackData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "receivedAmount",
            type: "uint256",
          },
        ],
        internalType: "struct TestFlashLoanRecipient.CallbackData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "erc20Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToReturn",
        type: "uint256",
      },
    ],
    name: "setAmountToReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "reenter",
        type: "bool",
      },
    ],
    name: "setReenter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "snapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610ddb380380610ddb83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c610d4b61009060003960006102120152610d4b6000f3fe60806040526004361061004e5760003560e01c806323e30c8b1461005a578063265121601461007c578063a6af17031461009c578063ef44c272146100ca578063feaa0994146100f557600080fd5b3661005557005b600080fd5b34801561006657600080fd5b5061007a6100753660046109c6565b610115565b005b34801561008857600080fd5b5061007a610097366004610ae3565b6102f2565b3480156100a857600080fd5b5061007a6100b7366004610aab565b6008805460ff1916911515919091179055565b3480156100d657600080fd5b506100df610321565b6040516100ec9190610bc7565b60405180910390f35b34801561010157600080fd5b5061007a610110366004610aff565b600755565b6040805160c0810182526001600160a01b0380881682528616602080830182905282840187905260608301869052608083018590526000828152908190529290922054869260a08301919061016a9030610449565b6101749190610c45565b90528051600180546001600160a01b03199081166001600160a01b03938416178255602080850151600280549093169416939093179055604083015160035560608301516004556080830151805191926101d4926005929091019061092d565b5060a0919091015160059091015560085460ff161561027f576040805160008152602081019182905263adf51de160e01b9091526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063adf51de19061024c9084908890309060248101610b77565b600060405180830381600087803b15801561026657600080fd5b505af115801561027a573d6000803e3d6000fd5b505050505b60006007546000141561029b576102968486610c2d565b61029f565b6007545b905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b03831614156102d5576102d03382610506565b6102e9565b6102e96001600160a01b0383163383610629565b50505050505050565b6103056001600160a01b03821630610449565b6001600160a01b03909116600090815260208190526040902055565b61036c6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160608152602001600081525090565b6040805160c081018252600180546001600160a01b039081168352600254166020830152600354928201929092526004546060820152600580549192916080840191906103b890610c88565b80601f01602080910402602001604051908101604052809291908181526020018280546103e490610c88565b80156104315780601f1061040657610100808354040283529160200191610431565b820191906000526020600020905b81548152906001019060200180831161041457829003601f168201915b50505050508152602001600582015481525050905090565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b038416141561048157506001600160a01b03811631610500565b826040516370a0823160e01b81526001600160a01b03848116600483015291909116906370a082319060240160206040518083038186803b1580156104c557600080fd5b505afa1580156104d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fd9190610b17565b90505b92915050565b8047101561055b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064015b60405180910390fd5b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146105a8576040519150601f19603f3d011682016040523d82523d6000602084013e6105ad565b606091505b50509050806106245760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610552565b505050565b8061063357505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0384161415610694576040516001600160a01b0383169082156108fc029083906000818181858888f1935050505015801561068e573d6000803e3d6000fd5b50505050565b604080516001600160a01b03808516602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610624929086169185918591859185919060009061072d90849084906107aa565b805190915015610624578080602001905181019061074b9190610ac7565b6106245760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610552565b60606107b984846000856107c3565b90505b9392505050565b6060824710156108245760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610552565b6001600160a01b0385163b61087b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610552565b600080866001600160a01b031685876040516108979190610b5b565b60006040518083038185875af1925050503d80600081146108d4576040519150601f19603f3d011682016040523d82523d6000602084013e6108d9565b606091505b50915091506108e98282866108f4565b979650505050505050565b606083156109035750816107bc565b8251156109135782518084602001fd5b8160405162461bcd60e51b81526004016105529190610bb4565b82805461093990610c88565b90600052602060002090601f01602090048101928261095b57600085556109a1565b82601f1061097457805160ff19168380011785556109a1565b828001600101855582156109a1579182015b828111156109a1578251825591602001919060010190610986565b506109ad9291506109b1565b5090565b5b808211156109ad57600081556001016109b2565b600080600080600060a086880312156109dd578081fd5b85356109e881610cef565b945060208601356109f881610cef565b93506040860135925060608601359150608086013567ffffffffffffffff80821115610a22578283fd5b818801915088601f830112610a35578283fd5b813581811115610a4757610a47610cd9565b604051601f8201601f19908116603f01168101908382118183101715610a6f57610a6f610cd9565b816040528281528b6020848701011115610a87578586fd5b82602086016020830137856020848301015280955050505050509295509295909350565b600060208284031215610abc578081fd5b81356107bc81610d07565b600060208284031215610ad8578081fd5b81516107bc81610d07565b600060208284031215610af4578081fd5b81356107bc81610cef565b600060208284031215610b10578081fd5b5035919050565b600060208284031215610b28578081fd5b5051919050565b60008151808452610b47816020860160208601610c5c565b601f01601f19169290920160200192915050565b60008251610b6d818460208701610c5c565b9190910192915050565b6001600160a01b0385811682526020820185905283166040820152608060608201819052600090610baa90830184610b2f565b9695505050505050565b6020815260006104fd6020830184610b2f565b60208152600060018060a01b03808451166020840152806020850151166040840152506040830151606083015260608301516080830152608083015160c060a0840152610c1760e0840182610b2f565b905060a084015160c08401528091505092915050565b60008219821115610c4057610c40610cc3565b500190565b600082821015610c5757610c57610cc3565b500390565b60005b83811015610c77578181015183820152602001610c5f565b8381111561068e5750506000910152565b600181811c90821680610c9c57607f821691505b60208210811415610cbd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610d0457600080fd5b50565b8015158114610d0457600080fdfea2646970667358221220dff84f3111e8e70f88ef179851fdd0c16f7ecfb119e7c4b87586b74c1d5915dd64736f6c63430008040033";

export class TestFlashLoanRecipient__factory extends ContractFactory {
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
    network: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestFlashLoanRecipient> {
    return super.deploy(
      network,
      overrides || {}
    ) as Promise<TestFlashLoanRecipient>;
  }
  getDeployTransaction(
    network: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(network, overrides || {});
  }
  attach(address: string): TestFlashLoanRecipient {
    return super.attach(address) as TestFlashLoanRecipient;
  }
  connect(signer: Signer): TestFlashLoanRecipient__factory {
    return super.connect(signer) as TestFlashLoanRecipient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestFlashLoanRecipientInterface {
    return new utils.Interface(_abi) as TestFlashLoanRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestFlashLoanRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestFlashLoanRecipient;
  }
}