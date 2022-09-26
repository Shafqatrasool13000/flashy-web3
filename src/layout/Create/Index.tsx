import React from "react";
import { FaPlus } from "react-icons/fa";
import Create from "../../components/Create/Index";
import { CreateLayoutStyled } from "./style";
import AddCube from "../../components/AddCube/Index";
import CubeBody from "../../components/AddCube/CubeBody";
import AddProtocol from "../../components/AddCube/AddProtocol";
import { Col, Container, Row } from "react-bootstrap";
import AddProtocol2 from "../../components/AddCube/AddProtocol2";

const Index = () => {

  const [addCubeModal, setAddCubeModal] = React.useState(false);
  const [exchangeItems, setExchageItems] = React.useState<any>([]);

  const getExchangeBox=(name:string) => {
    const nameConversion=name.toLowerCase();
    console.log(nameConversion.includes('swap'));
    if(nameConversion.includes('swap')){
         setExchageItems([...exchangeItems,{Component:AddProtocol2,name:name}]);
      setAddCubeModal(false);

    }else{
      setExchageItems([...exchangeItems,{Component:AddProtocol,name:name}]);
      setAddCubeModal(false);
    }
  }

console.log(exchangeItems,'add cube modal');
  return (
    <CreateLayoutStyled>
      <Container>
        <Row>
          <Col md={6}>
            <Create />
          </Col>
          <Col md={6} className="position-relative right-0 mt-3 mt-md-0">
            {exchangeItems?.map(({Component,name}:any,index:any)=>(
             <Component name={name} key={index}/>
            ))}
            <div className="icon-container">
              <FaPlus className="plus-icon"
                color="white"
                onClick={() => setAddCubeModal(!addCubeModal)}
                fontSize={26}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <AddCube addCubeModal={addCubeModal} setAddCubeModal={setAddCubeModal} >
        <CubeBody getExchangeBox={getExchangeBox} />
      </AddCube>
    </CreateLayoutStyled>
  );
};

export default Index;
