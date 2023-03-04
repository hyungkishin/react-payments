import Card from "components/card";
import { SubWrapper, Wrapper } from "components/common/ui";
import { useForm } from "components/input/hooks/useForm";
import { useRouter } from "hooks/useRouter";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { ROUTE } from "router";
import { usePaymentsDispatch, usePaymentsState } from "store/context";
import { CardInfo } from "store/type";

const findItem = (cardList: CardInfo[] ,id: number) => {
  const get = cardList.filter((v) => v.id === id);
  return get;
};

const Content = () => {
  
  const dispatch = usePaymentsDispatch();
  
  const { cardNickName, handleCardNickName } = useForm();
  const { cardList } = usePaymentsState();
  const { id } = useParams();
  const card = findItem(cardList ,Number(id))[0];

  const { go } = useRouter();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    handleCardNickName(value);
  };
  
  const nextPage = () => {
    dispatch({ type: "UPSERT_CARD_NICK_NAME", cardNickName, id: Number(id) ?? 0 });
    go(ROUTE.CARD_LIST);
  };

  return (
    <>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card
        cardNumbers={card.cardNumbers}
        cardCompany={card.cardCompany}
        cardExpiration={card.cardExpiration}
        cardOwnerName={card.cardOwnerName}
        size="big"
      />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          onChange={onChange}
        />
      </div>

      <div className="button-box mt-50">
        <span className="button-text" onClick={() => nextPage()}>
          다음
        </span>
      </div>
    </>
  );
};

const ComplateCard = () => {
  return (
    <Wrapper>
      <SubWrapper flex={"yes"}>
        <Content />
      </SubWrapper>
    </Wrapper>
  );
};

export default ComplateCard;
