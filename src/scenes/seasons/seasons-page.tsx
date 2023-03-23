import React from "react";
import { Link as button, useNavigate, useParams } from "react-router-dom";
import { getShowSeasons } from "../../api/api";
import { SeasonEntity } from "../../models/model";
import { SeasonsList } from "./components/seasons-list";

interface Props { }

export const SeasonsPage: React.FC<Props> = (props) => {
    const { } = props;

    const [seasons, setSeasons] = React.useState<SeasonEntity[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        getShowSeasons(id)
            .then((json: SeasonEntity[]) => setSeasons(json))
            .catch((e) => console.error(e));
    }, []);

    return <>
        <button className="back-button" onClick={() => navigate(-1)}>Go back to Shows List page</button>
        <SeasonsList seasons={seasons} />
    </>
};