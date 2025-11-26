import './CartWidget.css';
import Carrito from '../imagenes/cart.svg'

export default function CartWidget({ count }) {
    return (
        <div className="cart-widget">
            <img className='carrito-svg' src={Carrito} alt="Carrito de compras" /> <span className="contador-cart">{count}</span>
        </div>
    );
}