export interface Category{
    idBrand: number;
    brandName: string;
    models: Array<CategoryItem>;
}

export interface CategoryItem{
    idBrand: number;
    modelName: string;
    idModel: number;
}