import { SavedProtocolStyled } from "./style";
import { FaArrowDown, FaEthereum } from "react-icons/fa";

const SavedProtocols: React.FC<any> = ({ savedProtocols }) => {
  return (
    <SavedProtocolStyled>
      {savedProtocols.length !== 0 && (
        <div className="list">
          {savedProtocols?.map(
            ({ amount, token, name }: any, index: number) => (
              <div key={index} className="mt-2 box">
                <button className="method-btn w-100 mb-3 fs-6">{name}</button>
                <div key={index} className="d-flex justify-content-between">
                  <div className="chain d-flex align-items-center">
                    <FaEthereum fontSize={24} />
                    <p className="token ms-2 mt-1">{token}</p>
                  </div>
                  <p className="price ms-2 mt-1">{amount}</p>
                </div>
                <div className="bottom-border" />
                <FaArrowDown fontSize={20} />
                <div key={index} className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <FaEthereum fontSize={24} />
                    <p className="token ms-2 mt-1">aWeth</p>
                  </div>
                  <p className="price ms-2 mt-1">{amount}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </SavedProtocolStyled>
  );
};

export default SavedProtocols;
