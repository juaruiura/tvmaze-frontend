import React from "react";
import { useNavigate } from "react-router-dom";
import { ShowEntity } from "../../../models/model";

interface Props {
    show: ShowEntity;
}

export const ShowCard: React.FC<Props> = (props) => {
    const { show } = props;
    const navigate = useNavigate();

    return (
        <div className="show" onClick={() => navigate(`/shows/${show.id}/seasons`)} key={show.id}>
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
