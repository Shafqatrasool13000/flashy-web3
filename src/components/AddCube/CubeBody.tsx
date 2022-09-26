import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadBar from "./HeadBar";
import { CubeBodyStyled } from "./style";

type CubeBodyProps={
  getExchangeBox:()=>void
}

const CubeBody:React.FC<any> = ({getExchangeBox}) => {

  const furocomb = ["Unstake Token", "Claim COMBO"];
  const paraswap = ["Swap Token"];
  const uniswap = ["Swap Token", "Add Liquidity", "Remove Liquidity"];
  const avaeV2 = ["Deposit", "Widthdraw", "Borrow", "Repay", "Flashloan"];
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
  const bProtocol = [
    "New Vault",
    "Deposit",
    "Withdraw",
    "Generate",
    "Pay Back",
  ];
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
  const exchangerData = [
    {
      title: "Furucombo",
      exchanger: furocomb,
    },
    {
      title: "Paraswap",
      exchanger: paraswap,
    },
    {
      title: "Uniswap V2",
      exchanger: uniswap,
    },
    {
      title: "Aave V2",
      exchanger: avaeV2,
    },
    {
      title: "Sushiswap",
      exchanger: sushiswap,
    },
    {
      title: "Curve",
      exchanger: curve,
    },
    {
      title: "Yearn",
      exchanger: yearn,
    },
    {
      title: "Compound",
      exchanger: compound,
    },
    {
      title: "Maker",
      exchanger: maker,
    },
    {
      title: "1inch",
      exchanger: firstInch,
    },
    {
      title: "Uniswap V3",
      exchanger: uniswapV3,
    },
    {
      title: "B‧Protocol",
      exchanger: bProtocol,
    },
    {
      title: "Synthetix",
      exchanger: synthetix,
    },
    {
      title: "Utility",
      exchanger: utility,
    },
  ];

  return (
    <CubeBodyStyled>
      <Container>
        <h6 className="title">New Cube</h6>
        <div className="exchangers">
          {exchangerData.map(({ title, exchanger }, index) => (
            <div key={index}>
              <HeadBar title={title} />
              <Row key={index} className="method">
                {exchanger.map((name, index) => (
                  <Col key={index} sm={6} md={3}>
                    <button onClick={()=>getExchangeBox(name)} key={index} className="method-btn w-100 mt-3">
                      {name}
                    </button>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </CubeBodyStyled>
  );
};

export default CubeBody;
