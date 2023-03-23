export interface ShowEntity {
    id: number,
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
    id: number,
    number: number,
    episodeOrder: number,
    premiereDate: string,
    image: { medium: string, original: string },
}

export interface EpisodeEntity {
    id: number,
    name: string,
    airstamp: string,
    summary: string,
    image: { medium: string, original: string },
}
