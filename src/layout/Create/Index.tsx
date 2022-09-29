import React, { createContext, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Create from "../../components/Create/Index";
import { CreateLayoutStyled } from "./style";
import AddCube from "../../components/AddCube/Index";
import CubeBody from "../../components/AddCube/CubeBody";
import AddProtocol from "../../components/AddCube/AddProtocol";
import { Col, Container, Row } from "react-bootstrap";
import AddProtocol2 from "../../components/AddCube/AddProtocol2";
import { Encode_Data, Exchange_Items } from "../../utils/types";

export const ExchangerContext = createContext({} as Encode_Data);

const Index = () => {
  const [addCubeModal, setAddCubeModal] = React.useState(false);
  const [exchangeItems, setExchageItems] = React.useState<any>([] );
  const [encodeData, setEncodeData] = React.useState<string[]>([]);

  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [exchangeItems]);

  // Drag Start
  
  const dragStart = (position: any) => {
    dragItem.current = position;
  };

  // In Dragging

  const dragEnter = (position: any) => {
    dragOverItem.current = position;
  };

  // Drop Dragged

  const drop = () => {
    const copyListItems = [...exchangeItems];
    const copyEncodeItems = [...encodeData];

      const dragItemContent = copyListItems[dragItem.current];
      const dragEncodeContent = copyEncodeItems[dragItem.current];
  
      copyListItems.splice(dragItem.current , 1);
      copyEncodeItems.splice(dragItem?.current, 1);
  
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      copyEncodeItems.splice(dragOverItem.current, 0, dragEncodeContent);
  
      dragItem.current = 0;
      dragOverItem.current = 0;
  
      setExchageItems(copyListItems);
      setEncodeData(copyEncodeItems);
   
  };

  const getExchangeBox = (data: any) => {
    const nameConversion = data.name.toLowerCase();
    console.log(nameConversion.includes("swap"));
    if (nameConversion.includes("swap")) {
      setExchageItems([
        ...exchangeItems,
        { Component: AddProtocol2, data },
      ]);
      setAddCubeModal(false);
    } else {
      setExchageItems([
        ...exchangeItems,
        { Component: AddProtocol, data },
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
              {exchangeItems?.map(({ Component, data }: any, index: any) => (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                  }}
                  ref={messagesEndRef}
                  onDragStart={() => dragStart(index)}
                  onDragEnter={() => dragEnter(index)}
                  onDragEnd={drop}
                  draggable
                >
                  <Component data={data} />
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
