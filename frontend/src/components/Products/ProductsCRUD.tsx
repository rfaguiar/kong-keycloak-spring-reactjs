import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../../shared/Table";
import {Product} from "../../shared/Table/Table.mockdata";
import ProductForm, {ProductCreator} from "./ProductsForm";
import Swal from "sweetalert2";
import {connect, useDispatch} from "react-redux";
import * as ProductAction from "../../redux/Products/Product.actions";
import {RootState, ThunkDispatch} from "../../redux";
import {useHistory, useLocation, useParams} from "react-router-dom";

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true }
]

declare interface ProductsCRUDProps {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
    const dispatch: ThunkDispatch = useDispatch()
    const params = useParams<{id?: string}>()
    const history = useHistory()
    const location = useLocation()
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)
    useEffect(() => {
        const id = params.id ? props.products.find(product => product.id === params.id) : undefined
        setUpdatingProduct(id)
    }, [params])    
    useEffect(() => {
        fetchData()
    }, [])
    
    const showErrorAlert = (err: Error) => Swal.fire('Oops!', err.message, 'error')
    function fetchData() {
        dispatch(ProductAction.getProducts())
            .catch(showErrorAlert)
    }
    const handleProductSubmit = (product: ProductCreator) => {
        dispatch(ProductAction.insertNewProduct(product))
            .catch(showErrorAlert)
    }
    const handleProductUpdate = (newProduct: Product) => {
        dispatch(ProductAction.updateProduct(newProduct))
            .then(() => setUpdatingProduct(undefined))
            .catch(showErrorAlert)        
    }
    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        ).then()
    }
    const deleteProduct = (id: string) => {
        dispatch(ProductAction.deleteProduct(id))
            .then(() => Swal.fire('Uhul!', 'Product successfully deleted', 'success'))
            .catch(showErrorAlert)
    }
    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won1t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${product.name}!`
        })
            .then(({value}) => value && deleteProduct(product.id))
    }
    
    return <>
        <Table
            data={props.products}
            headers={headers}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={product => {
                history.push({
                    pathname: `/products/${product.id}`,
                    search: location.search
                })
            }}
            itemsPerPage={2}
        />
        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
    </>
}

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)