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

interface IFeeRuleRegistryInterface extends ethers.utils.Interface {
  functions: {
    "BASE()": FunctionFragment;
    "basisFeeRate()": FunctionFragment;
    "calFeeRate(address,uint256)": FunctionFragment;
    "calFeeRateMulti(address,uint256[])": FunctionFragment;
    "calFeeRateMultiWithoutBasis(address,uint256[])": FunctionFragment;
    "calFeeRateWithoutBasis(address,uint256)": FunctionFragment;
    "counter()": FunctionFragment;
    "feeCollector()": FunctionFragment;
    "registerRule(address)": FunctionFragment;
    "rules(uint256)": FunctionFragment;
    "setBasisFeeRate(uint256)": FunctionFragment;
    "setFeeCollector(address)": FunctionFragment;
    "unregisterRule(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BASE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "basisFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calFeeRate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calFeeRateMulti",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "calFeeRateMultiWithoutBasis",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "calFeeRateWithoutBasis",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerRule",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "rules", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setBasisFeeRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeCollector",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterRule",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BASE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "basisFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "calFeeRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calFeeRateMulti",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calFeeRateMultiWithoutBasis",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calFeeRateWithoutBasis",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rules", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBasisFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterRule",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFeeRuleRegistry extends BaseContract {
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

  interface: IFeeRuleRegistryInterface;

  functions: {
    BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    basisFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    calFeeRate(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledRate: BigNumber }>;

    calFeeRateMulti(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledRate: BigNumber }>;

    calFeeRateMultiWithoutBasis(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledRate: BigNumber }>;

    calFeeRateWithoutBasis(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledRate: BigNumber }>;

    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeCollector(overrides?: CallOverrides): Promise<[string]>;

    registerRule(
      rule: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rules(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setBasisFeeRate(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeCollector(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterRule(
      ruleIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASE(overrides?: CallOverrides): Promise<BigNumber>;

  basisFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  calFeeRate(
    usr: string,
    ruleIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calFeeRateMulti(
    usr: string,
    ruleIndexes: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calFeeRateMultiWithoutBasis(
    usr: string,
    ruleIndexes: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calFeeRateWithoutBasis(
    usr: string,
    ruleIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  feeCollector(overrides?: CallOverrides): Promise<string>;

  registerRule(
    rule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rules(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setBasisFeeRate(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeCollector(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterRule(
    ruleIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    basisFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    calFeeRate(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calFeeRateMulti(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calFeeRateMultiWithoutBasis(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calFeeRateWithoutBasis(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    feeCollector(overrides?: CallOverrides): Promise<string>;

    registerRule(rule: string, overrides?: CallOverrides): Promise<void>;

    rules(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setBasisFeeRate(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeCollector(arg0: string, overrides?: CallOverrides): Promise<void>;

    unregisterRule(
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    basisFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    calFeeRate(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calFeeRateMulti(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calFeeRateMultiWithoutBasis(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calFeeRateWithoutBasis(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    feeCollector(overrides?: CallOverrides): Promise<BigNumber>;

    registerRule(
      rule: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rules(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setBasisFeeRate(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeCollector(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterRule(
      ruleIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    basisFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calFeeRate(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calFeeRateMulti(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calFeeRateMultiWithoutBasis(
      usr: string,
      ruleIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calFeeRateWithoutBasis(
      usr: string,
      ruleIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerRule(
      rule: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rules(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBasisFeeRate(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeCollector(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterRule(
      ruleIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}