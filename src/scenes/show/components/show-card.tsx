import React from "react";
import { useNavigate } from "react-router-dom";
import { FavouriteShowsContext } from "../../../providers/favourite-shows-context";
import { ShowEntity } from "../../../models/model";

interface Props {
    show: ShowEntity;
}

export const ShowCard: React.FC<Props> = (props) => {
    const { show } = props;
    const navigate = useNavigate();
    const favouriteShowsData = React.useContext(FavouriteShowsContext);

    const isShowFavourited = () => {
        return favouriteShowsData.favouriteShows.some(favShow => favShow.id === show.id)
    }
    
    const favouriteHandler = () => {
        if (isShowFavourited()) {
            favouriteShowsData.setFavouriteShows([...favouriteShowsData.favouriteShows].filter(favShow => favShow.id !== show.id));
        } else {
            favouriteShowsData.setFavouriteShows([...favouriteShowsData.favouriteShows, show]);
        }
    }

    return (
        <div className={`show${isShowFavourited() ? " favourited" : ""}`} key={show.id}>
            <div onClick={() => navigate(`/shows/${show.id}/seasons`)}>
                <img className="show__image" src={show.image?.medium} />
                <div className="show__info">
                    <span className="show__info__name">{show.name}</span>
                    <span>{show.genres?.join(", ")}</span>
                    <span>Avg. score: {show.rating?.average}</span>
                    <span>Premiered: {show.premiered}</span>
                </div>
            </div>
            <button className={`show__fav-button${isShowFavourited() ? " favourited" : ""}`} onClick={favouriteHandler}>
                {isShowFavourited() ? "Remove from Favourites" : "Add to Favourites"}
            </button>
        </div>
    );
};
