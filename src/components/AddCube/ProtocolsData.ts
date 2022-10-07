const furocomb = ["Unstake Token", "Claim COMBO"];
const paraswap = ["Swap Token"];
const uniswap = ["Swap Token", "Add Liquidity", "Remove Liquidity"];
// const avaeV2 = ["", "Widthdraw", "Borrow", "Repay", "Flashloan"];

const sushiswap = ["Swap Token", "Add Liquidty", "Remove Liquidity"];
const curve = [
  "Swap USD",
  "Swap BTC",
  "Swap ETH",
  "Swap Crypto",
  "Swap Other",
  "Add Liquidity",
  "Remove Liquidity",
  "Stake Token",
  "Unstake",
  "Claim CRV",
];

const yearn = ["Deposit Vault", "Withdraw Vault"];
const compound = ["Supply", "Withdraw", "Repay", "Collect COMP"];
const maker = ["New Vault", "Deposit", "Widthdraw", "Generate", "Pay Back"];
const firstInch = ["Swap Token"];
const uniswapV3 = ["Swap Token"];
const bProtocol = ["New Vault", "Deposit", "Withdraw", "Generate", "Pay Back"];
const synthetix = [
  "Stake Token",
  "Claim Rewards",
  "Unstake Token",
  "Claim & Unstake",
];

const utility = [
  "Send Token",
  "WETH",
  "Add Funds",
  "Return Funds",
  "Token Bridge",
];

const avaeV2 = [
  {
    name: "Deposit",
    signature: "",
    description: "",
    tag: [],
    protocolName: "",
    protocolLogo: "",
    function_configs: {
      inputs: [
        {
          token: "AAVE",
          amount: "",
          showTokens: false,
          tokenList: [
            {
              symbol: "AAVE",
              icon: "cryptocurrency:zrx",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "cryptocurrency:zilla",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "cryptocurrency:zil",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "cryptocurrency:xas",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        },
        {
          token: "AAVE",
          amount: "",
          showTokens: false,
          tokenList: [
            {
              symbol: "AAVE",
              icon: "cryptocurrency:zrx",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "cryptocurrency:zilla",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "cryptocurrency:zil",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "cryptocurrency:xas",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        },
        {
          token: "AAVE",
          amount: "",
          showTokens: false,
          tokenList: [
            {
              symbol: "AAVE",
              icon: "cryptocurrency:zrx",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "cryptocurrency:zilla",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "cryptocurrency:zil",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "cryptocurrency:xas",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        }
      ],
      outputs: [],
    },
    protocol_configs: {
      tokenlist: [
        {
          symbol: "AAVE",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimal: 10,
        },
        {
          symbol: "AMPL",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimal: 7,
        },
        {
          symbol: "BAL",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimal: 14,
        },
        {
          symbol: "BAT",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimal: 12,
        },
      ],
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
      inputs: [
        {
          token: "",
          amount: "",
          showTokens: false,
          tokenList: [
            {
              symbol: "AAVE",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        },
      ],
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
    rateMode:true,
    function_configs: {

      inputs: [
        {
          token: "",
          amount: "",
          tokenList: [
            {
              symbol: "AAVE",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        },
      ],
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
    onBehalfOf:true,
    rateMode:true,
    function_configs: {
      inputs: [
        {
          token: "",
          amount: "",
          tokenList: [
            {
              symbol: "AAVE",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        },
      ],
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
    isFlashloan:true,
    function_configs: {
      inputs: [
        {
          token: "",
          amount: "",
          tokenList: [
            {
              symbol: "AAVE",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimal: 12,
            },
          ],
        },
      ],
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
export const protocolsData = [
  //   {
  //     title: "Furucombo",
  //     exchanger: furocomb,
  //   },
  //   {
  //     title: "Paraswap",
  //     exchanger: paraswap,
  //   },
  //   {
  //     title: "Uniswap V2",
  //     exchanger: uniswap,
  //   },
  {
    title: "Aave V2",
    exchanger: avaeV2,
  },
  //   {
  //     title: "Sushiswap",
  //     exchanger: sushiswap,
  //   },
  //   {
  //     title: "Curve",
  //     exchanger: curve,
  //   },
  //   {
  //     title: "Yearn",
  //     exchanger: yearn,
  //   },
  //   {
  //     title: "Compound",
  //     exchanger: compound,
  //   },
  //   {
  //     title: "Maker",
  //     exchanger: maker,
  //   },
  //   {
  //     title: "1inch",
  //     exchanger: firstInch,
  //   },
  //   {
  //     title: "Uniswap V3",
  //     exchanger: uniswapV3,
  //   },
  //   {
  //     title: "B‧Protocol",
  //     exchanger: bProtocol,
  //   },
  //   {
  //     title: "Synthetix",
  //     exchanger: synthetix,
  //   },
  //   {
  //     title: "Utility",
  //     exchanger: utility,
  //   },
];
