import { Route, Routes } from "react-router-dom"
import { Product } from "../pages/product"
import {Landing} from "../pages/landing"


export const MainRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/landing" element={<Landing/>}/>
        </Routes>
    )
}