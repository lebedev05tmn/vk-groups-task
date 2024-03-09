import React from "react";
import FriendsItem from "../friends-item/friends-item";
import { IUser } from "../app/App";
import "./style.css";

type Props = { friends: IUser[] };

const FriendsList: React.FC<Props> = ({ friends }) => {
  return (
    <ol className="card__friends-list friends-list">
      {friends.map((elem: IUser, index: number) => (
        <FriendsItem friend={elem} key={`friend-${index}`} />
      ))}
    </ol>
  );
};

export default FriendsList;
