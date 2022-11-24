/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "Config",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Config__factory>;
    getContractFactory(
      name: "Faucet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Faucet__factory>;
    getContractFactory(
      name: "FlashLoanReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashLoanReceiver__factory>;
    getContractFactory(
      name: "HAaveProtocol",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HAaveProtocol__factory>;
    getContractFactory(
      name: "HAaveProtocolV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HAaveProtocolV2__factory>;
    getContractFactory(
      name: "HBalancer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HBalancer__factory>;
    getContractFactory(
      name: "IAuthentication",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAuthentication__factory>;
    getContractFactory(
      name: "IAuthorizer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAuthorizer__factory>;
    getContractFactory(
      name: "IFlashLoanRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashLoanRecipient__factory>;
    getContractFactory(
      name: "IProtocolFeesCollector",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolFeesCollector__factory>;
    getContractFactory(
      name: "ISignaturesValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISignaturesValidator__factory>;
    getContractFactory(
      name: "ITemporarilyPausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITemporarilyPausable__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "MockFlashLoanRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockFlashLoanRecipient__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;
    getContractFactory(
      name: "FCompoundActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FCompoundActions__factory>;
    getContractFactory(
      name: "HCEther",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HCEther__factory>;
    getContractFactory(
      name: "HComptroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HComptroller__factory>;
    getContractFactory(
      name: "HCToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HCToken__factory>;
    getContractFactory(
      name: "HSCompound",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HSCompound__factory>;
    getContractFactory(
      name: "ICEther",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICEther__factory>;
    getContractFactory(
      name: "IComptroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IComptroller__factory>;
    getContractFactory(
      name: "ICToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICToken__factory>;
    getContractFactory(
      name: "HandlerBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HandlerBase__factory>;
    getContractFactory(
      name: "BalanceCarrier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceCarrier__factory>;
    getContractFactory(
      name: "HInvoker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HInvoker__factory>;
    getContractFactory(
      name: "IInvocationHook",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInvocationHook__factory>;
    getContractFactory(
      name: "IInvokable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInvokable__factory>;
    getContractFactory(
      name: "IInvoker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInvoker__factory>;
    getContractFactory(
      name: "KollateralInvokable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KollateralInvokable__factory>;
    getContractFactory(
      name: "TestInvokable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestInvokable__factory>;
    getContractFactory(
      name: "DSAuth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSAuth__factory>;
    getContractFactory(
      name: "DSAuthEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSAuthEvents__factory>;
    getContractFactory(
      name: "DSAuthority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSAuthority__factory>;
    getContractFactory(
      name: "DSGuard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSGuard__factory>;
    getContractFactory(
      name: "DSGuardEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSGuardEvents__factory>;
    getContractFactory(
      name: "DSGuardFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSGuardFactory__factory>;
    getContractFactory(
      name: "HMaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HMaker__factory>;
    getContractFactory(
      name: "IDSProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDSProxy__factory>;
    getContractFactory(
      name: "IDSProxyFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDSProxyFactory__factory>;
    getContractFactory(
      name: "IDSProxyRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDSProxyRegistry__factory>;
    getContractFactory(
      name: "IMakerChainLog",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMakerChainLog__factory>;
    getContractFactory(
      name: "IMakerGemJoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMakerGemJoin__factory>;
    getContractFactory(
      name: "IMakerManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMakerManager__factory>;
    getContractFactory(
      name: "IMakerVat",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMakerVat__factory>;
    getContractFactory(
      name: "HSaddle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HSaddle__factory>;
    getContractFactory(
      name: "IAllowlist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAllowlist__factory>;
    getContractFactory(
      name: "ISwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwap__factory>;
    getContractFactory(
      name: "HSushiSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HSushiSwap__factory>;
    getContractFactory(
      name: "HUniswapV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HUniswapV2__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "HUniswapV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HUniswapV3__factory>;
    getContractFactory(
      name: "IQuoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoter__factory>;
    getContractFactory(
      name: "IPeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "HWeth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HWeth__factory>;
    getContractFactory(
      name: "IWETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9__factory>;
    getContractFactory(
      name: "IERC20Usdt",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Usdt__factory>;
    getContractFactory(
      name: "IFeeRuleRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFeeRuleRegistry__factory>;
    getContractFactory(
      name: "IFlashLoanReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashLoanReceiver__factory>;
    getContractFactory(
      name: "IHandlerEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHandlerEvents__factory>;
    getContractFactory(
      name: "ILendingPoolAddressesProviderV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILendingPoolAddressesProviderV2__factory>;
    getContractFactory(
      name: "ILendingPoolV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILendingPoolV2__factory>;
    getContractFactory(
      name: "IPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPool__factory>;
    getContractFactory(
      name: "IPoolAddressesProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolAddressesProvider__factory>;
    getContractFactory(
      name: "IProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProxy__factory>;
    getContractFactory(
      name: "IRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRegistry__factory>;
    getContractFactory(
      name: "IRule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRule__factory>;
    getContractFactory(
      name: "IStableDebtToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStableDebtToken__factory>;
    getContractFactory(
      name: "IVariableDebtToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVariableDebtToken__factory>;
    getContractFactory(
      name: "IWETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9__factory>;
    getContractFactory(
      name: "LibFeeStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibFeeStorage__factory>;
    getContractFactory(
      name: "GasProfiler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GasProfiler__factory>;
    getContractFactory(
      name: "HMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HMock__factory>;
    getContractFactory(
      name: "IFaucet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFaucet__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ProxyMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyMock__factory>;
    getContractFactory(
      name: "FeeRuleRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeRuleRegistry__factory>;
    getContractFactory(
      name: "Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Registry__factory>;
    getContractFactory(
      name: "Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Storage__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "Config",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Config>;
    getContractAt(
      name: "Faucet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Faucet>;
    getContractAt(
      name: "FlashLoanReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashLoanReceiver>;
    getContractAt(
      name: "HAaveProtocol",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HAaveProtocol>;
    getContractAt(
      name: "HAaveProtocolV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HAaveProtocolV2>;
    getContractAt(
      name: "HBalancer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HBalancer>;
    getContractAt(
      name: "IAuthentication",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAuthentication>;
    getContractAt(
      name: "IAuthorizer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAuthorizer>;
    getContractAt(
      name: "IFlashLoanRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashLoanRecipient>;
    getContractAt(
      name: "IProtocolFeesCollector",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProtocolFeesCollector>;
    getContractAt(
      name: "ISignaturesValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISignaturesValidator>;
    getContractAt(
      name: "ITemporarilyPausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITemporarilyPausable>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "MockFlashLoanRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockFlashLoanRecipient>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;
    getContractAt(
      name: "FCompoundActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FCompoundActions>;
    getContractAt(
      name: "HCEther",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HCEther>;
    getContractAt(
      name: "HComptroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HComptroller>;
    getContractAt(
      name: "HCToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HCToken>;
    getContractAt(
      name: "HSCompound",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HSCompound>;
    getContractAt(
      name: "ICEther",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICEther>;
    getContractAt(
      name: "IComptroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IComptroller>;
    getContractAt(
      name: "ICToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICToken>;
    getContractAt(
      name: "HandlerBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HandlerBase>;
    getContractAt(
      name: "BalanceCarrier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalanceCarrier>;
    getContractAt(
      name: "HInvoker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HInvoker>;
    getContractAt(
      name: "IInvocationHook",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInvocationHook>;
    getContractAt(
      name: "IInvokable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInvokable>;
    getContractAt(
      name: "IInvoker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInvoker>;
    getContractAt(
      name: "KollateralInvokable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KollateralInvokable>;
    getContractAt(
      name: "TestInvokable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestInvokable>;
    getContractAt(
      name: "DSAuth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSAuth>;
    getContractAt(
      name: "DSAuthEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSAuthEvents>;
    getContractAt(
      name: "DSAuthority",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSAuthority>;
    getContractAt(
      name: "DSGuard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSGuard>;
    getContractAt(
      name: "DSGuardEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSGuardEvents>;
    getContractAt(
      name: "DSGuardFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSGuardFactory>;
    getContractAt(
      name: "HMaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HMaker>;
    getContractAt(
      name: "IDSProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDSProxy>;
    getContractAt(
      name: "IDSProxyFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDSProxyFactory>;
    getContractAt(
      name: "IDSProxyRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDSProxyRegistry>;
    getContractAt(
      name: "IMakerChainLog",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMakerChainLog>;
    getContractAt(
      name: "IMakerGemJoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMakerGemJoin>;
    getContractAt(
      name: "IMakerManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMakerManager>;
    getContractAt(
      name: "IMakerVat",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMakerVat>;
    getContractAt(
      name: "HSaddle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HSaddle>;
    getContractAt(
      name: "IAllowlist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAllowlist>;
    getContractAt(
      name: "ISwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwap>;
    getContractAt(
      name: "HSushiSwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HSushiSwap>;
    getContractAt(
      name: "HUniswapV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HUniswapV2>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "HUniswapV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HUniswapV3>;
    getContractAt(
      name: "IQuoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoter>;
    getContractAt(
      name: "IPeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "HWeth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HWeth>;
    getContractAt(
      name: "IWETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH9>;
    getContractAt(
      name: "IERC20Usdt",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Usdt>;
    getContractAt(
      name: "IFeeRuleRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFeeRuleRegistry>;
    getContractAt(
      name: "IFlashLoanReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashLoanReceiver>;
    getContractAt(
      name: "IHandlerEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHandlerEvents>;
    getContractAt(
      name: "ILendingPoolAddressesProviderV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILendingPoolAddressesProviderV2>;
    getContractAt(
      name: "ILendingPoolV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILendingPoolV2>;
    getContractAt(
      name: "IPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPool>;
    getContractAt(
      name: "IPoolAddressesProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolAddressesProvider>;
    getContractAt(
      name: "IProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProxy>;
    getContractAt(
      name: "IRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRegistry>;
    getContractAt(
      name: "IRule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRule>;
    getContractAt(
      name: "IStableDebtToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStableDebtToken>;
    getContractAt(
      name: "IVariableDebtToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVariableDebtToken>;
    getContractAt(
      name: "IWETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH9>;
    getContractAt(
      name: "LibFeeStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibFeeStorage>;
    getContractAt(
      name: "GasProfiler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GasProfiler>;
    getContractAt(
      name: "HMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HMock>;
    getContractAt(
      name: "IFaucet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFaucet>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "ProxyMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyMock>;
    getContractAt(
      name: "FeeRuleRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeRuleRegistry>;
    getContractAt(
      name: "Registry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Registry>;
    getContractAt(
      name: "Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Storage>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
