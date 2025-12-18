import './CardProducto.css';
import { Link } from 'react-router-dom';

export default function CardProducto({ products, onAddToCart }) {
    return (
        <div className="card">
            <h2 className="card-nombre">
                {products.nombre}
            </h2>
            <img className='foto-planta' src={products.imagen} alt={products.nombre} />
            <p>Precio: ${products.precio}</p>

            <div className='botones-card'>
                <Link to={`/item/${products.id}`} className='boton-acciones'>Ver detalles</Link>
                <button className='boton-acciones' onClick={onAddToCart}>AGREGAR AL CARRITO</button>
            </div>

        </div>



    );
}