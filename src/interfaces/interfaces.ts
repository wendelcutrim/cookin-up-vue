export interface Categoria {
    id: number;
    nome: string;
    ingredientes: string[];
    imagem: string;
}

export interface CategoriaResponse {
    nome: string;
    ingredientes: string[];
    imagem: string;
}

export interface Ingrediente {
    id: number;
    item: string;
}
