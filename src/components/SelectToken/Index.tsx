import { Select } from "antd";
import React from "react";
import { FaEthereum } from "react-icons/fa";
import { SelectTokenStyled } from "./style";

const { Option } = Select;

const Index: React.FC<any> = ({showTokens,setShowTokens,setToken,tokens}) => {

  const handleChange = (value: string[]) => {
    setToken(value)
    console.log(`selected ${value}`);
  };
  
  return(
  <SelectTokenStyled>
    <Select
      showSearch
      style={{ width: 410 }}
      placeholder="Select Token"
      defaultValue={['AAVE']}
      optionFilterProp="children"
      optionLabelProp="label"
      onChange={handleChange}
      open={showTokens}
      onSelect={()=>setShowTokens(!showTokens)}
    >
       {
        tokens.map((tokenName:any,index:number)=>(
          <Option key={index} value={tokenName}> <div className="demo-option-label-item">
            <span>

          <FaEthereum fontSize={24}/> {tokenName}
            </span>
        </div></Option>
        ))
      }
    </Select>
  </SelectTokenStyled>
);
}

export default Index;
