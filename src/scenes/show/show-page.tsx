import React from "react";
import { allShows, searchShows } from "../../api/api";
import { ShowEntity } from "../../models/model";
import { ShowList } from "./show-list";
import { ShowSearch } from "./show-search";

interface Props {}

export const ShowPage: React.FC<Props> = (props) => {
    const {} = props;
    
    const [shows, setShows] = React.useState<ShowEntity[]>([]);

    const searchHandler = (showName: string) => {
        if(showName)
            searchShows(showName).then(json => setShows(json.map(e => e.show)));
        else
            allShows().then(setShows)
    }

    React.useEffect(() => {
        allShows().then((json: ShowEntity[]) => setShows(json))
            .catch((e) => console.error(e));
    }, []);
    
    return <>
        <ShowSearch searchHandler={searchHandler}/>
        <ShowList shows={shows}/>
    </>
};