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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ProxyInterface extends ethers.utils.Interface {
  functions: {
    "MSG_SENDER_KEY()": FunctionFragment;
    "PERCENTAGE_BASE()": FunctionFragment;
    "POSTPROCESS_SIG()": FunctionFragment;
    "batchExec(address[],bytes32[],bytes[],uint256[])": FunctionFragment;
    "cache(bytes32)": FunctionFragment;
    "execs(address[],bytes32[],bytes[])": FunctionFragment;
    "feeRuleRegistry()": FunctionFragment;
    "registry()": FunctionFragment;
    "stack(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MSG_SENDER_KEY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERCENTAGE_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSTPROCESS_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "batchExec",
    values: [string[], BytesLike[], BytesLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "cache", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "execs",
    values: [string[], BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "feeRuleRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "stack", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "MSG_SENDER_KEY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTAGE_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSTPROCESS_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "batchExec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cache", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeRuleRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stack", data: BytesLike): Result;

  events: {
    "ChargeFee(address,uint256)": EventFragment;
    "LogBegin(address,bytes4,bytes)": EventFragment;
    "LogEnd(address,bytes4,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChargeFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogBegin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogEnd"): EventFragment;
}

export type ChargeFeeEvent = TypedEvent<
  [string, BigNumber] & { tokenIn: string; feeAmount: BigNumber }
>;

export type LogBeginEvent = TypedEvent<
  [string, string, string] & {
    handler: string;
    selector: string;
    payload: string;
  }
>;

export type LogEndEvent = TypedEvent<
  [string, string, string] & {
    handler: string;
    selector: string;
    result: string;
  }
>;

export class Proxy extends BaseContract {
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

  interface: ProxyInterface;

  functions: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<[string]>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<[string]>;

    batchExec(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      ruleIndexes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cache(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    execs(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeRuleRegistry(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    stack(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

  PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

  batchExec(
    tos: string[],
    configs: BytesLike[],
    datas: BytesLike[],
    ruleIndexes: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  execs(
    tos: string[],
    configs: BytesLike[],
    datas: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeRuleRegistry(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  stack(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

    batchExec(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    cache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    execs(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    feeRuleRegistry(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    stack(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ChargeFee(address,uint256)"(
      tokenIn?: string | null,
      feeAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenIn: string; feeAmount: BigNumber }
    >;

    ChargeFee(
      tokenIn?: string | null,
      feeAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenIn: string; feeAmount: BigNumber }
    >;

    "LogBegin(address,bytes4,bytes)"(
      handler?: string | null,
      selector?: BytesLike | null,
      payload?: null
    ): TypedEventFilter<
      [string, string, string],
      { handler: string; selector: string; payload: string }
    >;

    LogBegin(
      handler?: string | null,
      selector?: BytesLike | null,
      payload?: null
    ): TypedEventFilter<
      [string, string, string],
      { handler: string; selector: string; payload: string }
    >;

    "LogEnd(address,bytes4,bytes)"(
      handler?: string | null,
      selector?: BytesLike | null,
      result?: null
    ): TypedEventFilter<
      [string, string, string],
      { handler: string; selector: string; result: string }
    >;

    LogEnd(
      handler?: string | null,
      selector?: BytesLike | null,
      result?: null
    ): TypedEventFilter<
      [string, string, string],
      { handler: string; selector: string; result: string }
    >;
  };

  estimateGas: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    batchExec(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      ruleIndexes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cache(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    execs(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeRuleRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    stack(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    batchExec(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      ruleIndexes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execs(
      tos: string[],
      configs: BytesLike[],
      datas: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeRuleRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stack(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
