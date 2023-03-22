import { SearchEntity, ShowEntity } from "../models/model";

export const allShows = async (): Promise<ShowEntity[]> => {
    return fetch("https://api.tvmaze.com/shows")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error fetching shows");
            }
        })
        .catch((e) => console.error(e));
} 

export const searchShows = async (showName): Promise<SearchEntity[]> => {
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