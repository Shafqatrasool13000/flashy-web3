import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  FaCannabis,
  FaCaretDown,
  FaEthereum,
} from "react-icons/fa";
// import { useEncode } from "../../hooks/useEncode";
// import { useExecMock } from "../../hooks/useExecMock";
import { ExchangerContext } from "../../layout/Create/Index";
import SelectToken from "../SelectToken/Index";
import { AddProtocolStyled, RateModeStyled } from "../AddCube/style";
import { v4 as uuid } from "uuid";
import { Switch } from "antd";
import { useNetwork, useAccount } from "wagmi";
import { Icon } from "@iconify/react";
import { useFormik, FormikProvider, Form, FieldArray } from "formik";
import * as Yup from "yup";
import InputField from "../InputField/InputField";
import { GetBalance } from "../../hooks/GetBalance";

const AddProtocol = ({ data }: any) => {
  const [protocolData, setProtocolData] = useState<any>({});
  const [rateMode, setRateMode] = useState(2);
  const { address } = useAccount();
  const unique_id = uuid();
  const { chain } = useNetwork();

  interface initialValuesInterface {
    inputsData: { amount: string; token: string }[];
  }

  // Intial Values
  const initialValues: initialValuesInterface = {
    inputsData:
      chain?.id &&
      data?.function_configs?.inputs[chain?.id as number]?.map(
        ({ token, amount }: any) => {
          return { token: token, amount: amount };
        }
      ),
  };

  // data?.function_configs?.inputs?.map(
  //   ({ token, amount }: any) => {
  //     return { token: token, amount: amount };
  //   }
  // );

  // data?.function_configs?.inputs?.map(
  //   ({ token: tokens, amount: amounts }: any, index: number) => {
  //     const token: string = `${"token" + [index]}`;
  //     const amount: string = `${"amount" + [index]}`;
  //     return { [token]: tokens, [amount]: amounts };
  //   }
  // );

  // Formik Section
  // const initialValues: any = Object.assign({}, ...initalValuesData);

  const validationSchema = Yup.object({
    inputsData: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required("amount is required"),
      })
    ),
  });

  // OnSubmitHandler

  const onSubmit = () => {
    const updatedData = {
      ...data,
      function_configs: {
        ...data.function_configs,
        inputs: {
          [chain?.id.toString() as string]: data.function_configs.inputs?.[
            chain?.id.toString() as string
          ].map((obj: any, index: any) => ({
            ...obj,
            token: formik.values.inputsData[index].token,
            amount: formik.values.inputsData[index].amount,
          })),
        },
      },
    };

    const savedData = {
      protocol_id: unique_id,
      name: data.name,
      data: updatedData,
    };
    setSavedProtocols([...savedProtocols, savedData]);
    setExchageItems([]);

    // Saved Encoded Data

    // const protcoloData = [
    //   ...inputsData
    //     .map(({ amount, token, tokenList }: any) => {
    //       const selectedToken = tokenList.find(
    //         ({ symbol }: any) => symbol === token
    //       );
    //       const selectedAdress = selectedToken.address;
    //       const amount256 = BigNumber.from(amount).mul(
    //         BigNumber.from(10).pow(selectedToken.decimals)
    //       );
    //       return [selectedAdress, amount256];
    //     })
    //     .flat(),
    // ];

    // if (data.rateMode) {
    //   protcoloData.push(rateMode);
    // }

    // const encoded = encoder(addresses.haaveAddress, methodName, protcoloData);

    // setEncodeData([...encodeData, encoded]);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // Token Toggle Handler
  const handleTokensToggle = (index: number) => {
    let data = { ...protocolData.function_configs.inputs[chain?.id as number] };
    data[index].showTokens = !data[index].showTokens;
    setProtocolData({
      ...protocolData,
      protocolData: {
        function_configs: {
          inputs: { [chain?.id.toString() as string]: data },
        },
      },
    });
  };

  if (chain?.id) {
    for (
      let i = 0;
      i <
      data?.data?.function_configs?.inputs[chain?.id.toString() as string]
        .length;
      i++
    ) {
      console.log(
        {
          amount:
            data?.data?.function_configs?.inputs[
              chain?.id.toString() as string
            ][i].amount,
          token:
            data?.data?.function_configs?.inputs[
              chain?.id.toString() as string
            ][i].token,
        },
        "in set intital values"
      );
      formik.initialValues.inputsData.push({
        amount:
          data?.data?.function_configs?.inputs[chain?.id.toString() as string][
            i
          ].amount,
        token:
          data?.data?.function_configs?.inputs[chain?.id.toString() as string][
            i
          ].token,
      });
    }
  }

  useEffect(() => {
    setProtocolData(data);
  }, [data]);

  // const encoder = useEncode();

  const {
    // encodeData,
    // setEncodeData,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
  } = useContext(ExchangerContext);

  // const exactMock = useExecMock();
  //   "input data array"
  // );

  const handleSwitch = (value: any) => {
    setRateMode(value ? 1 : 2);
  };

  return (
    <FormikProvider value={formik}>
      <Form>
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
          {data.onBehalfOf && (
            <div className="mt-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="amount"
                id="address"
                value={address}
                // onChange={(e) => console.log("address")}
                placeholder="ENS or Address"
                className="w-100 mt-2 meta-address"
              />
            </div>
          )}
          <FieldArray name="tickets">
            {() =>
              data?.function_configs?.inputs[chain?.id as number]?.map(
                (
                  { token, amount, showTokens, tokenList }: any,
                  index: number
                ) => {
                  // const ticketErrors: any =
                  //   (formik.errors.inputsData?.length &&
                  //     formik.errors.inputsData[index]) ||
                  //   {};
                  // const ticketTouched: any =
                  //   (formik.errors.inputsData?.length &&
                  //     formik.touched.inputsData?.[index]) ||
                  //   {};
                  return (
                    <div key={index} className="input-section mt-3">
                      <Row className="align-items-center">
                        <Col md={4}>
                          <p className="input">input</p>
                          <div className="d-flex align-items-center mb-2">
                            <h6 className="position-relative">
                              <span className="me-2">
                                <Icon
                                  icon={
                                    tokenList?.find(
                                      ({ symbol }: any) =>
                                        symbol ===
                                        formik.values.inputsData[index].token
                                    )?.icon
                                  }
                                  width="24"
                                  height="24"
                                  color="white"
                                />
                              </span>
                              {formik.values.inputsData[index].token}
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
                              index={index}
                              name={`inputsData.${index}.token`}
                              formik={formik}
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
                          <InputField
                            name={`inputsData.${index}.amount`}
                            type="number"
                            placeholder="Amount"
                          />

                          <div className="d-flex justify-content-end mt-4">
                            <GetBalance
                              token={
                                tokenList?.find(
                                  ({ symbol }: any) => symbol === token
                                )?.address
                              }
                            />
                            <button className="max-btn"> Max</button>
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
                  );
                }
              )
            }
          </FieldArray>
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
        </AddProtocolStyled>
      </Form>
    </FormikProvider>
  );
};

export default AddProtocol;
