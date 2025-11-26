import './ItemList.css';
import CardProducto from './CardProducto';

export default function ItemList({ onAddToCart }) {

    const products = [
        { id: 1, nombre: "Oreja de Elefante", precio: 5000, imagen: "./imagenes/OrejaDeElefante.webp" },
        { id: 2, nombre: "Photus Lemon", precio: 3600, imagen: "./imagenes/PhotusLemon.webp" },
        { id: 3, nombre: "Zantedeschia aethiopica,", precio: 5600, imagen: "./imagenes/Cala.webp" },
        { id: 4, nombre: "Monstera deliciosa", precio: 18000, imagen: "./imagenes/MonsteraDeliciosa.webp" },
        { id: 5, nombre: "Sansevieria trifasciata", precio: 2500, imagen: "./imagenes/Sansevieria.webp" },
        { id: 6, nombre: "Zamioculcas", precio: 4600, imagen: "./imagenes/Zamioculcas.webp" }
    ];


    return (
        <div className="item-list">

            {products.map((producto) => (
                <CardProducto
                    key={producto.id}
                    products={producto}
                    onAddToCart={onAddToCart}
                />
            ))}

            </div>
            );

}