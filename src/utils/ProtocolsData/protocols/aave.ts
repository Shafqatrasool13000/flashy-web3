import { aavaMainTokens, aavaTestTokens } from "../tokens/aava";

export const aave2 = [
  {
    name: "Deposit",
    signature: "",
    description: "",
    tag: [],
    protocolName: "",
    protocolLogo: "",
    function_configs: {
      inputs: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
      },
      outputs: [],
    },
    protocol_configs: {
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
  {
    name: "Withdraw",
    signature: "",
    description: "",
    tag: "",
    protocolName: "",
    protocolLogo: "",
    function_configs: {
      inputs: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
      },
      outputs: [],
    },
    protocol_configs: {
      tokenlist: ["AAVE", "AMPL", "BAL"],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
  {
    name: "Borrow",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "",
    protocolLogo: "",
    rateMode: true,
    function_configs: {
      inputs: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
      },
      outputs: [],
    },
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
  {
    name: "Repay",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "",
    protocolLogo: "",
    onBehalfOf: true,
    rateMode: true,
    function_configs: {
      inputs: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
      },
      outputs: [],
    },

    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
  {
    name: "Flashloan",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "",
    protocolLogo: "",
    isFlashloan: true,
    function_configs: {
      inputs: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
      },
      outputs: [],
    },
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
];
