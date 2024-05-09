import type { Categoria, CategoriaResponse } from '@/interfaces/interfaces';

export async function getCategorias(): Promise<Categoria[]> {
    const API_URL =
        'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json';

    const response = await fetch(API_URL);
    const data: CategoriaResponse[] = await response.json();

    const categories: Categoria[] = data.map((categorie: CategoriaResponse, index) => {
        return {
            id: index + 1,
            ...categorie,
        };
    });

    return categories;
}
