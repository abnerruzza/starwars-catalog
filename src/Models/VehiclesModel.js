type VehiclesModel = {
    name: string,
    model: string,
    vehicle_class: Array<string>,
    manufacturer: 'Male|Female',
    length: string,
    cost_in_credits: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    cargo_capacity: string,
    consumables: string,
    films: Array<string>,
    pilots: Array<string>,
    url: string,
    created: string,
    edited: string,
}

export default VehiclesModel;
