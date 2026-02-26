// TypeScript interfaces for SharePoint list items

export interface IFactura {
    id: number;
    clienteId: number;
    fecha: Date;
    total: number;
}

export interface ICliente {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
}

export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

export interface IListItem {
    id: number;
    title: string;
    created: Date;
    modified: Date;
}

export interface ISharePointResponse {
    value: IListItem[];
    nextLink?: string;
}