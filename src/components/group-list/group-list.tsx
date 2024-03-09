import React, { useState } from "react";
import GroupCard from "../group-card/group-card";
import { IGroup } from "../app/App";
import GroupFilter from "../group-filter/group-filter";
import { filterType, filterColor, filterFriends } from "../../filter";
import "./style.css";

type Props = { data: IGroup[] };

const GroupList: React.FC<Props> = ({ data }) => {
  const [groupType, setGroupType] = useState<string>("");
  const [groupColor, setGroupColor] = useState<string>("");
  const [groupFriends, setGroupFriends] = useState<string>("");

  let filteredData: IGroup[] = filterType(data, groupType);
  filteredData = filterColor(filteredData, groupColor);
  filteredData = filterFriends(filteredData, groupFriends);

  return (
    <>
      <GroupFilter
        data={data}
        setGroupType={setGroupType}
        setGroupColor={setGroupColor}
        setGroupFriends={setGroupFriends}
      />
      <ul className="groups__list">
        {filteredData.map((elem: IGroup) => (
          <GroupCard groupData={elem} key={elem.id} />
        ))}
      </ul>
    </>
  );
};
export default GroupList;
