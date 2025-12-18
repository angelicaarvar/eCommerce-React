import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCategoria, getProductos } from "../../asyncMock";
import ItemList from "./ItemList";

import './ItemListContainer.css';


export default function ItemListContainer({onAddToCart}) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getCategoria(categoryId).then(response =>
                setProducts(response)
            );
        } else {
            getProductos().then(response => { setProducts(response) });
        }
    }, [categoryId]);



    return (
        <div className="itemListContainer">
            
            <div className="txt-central">
                <h1>Comprá por Categoria</h1>
            </div>

            <div className="botones-categorias">
                <Link to="/" className="boton-filtro">General</Link>
                <Link to="/categoria/planta" className="boton-filtro">Plantas</Link>
                <Link to="/categoria/abonos" className="boton-filtro">Abonos</Link>
            </div>

            <ItemList products={products} onAddToCart={onAddToCart} />
        </div>
    );
}
