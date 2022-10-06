import { useContext, useEffect, useState } from "react";
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
import SelectToken from "../SelectToken/Index";
import { EditProtocolStyled } from "./style";
import { Icon } from '@iconify/react';

const EditProtocol = ({ data, setIsEdit, setEditData, setEditId }: any) => {
  console.log({ data }, "data in edit Handler");

  const [protocolData, setProtocolData] = useState<any>([]);
  const [inputsData, setInputsData] = useState<any>();

  const handleFormChange = (index: number, event: any) => {
    console.log(event.target.value, "value in form change");
    let data = [...protocolData.data.function_configs.inputs];
    data[index][event.target.name] = event.target.value;
    setInputsData(data);
  };

  const handleTokensToggle = (index: number) => {
    console.log({ index }, "in index toggle token");
    let data = [...protocolData.data.function_configs.inputs];
    data[index].showTokens = !data[index].showTokens;
    setInputsData(data);
    // setIsEdit(false);
  };
  console.log({ inputsData });

  useEffect(() => {
    setProtocolData(data);
    console.log("useEffect running");
  }, [data]);

  console.log({protocolData},'protcols datajlkjl');
  const encoder = useEncode();
  // const methodName = data.name.toLowerCase();

  const {
    encodeData,
    setEncodeData,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
  } = useContext(ExchangerContext);

  const exactMock = useExecMock();

  const showResult = () => {
    console.log({ inputsData });
  };

  console.log({protocolData},'protocolData');

  // Update Saved Protocols

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const editableDataIndex = savedProtocols.findIndex(
      (protocolData: any) => protocolData.protocol_id === data.protocol_id
    );
    console.log({ editableDataIndex });
    const savedProtocolsData = savedProtocols.splice(editableDataIndex, 1, {
      protocol_id: data.protocol_id,
      data: protocolData.data,
      name: data.name,
    });
    console.log({ savedProtocolsData }, "protocols data");
    setSavedProtocols([...savedProtocols]);
    setIsEdit(false);
    setEditData({});
    setEditId();
  };

  console.log({ inputsData });
  console.log({ savedProtocols });
  return (
    <EditProtocolStyled className="position-relative">
      <form onSubmit={handleSubmit}>
        <FaArrowAltCircleLeft className="back-icon" fontSize={26} />
        <div className="d-flex justify-content-center">
          <h6 className="text-center">
            <FaCannabis fontSize={20} className="vertical-align-top" />
            <span className="ms-2 fs-4"> Aave V2</span>
          </h6>
        </div>
        <div className="d-flex justify-content-center">
          <button className="method-btn w-100 mt-3 fs-6">{data?.name}</button>
        </div>
        {protocolData?.data?.function_configs?.inputs?.map(
          ({ token, amount, showTokens, tokenList }: any, index: number) => (
            <div key={index} className="input-section mt-3">
              <Row className="align-items-center">
                <Col md={4}>
                  <p className="input">input</p>
                  <div className="d-flex align-items-center">
                    <h6 className="position-relative">
                      <span className="me-2">
                      {!token ? (
                          <Icon
                            icon="cryptocurrency:zrx"
                            width="24"
                            height="24"
                            color="white"
                          />
                        ) : (
                          <Icon
                            icon={tokenList?.find(({symbol}: any) => symbol === token)?.icon}
                            width="24"
                            height="24"
                            color="white"
                          />
                        )}
                      </span>
                      {!token ? "AAVE" : token}
                      <span>
                        <FaCaretDown
                          className="more-icon"
                          fontSize={14}
                          onClick={() => {
                            handleTokensToggle(index);
                          }}
                        />
                      </span>
                    </h6>
                  </div>
                  <div
                    className={`position-absolute ${
                      showTokens ? "d-block" : "d-none"
                    }`}
                  >
                    <SelectToken
                      showTokens={showTokens}
                      tokens={tokenList}
                      handleFormChange={handleFormChange}
                      index={index}
                      defaultToken={token}
                      handleTokensToggle={handleTokensToggle}
                    />
                  </div>
                  <span className="input-text">
                    <FaArrowDown />
                  </span>
                </Col>
                <Col md={8}>
                  <input
                    type="number"
                    name="amount"
                    onChange={(e) => handleFormChange(index, e)}
                    placeholder="Amount"
                    className="w-100"
                    value={amount}
                  />
                  <div className="d-flex justify-content-end mt-4">
                    <button className="max-btn">Max</button>
                  </div>
                </Col>
              </Row>
            </div>
          )
        )}

          {
          <div className={`${protocolData?.data?.hasOwnProperty('isFlashloan')?'d-none':'d-block'}`}>
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
          </div>
        }         

       
        <button
          onClick={handleSubmit}
          className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0"
        >
          Set
        </button>
      </form>
    </EditProtocolStyled>
  );
};

export default EditProtocol;
