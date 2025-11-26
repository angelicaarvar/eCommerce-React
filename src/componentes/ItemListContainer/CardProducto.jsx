import './CardProducto.css';

export default function CardProducto({ products, onAddToCart }) {
    return (
            <div className="card">
                <h2 className="card-nombre">
                    {products.nombre}
                </h2>
                <img className='foto-planta' src={products.imagen} alt={products.nombre} />
                <p>Precio: ${products.precio}</p>
                
                <button className='boton-agregarCarrito' onClick={onAddToCart}>AGREGAR AL CARRITO</button>
            </div>

        

    );
}