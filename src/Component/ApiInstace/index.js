import axios from "axios";
const productApiInstace=axios.create({
    baseURL:"https://fakestoreapi.com"
})
export default productApiInstace;