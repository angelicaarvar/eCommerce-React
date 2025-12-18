import './BottonNavBar.css';
import { NavLink } from 'react-router-dom';

export default function BottonNavBar({ to, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'botones-navbar active' : 'botones-navbar'}
        >
            {label}
        </NavLink>
    );
}