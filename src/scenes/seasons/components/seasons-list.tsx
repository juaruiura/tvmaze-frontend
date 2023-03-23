import React from "react";
import { SeasonEntity } from "../../../models/model";
import { SeasonCard } from "./season-card";

interface Props {
    seasons: SeasonEntity[],
}

export const SeasonsList: React.FC<Props> = (props) => {
    const { seasons } = props;

    return (
        <div className="seasons-list">
            {seasons.map((season) => (
                <SeasonCard key={season.id} season={season} />
            ))}
        </div>
    );
};