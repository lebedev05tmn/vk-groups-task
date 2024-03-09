import { IGroup } from "./components/app/App";

export const filterType = (data: IGroup[], type: string): IGroup[] => {
  switch (type) {
    case "opened":
      return data.filter(elem => !elem.closed);
    case "closed":
      return data.filter(elem => elem.closed);
    default:
      return data;
  }
};

export const filterColor = (data: IGroup[], color: string): IGroup[] => {
  return color === "none"
    ? data.filter(elem => !elem.avatar_color)
    : color !== ""
    ? data.filter(elem => elem.avatar_color === color)
    : data;
};

export const filterFriends = (data: IGroup[], friends: string): IGroup[] => {
  switch (friends) {
    case "have":
      return data.filter(elem => elem.friends);
    case "not-have":
      return data.filter(elem => !elem.friends);
    default:
      return data;
  }
};
