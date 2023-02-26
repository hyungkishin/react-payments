import Card from "components/card";
import Header from "components/header/header";
import CardForm from "components/input/CardForm";
import { PaymentsProvider } from "store/Provider";
import { usePayments } from "store/context";

const CardPreview = () => {
  const { cardNumbers, cardExpiration, cardOwnerName } = usePayments();

  return (
    <Card
      cardNumbers={cardNumbers}
      cardExpiration={cardExpiration}
      cardOwnerName={cardOwnerName}
    />
  );
};

const Content = () => {
  return (
    <PaymentsProvider>
      <CardPreview />
      <CardForm />
    </PaymentsProvider>
  );
};
const AddCardPage = () => {
  return (
    <div className="root">
      <div className="app">
        <Header title="카드추가" />
        <Content />
      </div>
    </div>
  );
};
export default AddCardPage;
