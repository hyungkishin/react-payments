import { ChangeEvent, useEffect, useState } from "react";

const MAX_CVC_LENGTH = 3;

type CardCVCInputProps = {
  handleCvc: (input: string) => void;
};

const CardCVCInput = ({ handleCvc }: CardCVCInputProps) => {
  const [cvc, setCvc] = useState<string>("");
  const handleCvcInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (Number.isNaN(+value)) {
      alert("보안코드는 숫자만 입력해주세요!");
      return;
    }
    setCvc(value);
  };

  useEffect(() => {
    handleCvc(cvc);
    // eslint-disable-next-line
  }, [cvc]);

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        value={cvc}
        onChange={handleCvcInput}
        maxLength={MAX_CVC_LENGTH}
        required
      />
    </div>
  );
};

export default CardCVCInput;
