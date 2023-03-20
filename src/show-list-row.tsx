import React from "react";
import { ShowEntity } from "./model";

interface Props {
  show: ShowEntity;
}

export const ShowListRow: React.FC<Props> = (props) => {
  const { show } = props;

  return (
    <div className="show" key={show.id}>
      <img className="show__image" src={show.image.medium} />
      <span>{show.name}</span>
      <span>{show.genres.join(", ")}</span>
      <span>Avg. score: {show.rating.average}</span>
      <span>Premiered: {show.premiered}</span>
    </div>
  );
};
