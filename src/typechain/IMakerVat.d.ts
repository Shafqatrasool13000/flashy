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

interface IMakerVatInterface extends ethers.utils.Interface {
  functions: {
    "can(address,address)": FunctionFragment;
    "dai(address)": FunctionFragment;
    "frob(bytes32,address,address,address,int256,int256)": FunctionFragment;
    "hope(address)": FunctionFragment;
    "ilks(bytes32)": FunctionFragment;
    "move(address,address,uint256)": FunctionFragment;
    "urns(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "can", values: [string, string]): string;
  encodeFunctionData(functionFragment: "dai", values: [string]): string;
  encodeFunctionData(
    functionFragment: "frob",
    values: [BytesLike, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "hope", values: [string]): string;
  encodeFunctionData(functionFragment: "ilks", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "move",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "urns",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "can", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "frob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hope", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "urns", data: BytesLike): Result;

  events: {};
}

export class IMakerVat extends BaseContract {
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

  interface: IMakerVatInterface;

  functions: {
    can(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dai(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    frob(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hope(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ilks(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    move(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    urns(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  can(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  frob(
    arg0: BytesLike,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    arg5: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hope(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ilks(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

  move(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  urns(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    can(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    frob(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    hope(arg0: string, overrides?: CallOverrides): Promise<void>;

    ilks(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    move(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    urns(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    can(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    frob(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hope(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ilks(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    move(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    urns(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    can(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dai(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    frob(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hope(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ilks(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    move(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    urns(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
