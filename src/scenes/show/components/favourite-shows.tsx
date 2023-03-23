import React from "react";
import { FavouriteShowsContext } from "../../../providers/favourite-shows-context";
import { ShowEntity } from "../../../models/model";
import { ShowCard } from "./show-card";

interface Props {
}

export const FavouriteShowList: React.FC<Props> = (props) => {
    const { } = props;
    const favouriteShowsData = React.useContext(FavouriteShowsContext);

    return (
        <div className="favourite-shows-list">
            <span className="favourite-shows-list__label">Your Favourite Shows:</span>
            <p className="favourite-shows-list__shows">{favouriteShowsData.favouriteShows.map((show) => show.name).join(", ")}</p>
        </div>
    );
};
