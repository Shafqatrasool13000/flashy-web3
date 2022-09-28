import React, { createContext, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Create from "../../components/Create/Index";
import { CreateLayoutStyled } from "./style";
import AddCube from "../../components/AddCube/Index";
import CubeBody from "../../components/AddCube/CubeBody";
import AddProtocol from "../../components/AddCube/AddProtocol";
import { Col, Container, Row } from "react-bootstrap";
import AddProtocol2 from "../../components/AddCube/AddProtocol2";

export const ExchangerContext = createContext<any>(null);

const Index = () => {
  const [addCubeModal, setAddCubeModal] = React.useState(false);
  const [exchangeItems, setExchageItems] = React.useState<any>([]);
  const [encodeData, setEncodeData] = React.useState([]);

  const dragItem = useRef<any>();
  const dragOverItem = useRef<any>();

  // Drag Start
  
  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  // In Dragging

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };

  // Drop Dragged

  const drop = () => {
    const copyListItems = [...exchangeItems];
    const copyEncodeItems = [...encodeData];

    const dragItemContent = copyListItems[dragItem.current];
    const dragEncodeContent = copyEncodeItems[dragItem.current];

    copyListItems.splice(dragItem.current, 1);
    copyEncodeItems.splice(dragItem.current, 1);

    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    copyEncodeItems.splice(dragOverItem.current, 0, dragEncodeContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setExchageItems(copyListItems);
    setEncodeData(copyEncodeItems);
  };

  const getExchangeBox = (name: string) => {
    const nameConversion = name.toLowerCase();
    console.log(nameConversion.includes("swap"));
    if (nameConversion.includes("swap")) {
      setExchageItems([
        ...exchangeItems,
        { Component: AddProtocol2, name: name },
      ]);
      setAddCubeModal(false);
    } else {
      setExchageItems([
        ...exchangeItems,
        { Component: AddProtocol, name: name },
      ]);
      setAddCubeModal(false);
    }
  };

  return (
    <ExchangerContext.Provider value={{ encodeData, setEncodeData }}>
      <CreateLayoutStyled>
        <Container>
          <Row>
            <Col md={6} className="mt-3">
              <Create />
            </Col>
            <Col md={6} className="right-0 mt-3 protocol-section">
              {exchangeItems?.map(({ Component, name }: any, index: any) => (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                  }}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                  draggable
                >
                  <Component name={name} />
                </div>
              ))}
              <div className="icon-container">
                <FaPlus
                  className={`plus-icon bottom-icon ${
                    exchangeItems.length ? "d-block" : "d-none"
                  }`}
                  color="white"
                  onClick={() => setAddCubeModal(!addCubeModal)}
                  fontSize={26}
                />
                <FaPlus
                  className={`plus-icon top-icon ${
                    exchangeItems.length && "d-none"
                  }`}
                  color="white"
                  onClick={() => setAddCubeModal(!addCubeModal)}
                  fontSize={26}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <AddCube addCubeModal={addCubeModal} setAddCubeModal={setAddCubeModal}>
          <CubeBody getExchangeBox={getExchangeBox} />
        </AddCube>
      </CreateLayoutStyled>
    </ExchangerContext.Provider>
  );
};

export default Index;
