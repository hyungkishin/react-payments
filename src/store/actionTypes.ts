import { CardInfo } from "./type";

export const ADD_CARD_INFO = "ADD_CARD_INFO";
type AddCardInfo = { type: typeof ADD_CARD_INFO; newCard: CardInfo };

export const ADD_NICK_NAME_CARD = "ADD_NICK_NAME_CARD";
type AddNickNameCard = {
  type: typeof ADD_NICK_NAME_CARD;
  cardNickName?: string;
};

export const UPSERT_CARD_NICK_NAME = "UPSERT_CARD_NICK_NAME";
type EditCard = {
  type: typeof UPSERT_CARD_NICK_NAME;
  cardNickName?: string;
  id?: number;
};

export const DELETE_CARD = "DELETE_CARD";
type DeleteCard = {
  type: typeof DELETE_CARD;
  id?: string;
};

export type SelectedCardInfo = Exclude<CardInfo, null | undefined> | null;
export const SET_SELECTED_CARD = "SET_SELECTED_CARD";
type SetSelectedCard = {
  type: typeof SET_SELECTED_CARD;
  selectedCard: SelectedCardInfo;
};

export type ActionType =
  | AddCardInfo
  | AddNickNameCard
  | EditCard
  | DeleteCard
  | SetSelectedCard;