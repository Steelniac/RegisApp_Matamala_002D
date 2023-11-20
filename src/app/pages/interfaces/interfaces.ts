export interface IHorarios{
    id: number,
    dia: string,
    nombre: string,
    prof: string,
    hora: string,
    sala: string
}

export interface IHorario{
    dia: string,
    nombre: string,
    prof: string,
    hora: string,
    sala: string
}

export interface Users{
    id:number;
    nombre: String;
    password: String;
    n_usuario: String;
    email:String;
    role: String;
    isactive: boolean;
}

export interface User{
    nombre: String;
    password: String;
    n_usuario: String;
    email:String;
    role: String;
    isactive: boolean;
}

export interface RespuestaClima{
    status: string;
}

export interface climaAhora{
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}