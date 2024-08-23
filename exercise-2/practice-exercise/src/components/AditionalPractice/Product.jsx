import ProductItem from "./ProductItem";

const Product = ({ array }) => {
    const productMapped = array.map((element, index) => {
        return <ProductItem key={index} name={element} />;
    });

    return <div>{productMapped}</div>;
};

export default Product;
