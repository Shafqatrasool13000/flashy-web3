import { Signer } from "ethers";
import {
  ProxyMock,
  ProxyMock__factory,
  HAaveProtocolV2,
  HAaveProtocolV2__factory,
} from "../typechain";
import { addresses } from "./constants";

export const HAaveHandler = (singer: Signer): HAaveProtocolV2 => {
  return HAaveProtocolV2__factory.connect(addresses.haaveAddress, singer);
};

export const proxyMockHandler = (singer: Signer): ProxyMock => {
  return ProxyMock__factory.connect(addresses.proxyMockAddress, singer);
};

interface IContracts {
  [key: string]: Function;
}

export const loaders: IContracts = {
  "0x606E6878C1dad63b7b8C9D4866b774731cC9247c": HAaveHandler,
  "0xD72440704322D8E3811d4eadC7d46be7F9911e3A": proxyMockHandler,
};
