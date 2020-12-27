import React from "react";
import Header from "../Header";
import Container from "../../shared/Container";
import ProductsCRUD from "../Products/ProductsCRUD";

const ProductsView = () => {
    return <>
        <Header title={"Stock"} />
        <Container>
            <ProductsCRUD />
        </Container>
    </>
}

export default ProductsView
