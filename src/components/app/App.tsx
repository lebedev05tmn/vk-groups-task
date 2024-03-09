import React, { useState } from "react";
import GroupList from "../group-list/group-list";
import "./style.css";

type Props = { mockResponse: IGetGroupsResponse };

export interface IGetGroupsResponse {
  result: number;
  data?: IGroup[];
}

export interface IGroup {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: IUser[];
}

export interface IUser {
  first_name: string;
  last_name: string;
}

const App: React.FC<Props> = ({ mockResponse }) => {
  const [data] = useState<IGroup[] | undefined>(mockResponse.data);
  if (!mockResponse.result || data === undefined) {
    return <p>Error result</p>;
  } else {
    return (
      <div className="groups">
        <GroupList data={data} />
      </div>
    );
  }
};

export default App;
