/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IComptrollerInterface extends ethers.utils.Interface {
  functions: {
    "checkMembership(address,address)": FunctionFragment;
    "claimComp(address)": FunctionFragment;
    "enterMarkets(address[])": FunctionFragment;
    "exitMarket(address)": FunctionFragment;
    "getCompAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkMembership",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "claimComp", values: [string]): string;
  encodeFunctionData(
    functionFragment: "enterMarkets",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "exitMarket", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getCompAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "checkMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimComp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enterMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCompAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export class IComptroller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IComptrollerInterface;

  functions: {
    checkMembership(
      account: string,
      cToken: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimComp(
      holder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enterMarkets(
      cTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exitMarket(
      cToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCompAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  checkMembership(
    account: string,
    cToken: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimComp(
    holder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enterMarkets(
    cTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exitMarket(
    cToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCompAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    checkMembership(
      account: string,
      cToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimComp(holder: string, overrides?: CallOverrides): Promise<void>;

    enterMarkets(
      cTokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    exitMarket(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    getCompAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    checkMembership(
      account: string,
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimComp(
      holder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enterMarkets(
      cTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exitMarket(
      cToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCompAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    checkMembership(
      account: string,
      cToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimComp(
      holder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enterMarkets(
      cTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exitMarket(
      cToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCompAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
