import CartWidget from '../CartWidget/CartWidget';
import ButtonNavBar from '../NavBarBotones/BottonNavBar';
import './NavBar.css';
import { Link } from "react-router-dom";



export default function NavBar( { cartCount }) {
    return (
        <nav className="nav-contenedor">
            <div>
                <Link to="/" className='nav-titulo'>
                    <h2>The Garden</h2>
                </Link>
            </div>

            <div className='nav-links'>
                <ButtonNavBar to="/about" label="About Us" />
                <ButtonNavBar to="/contact" label="Contact" />
            </div>

            <div>
                <CartWidget count={cartCount} />
            </div>
        </nav>
    );
}