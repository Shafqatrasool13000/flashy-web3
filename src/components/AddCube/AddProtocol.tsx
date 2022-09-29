import { parseEther } from "ethers/lib/utils";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  FaCannabis,
  FaCaretDown,
  FaEthereum,
} from "react-icons/fa";
import { useEncode } from "../../hooks/useEncode";
import { useExecMock } from "../../hooks/useExecMock";
import { ExchangerContext } from "../../layout/Create/Index";
import { addresses } from "../../utils/constants";
import SelectToken from "../SelectToken/Index";
import { AddProtocolStyled } from "./style";

const AddProtocol = ({ data }: any) => {
  const [amount, setAmount] = useState("");
  const [showTokens, setShowTokens] = useState(false);
  const [token, setToken] = useState("ETH");
  // const [convertedAmount, setConvertedAmount] = useState("");

  const encoder = useEncode();
  const methodName = data.name.toLowerCase();

  const {encodeData, setEncodeData}=useContext(ExchangerContext);

  const exactMock=useExecMock();
  
  const useEncodeHandler = async() => {
    
    const encoded = encoder(addresses.haaveAddress, methodName, ['0x6B175474E89094C44Da98b954EedeAC495271d0F',parseEther(amount)]);

    console.log(encoded);

    if(!encodeData.includes(encoded)){
      setEncodeData([...encodeData,encoded]);
    }else{
      const result=await exactMock(addresses.haaveAddress,encodeData[0]);
      console.log('mock runner',result);
    }
  };

  return (
    <AddProtocolStyled className="position-relative">
      <FaArrowAltCircleLeft className="back-icon" fontSize={26} />
      <div className="d-flex justify-content-center">
        <h6 className="text-center">
          <FaCannabis fontSize={20} className="vertical-align-top" />
          <span className="ms-2 fs-4"> Aave V2</span>
        </h6>
      </div>
      <div className="d-flex justify-content-center">
        <button className="method-btn w-100 mt-3 fs-6">{data.name}</button>
      </div>
      <div className="input-section mt-3">
        <Row className="align-items-center">
          <Col md={4}>
            <p className="input">Input</p>
            <div className="d-flex align-items-center">
              <h6 className="position-relative" onClick={()=>setShowTokens(!showTokens)}>
                <span className="me-2">
                  <FaEthereum fontSize={22} />
                </span>
                {token}
                <span>
                  <FaCaretDown className="more-icon" fontSize={14} onClick={()=>setShowTokens(!showTokens)}/>
                </span>
              </h6>
            </div>
              <div className={`position-absolute ${showTokens ?'d-block':'d-none'}`}>
              <SelectToken showTokens={showTokens} setShowTokens={setShowTokens} setToken={setToken} tokens={data.protocol_configs.tokenlist} />
            </div>
            <span className="input-text">
              <FaArrowDown />
            </span>
          </Col>
          <Col md={8}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="w-100"
            />
            <div className="d-flex justify-content-end mt-4">
              <button className="max-btn">Max</button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="output-section mt-3">
        <Row className="align-items-center">
          <Col md={4}>
            <p className="input">Output</p>
            <div className="d-flex align-items-center">
              <h6>
                <span className="me-2">
                  <FaEthereum fontSize={22} />
                </span>
                aWETH
              </h6>
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-end mt-4">
              <h6>0</h6>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottom-section mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fs-6 mb-0 mt-">APY</p>
          <p className="fs-6 mb-0 mt-1">1.03%</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fs-6 mb-0 mt-1">Max LTV</p>
          <p className="fs-6 mb-0 mt-1">82.5%</p>
        </div>
      </div>
      <button onClick={useEncodeHandler} className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0">
        Set
      </button>
    </AddProtocolStyled>
  );
};

export default AddProtocol;
