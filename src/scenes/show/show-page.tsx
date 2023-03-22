import React from "react";
import { getAllShows, getShowsByName } from "../../api/api";
import { ShowEntity } from "../../models/model";
import { ShowList } from "./components/show-list";
import { ShowPaginator } from "./components/show-paginator";
import { ShowSearch } from "./components/show-search";

interface Props { }

export const ShowPage: React.FC<Props> = (props) => {
    const { } = props;

    const [shows, setShows] = React.useState<ShowEntity[]>([]);
    const [isSearch, setIsSearch] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(0);

    React.useEffect(() => {
        getAllShows(page)
            .then((json: ShowEntity[]) => setShows(json))
            .catch((e) => console.error(e));
    }, [page]);

    const pageHandler = (action: string) => {
        if (action === "increase") setPage(page => ++page);
        if (action === "decrease") setPage(page => page > 0 ? --page : page);
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
        <ShowSearch searchHandler={searchHandler} />
        {!isSearch && <ShowPaginator pageHandler={pageHandler} page={page} />}
        <ShowList shows={shows} />
    </>
};