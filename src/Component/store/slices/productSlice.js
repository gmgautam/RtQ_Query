import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApiInstace from "../../ApiInstace";

export const fetchProduct=createAsyncThunk("product/data",async(thunkAPI)=>{
    try{
        const res=await productApiInstace.get("/products")
        return res
    }catch(err){
        throw thunkAPI.RejectedWithValue(err)
    }
})
const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        error:null,
        isLoading:false,
    },
    reducers:{
        increment(state){
            state.data++;
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchProduct.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data=action.payload,
            state.isLoading=false
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading=false,
            state.error=action.payload
        })
    }
});
export const productReducer=productSlice.reducer;
export const {increment}=productSlice.actions;