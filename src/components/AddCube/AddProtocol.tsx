import { Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  FaCannabis,
  FaCaretDown,
  FaEthereum,
} from "react-icons/fa";
import { AddProtocolStyled } from "./style";

const AddProtocol = ({name=null}:any) => {

  return (

    <AddProtocolStyled>
      <FaArrowAltCircleLeft className="back-icon" fontSize={26} />
      <div className="d-flex justify-content-center">
        <h6 className="text-center">
          <FaCannabis fontSize={20} className="vertical-align-top" />
          <span className="ms-2 fs-4"> Aave V2</span>
        </h6>
      </div>
      <div className="d-flex justify-content-center">
        <button className="method-btn w-100 mt-3 fs-6">{name}</button>
      </div>
      <div className="input-section mt-3">
        <Row className="align-items-center">
          <Col md={4}>
            <p className="input">Input</p>
            <div className="d-flex align-items-center">
              <h6>
                <span className="me-2">
                  <FaEthereum fontSize={22} />
                </span>
                ETH
                <span>
                  <FaCaretDown className="more-icon" fontSize={14} />
                </span>
              </h6>
            </div>
            <span className="input-text">
              <FaArrowDown />
            </span>
          </Col>
          <Col md={8}>
            <input  type="number" placeholder="Amount" className="w-100" />
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
    </AddProtocolStyled>
  );
};

export default AddProtocol;
