export interface FilmRes {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface Film {
    key: number;
    id: number;
    title: string;
    producer: string;
    description: string;
}
