import React from "react";
import { ShowEntity } from "../../../models/model";
import { ShowCard } from "./show-card";

interface Props {
    shows: ShowEntity[],
}

export const ShowList: React.FC<Props> = (props) => {
    const { shows } = props;

    return (
        <div className="shows-list">
            {shows.map((show) => (
                <ShowCard key={show.id} show={show} />
            ))}
        </div>
    );
};
