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
      inputs: {
        "1": [
          {
            token: "AAVE",
            amount: "",
            showTokens: false,
            tokenList: [
              {
                aTokenAddress: "0x6d93ef8093F067f19d33C2360cE17b20a8c45CD7",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aAAVE",
                stableDebtTokenAddress:
                  "0x72d2Aea8aCcD3277D90093a974eFf3e1945871D7",
                variableDebtTokenAddress:
                  "0x5aF7bAC415D9c249176ea233E92646E5c9288b92",
                symbol: "AAVE",
                address: "0xB597cd8D3217ea6477232F9217fa70837ff667Af",
                decimals: 18,
              },
              {
                aTokenAddress: "0x28f92b4c8Bdab37AF6C4422927158560b4bB446e",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aBAT",
                stableDebtTokenAddress:
                  "0x07a0B32983ab8203E8C3493F0AbE5bFe784fAa15",
                variableDebtTokenAddress:
                  "0xcE271C229576605bdabD0A3D664685cbC383f3a6",
                symbol: "BAT",
                address: "0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738",
                decimals: 18,
              },
              {
                aTokenAddress: "0xfe3E41Db9071458e39104711eF1Fa668bae44e85",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aBUSD",
                stableDebtTokenAddress:
                  "0x597c5d0390E7e995d36F2e49F9eD979697723bE9",
                variableDebtTokenAddress:
                  "0xB85eCAd7a9C9F09749CeCF84122189A7908eC934",
                symbol: "BUSD",
                address: "0x4c6E1EFC12FDfD568186b7BAEc0A43fFfb4bCcCf",
                decimals: 18,
              },
              {
                aTokenAddress: "0xdCf0aF9e59C002FA3AA091a46196b37530FD48a8",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aDAI",
                stableDebtTokenAddress:
                  "0x3B91257Fe5CA63b4114ac41A0d467D25E2F747F3",
                variableDebtTokenAddress:
                  "0xEAbBDBe7aaD7d5A278da40967E62C8c8Fe5fAec8",
                symbol: "DAI",
                address: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
                decimals: 18,
              },
              {
                aTokenAddress: "0x1d1F2Cb9ED46A8d5bf0254E5CE400514D62d55F0",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aENJ",
                stableDebtTokenAddress:
                  "0x8af08B5874380E1F1816e30bE12d773f4EB70e67",
                variableDebtTokenAddress:
                  "0xc11e09B03634144a1862E14ef7569DbEb4b7F3a2",
                symbol: "ENJ",
                address: "0xC64f90Cd7B564D3ab580eb20a102A8238E218be2",
                decimals: 18,
              },
              {
                aTokenAddress: "0xdDdEC78e29f3b579402C42ca1fd633DE00D23940",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aKNC",
                stableDebtTokenAddress:
                  "0x7f4E5bA1eE5dCAa4440371ec521cBc130De12E5e",
                variableDebtTokenAddress:
                  "0x196d717b2D8a5694572C2742343C333EA27B8288",
                symbol: "KNC",
                address: "0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8",
                decimals: 18,
              },
              {
                aTokenAddress: "0xeD9044cA8F7caCe8eACcD40367cF2bee39eD1b04",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aLINK",
                stableDebtTokenAddress:
                  "0x0DBEE55AB73e3C14421d3f437a218ea99A520556",
                variableDebtTokenAddress:
                  "0xcCead10A3BA54b1FA6D107b63B7D5e5e2f9888D8",
                symbol: "LINK",
                address: "0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789",
                decimals: 18,
              },
              {
                aTokenAddress: "0xA288B1767C91Aa9d8A14a65dC6B2E7ce68c02DFd",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aMANA",
                stableDebtTokenAddress:
                  "0xd4aEcF57cbcfeA373565DE75537aAc911EAF1759",
                variableDebtTokenAddress:
                  "0xaEE5AA094B55b6538388A4E8CBAe9E81Bfe815e6",
                symbol: "MANA",
                address: "0x738Dc6380157429e957d223e6333Dc385c85Fec7",
                decimals: 18,
              },
              {
                aTokenAddress: "0x9d9DaBEae6BcBa881404A9e499B13B2B3C1F329E",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aMKR",
                stableDebtTokenAddress:
                  "0xC37AadA7758e10a49bdECb9078753d5D096A4649",
                variableDebtTokenAddress:
                  "0xB86a93aA1325e4F58E3dbA7CE9DA251D83374fA2",
                symbol: "MKR",
                address: "0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA",
                decimals: 18,
              },
              {
                aTokenAddress: "0x01875ee883B32f5f961A92eC597DcEe2dB7589c1",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aREN",
                stableDebtTokenAddress:
                  "0xc66a5fd3Bd3D0329895ceE5755e161FD89c2EecD",
                variableDebtTokenAddress:
                  "0x75f318b9B40c5bEb0EEAdab5294C4108A376a22d",
                symbol: "REN",
                address: "0x5eebf65A6746eed38042353Ba84c8e37eD58Ac6f",
                decimals: 18,
              },
              {
                aTokenAddress: "0xAA74AdA92dE4AbC0371b75eeA7b1bd790a69C9e1",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aSNX",
                stableDebtTokenAddress:
                  "0x14B7a7Ab57190aEc3210303ef1cF29088535B329",
                variableDebtTokenAddress:
                  "0x7dF2a710751cb9f1FD392107187e4Aed0Ae867b0",
                symbol: "SNX",
                address: "0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947",
                decimals: 18,
              },
              {
                aTokenAddress: "0x9488fF6F29ff75bfdF8cd5a95C6aa679bc7Cd65c",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aSUSD",
                stableDebtTokenAddress:
                  "0xB155258d3c18dd5D41e8838c8b45CaE1B17a11D9",
                variableDebtTokenAddress:
                  "0xf3B942441Bd9d335E64413BeA6b76a49A5853C54",
                symbol: "sUSD",
                address: "0x99b267b9D96616f906D53c26dECf3C5672401282",
                decimals: 18,
              },
              {
                aTokenAddress: "0x39914AdBe5fDbC2b9ADeedE8Bcd444b20B039204",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aTUSD",
                stableDebtTokenAddress:
                  "0x082576C4CfC2eE1e0b8088B84d50CEb97CD84E49",
                variableDebtTokenAddress:
                  "0xC0cFab5E4A9D8DA2Bc98D0a2b3f9dc20f7eec19C",
                symbol: "TUSD",
                address: "0x016750AC630F711882812f24Dba6c95b9D35856d",
                decimals: 18,
              },
              {
                aTokenAddress: "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aUSDC",
                stableDebtTokenAddress:
                  "0x252C017036b144A812b53BC122d0E67cBB451aD4",
                variableDebtTokenAddress:
                  "0xBE9B058a0f2840130372a81eBb3181dcE02BE957",
                symbol: "USDC",
                address: "0xe22da380ee6B445bb8273C81944ADEB6E8450422",
                decimals: 6,
              },
              {
                aTokenAddress: "0xFF3c8bc103682FA918c954E84F5056aB4DD5189d",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aUSDT",
                stableDebtTokenAddress:
                  "0xf3DCeaDf668607bFCF565E84d9644c42eea518cd",
                variableDebtTokenAddress:
                  "0xa6EfAF3B1C6c8E2be44818dB64E4DEC7416983a1",
                symbol: "USDT",
                address: "0x13512979ADE267AB5100878E2e0f485B568328a4",
                decimals: 6,
              },
              {
                aTokenAddress: "0x62538022242513971478fcC7Fb27ae304AB5C29F",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aWBTC",
                stableDebtTokenAddress:
                  "0x45b85733E2609B9Eb18DbF1315765ddB8431e0B6",
                variableDebtTokenAddress:
                  "0x9b8107B86A3cD6c8d766B30d3aDD046348bf8dB4",
                symbol: "WBTC",
                address: "0xD1B98B6607330172f1D991521145A22BCe793277",
                decimals: 8,
              },
              {
                aTokenAddress: "0x87b1f4cf9BD63f7BBD3eE1aD04E8F52540349347",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aWETH",
                stableDebtTokenAddress:
                  "0x1F85D0dc45332D00aead98D26db0735350F80D18",
                variableDebtTokenAddress:
                  "0xDD13CE9DE795E7faCB6fEC90E346C7F3abe342E2",
                symbol: "WETH",
                address: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
                decimals: 18,
              },
              {
                aTokenAddress: "0xF6c7282943Beac96f6C70252EF35501a6c1148Fe",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aYFI",
                stableDebtTokenAddress:
                  "0x7417855ed88C62e610e612Be52AeE510703Dff04",
                variableDebtTokenAddress:
                  "0xfF682fF79FEb2C057eC3Ff1e083eFdC66f9b37FB",
                symbol: "YFI",
                address: "0xb7c325266ec274fEb1354021D27FA3E3379D840d",
                decimals: 18,
              },
              {
                aTokenAddress: "0xf02D7C23948c9178C68f5294748EB778Ab5e5D9c",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aZRX",
                stableDebtTokenAddress:
                  "0x7488Eb7fce7e31b91eB9cA4158d54D92e4BB03D7",
                variableDebtTokenAddress:
                  "0x7a1C28e06bcb4b1fF4768BC2CB9cd33b7622cD62",
                symbol: "ZRX",
                address: "0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C",
                decimals: 18,
              },
              {
                aTokenAddress: "0x601FFc9b7309bdb0132a02a569FBd57d6D1740f2",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aUNI",
                stableDebtTokenAddress:
                  "0x7A43B2653FF42BDE048e3b14fB42028956a7B6b1",
                variableDebtTokenAddress:
                  "0x10339d6562e8867bB93506572fF8Aea94B2fF656",
                symbol: "UNI",
                address: "0x075A36BA8846C6B6F53644fDd3bf17E5151789DC",
                decimals: 18,
              },
              {
                aTokenAddress: "0xb8a16bbab34FA7A5C09Ec7679EAfb8fEC06897bc",
                icon: "cryptocurrency:zrx",
                aTokenSymbol: "aAMPL",
                stableDebtTokenAddress:
                  "0x9157d57DC97A7AFFC7b0a78E78fe25e1401B1dCc",
                variableDebtTokenAddress:
                  "0xb7b7AF565495670713C92B8848fC8A650a968F81",
                symbol: "AMPL",
                address: "0x3E0437898a5667a4769B1Ca5A34aAB1ae7E81377",
                decimals: 9,
              },
            ],
          },
        ],
        "5": [
          {
            token: "BUSD",
            amount: "",
            showTokens: false,
            tokenList: [
              {
                symbol: "AAVE",
                icon: "cryptocurrency:zrx",
                address: "0xa7c3Bf25FFeA8605B516Cf878B7435fe1768c89b",
                decimals: 10,
              },
              {
                symbol: "DAI",
                icon: "cryptocurrency:zilla",
                address: "0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33",
                decimals: 7,
              },
              {
                symbol: "SUSD",
                icon: "cryptocurrency:zil",
                address: "0x4e62eB262948671590b8D967BDE048557bdd03eD",
                decimals: 14,
              },
              {
                symbol: "TrueUSD",
                icon: "cryptocurrency:xas",
                address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
                decimals: 12,
              },
              {
                symbol: "AAVE",
                icon: "cryptocurrency:zrx",
                address: "0xa7c3Bf25FFeA8605B516Cf878B7435fe1768c89b",
                decimals: 10,
              },
              {
                symbol: "USDC",
                icon: "cryptocurrency:zilla",
                address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                decimals: 7,
              },
              {
                symbol: "USDT",
                icon: "cryptocurrency:zil",
                address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                decimals: 14,
              },
              {
                symbol: "AAVE",
                icon: "cryptocurrency:xas",
                address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
                decimals: 12,
              },
              {
                symbol: "ENJ",
                icon: "cryptocurrency:zrx",
                address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
                decimals: 10,
              },
              {
                symbol: "KNC",
                icon: "cryptocurrency:zilla",
                address: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
                decimals: 7,
              },
              {
                symbol: "LINK",
                icon: "cryptocurrency:zil",
                address: "0x514910771af9ca656af840dff83e8264ecf986ca",
                decimals: 14,
              },
              {
                symbol: "MANA",
                icon: "cryptocurrency:xas",
                address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
                decimals: 12,
              },
              {
                symbol: "MKR",
                icon: "cryptocurrency:zrx",
                address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
                decimals: 10,
              },
              {
                symbol: "REN",
                icon: "cryptocurrency:zilla",
                address: "0x408e41876cccdc0f92210600ef50372656052a38",
                decimals: 7,
              },
              {
                symbol: "SNX",
                icon: "cryptocurrency:zil",
                address: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
                decimals: 14,
              },
              {
                symbol: "UNI",
                icon: "cryptocurrency:xas",
                address: "0x981D8AcaF6af3a46785e7741d22fBE81B25Ebf1e",
                decimals: 12,
              },
              {
                symbol: "WBTC",
                icon: "cryptocurrency:zrx",
                address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                decimals: 10,
              },
              {
                symbol: "xSUSHI",
                icon: "cryptocurrency:zilla",
                address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
                decimals: 7,
              },
              {
                symbol: "YFI",
                icon: "cryptocurrency:zil",
                address: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
                decimals: 14,
              },
              {
                symbol: "ZRX",
                icon: "cryptocurrency:xas",
                address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
                decimals: 12,
              },
            ],
          },
        ],
      },
      outputs: [],
    },
    protocol_configs: {
      tokenlist: [
        {
          symbol: "AAVE",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimals: 10,
        },
        {
          symbol: "AMPL",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimals: 7,
        },
        {
          symbol: "BAL",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimals: 14,
        },
        {
          symbol: "BAT",
          icon: "",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimals: 12,
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
          token: "AAVE",
          amount: "",
          showTokens: false,
          tokenList: [
            {
              symbol: "AAVE",
              icon: "cryptocurrency:zrx",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 10,
            },
            {
              symbol: "AMPL",
              icon: "cryptocurrency:zilla",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 7,
            },
            {
              symbol: "BAL",
              icon: "cryptocurrency:zil",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 14,
            },
            {
              symbol: "BAT",
              icon: "cryptocurrency:xas",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 12,
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
    rateMode: true,
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
              decimals: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 12,
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
    onBehalfOf: true,
    rateMode: true,
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
              decimals: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 12,
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
    isFlashloan: true,
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
              decimals: 10,
            },
            {
              symbol: "AMPL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 7,
            },
            {
              symbol: "BAL",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 14,
            },
            {
              symbol: "BAT",
              icon: "",
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              decimals: 12,
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
