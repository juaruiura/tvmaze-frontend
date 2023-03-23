import React from "react";
import { ShowEntity } from "../models/model";

interface FavouriteShowsProviderModel {
    favouriteShows: ShowEntity[],
    setFavouriteShows: (shows: ShowEntity[]) => void,
}

export const FavouriteShowsContext = React.createContext<FavouriteShowsProviderModel>({
    favouriteShows: [],
    setFavouriteShows: () => { },
});

interface Props {
    children: React.ReactNode,
}

function getInitialState() {
    const favouriteShows = localStorage.getItem('favouriteShows')
    return favouriteShows ? JSON.parse(favouriteShows) : []
  }

export const FavouriteShowsProvider: React.FC<Props> = ({ children }) => {
    const [favouriteShows, setFavouriteShows] = React.useState<ShowEntity[]>(getInitialState());
    React.useEffect(() => {
        localStorage.setItem('favouriteShows', JSON.stringify(favouriteShows))
    }, [favouriteShows])

    return <FavouriteShowsContext.Provider value={{ favouriteShows, setFavouriteShows }}>
        {children}
    </FavouriteShowsContext.Provider>
};