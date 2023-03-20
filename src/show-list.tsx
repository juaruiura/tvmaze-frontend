import React from "react";
import { ShowEntity } from "./model";
import { ShowListRow } from "./show-list-row";

export const ShowList = () => {
  const [shows, setShows] = React.useState<ShowEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.tvmaze.com/shows`)
      .then((response) => response.json())
      .then((json) => setShows(json));
  }, []);

  return (
    <div className="show-list">
      {shows.map((show) => (
        <ShowListRow key={show.id} show={show} />
      ))}
    </div>
  );
};
