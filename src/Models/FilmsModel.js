type FilmsModel = {
    created: string,
    created_formatted?: string,
    edited: string,
    edited_formatted?: string,
    characters: Array,
    director: string,
    episode_id: number,
    opening_crawl: string,
    planets: Array,
    producer: string,
    release_date: string,
    species: Array,
    starships: Array,
    title: string,
    url: string,
    vehicles: Array,
    error: boolean
}

export default FilmsModel;
