export interface IAreaCard {
  name: string;
  image: string;
  link: string;
}

export interface IAreaItem {
  name: string;
  link: string;
  pk: number;
  participants: number;
}

export interface IProyecto {
  distrito: string;
  ue: string;
  proyecto: string;
  area: string;
  areaId?: number;
  ubicacion: number;
  ubicacionId?: number;
}

export interface IUbicacion {
  name: string;
  pk: number;
  participants: number;
}
