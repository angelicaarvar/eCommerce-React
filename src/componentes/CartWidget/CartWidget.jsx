import './CartWidget.css';

export default function CartWidget({ count }) {
    return (
        <div className="cart-widget">
            <img src="./imagenes/cart.svg" /> <span className="contador-cart">{count}</span>
        </div>
    );
}