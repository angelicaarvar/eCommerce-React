import './ItemDetail.css';

export default function ItemDetail({ id, nombre, precio, imagen, categoria, descripcion
}) {
    return (
        <div className="contenedor-detalle">
            <div className='contenedor-img'>
                <img className='detalle-imagen' src={imagen} alt={nombre} />
            </div>

            <div className="detalle-info">
                <h2 className="info-titulo">{nombre}</h2>
                <p className="info-cat-descrip">Categoría: {categoria}</p>
                <p className="info-cat-descrip">Descripción: {descripcion}</p>
                <p className="info-precio">Precio: ${precio}</p>

                <div className="detalle-comprar">
                    <button className="btn-comprar">Comprar producto</button>
                </div>
            </div>

        </div>
    );
}