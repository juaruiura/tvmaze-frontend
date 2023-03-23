import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllShows, getShowsByName } from "../../api/api";
import { FavouriteShowsContext } from "../../providers/favourite-shows-context";
import { ShowEntity } from "../../models/model";
import { FavouriteShowList } from "./components/favourite-shows";
import { ShowList } from "./components/show-list";
import { ShowPaginator } from "./components/show-paginator";
import { ShowSearch } from "./components/show-search";

interface Props { }

export const ShowPage: React.FC<Props> = (props) => {
    const { } = props;

    const [shows, setShows] = React.useState<ShowEntity[]>([]);
    const [isSearch, setIsSearch] = React.useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [page, setPage] = React.useState<number>(!isNaN(Number(searchParams.get("q"))) ? Number(searchParams.get("q")) : 0);

    React.useEffect(() => {
        getAllShows(page)
            .then((json: ShowEntity[]) => setShows(json))
            .catch((e) => console.error(e));
    }, [page]);

    const pageHandler = (action: string) => {
        if (action === "increase") {
            navigate(`/shows?q=${page + 1}`);
            setPage(page => ++page);
        }
        if (action === "decrease") {
            navigate(`/shows?q=${page > 0 ? page - 1 : page}`);
            setPage(page => page > 0 ? --page : page);
        }
    }

    const searchHandler = (showName: string) => {
        if (showName) {
            getShowsByName(showName).then(json => setShows(json.map(e => e.show)));
            setIsSearch(true);
        } else {
            getAllShows(page).then(setShows);
            setIsSearch(false);
        }
    }

    return <>
        <FavouriteShowList />
        <ShowSearch searchHandler={searchHandler} />
        {!isSearch && <ShowPaginator pageHandler={pageHandler} page={page} />}
        <ShowList shows={shows} />
    </>
};