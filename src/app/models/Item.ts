export interface Coord {
  lon:number;
  lat:number;
}


export interface Weather{
  id: number; 
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}


export interface Item {
  coord: {
    [key: string]: Coord
  };
  weather: Array<Weather>,
  base:string;
  main: {
    [key: string]: Main
  };
  visibility: number;
  wind: {
    [key: string]: Wind
  };
  clouds: {
    [key: string]: Clouds
  };
  dt: number;
  sys: {
    [key: string]: Sys
  };
  timezone: number;
  id?: string;
  name: string;
  cod: number;
  note?: string;


}
