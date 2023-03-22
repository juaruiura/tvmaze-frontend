export interface ShowEntity {
    id: string,
    name: string,
    genres: string[],
    premiered: string,
    rating: { average: string },
    image: { medium: string, original: string },
}
export interface ShowsSearchEntity {
    score: number,
    show: ShowEntity,
}
export interface SeasonEntity {
    id: string,
    number: number,
    episodeOrder: number,
    premiereDate: string,
    image: { medium: string, original: string },
}
