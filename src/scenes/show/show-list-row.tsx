import React from "react";
import { ShowEntity } from "../../models/model";

interface Props {
    show: ShowEntity;
}

export const ShowListRow: React.FC<Props> = (props) => {
    const { show } = props;

    return (
        <div className="show" key={show.id}>
            <img className="show__image" src={show.image?.medium} />
            <div className="show__info">
                <span className="show__info__name">{show.name}</span>
                <span>{show.genres?.join(", ")}</span>
                <span>Avg. score: {show.rating?.average}</span>
                <span>Premiered: {show.premiered}</span>
            </div>
        </div>
    );
};
