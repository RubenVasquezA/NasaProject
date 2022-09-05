
export interface IMissDistance {
    astronomical: string,
    lunar: string,
    kilometers: string,
    miles: string
}
export interface IRelativeVelocity {
    kilometers_per_hour: string,
    kilometers_per_second: string,
    miles_per_hour: string
}
export interface ICloseAproachData {
    close_approach_date: string,
    close_approach_date_full: string,
    epoch_date_close_approach: number,
    miss_distance: IMissDistance
    orbiting_body: string
    relative_velocity: IRelativeVelocity
}

//IFeet + IMiles + IMeters + IKilomenters
export interface IMiMeKiFe {
    estimated_diameter_min: number,
    estimated_diameter_max: number
}

export interface IEstimatedDiameter {
    kilometers: IMiMeKiFe
    meters: IMiMeKiFe
    miles: IMiMeKiFe
    feet: IMiMeKiFe
}

export interface IOrbitClass {
    orbit_class_type: string,
    orbit_class_description: string,
    orbit_class_range: string
}

export interface IOrbitalData {
    aphelion_distance: string,
    ascending_node_longitude: string,
    data_arc_in_days: number,
    eccentricity: string,
    epoch_osculation: string,
    equinox: string,
    first_observation_date: string,
    inclination: string,
    jupiter_tisserand_invariant: string,
    last_observation_date: string,
    mean_anomaly: string,
    mean_motion: string,
    minimum_orbit_intersection: string,
    observations_used: number,
    orbit_class: IOrbitClass,
    orbit_determination_date: string,
    orbit_id: string,
    orbit_uncertainty: string,
    orbital_period: string,
    perihelion_argument: string,
    perihelion_distance: string,
    perihelion_time: string,
    semi_major_axis: string
}

export interface INearEarthObjects {
    id: string,
    neo_reference_id: string,
    name: string,
    absolute_magnitude_h: number,
    close_approach_data: ICloseAproachData[]
    designation: string,
    estimated_diameter: IEstimatedDiameter,
    is_potentially_hazardous_asteroid: boolean,
    is_sentry_object: boolean
    name_limited: string,
    nasa_jpl_url: string,
    orbital_data: IOrbitalData

}


export interface IListAsteroids{
    id: string,
    name: string,
    close_approach: ICloseAproachData[];
    estimated_diameter: number;
    potential_hazardous: boolean;
}

