import { NavLink } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
    return(
        <div className="contenedor-aboutUs">
            <h1 className="titulo-aboutUs">Sobre nosotros</h1>
            <p className="parrafo-aboutUs">Bienvenidos a The Garden, tu tienda en línea de confianza para todas tus necesidades de jardinería. En The Garden, creemos que un jardín bien cuidado no solo embellece tu hogar, sino que también mejora tu calidad de vida. Nuestro equipo está compuesto por apasionados expertos en jardinería que están aquí para ayudarte a transformar cualquier espacio en un oasis verde.</p>
            <p className="parrafo-aboutUs">Nuestra misión es proporcionar productos de alta calidad, asesoramiento experto y un servicio al cliente excepcional. Ya sea que seas un jardinero experimentado o un principiante entusiasta, en The Garden encontrarás todo lo que necesitas para cultivar y mantener un jardín saludable y vibrante.</p>
            <p className="parrafo-aboutUs">Gracias por elegir The Garden. Estamos emocionados de ser parte de tu viaje de jardinería y esperamos ayudarte a crear el jardín de tus sueños.</p>

            <NavLink to="/" className="btn-volver">Volver al inicio</NavLink>
        </div>
    );
}