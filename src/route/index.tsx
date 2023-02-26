import { Route, Routes as ReactRouters } from "react-router-dom";

import CardListPage from "pages/ListPage/CardListPage";
import AddCardPage from "pages/RegistPage/AddCardPage";
import ComplateCard from "pages/complePage/ComplateCard";
import AfterCardPage from "pages/confirmPage/AfterCardPage";

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<CardListPage />} />
      <Route path="/regist-card" element={<AddCardPage />} />
      <Route path="/card-add" element={<AfterCardPage />} />
      <Route path="/complete-add-card" element={<ComplateCard />} />
    </ReactRouters>
  );
};

export default Routes;
