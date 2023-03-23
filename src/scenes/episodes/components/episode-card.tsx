import React from "react";
import { EpisodeEntity } from "../../../models/model";

interface Props {
    episode: EpisodeEntity;
}

export const EpisodeCard: React.FC<Props> = (props) => {
    const { episode } = props;

    return (
        <div className="episode" key={episode.id}>
            <img className="episode__image" src={episode.image?.medium} />
            <div className="episode__info">
                <span className="episode__info__name">{episode.name}</span>
                <span>Aired: {`${episode.airdate.split("-").join("/")} ${episode.airtime}`}</span>
                <span dangerouslySetInnerHTML={{__html: `Summary: ${episode.summary}`}}></span>
            </div>
        </div>
    );
};
