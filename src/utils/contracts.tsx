import { Signer } from "ethers";
import {
    ProxyMock,
    ProxyMock__factory,
    HAaveProtocolV2,
    HAaveProtocolV2__factory
} from "../typechain";
import { addresses } from "./constants";


export const HAaveHandler = (singer: Signer): HAaveProtocolV2 => {
    return HAaveProtocolV2__factory.connect(addresses.haaveAddress, singer);
};


interface IContracts {
    [key:string]:Function
}

export const loaders :IContracts= {
    "0x606E6878C1dad63b7b8C9D4866b774731cC9247c":HAaveHandler,
    
}

export const proxyMockHandler = (singer: Signer): ProxyMock => {
    return ProxyMock__factory.connect(addresses.proxyMockAddress, singer);
};

