import { useMemo, useState } from "react";
import { loaders } from "../utils/contracts";
import useSigner from "./useSigner";
import {
  HAaveProtocolV2,
  Registry,
  FeeRuleRegistry,
  ProxyMock,
} from "../typechain";

type Contracts = HAaveProtocolV2;

const useContract = (name: string): Contracts => {
  const signer = useSigner();
  const [contract, setContract] = useState<Contracts>(
    loaders[name ?? "proxy"](signer)
  );
  useMemo(() => {
    if (signer !== undefined) {
      setContract(loaders[name](signer));
    }
  }, [name]);

  return contract;
};

export default useContract;
