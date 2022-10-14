import { SavedProtocolStyled } from "./style";
import {
  FaArrowDown,
  FaEdit,
  FaEthereum,
  FaExclamation,
  FaTrash,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import EditProtocol from "./EditProtocol";
import { ExchangerContext } from "../../layout/Create/Index";
import { Icon } from "@iconify/react";
import { useNetwork } from "wagmi";

const SavedProtocols = () => {
  const [editData, setEditData] = useState<any>(null);
  const [isEdit, setIsEdit] = useState<any>();
  const [editId, setEditId] = useState<any>();

  const { savedProtocols, setSavedProtocols } = useContext(ExchangerContext);
  const { chain, chains } = useNetwork();

  // Edit Handler
  const handleEdit = (
    protocol_id: string,
    data: any,
    name: string,
    index: number
  ) => {
    setEditId(index);
    setEditData({ protocol_id, name, data });
    setIsEdit(true);
  };

  // Delete Handler
  const handleDelete = (id: number) => {
    const filteredData = savedProtocols.filter(
      ({ _ }: any, index: number) => index !== id
    );
    setSavedProtocols(filteredData);
  };

  console.log({ editData }, "edit Data in Saved Protocols");

  return (
    <>
      <div>
        <SavedProtocolStyled>
          {savedProtocols.length !== 0 && (
            <div className="list">
              {savedProtocols?.map(
                ({ protocol_id, data, name }: any, index: number) => (
                  <div key={index}>
                    <div
                      className={`mt-2 box ${
                        index === editId ? "d-none" : "d-block"
                      }`}
                    >
                      <div
                        className={`head-bar d-flex justify-content-between isEdit`}
                      >
                        <button className="method-btn w-100 mb-3 fs-6">
                          {name}
                        </button>
                        <div className="action-btns">
                          <FaEdit
                            className="cursor-pointer"
                            fontSize={20}
                            onClick={() => {
                              handleEdit(protocol_id, data, name, index);
                              setEditData({ protocol_id, name, data });
                            }}
                          />
                          <FaTrash
                            className="ms-3 cursor-pointer"
                            fontSize={20}
                            onClick={() => handleDelete(index)}
                          />
                        </div>
                      </div>
                      {data?.function_configs?.inputs[
                        chain?.id.toString() as string
                      ].map(
                        ({ amount, token, tokenList }: any, index: number) => (
                          <div key={index}>
                            <div className="d-flex justify-content-between">
                              <div className="chain d-flex align-items-center  mb-2">
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
                                <p className="token ms-2 mt-1">{token}</p>
                              </div>
                              <p className="price ms-2 mt-1">{amount}</p>
                            </div>
                            <div
                              className={`${
                                data?.hasOwnProperty("isFlashloan")
                                  ? "d-none"
                                  : "d-block"
                              }`}
                            >
                              <div className="bottom-border" />
                              <FaArrowDown fontSize={20} />
                            </div>
                          </div>
                        )
                      )}
                      <div
                        key={index}
                        className={`d-flex justify-content-between 
                          ${
                            data?.hasOwnProperty("isFlashloan")
                              ? "d-block"
                              : "d-none"
                          }`}
                      >
                        <p className="ms-2 mt-1">aWeth | 3%</p>
                        <p className="price ms-2 mt-1">
                          <FaExclamation fontSize={16} />
                        </p>
                      </div>
                      <div
                        className={`${
                          data?.hasOwnProperty("isFlashloan")
                            ? "d-none"
                            : "d-block"
                        }`}
                      >
                        <div
                          key={index}
                          className="d-flex justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <FaEthereum fontSize={24} />
                            <p className="token ms-2 mt-1">aWeth</p>
                          </div>
                          <p className="price ms-2 mt-1">{122}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`list mt-3 ${
                        data?.hasOwnProperty("isFlashloan")
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      <div className="box">
                        <div
                          className={`head-bar d-flex justify-content-between isEdit`}
                        >
                          <button className="method-btn w-100 mb-3 fs-6">
                            {name}
                          </button>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="chain d-flex align-items-center">
                              <FaEthereum fontSize={24} />
                              <p className="token ms-2 mt-1">
                                {
                                  data?.function_configs.inputs[
                                    chain?.id.toString() as string
                                  ][index].token
                                }
                              </p>
                            </div>
                            <p className="price ms-2 mt-1">
                              {
                                data?.function_configs.inputs[
                                  chain?.id.toString() as string
                                ][index].amount
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </SavedProtocolStyled>
      </div>
      <div className={`${isEdit ? "d-block" : "d-none"}`}>
        <EditProtocol
          data={editData}
          setIsEdit={setIsEdit}
          setEditData={setEditData}
          setEditId={setEditId}
        />
      </div>
    </>
  );
};

export default SavedProtocols;
