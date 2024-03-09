import React from "react";
import { IUser } from "../app/App";
import "./style.css";

type Props = { friend: IUser };

const FriendsItem: React.FC<Props> = ({ friend }) => {
  return (
    <li className="friends-list__item">
      <span className="friends-list__text">
        {friend.first_name} {friend.last_name}
      </span>
    </li>
  );
};

export default FriendsItem;
