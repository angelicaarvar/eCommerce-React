import './ItemList.css';
import CardProducto from './CardProducto';

/*Agrego las fotos que segun indagué no se pueden agregar como String*/
import OrejaElefante from '../imagenes/OrejaElefante.jpg'
import MonsteraDeli from '../imagenes/MonsteraDeli.jpg'
import PotusLemon from '../imagenes/PotusLemon.jpg'
import Cala from '../imagenes/CalaBlanca.jpg'
import LenguaDeSuegra from '../imagenes/LenguaDeSuegra.jpg'
import Zamioculcas from '../imagenes/zamioculcas.jpg'


export default function ItemList({ onAddToCart }) {

    const products = [
        { id: 1, nombre: "Oreja de Elefante", precio: 5000, imagen: OrejaElefante },
        { id: 2, nombre: "Photus Lemon", precio: 3600, imagen: PotusLemon },
        { id: 3, nombre: "Zantedeschia aethiopica", precio: 5600, imagen: Cala },
        { id: 4, nombre: "Monstera deliciosa", precio: 18000, imagen: MonsteraDeli },
        { id: 5, nombre: "Sansevieria trifasciata", precio: 2500, imagen: LenguaDeSuegra },
        { id: 6, nombre: "Zamioculcas", precio: 4600, imagen: Zamioculcas }
    ];


    return (
        <>
            <div className="txt-central">
                <h1>Catálogo</h1>
            </div>
            <div className="item-list">

                {products.map((producto) => (
                    <CardProducto
                        key={producto.id}
                        products={producto}
                        onAddToCart={onAddToCart}
                    />
                ))}

            </div> </>

    );

}