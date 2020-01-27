type PeopleModel = {
    birth_year: string,
    eye_color: string,
    films: Array<string>,
    gender: 'Male|Female',
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: Array<string>,
    starships: Array<string>,
    url: string,
    vehicles: Array<string>
}

export default PeopleModel;