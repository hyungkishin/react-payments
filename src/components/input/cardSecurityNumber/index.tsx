import { ChangeEvent, useState } from "react";
import { HelpIcon, SecureBox, ToolTip } from "./style";
import { Input, InputContainer, InputTitle } from "components/common/ui";

const MAX_CVC_LENGTH = 3;

type CardCVCInputProps = {
  cvc: string;
  handleCvc: (input: string) => void;
};

const CardCVCInput = ({ cvc, handleCvc }: CardCVCInputProps) => {
  const [helpState, setHelpState] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (Number.isNaN(+value)) {
      alert("보안코드는 숫자만 입력해주세요!");
      return;
    }
    handleCvc(value);
  };

  return (
    <InputContainer>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <SecureBox>
        <Input
          width={"w_25"}
          type="password"
          value={cvc}
          onChange={handleChange}
          maxLength={MAX_CVC_LENGTH}
          required
        />
        <HelpIcon
          onClick={() => setHelpState(true)}
          onMouseLeave={() => setHelpState(false)}
        >
          ?
        </HelpIcon>
        {helpState && (
          <ToolTip>
            세자리 <br/>
            숫자 입력
          </ToolTip>
        )}
      </SecureBox>
    </InputContainer>
  );
};

export default CardCVCInput;
