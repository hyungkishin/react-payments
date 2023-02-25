import { Route, Routes } from "react-router-dom";
import AddCardPage from "./pages/RegistPage/AddCardPage";
import AfterCardPage from "./pages/confirmPage/AfterCardPage";
import CardListPage from "./pages/ListPage/CardListPage";
import ComplateCard from "./pages/complePage/ComplateCard";
import "../src/styles/index.css";
import { PaymentsProvider } from "store/Provider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardListPage />} />
      <Route
        path="/regist-card"
        element={
          <PaymentsProvider>
            <AddCardPage />
          </PaymentsProvider>
        }
      />
      <Route path="/card-add" element={<AfterCardPage />} />
      <Route path="/complete-add-card" element={<ComplateCard />} />
    </Routes>
  );
}

export default App;
