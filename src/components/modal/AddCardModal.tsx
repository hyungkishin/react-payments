import { CARD } from "constant";
import { CardCompany } from "store/type";

type CardCompanyProps = {
  handleCardCompany: (payload: CardCompany) => void;
  handleModalClose: () => void;
};

const AddCardModal = ({ handleCardCompany, handleModalClose }: CardCompanyProps) => {
  const handleClickCardCompany = (name: string, color: string) => {
    handleCardCompany({ name, color });
  };

  const close = () => {
    handleModalClose()
  }

  return (
    <div className="modal-dimmed" onClick={() => close()}>
      <div className="modal">
        <div className="grid-template">
          {CARD.COMPANY.map(({ name, color }: any) => (
            <div
              className="modal-item-container"
              key={name}
              onClick={() => handleClickCardCompany(name, color)}
            >
              <div
                className="modal-item-dot"
                style={{ backgroundColor: color }}
              ></div>
              <span className="modal-item-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
