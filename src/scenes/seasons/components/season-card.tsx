import React from "react";
import { useNavigate } from "react-router-dom";
import { SeasonEntity } from "../../../models/model";

interface Props {
    season: SeasonEntity;
}

export const SeasonCard: React.FC<Props> = (props) => {
    const { season } = props;
    const navigate = useNavigate();

    return (
        <div className="season" onClick={() => navigate(`/seasons/${season.id}/episodes`)} key={season.id}>
            <img className="season__image" src={season.image?.medium} />
            <div className="season__info">
                <span className="season__info__number">Season {season.number}</span>
                <span>{season.episodeOrder} episodes</span>
                <span>Premiered: {season.premiereDate}</span>
            </div>
        </div>
    );
};
