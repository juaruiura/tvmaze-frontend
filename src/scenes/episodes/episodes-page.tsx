import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSeasonEpisodes } from "../../api/api";
import { EpisodeEntity } from "../../models/model";
import { EpisodesList } from "./components/episodes-list";

interface Props { }

export const EpisodesPage: React.FC<Props> = (props) => {
    const { } = props;

    const [episodes, setEpisodes] = React.useState<EpisodeEntity[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        getSeasonEpisodes(id)
            .then((json: EpisodeEntity[]) => setEpisodes(json))
            .catch((e) => console.error(e));
    }, []);

    return <>
        <button className="back-button" onClick={() => navigate(-1)}>Go back to Seasons List page</button>
        <EpisodesList episodes={episodes}/>
    </>
};