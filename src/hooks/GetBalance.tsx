import { ethers } from "ethers";
import { useState } from "react";
import { useAccount } from "wagmi";
import { ethereum } from "../App";
import abi from "../utils/abi.json";

interface GetBalanceInterface {
  token: string;
}

export const GetBalance: React.FC<GetBalanceInterface> = ({ token }: any) => {
  const [balance, setBalance] = useState("");
  const { address } = useAccount();
  console.log(token, "token in getBalance");

  const web3Provider = new ethers.providers.Web3Provider(ethereum);

  (async () => {
    const contract = new ethers.Contract(token, abi, web3Provider);
    const balance = await contract.balanceOf(address);
    const balanceInEthers = ethers.utils.formatEther(balance);
    console.log({ balance }, "balance in getBalance method");
    setBalance(balanceInEthers);
  })();

  return <p className="fs-4 me-2 mb-0">{balance}</p>;
};
