import http from "../utils/http";
import {Product} from "../shared/Table/Table.mockdata";
import {ProductPaged} from "../shared/Table/Table.mockdata";
import {ProductCreator} from "../components/Products/ProductsForm";

export const getAllProducts = () =>
    http.get<ProductPaged>("/products")
        .then(res => res.data)

export const createSingleProduct = (product: ProductCreator) => 
    http.post("/products", product)

export const updateSingleProduct = ({ id, name, price, stock }: Product) =>
    http.patch(`/products/${id}`, {
        ...(name && { name }),
        ...(price && { price }),
        ...(stock && { stock }),
    })

export const deleteSingleProduct = (id: string) =>
    http.delete(`/products/${id}`)
