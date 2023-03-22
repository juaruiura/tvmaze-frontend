import React from "react";
import { allShows, searchShows } from "../../api/api";
import { ShowEntity } from "../../models/model";
import { ShowList } from "./show-list";
import { ShowPaginator } from "./show-paginator";
import { ShowSearch } from "./show-search";

interface Props { }

export const ShowPage: React.FC<Props> = (props) => {
    const { } = props;

    const [shows, setShows] = React.useState<ShowEntity[]>([]);
    const [page, setPage] = React.useState<number>(0);

    React.useEffect(() => {
        allShows(page).then((json: ShowEntity[]) => setShows(json))
            .catch((e) => console.error(e));
    }, [page]);

    const pageHandler = (action: string) => {
        if (action === "increase") setPage(page => ++page);
        if (action === "decrease") setPage(page => page > 0 ? --page : page);
    }

    const searchHandler = (showName: string) => {
        if (showName)
            searchShows(showName).then(json => setShows(json.map(e => e.show)));
        else
            allShows(page).then(setShows)
    }

    return <>
        <ShowSearch searchHandler={searchHandler} />
        <ShowPaginator pageHandler={pageHandler} page={page}/>
        <ShowList shows={shows} />
    </>
};