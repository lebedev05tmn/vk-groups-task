import React, { useState } from "react";
import FriendsList from "../friends-list/friends-list";
import "./style.css";
import { IGroup } from "../app/App";

type Props = { groupData: IGroup };

const GroupCard: React.FC<Props> = ({ groupData }) => {
  const { name, closed, avatar_color, members_count, friends } = groupData;
  const [friendsIsHidden, setFriendsIsHidden] = useState<boolean>(true);
  return (
    <li className="groups__card card">
      <div className="card__avatar" style={{ background: avatar_color }} />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <p className="card__type">{closed ? `Закрытая` : `Открытая`}</p>
        <p className="card__members">{members_count} подписчиков</p>
      </div>
      <div className="card__friends">
        {friends && (
          <button
            className="card__friends-length"
            onClick={() => setFriendsIsHidden(!friendsIsHidden)}>
            {friends.length} друзей
          </button>
        )}
      </div>
      {!friendsIsHidden && friends && <FriendsList friends={friends} />}
    </li>
  );
};
export default GroupCard;
