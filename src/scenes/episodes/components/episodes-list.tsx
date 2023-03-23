import React from "react";
import { EpisodeEntity } from "../../../models/model";
import { EpisodeCard } from "./episode-card";

interface Props {
    episodes: EpisodeEntity[],
}

export const EpisodesList: React.FC<Props> = (props) => {
    const { episodes } = props;

    return (
        <div className="seasons-list">
            {episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
    );
};