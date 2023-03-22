import React from "react";
import { Link, useParams } from "react-router-dom";
import { getShowSeasons } from "../../api/api";
import { SeasonEntity } from "../../models/model";
import { SeasonsList } from "./components/seasons-list";

interface Props { }

export const SeasonsPage: React.FC<Props> = (props) => {
    const { } = props;

    const [seasons, setSeasons] = React.useState<SeasonEntity[]>([]);
    const { id } = useParams();

    React.useEffect(() => {
        getShowSeasons(id)
            .then((json: SeasonEntity[]) => setSeasons(json))
            .catch((e) => console.error(e));
    }, []);

    return <>
        <Link className="back-button" to={"/shows"}>Go back to Shows List page</Link>
        <SeasonsList seasons={seasons} />
    </>
};