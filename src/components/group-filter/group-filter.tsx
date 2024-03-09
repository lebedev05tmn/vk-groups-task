import React from "react";
import { colors } from "../../const";
import { IGroup } from "../app/App";
import "./style.css";

type Props = {
  data: IGroup[];
  setGroupType: (groupType: string) => void;
  setGroupColor: (groupColor: string) => void;
  setGroupFriends: (groupFriends: string) => void;
};

const GroupFilter: React.FC<Props> = ({
  data,
  setGroupType,
  setGroupColor,
  setGroupFriends,
}) => {
  const dataColors: (string | undefined)[] = Array.from(
    new Set(data.map((elem: IGroup) => elem.avatar_color))
  ).filter(e => e !== undefined);

  return (
    <form
      className="groups__filter filter"
      onSubmit={evt => evt.preventDefault()}>
      <label htmlFor="filters-type" className="filter__label">
        Тип группы
        <select
          className="filter__select"
          name="filters"
          id="filters-type"
          onChange={evt =>
            setTimeout(() => {
              setGroupType(evt.target.value);
            }, 1000)
          }>
          <option value="">Все</option>
          <option value="opened">Открытый</option>
          <option value="closed">Закрытый</option>
        </select>
      </label>
      <label htmlFor="filters-color" className="filter__label">
        Цвет автарки
        <select
          className="filter__select"
          name="filters"
          id="filters-color"
          onChange={evt =>
            setTimeout(() => {
              setGroupColor(evt.target.value);
            }, 1000)
          }>
          <option value="">Все</option>
          {dataColors &&
            dataColors.map((elem: string | undefined) => (
              <option value={elem} key={elem}>
                {Object.entries(colors).filter(e => e[0] === elem)[0][1]}
              </option>
            ))}
          <option value="none">Без аватарки</option>
        </select>
      </label>
      <label htmlFor="filters-friends" className="filter__label">
        Наличие друзей в группе
        <select
          className="filter__select"
          name="filters"
          id="filters-friends"
          onChange={evt =>
            setTimeout(() => {
              setGroupFriends(evt.target.value);
            }, 1000)
          }>
          <option value="">Все</option>
          <option value="have">Есть</option>
          <option value="not-have">Нету</option>
        </select>
      </label>
    </form>
  );
};

export default GroupFilter;
