import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../asyncMock";
import ItemDetail from "./ItemDetail"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProducto(itemId).then(response => {
            setProduct(response);
        }).catch(error => {
            console.error("Error al cargar el producto:", error);
        });
    }, [itemId]);

    return(
        <div className="contenedor-item">
            {product? <ItemDetail {...product}/> : <p className="txt-cargando">Cargando...</p>}
        </div>
    );
}