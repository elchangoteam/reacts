import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import { BrowserRouter, Routes, Route } from "reacts-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer";

const Router = () => {


    <BrowserRouter>

        <NavBar />

        <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category/:id" element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>

    </BrowserRouter>

}