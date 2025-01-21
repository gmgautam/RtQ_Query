import { configureStore} from "@reduxjs/toolkit";
import { increment } from "./slices/productSlice";
import { productReducer } from "./slices/productSlice";

const store=configureStore({
    reducer:{
        product:productReducer,
    }
})
export {store,increment}
