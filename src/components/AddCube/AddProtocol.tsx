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
// import { useExecMock } from "../../hooks/useExecMock";
import { ExchangerContext } from "../../layout/Create/Index";
import { addresses } from "../../utils/constants";
import SelectToken from "../SelectToken/Index";
import { AddProtocolStyled, RateModeStyled } from "./style";
import { v4 as uuid } from "uuid";
import { BigNumber } from "ethers";
import { Switch } from "antd";
import { useAccount } from "wagmi";
import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";

const AddProtocol = ({ data }: any) => {
  const [protocolData, setProtocolData] = useState<any>([]);
  const [inputsData, setInputsData] = useState<any>();
  const [rateMode, setRateMode] = useState(2);
  const { address } = useAccount();
  const unique_id = uuid();
  console.log({ data });

  const handleFormChange = (index: number, event: any) => {
    console.log(event.target.value, "value in form change");
    let data = [...protocolData.function_configs.inputs];
    data[index][event.target.name] = event.target.value;
    setInputsData(data);
  };

  console.log({ rateMode });

  const handleTokensToggle = (index: number) => {
    console.log({ index }, "in index toggle token");
    let data = [...protocolData.function_configs.inputs];
    data[index].showTokens = !data[index].showTokens;
    setInputsData(data);
  };

  useEffect(() => {
    setProtocolData(data);

    console.log("useEffect running");
  }, []);

  const encoder = useEncode();
  const methodName = data.name.toLowerCase();

  const {
    encodeData,
    setEncodeData,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
  } = useContext(ExchangerContext);

  // const exactMock = useExecMock();

  console.log({ inputsData });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit");
    const savedData = {
      protocol_id: unique_id,
      name: data.name,
      data: protocolData,
    };
    console.log({ savedData });

    setSavedProtocols([...savedProtocols, savedData]);
    setExchageItems([]);

    // Saved Encoded Data

    const protcoloData = [
      ...inputsData
        .map(({ amount, token, tokenList }: any) => {
          const selectedToken = tokenList.find(
            ({ symbol }: any) => symbol === token
          );
          const selectedAdress = selectedToken.address;
          const amount256 = BigNumber.from(amount).mul(
            BigNumber.from(10).pow(selectedToken.decimal)
          );
          return [selectedAdress, amount256];
        })
        .flat(),
    ];

    if (data.rateMode) {
      protcoloData.push(rateMode);
    }

    const encoded = encoder(addresses.haaveAddress, methodName, protcoloData);
    // console.log(
    //   ...inputsData.map(({ amount, token, tokenList }: any) => {
    //     const selectedToken = tokenList.find(
    //       ({ symbol }: any) => symbol === token
    //     );
    //     const selectedAdress = selectedToken.address;
    //     const amount256 = BigNumber.from(amount).mul(
    //       BigNumber.from(10).pow(selectedToken.decimal)
    //     );
    //     return [selectedAdress, amount256];
    //   }).flat(),
    //   "data for encoding"
    // );
    console.log({ encoded }, "encoded data");

    setEncodeData([...encodeData, encoded]);
    // console.log(
    //   ...inputsData.map(({ amount }: any) =>
    //     BigNumber.from(amount).mul(BigNumber.from(10).pow(18))
    //   ),
  };

  //   "input data array"
  // );

  console.log({ savedProtocols });
  const handleSwitch = (value: any) => {
    setRateMode(value ? 1 : 2);
    console.log(value ? "Stalbe" : "Variable", "token type selection");
  };
  console.log(data.hasOwnProperty("isFlashloan"), "havefloadn loannan");
  interface MyFormValues {
    token: string;
    amount: string;
  }
  const initialValues: MyFormValues = { token: "", amount: "" };

  return (
    <AddProtocolStyled className="position-relative">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        //  onSubmit={handleSubmit}
      >
        <Form>
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
          {data.onBehalfOf && (
            <div className="mt-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="amount"
                id="address"
                value={address}
                onChange={(e) => console.log("address")}
                placeholder="ENS or Address"
                className="w-100 mt-2 meta-address"
              />
            </div>
          )}
          {data.function_configs.inputs.map(
            ({ token, amount, showTokens, tokenList }: any, index: number) => (
              <div key={index} className="input-section mt-3">
                <Row className="align-items-center">
                  <Col md={4}>
                    <p className="input">input</p>
                    <div className="d-flex align-items-center mb-2">
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
                              icon={
                                tokenList?.find(
                                  ({ symbol }: any) => symbol === token
                                )?.icon
                              }
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
                        handleTokensToggle={handleTokensToggle}
                      />
                    </div>
                    <span
                      className={`input-text ${
                        protocolData?.hasOwnProperty("isFlashloan")
                          ? "d-none"
                          : "d-block"
                      }`}
                    >
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
                    />
                     <Field id="firstName" name="firstName" placeholder="First Name" />
                    <div className="d-flex justify-content-end mt-4">
                      <button className="max-btn">Max</button>
                    </div>
                    {data.rateMode && (
                      <RateModeStyled>
                        <Switch
                          autoFocus={true}
                          checkedChildren="Stable"
                          onChange={(value) => handleSwitch(value)}
                          unCheckedChildren="Variable"
                          defaultChecked
                        />
                      </RateModeStyled>
                    )}
                  </Col>
                </Row>
              </div>
            )
          )}
          <div></div>
          <div
            className={`${
              protocolData?.hasOwnProperty("isFlashloan") ? "d-none" : "d-block"
            }`}
          >
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
          <button
            type="submit"
            className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0"
          >
            Set
          </button>
        </Form>
      </Formik>
    </AddProtocolStyled>
  );
};

export default AddProtocol;
