import CartWidget from '../CartWidget/CartWidget';
import ButtonNavBar from '../NavBarBotones/BottonNavBar';
import './NavBar.css';

export default function NavBar({ cartCount }) {
    return (
        <nav className="nav-contenedor">
            <div>
                <a className='nav-titulo' href="../App.jsx">
                    <h2>The Garden</h2>
                </a>
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