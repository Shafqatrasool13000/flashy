/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HSCompound, HSCompoundInterface } from "../HSCompound";

const _abi = [
  {
    inputs: [],
    name: "CETH_ADDRESS",
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
    name: "COMP_ADDRESS",
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
    name: "FCOMPOUND_ACTIONS",
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
        internalType: "address",
        name: "dsProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenBorrow",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "cAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "uBorrowAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "needEnterMarket",
        type: "bool",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "payable",
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
        name: "dsProxy",
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
    inputs: [
      {
        internalType: "address",
        name: "dsProxy",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dsProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
    ],
    name: "enterMarket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dsProxy",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "cTokens",
        type: "address[]",
      },
    ],
    name: "enterMarkets",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dsProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
    ],
    name: "exitMarket",
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
        internalType: "address",
        name: "dsProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenRepay",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenWithdraw",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "uRepayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cWithdrawAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrow",
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
        name: "dsProxy",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ea4806100206000396000f3fe60806040526004361061011f5760003560e01c8063c2722916116100a0578063e9af029211610064578063e9af02921461031d578063f53cc4b314610330578063f5f5ba7214610343578063fa2901a51461037c578063fffdb6a0146103b057600080fd5b8063c272291614610292578063d6a898c71461029a578063d9caed12146102c2578063dc9031c4146102d5578063df2ebdbb146102f557600080fd5b80635f82c67e116100e75780635f82c67e146101e65780638340f5491461020e57806387c139431461022157806399eb59b91461023d578063b2b8b7dc1461026a57600080fd5b80630f532d181461012457806324991d661461016b5780632e528a37146101805780634883400d146101935780634ab45d33146101a6575b600080fd5b34801561013057600080fd5b506101587fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b61017e6101793660046119de565b6103c3565b005b61017e61018e366004611a70565b6104c3565b61017e6101a1366004611b1f565b610726565b3480156101b257600080fd5b506101ce734ddc2d193948926d02f9b1fe9e1daa0718270ed581565b6040516001600160a01b039091168152602001610162565b3480156101f257600080fd5b506101ce733d9819210a31b4961b30ef54be2aed79b9c9cd3b81565b61017e61021c366004611adf565b6108e3565b34801561022d57600080fd5b50610158670de0b6b3a764000081565b34801561024957600080fd5b50610158610258366004611bbe565b60016020526000908152604090205481565b34801561027657600080fd5b506101ce73c00e94cb662c3520282e6f5717214004a7f2688881565b61017e610941565b3480156102a657600080fd5b506101ce7305ef8eb657027927fab9b279138f0189cb14497681565b61017e6102d0366004611adf565b610985565b3480156102e157600080fd5b506101586102f0366004611bbe565b610a10565b34801561030157600080fd5b506101ce73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b61015861032b36600461199f565b610a31565b61017e61033e3660046119de565b610c49565b34801561034f57600080fd5b50604080518082018252600a8152691214d0dbdb5c1bdd5b9960b21b602082015290516101629190611d05565b34801561038857600080fd5b50610397636139148b60e11b81565b6040516001600160e01b03199091168152602001610162565b61017e6103be366004611a16565b610df2565b8160006103ce611178565b90506104b3816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b505afa15801561042a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044e91906119c2565b6001600160a01b0316146040518060400160405280600781526020016611d95b995c985b60ca1b8152506040518060400160405280601881526020017f4e6f74206f776e6572206f662074686520445350726f787900000000000000008152506111c6565b6104bd84846111da565b50505050565b8560006104ce611178565b9050610516816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b84156105275761052788888761132d565b82156105375761053788886111da565b831561071c5760006001600160a01b038716734ddc2d193948926d02f9b1fe9e1daa0718270ed5141561057f575073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee61058b565b6105888761145a565b90505b886001600160a01b0316631cff79cd7305ef8eb657027927fab9b279138f0189cb144976634b8a35298a896040516024016105c7929190611c9e565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519184901b6001600160e01b031916825261060e9291600401611c7a565b602060405180830381600087803b15801561062857600080fd5b505af1925050508015610658575060408051601f3d908101601f1916820190925261065591810190611bd6565b60015b6106e057610664611da9565b806308c379a014156106b25750610679611dc1565b8061068457506106b4565b6106ac60405180604001604052806006815260200165626f72726f7760d01b815250826114d3565b506106e2565b505b6106db60405180604001604052806006815260200165626f72726f7760d01b81525061152e565b6106e2565b505b6106ed89828761155e565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461071a5761071a816116ae565b505b5050505050505050565b826000610731611178565b9050610779816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b846001600160a01b0316631cff79cd7305ef8eb657027927fab9b279138f0189cb14497663c299823887876040516024016107b5929190611cb7565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519184901b6001600160e01b03191682526107fc9291600401611c7a565b602060405180830381600087803b15801561081657600080fd5b505af1925050508015610846575060408051601f3d908101601f1916820190925261084391810190611bd6565b60015b6108da57610852611da9565b806308c379a014156108a65750610867611dc1565b8061087257506108a8565b6108a06040518060400160405280600c81526020016b656e7465724d61726b65747360a01b815250826114d3565b506108dc565b505b6108d56040518060400160405280600c81526020016b656e7465724d61726b65747360a01b81525061152e565b6108dc565b505b5050505050565b8260006108ee611178565b9050610936816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b6108dc85858561132d565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c696420706f73742070726f6365737360601b60448201526064015b60405180910390fd5b826000610990611178565b90506109d8816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b6109e385858561155e565b6001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146108dc576108dc846116ae565b60008181548110610a2057600080fd5b600091825260209091200154905081565b6000816000610a3e611178565b9050610a86816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b6040516374d7814960e11b81526001600160a01b0385166004820152733d9819210a31b4961b30ef54be2aed79b9c9cd3b9063e9af029290602401600060405180830381600087803b158015610adb57600080fd5b505af1925050508015610aec575060015b610b7557610af8611da9565b806308c379a01415610b495750610b0d611dc1565b80610b185750610b4b565b610b43604051806040016040528060098152602001680636c61696d436f6d760bc1b815250826114d3565b50610b75565b505b610b75604051806040016040528060098152602001680636c61696d436f6d760bc1b81525061152e565b6040516370a0823160e01b81526001600160a01b038516600482015260009073c00e94cb662c3520282e6f5717214004a7f26888906370a082319060240160206040518083038186803b158015610bcb57600080fd5b505afa158015610bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c039190611bd6565b9050610c248573c00e94cb662c3520282e6f5717214004a7f268888361155e565b610c4173c00e94cb662c3520282e6f5717214004a7f268886116ae565b949350505050565b816000610c54611178565b9050610c9c816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b604080516001600160a01b0385811660248084019190915283518084039091018152604490920183526020820180516001600160e01b0316630ede4edd60e41b1790529151631cff79cd60e01b815291861691631cff79cd91610d18917305ef8eb657027927fab9b279138f0189cb1449769190600401611c7a565b602060405180830381600087803b158015610d3257600080fd5b505af1925050508015610d62575060408051601f3d908101601f19168201909252610d5f91810190611bd6565b60015b6108dc57610d6e611da9565b806308c379a01415610dc05750610d83611dc1565b80610d8e5750610dc2565b610dba6040518060400160405280600a815260200169195e1a5d13585c9ad95d60b21b815250826114d3565b506104bd565b505b610ded6040518060400160405280600a815260200169195e1a5d13585c9ad95d60b21b81525061152e565b6104bd565b846000610dfd611178565b9050610e45816001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041657600080fd5b8315611155576001600160a01b038616734ddc2d193948926d02f9b1fe9e1daa0718270ed51415610fd057866001600160a01b0316631cff79cd857305ef8eb657027927fab9b279138f0189cb14497663abdb5ea88a89604051602401610ead929190611c9e565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610ef49291600401611c7a565b6020604051808303818588803b158015610f0d57600080fd5b505af193505050508015610f3e575060408051601f3d908101601f19168201909252610f3b91810190611bd6565b60015b610f9757610f4a611da9565b806308c379a01415610f9d5750610f5f611dc1565b80610f6a5750610f9f565b610f976040518060400160405280600b81526020016a7265706179426f72726f7760a81b815250826114d3565b50611155565b505b610fcb6040518060400160405280600b81526020016a7265706179426f72726f7760a81b81525061152e565b611155565b6000610fdb8761145a565b9050610fe88189876116ed565b876001600160a01b0316631cff79cd7305ef8eb657027927fab9b279138f0189cb14497663abdb5ea88a89604051602401611024929190611c9e565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519184901b6001600160e01b031916825261106b9291600401611c7a565b602060405180830381600087803b15801561108557600080fd5b505af19250505080156110b5575060408051601f3d908101601f191682019092526110b291810190611bd6565b60015b611147576110c1611da9565b806308c379a0141561111457506110d6611dc1565b806110e15750611116565b61110e6040518060400160405280600b81526020016a7265706179426f72726f7760a81b815250826114d3565b50611149565b505b6111426040518060400160405280600b81526020016a7265706179426f72726f7760a81b81525061152e565b611149565b505b61115381896117fa565b505b821561116f5761116687868561155e565b61116f856116ae565b50505050505050565b7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b826111d5576111d582826114d3565b505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b0316633fe5d42560e01b1790529151631cff79cd60e01b815291841691631cff79cd91611256917305ef8eb657027927fab9b279138f0189cb1449769190600401611c7a565b602060405180830381600087803b15801561127057600080fd5b505af19250505080156112a0575060408051601f3d908101601f1916820190925261129d91810190611bd6565b60015b6111d5576112ac611da9565b806308c379a014156112fa57506112c1611dc1565b806112cc57506112fc565b6111d56040518060400160405280600c81526020016b17d95b9d195c93585c9ad95d60a21b815250826114d3565b505b6113296040518060400160405280600c81526020016b17d95b9d195c93585c9ad95d60a21b81525061152e565b5050565b61135660405180604001604052806007815260200166647350726f787960c81b8152508461193e565b61137d604051806040016040528060058152602001642a37b5b2b760d91b8152508361193e565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156113da5760405183906001600160a01b0382169083156108fc029084906000818181858888f193505050501580156108dc573d6000803e3d6000fd5b60405163a9059cbb60e01b81526001600160a01b0383169063a9059cbb906114089086908590600401611c9e565b602060405180830381600087803b15801561142257600080fd5b505af1158015611436573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bd9190611ba2565b6000816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561149557600080fd5b505afa1580156114a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cd91906119c2565b92915050565b60408051808201909152600a8152691214d0dbdb5c1bdd5b9960b21b6020820152828260405160200161150893929190611c1a565b60408051601f198184030181529082905262461bcd60e51b825261097c91600401611d05565b61155b816040518060400160405280600b81526020016a155b9cdc1958da599a595960aa1b8152506114d3565b50565b826001600160a01b0316631cff79cd7305ef8eb657027927fab9b279138f0189cb14497663f3fef3a3858560405160240161159a929190611c9e565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519184901b6001600160e01b03191682526115e19291600401611c7a565b602060405180830381600087803b1580156115fb57600080fd5b505af192505050801561162b575060408051601f3d908101601f1916820190925261162891810190611bd6565b60015b6104bd57611637611da9565b806308c379a01415611682575061164c611dc1565b806116575750611684565b6104bd604051806040016040528060098152602001685f776974686472617760b81b815250826114d3565b505b6111d5604051806040016040528060098152602001685f776974686472617760b81b81525061152e565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015550565b60405163095ea7b360e01b81526001600160a01b0384169063095ea7b39061171b9085908590600401611c9e565b600060405180830381600087803b15801561173557600080fd5b505af1925050508015611746575060015b6111d55760405163095ea7b360e01b81526001600160a01b0384169063095ea7b390611779908590600090600401611c9e565b602060405180830381600087803b15801561179357600080fd5b505af11580156117a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cb9190611ba2565b5060405163095ea7b360e01b81526001600160a01b0384169063095ea7b3906114089085908590600401611c9e565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e9060440160206040518083038186803b15801561184557600080fd5b505afa158015611859573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187d9190611bd6565b11156113295760405163095ea7b360e01b81526001600160a01b0383169063095ea7b3906118b2908490600090600401611c9e565b600060405180830381600087803b1580156118cc57600080fd5b505af19250505080156118dd575060015b6113295760405163095ea7b360e01b81526001600160a01b0383169063095ea7b390611910908490600190600401611c9e565b600060405180830381600087803b15801561192a57600080fd5b505af11580156108da573d6000803e3d6000fd5b6113298282604051602401611954929190611d18565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905280516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000602082840312156119b0578081fd5b81356119bb81611e4b565b9392505050565b6000602082840312156119d3578081fd5b81516119bb81611e4b565b600080604083850312156119f0578081fd5b82356119fb81611e4b565b91506020830135611a0b81611e4b565b809150509250929050565b600080600080600060a08688031215611a2d578081fd5b8535611a3881611e4b565b94506020860135611a4881611e4b565b93506040860135611a5881611e4b565b94979396509394606081013594506080013592915050565b60008060008060008060c08789031215611a88578081fd5b8635611a9381611e4b565b95506020870135611aa381611e4b565b94506040870135611ab381611e4b565b9350606087013592506080870135915060a0870135611ad181611e60565b809150509295509295509295565b600080600060608486031215611af3578283fd5b8335611afe81611e4b565b92506020840135611b0e81611e4b565b929592945050506040919091013590565b600080600060408486031215611b33578283fd5b8335611b3e81611e4b565b9250602084013567ffffffffffffffff80821115611b5a578384fd5b818601915086601f830112611b6d578384fd5b813581811115611b7b578485fd5b8760208260051b8501011115611b8f578485fd5b6020830194508093505050509250925092565b600060208284031215611bb3578081fd5b81516119bb81611e60565b600060208284031215611bcf578081fd5b5035919050565b600060208284031215611be7578081fd5b5051919050565b60008151808452611c06816020860160208601611d42565b601f01601f19169290920160200192915050565b60008451611c2c818460208901611d42565b605f60f81b9083019081528451611c4a816001840160208901611d42565b6101d160f51b600192909101918201528351611c6d816003840160208801611d42565b0160030195945050505050565b6001600160a01b0383168152604060208201819052600090610c4190830184611bee565b6001600160a01b03929092168252602082015260400190565b60208082528181018390526000908460408401835b86811015611cfa578235611cdf81611e4b565b6001600160a01b031682529183019190830190600101611ccc565b509695505050505050565b6020815260006119bb6020830184611bee565b604081526000611d2b6040830185611bee565b905060018060a01b03831660208301529392505050565b60005b83811015611d5d578181015183820152602001611d45565b838111156104bd5750506000910152565b601f8201601f1916810167ffffffffffffffff81118282101715611da257634e487b7160e01b600052604160045260246000fd5b6040525050565b600060033d1115611dbe57600481823e5160e01c5b90565b600060443d1015611dcf5790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611dff57505050505090565b8285019150815181811115611e175750505050505090565b843d8701016020828501011115611e315750505050505090565b611e4060208286010187611d6e565b509095945050505050565b6001600160a01b038116811461155b57600080fd5b801515811461155b57600080fdfea2646970667358221220891be8747092351208a23708a1539690b86af19bbf5c0ff5e574c6526f5695ea64736f6c63430008040033";

export class HSCompound__factory extends ContractFactory {
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
  ): Promise<HSCompound> {
    return super.deploy(overrides || {}) as Promise<HSCompound>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HSCompound {
    return super.attach(address) as HSCompound;
  }
  connect(signer: Signer): HSCompound__factory {
    return super.connect(signer) as HSCompound__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HSCompoundInterface {
    return new utils.Interface(_abi) as HSCompoundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HSCompound {
    return new Contract(address, _abi, signerOrProvider) as HSCompound;
  }
}