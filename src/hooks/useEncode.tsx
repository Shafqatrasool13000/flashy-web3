import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import {
  HAaveProtocolV2,
  Registry,
  FeeRuleRegistry,
  ProxyMock,
} from "../typechain";
import { loaders } from "../utils/contracts";
import useContract from "./useContract";
import useSigner from "./useSigner";

// type Functions = "withdrawETH";
type Contracts = HAaveProtocolV2

export const useEncode = () => {
  const signer = useSigner();
  return useCallback(( address: string,
    functionName: string,
    params: Array<any>) => {
    try {
      console.log({
        address,
        functionName,
        params
      })
      const contract=loaders[address](signer);
      return contract.interface.encodeFunctionData(functionName,params)
    } catch (error) {
      console.log(error);
    }
  }, []);
};
