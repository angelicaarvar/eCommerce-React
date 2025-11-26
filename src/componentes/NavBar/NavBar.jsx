import CartWidget from '../CartWidget/CartWidget';
import ButtonNavBar from '../NavBarBotones/BottonNavBar';
import './NavBar.css';

export default function NavBar({ cartCount }) {
    return (
        <nav className="nav-contenedor">
            <div>
                <h2 className='nav-titulo'>The Garden</h2>
            </div>

            <div>
                <ButtonNavBar botones="Shop" />
                <ButtonNavBar botones="About Us" />
                <ButtonNavBar botones="Contact" />
            </div>

            <div>
                <CartWidget count={cartCount} />
            </div>

        </nav>
    );
}