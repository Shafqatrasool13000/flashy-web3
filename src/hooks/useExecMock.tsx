import { parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import { ProxyMock } from "../typechain";
import { proxyMockHandler } from "../utils/contracts";
import useSigner from "./useSigner";

export const useExecMock = () => {
  const signer = useSigner();

  return useCallback(async (to: string, data: string): Promise<void> => {
    if (signer !== undefined) {
      let contract: ProxyMock = proxyMockHandler(signer);
      try {
        const tx = await contract.execMock(to, data,{value: parseEther('0.1')});
        await tx.wait();
        console.log(tx, "data in tex");
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
};
