import axios from "axios"

const getUrl = "http://localhost:8000"

export const getAllProductsCreator = () => {
    return {
        type : "GET_ALL_PRODUCTS",
        payload : axios.get(getUrl + "/products"),
    };
};

export const getProductByIdCreator = (id) => {
    return {
        type : "GET_SINGLE_PRODUCT",
        payload : axios.get(getUrl + "/product/" + id)
    }
}
