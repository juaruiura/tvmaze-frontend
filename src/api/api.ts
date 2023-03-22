import { ShowsSearchEntity, ShowEntity, SeasonEntity } from "../models/model";

export const getAllShows = async (page: number): Promise<ShowEntity[]> => {
    return fetch(`https://api.tvmaze.com/shows?page=${page}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error fetching shows");
            }
        })
        .catch((e) => console.error(e));
} 

export const getShowsByName = async (showName): Promise<ShowsSearchEntity[]> => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error fetching shows");
            }
        })
        .catch((e) => console.error(e));
}

export const getShowSeasons = async (id: string): Promise<SeasonEntity[]> => {
    return fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error fetching shows");
            }
        })
        .catch((e) => console.error(e));
} 