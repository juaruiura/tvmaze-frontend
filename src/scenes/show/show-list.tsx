import React from "react";
import { ShowEntity } from "../../models/model";
import { ShowListRow } from "./show-list-row";

interface Props {
    shows: ShowEntity[],
}

export const ShowList: React.FC<Props> = (props) => {
    const { shows } = props;

    return (
        <div className="show-list">
            {shows.map((show) => (
                <ShowListRow key={show.id} show={show} />
            ))}
        </div>
    );
};
