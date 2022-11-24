/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HAaveProtocol, HAaveProtocolInterface } from "../HAaveProtocol";

const _abi = [
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
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
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOLADDRESS",
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
    inputs: [],
    name: "REFERRAL_CODE",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
    ],
    name: "borrowETH",
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
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "premiums",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "modes",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "flashLoan",
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
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "repay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "repayETH",
    outputs: [
      {
        internalType: "uint256",
        name: "remainDebt",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "aToken",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawETH",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612e55806100206000396000f3fe6080604052600436106101355760003560e01c8063920f5c84116100ab578063df2ebdbb1161006f578063df2ebdbb14610322578063dfcd412e1461034a578063f45346dc1461036a578063f538ba511461038a578063f5f5ba721461039d578063fa2901a5146103d957600080fd5b8063920f5c841461027b57806399eb59b9146102ab578063c2722916146102d8578063c610c69f146102e0578063dc9031c41461030257600080fd5b80635358fbda116100fd5780635358fbda146102065780635429615414610219578063573ade811461022c5780636fab3b731461024c5780637535d2461461013a57806387c139431461025f57600080fd5b80630542975c1461013a5780630f532d181461016757806322e953ac146101a95780633583849a146101cb57806336118b52146101f3575b600080fd5b34801561014657600080fd5b5060005b6040516001600160a01b0390911681526020015b60405180910390f35b34801561017357600080fd5b5061019b7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b60405190815260200161015e565b3480156101b557600080fd5b506101c96101c4366004612412565b61040d565b005b3480156101d757600080fd5b506101e0600081565b60405161ffff909116815260200161015e565b61019b61020136600461288d565b610588565b6101c9610214366004612771565b610757565b6101c9610227366004612450565b61081d565b34801561023857600080fd5b5061019b610247366004612412565b610ac8565b6101c961025a3660046128bc565b610c83565b34801561026b57600080fd5b5061019b670de0b6b3a764000081565b34801561028757600080fd5b5061029b61029636600461262c565b610d1a565b604051901515815260200161015e565b3480156102b757600080fd5b5061019b6102c6366004612771565b60016020526000908152604090205481565b6101c9610f5a565b3480156102ec57600080fd5b5061014a600080516020612e0083398151915281565b34801561030e57600080fd5b5061019b61031d366004612771565b610f9e565b34801561032e57600080fd5b5061014a73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561035657600080fd5b5061019b6103653660046123c0565b610fbf565b34801561037657600080fd5b506101c961038536600461237f565b611173565b61019b6103983660046128dd565b6112d5565b3480156103a957600080fd5b50604080518082018252600d81526c1210585d99541c9bdd1bd8dbdb609a1b6020820152905161015e9190612be6565b3480156103e557600080fd5b506103f4636139148b60e11b81565b6040516001600160e01b0319909116815260200161015e565b60405163a415bcad60e01b81526001600160a01b03808616600483015260248201859052604482018490526000606483015282166084820152600080516020612e008339815191529063a415bcad9060a401600060405180830381600087803b15801561047957600080fd5b505af115801561048d573d6000803e3d6000fd5b50506040516370a0823160e01b81523060048201526001600160a01b038716925063a9059cbb9150339083906370a082319060240160206040518083038186803b1580156104da57600080fd5b505afa1580156104ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105129190612875565b6040518363ffffffff1660e01b815260040161052f929190612b35565b602060405180830381600087803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190612751565b5050505050565b6040516323b872dd60e01b81526000906001600160a01b038316906323b872dd906105bb90339030908890600401612a47565b602060405180830381600087803b1580156105d557600080fd5b505af11580156105e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060d9190612751565b5060405163095ea7b360e01b81526001600160a01b0383169063095ea7b39061064a90600080516020612e00833981519152908790600401612b35565b602060405180830381600087803b15801561066457600080fd5b505af1158015610678573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069c9190612751565b506106bb73cca7d1416518d095e729904aaea087dba749a4dc84611385565b604051632e1a7d4d60e01b81526004810182905290915073cca7d1416518d095e729904aaea087dba749a4dc90632e1a7d4d90602401600060405180830381600087803b15801561070b57600080fd5b505af115801561071f573d6000803e3d6000fd5b50506040513392504780156108fc029250906000818181858888f19350505050158015610750573d6000803e3d6000fd5b5092915050565b61077573eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee826114bc565b905073cca7d1416518d095e729904aaea087dba749a4dc6001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107c657600080fd5b505af11580156107da573d6000803e3d6000fd5b50505050506107fd73cca7d1416518d095e729904aaea087dba749a4dc8261158c565b61081a73cca7d1416518d095e729904aaea087dba749a4dc6116ad565b50565b6040805180820182526009815268333630b9b42637b0b760b91b6020808301919091528251808401909352601f83527f61737365747320616e6420616d6f756e747320646f206e6f74206d61746368009083015261087f9189881491906116ec565b6040805180820182526009815268333630b9b42637b0b760b91b6020808301919091528251808401909352601d83527f61737365747320616e64206d6f64657320646f206e6f74206d61746368000000908301526108e19189861491906116ec565b60006108eb611700565b60405163ab9c4b5d60e01b8152909150600080516020612e008339815191529063ab9c4b5d906109349030908d908d908d908d908d908d908b908e908e90600090600401612a6b565b600060405180830381600087803b15801561094e57600080fd5b505af192505050801561095f575060015b6109e85761096b612d27565b806308c379a014156109bc5750610980612d3f565b8061098b57506109be565b6109b660405180604001604052806009815260200168333630b9b42637b0b760b91b8152508261174e565b506109e8565b505b6109e860405180604001604052806009815260200168333630b9b42637b0b760b91b8152506117ac565b60005b88811015610abc57610a3f8a8a83818110610a1657634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610a2b9190612363565b600080516020612e008339815191526117d9565b858582818110610a5f57634e487b7160e01b600052603260045260246000fd5b90506020020135600014610aaa57610aaa8a8a83818110610a9057634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610aa59190612363565b6116ad565b80610ab481612ce0565b9150506109eb565b50505050505050505050565b6040516323b872dd60e01b81526000906001600160a01b038616906323b872dd90610afb90339030908990600401612a47565b602060405180830381600087803b158015610b1557600080fd5b505af1158015610b29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4d9190612751565b5060405163095ea7b360e01b81526001600160a01b0386169063095ea7b390610b8a90600080516020612e00833981519152908890600401612b35565b602060405180830381600087803b158015610ba457600080fd5b505af1158015610bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdc9190612751565b5060405163573ade8160e01b81526001600160a01b038087166004830152602482018690526044820185905283166064820152600080516020612e008339815191529063573ade8190608401602060405180830381600087803b158015610c4257600080fd5b505af1158015610c56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7a9190612875565b50949350505050565b6000610c8d611700565b9050610caf73cca7d1416518d095e729904aaea087dba749a4dc848484611926565b604051632e1a7d4d60e01b81526004810184905273cca7d1416518d095e729904aaea087dba749a4dc90632e1a7d4d906024015b600060405180830381600087803b158015610cfd57600080fd5b505af1158015610d11573d6000803e3d6000fd5b50505050505050565b6000610d97600080516020612e008339815191526001600160a01b0316336001600160a01b0316146040518060400160405280601081526020016f32bc32b1baba32a7b832b930ba34b7b760811b8152506040518060400160405280600e81526020016d34b73b30b634b21031b0b63632b960911b8152506116ec565b610e13306001600160a01b0316846001600160a01b0316146040518060400160405280601081526020016f32bc32b1baba32a7b832b930ba34b7b760811b8152506040518060400160405280601a81526020017f6e6f7420696e69746961746564206279207468652070726f78790000000000008152506116ec565b600080600084806020019051810190610e2c9190612539565b604051637193850960e01b815292955090935091503090637193850990610e5b90869086908690600401612b4e565b600060405180830381600087803b158015610e7557600080fd5b505af1158015610e89573d6000803e3d6000fd5b5050505060005b8951811015610f4a576000888281518110610ebb57634e487b7160e01b600052603260045260246000fd5b60200260200101518a8381518110610ee357634e487b7160e01b600052603260045260246000fd5b6020026020010151610ef59190612c6f565b9050610f378b8381518110610f1a57634e487b7160e01b600052603260045260246000fd5b6020026020010151600080516020612e0083398151915283611a2d565b5080610f4281612ce0565b915050610e90565b5060019998505050505050505050565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c696420706f73742070726f6365737360601b60448201526064015b60405180910390fd5b60008181548110610fae57600080fd5b600091825260209091200154905081565b6040516323b872dd60e01b81526000906001600160a01b038316906323b872dd90610ff290339030908990600401612a47565b602060405180830381600087803b15801561100c57600080fd5b505af1158015611020573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110449190612751565b5060405163095ea7b360e01b81526001600160a01b0383169063095ea7b39061108190600080516020612e00833981519152908890600401612b35565b602060405180830381600087803b15801561109b57600080fd5b505af11580156110af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d39190612751565b50604051631a4ca37b60e21b81526001600160a01b0380871660048301526024820186905284166044820152600080516020612e00833981519152906369328dec90606401602060405180830381600087803b15801561113257600080fd5b505af1158015611146573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116a9190612875565b95945050505050565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd906111a390339030908790600401612a47565b602060405180830381600087803b1580156111bd57600080fd5b505af11580156111d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f59190612751565b5060405163095ea7b360e01b81526001600160a01b0384169063095ea7b39061123290600080516020612e00833981519152908690600401612b35565b602060405180830381600087803b15801561124c57600080fd5b505af1158015611260573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112849190612751565b5060405163e8eda9df60e01b81526001600160a01b038085166004830152602482018490528216604482015260006064820152600080516020612e008339815191529063e8eda9df90608401610ce3565b600073cca7d1416518d095e729904aaea087dba749a4dc6001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561132657600080fd5b505af115801561133a573d6000803e3d6000fd5b505050505061135f73cca7d1416518d095e729904aaea087dba749a4dc858585611b8c565b905061137e73cca7d1416518d095e729904aaea087dba749a4dc6116ad565b9392505050565b600080600061139385611e99565b915091506113a181856114bc565b604051631a4ca37b60e21b81526001600160a01b03878116600483015260248201839052306044830152919550908316906369328dec90606401602060405180830381600087803b1580156113f557600080fd5b505af1925050508015611425575060408051601f3d908101601f1916820190925261142291810190612875565b60015b6114b157611431612d27565b806308c379a014156114815750611446612d3f565b806114515750611483565b61147b60405180604001604052806008815260200167776974686472617760c01b8152508261174e565b506114b4565b505b6114ac60405180604001604052806008815260200167776974686472617760c01b8152506117ac565b6114b4565b92505b505092915050565b600060001982146114ce575080611586565b6001600160a01b038316158061150057506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee145b1561150c575047611586565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a082319060240160206040518083038186803b15801561154b57600080fd5b505afa15801561155f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115839190612875565b90505b92915050565b60008061159884611e99565b915091506115a7848385611a2d565b60405163e8eda9df60e01b81526001600160a01b038581166004830152602482018590523060448301526000606483015283169063e8eda9df90608401600060405180830381600087803b1580156115fe57600080fd5b505af192505050801561160f575060015b6116945761161b612d27565b806308c379a0141561166a5750611630612d3f565b8061163b575061166c565b6116646040518060400160405280600781526020016619195c1bdcda5d60ca1b8152508261174e565b50611694565b505b6116946040518060400160405280600781526020016619195c1bdcda5d60ca1b8152506117ac565b61169e84836117d9565b6116a7816116ad565b50505050565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015550565b826116fb576116fb828261174e565b505050565b7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b60408051808201909152600d81526c1210585d99541c9bdd1bd8dbdb609a1b60208201528282604051602001611786939291906129e7565b60408051601f198184030181529082905262461bcd60e51b8252610f9591600401612be6565b61081a816040518060400160405280600b81526020016a155b9cdc1958da599a595960aa1b81525061174e565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e9060440160206040518083038186803b15801561182457600080fd5b505afa158015611838573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185c9190612875565b11156119225760405163095ea7b360e01b81526001600160a01b0383169063095ea7b390611891908490600090600401612b35565b600060405180830381600087803b1580156118ab57600080fd5b505af19250505080156118bc575060015b6119225760405163095ea7b360e01b81526001600160a01b0383169063095ea7b3906118ef908490600190600401612b35565b600060405180830381600087803b15801561190957600080fd5b505af115801561191d573d6000803e3d6000fd5b505050505b5050565b60405163a415bcad60e01b81526001600160a01b03808616600483015260248201859052604482018490526000606483015282166084820152600080516020612e0083398151915290819063a415bcad9060a401600060405180830381600087803b15801561199457600080fd5b505af19250505080156119a5575060015b610581576119b1612d27565b806308c379a014156119ff57506119c6612d3f565b806119d15750611a01565b6119f960405180604001604052806006815260200165626f72726f7760d01b8152508261174e565b50610581565b505b611a2860405180604001604052806006815260200165626f72726f7760d01b8152506117ac565b610581565b60405163095ea7b360e01b81526001600160a01b0384169063095ea7b390611a5b9085908590600401612b35565b600060405180830381600087803b158015611a7557600080fd5b505af1925050508015611a86575060015b6116fb5760405163095ea7b360e01b81526001600160a01b0384169063095ea7b390611ab9908590600090600401612b35565b602060405180830381600087803b158015611ad357600080fd5b505af1158015611ae7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b0b9190612751565b5060405163095ea7b360e01b81526001600160a01b0384169063095ea7b390611b3a9085908590600401612b35565b602060405180830381600087803b158015611b5457600080fd5b505af1158015611b68573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a79190612751565b6000600080516020612e00833981519152611ba8868287611a2d565b60405163573ade8160e01b81526001600160a01b0387811660048301526024820187905260448201869052848116606483015282169063573ade8190608401602060405180830381600087803b158015611c0157600080fd5b505af1925050508015611c31575060408051601f3d908101601f19168201909252611c2e91810190612875565b60015b611cb757611c3d612d27565b806308c379a01415611c8a5750611c52612d3f565b80611c5d5750611c8c565b611c8460405180604001604052806005815260200164726570617960d81b8152508261174e565b50611cb9565b505b611cb260405180604001604052806005815260200164726570617960d81b8152506117ac565b611cb9565b505b611cc386826117d9565b6040516335ea6a7560e01b81526001600160a01b038781166004830152600091908316906335ea6a75906024016101806040518083038186803b158015611d0957600080fd5b505afa158015611d1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d419190612789565b90506001856002811115611d6557634e487b7160e01b600052602160045260246000fd5b6002811115611d8457634e487b7160e01b600052602160045260246000fd5b14611e0e576101208101516040516370a0823160e01b81526001600160a01b038681166004830152909116906370a082319060240160206040518083038186803b158015611dd157600080fd5b505afa158015611de5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e099190612875565b611e8e565b6101008101516040516370a0823160e01b81526001600160a01b038681166004830152909116906370a082319060240160206040518083038186803b158015611e5657600080fd5b505afa158015611e6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8e9190612875565b979650505050505050565b6040516335ea6a7560e01b81526001600160a01b0382166004820152600080516020612e008339815191529060009082906335ea6a75906024016101806040518083038186803b158015611eec57600080fd5b505afa925050508015611f1c575060408051601f3d908101601f19168201909252611f1991810190612789565b60015b611faf57611f28612d27565b806308c379a01415611f805750611f3d612d3f565b80611f485750611f82565b611f518161200e565b611f7a6040518060400160405280600781526020016611d95b995c985b60ca1b8152508261174e565b50915091565b505b611faa6040518060400160405280600781526020016611d95b995c985b60ca1b8152506117ac565b915091565b8060e001519150611f7a60006001600160a01b0316836001600160a01b031614156040518060400160405280600781526020016611d95b995c985b60ca1b815250604051806060016040528060218152602001612ddf602191396116ec565b61081a816040516024016120229190612be6565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b17905280516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b803561207881612dc9565b919050565b805161207881612dc9565b60008083601f840112612099578182fd5b50813567ffffffffffffffff8111156120b0578182fd5b6020830191508360208260051b85010111156120cb57600080fd5b9250929050565b600082601f8301126120e2578081fd5b815160206120ef82612c23565b6040516120fc8282612cb3565b8381528281019150858301600585901b8701840188101561211b578586fd5b855b858110156121395781518452928401929084019060010161211d565b5090979650505050505050565b600082601f830112612156578081fd5b8151602061216382612c23565b604080516121718382612cb3565b8481528381019250868401600586901b88018501891015612190578687fd5b865b8681101561221057815167ffffffffffffffff8111156121b0578889fd5b8901603f81018b136121c0578889fd5b868101516121cd81612c47565b86516121d98282612cb3565b8281528d888486010111156121ec578b8cfd5b6121fb838b83018a8701612c87565b88525050509385019390850190600101612192565b509098975050505050505050565b600082601f83011261222e578081fd5b8135602061223b82612c23565b6040516122488282612cb3565b8381528281019150858301600585901b87018401881015612267578586fd5b855b8581101561213957813584529284019290840190600101612269565b600082601f830112612295578081fd5b81356122a081612c47565b6040516122ad8282612cb3565b8281528560208487010111156122c1578384fd5b82602086016020830137918201602001929092529392505050565b6000602082840312156122ed578081fd5b6040516020810181811067ffffffffffffffff8211171561231057612310612d11565b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff8116811461207857600080fd5b805164ffffffffff8116811461207857600080fd5b805160ff8116811461207857600080fd5b600060208284031215612374578081fd5b813561137e81612dc9565b600080600060608486031215612393578182fd5b833561239e81612dc9565b92506020840135915060408401356123b581612dc9565b809150509250925092565b600080600080608085870312156123d5578182fd5b84356123e081612dc9565b93506020850135925060408501356123f781612dc9565b9150606085013561240781612dc9565b939692955090935050565b60008060008060808587031215612427578182fd5b843561243281612dc9565b93506020850135925060408501359150606085013561240781612dc9565b6000806000806000806000806080898b03121561246b578586fd5b883567ffffffffffffffff80821115612482578788fd5b61248e8c838d01612088565b909a50985060208b01359150808211156124a6578788fd5b6124b28c838d01612088565b909850965060408b01359150808211156124ca578586fd5b6124d68c838d01612088565b909650945060608b01359150808211156124ee578384fd5b818b0191508b601f830112612501578384fd5b81358181111561250f578485fd5b8c6020828501011115612520578485fd5b6020830194508093505050509295985092959890939650565b60008060006060848603121561254d578081fd5b835167ffffffffffffffff80821115612564578283fd5b818601915086601f830112612577578283fd5b8151602061258482612c23565b6040516125918282612cb3565b8381528281019150858301600585901b870184018c10156125b0578788fd5b8796505b848710156125db5780516125c781612dc9565b8352600196909601959183019183016125b4565b50918901519197509093505050808211156125f4578283fd5b612600878388016120d2565b93506040860151915080821115612615578283fd5b5061262286828701612146565b9150509250925092565b600080600080600060a08688031215612643578283fd5b853567ffffffffffffffff8082111561265a578485fd5b818801915088601f83011261266d578485fd5b8135602061267a82612c23565b6040516126878282612cb3565b8381528281019150858301600585901b870184018e10156126a657898afd5b8996505b848710156126d15780356126bd81612dc9565b8352600196909601959183019183016126aa565b50995050890135925050808211156126e7578485fd5b6126f389838a0161221e565b95506040880135915080821115612708578485fd5b61271489838a0161221e565b94506127226060890161206d565b93506080880135915080821115612737578283fd5b5061274488828901612285565b9150509295509295909350565b600060208284031215612762578081fd5b8151801515811461137e578182fd5b600060208284031215612782578081fd5b5035919050565b6000610180828403121561279b578081fd5b6127a3612bf9565b6127ad84846122dc565b81526127bb6020840161231d565b60208201526127cc6040840161231d565b60408201526127dd6060840161231d565b60608201526127ee6080840161231d565b60808201526127ff60a0840161231d565b60a082015261281060c0840161233d565b60c082015261282160e0840161207d565b60e082015261010061283481850161207d565b9082015261012061284684820161207d565b9082015261014061285884820161207d565b9082015261016061286a848201612352565b908201529392505050565b600060208284031215612886578081fd5b5051919050565b6000806040838503121561289f578182fd5b8235915060208301356128b181612dc9565b809150509250929050565b600080604083850312156128ce578182fd5b50508035926020909101359150565b6000806000606084860312156128f1578081fd5b833592506020840135915060408401356123b581612dc9565b600081518084526020808501808196508360051b81019150828601855b8581101561295157828403895261293f8483516129bb565b98850198935090840190600101612927565b5091979650505050505050565b81835260006001600160fb1b03831115612976578081fd5b8260051b80836020870137939093016020019283525090919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526129d3816020860160208601612c87565b601f01601f19169290920160200192915050565b600084516129f9818460208901612c87565b605f60f81b9083019081528451612a17816001840160208901612c87565b6101d160f51b600192909101918201528351612a3a816003840160208801612c87565b0160030195945050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038c16815260e060208083018290529082018b90526000908c906101008401835b8e811015612ac3578335612aa681612dc9565b6001600160a01b0316825292820192602090910190600101612a93565b508481036040860152612ad7818d8f61295e565b925050508281036060840152612aee81898b61295e565b6001600160a01b0388166080850152905082810360a0840152612b12818688612992565b915050612b2560c083018461ffff169052565b9c9b505050505050505050505050565b6001600160a01b03929092168252602082015260400190565b606080825284519082018190526000906020906080840190828801845b82811015612b925781516001600160a01b0316845260208401935090840190600101612b6b565b50505083810382850152855180825286830191830190845b81811015612bc657835183529284019291840191600101612baa565b50508481036040860152612bda818761290a565b98975050505050505050565b60208152600061158360208301846129bb565b604051610180810167ffffffffffffffff81118282101715612c1d57612c1d612d11565b60405290565b600067ffffffffffffffff821115612c3d57612c3d612d11565b5060051b60200190565b600067ffffffffffffffff821115612c6157612c61612d11565b50601f01601f191660200190565b60008219821115612c8257612c82612cfb565b500190565b60005b83811015612ca2578181015183820152602001612c8a565b838111156116a75750506000910152565b601f8201601f1916810167ffffffffffffffff81118282101715612cd957612cd9612d11565b6040525050565b6000600019821415612cf457612cf4612cfb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115612d3c57600481823e5160e01c5b90565b600060443d1015612d4d5790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715612d7d57505050505090565b8285019150815181811115612d955750505050505090565b843d8701016020828501011115612daf5750505050505090565b612dbe60208286010187612cb3565b509095945050505050565b6001600160a01b038116811461081a57600080fdfe61546f6b656e2073686f756c64206e6f74206265207a65726f20616464726573730000000000000000000000004bd5643ac6f66a5237e18bfa7d47cf22f1c9f210a26469706673582212200183c4bb57a83d470f66996b3ae494565977feb1bb86d075891d429cfcd4ee5764736f6c63430008040033";

export class HAaveProtocol__factory extends ContractFactory {
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
  ): Promise<HAaveProtocol> {
    return super.deploy(overrides || {}) as Promise<HAaveProtocol>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HAaveProtocol {
    return super.attach(address) as HAaveProtocol;
  }
  connect(signer: Signer): HAaveProtocol__factory {
    return super.connect(signer) as HAaveProtocol__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HAaveProtocolInterface {
    return new utils.Interface(_abi) as HAaveProtocolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HAaveProtocol {
    return new Contract(address, _abi, signerOrProvider) as HAaveProtocol;
  }
}