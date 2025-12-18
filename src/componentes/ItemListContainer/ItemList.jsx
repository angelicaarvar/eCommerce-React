import './ItemList.css';
import CardProducto from './CardProducto';


export default function ItemList({ products, onAddToCart }) {

    return (
        <>

            <div className="item-list">
                {products?.map((producto) => (
                    <CardProducto
                        key={producto.id}
                        products={producto}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div> </>

    );

}