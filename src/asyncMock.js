import OrejaElefante from './componentes/imagenes/OrejaElefante.jpg'
import MonsteraDeli from './componentes/imagenes/MonsteraDeli.jpg'
import PotusLemon from './componentes/imagenes/PotusLemon.jpg'
import Cala from './componentes/imagenes/CalaBlanca.jpg'
import LenguaDeSuegra from './componentes/imagenes/LenguaDeSuegra.jpg'
import Zamioculcas from './componentes/imagenes/zamioculcas.jpg'
import TierraAbonada from './componentes/imagenes/TierraAbonada.jpg'
import Perlita from './componentes/imagenes/Perlita.jpg'
import Musgo from './componentes/imagenes/Musgo.jpg'
import Lombrices from './componentes/imagenes/LombricesCalifornianas.jpg'
import JabonPotasico from './componentes/imagenes/JabonPotasico.jpg'
import JabonPotasicoAceiteNeem from './componentes/imagenes/JabonPotasicoAceiteNeem.jpg'


const productos = [
    {
        id: 1,
        nombre: "Oreja de Elefante",
        precio: 5000,
        imagen: OrejaElefante,
        categoria: 'planta',
        descripcion: "Planta tropical de hojas grandes y vistosas, ideal para interiores luminosos y espacios amplios."
    },
    {
        id: 2,
        nombre: "Photus Lemon",
        precio: 3600,
        imagen: PotusLemon,
        categoria: 'planta',
        descripcion: "Planta colgante de fácil cuidado, con hojas verde claro y amarillo intenso."
    },
    {
        id: 3,
        nombre: "Zantedeschia aethiopica",
        precio: 5600,
        imagen: Cala,
        categoria: 'planta',
        descripcion: "Planta ornamental elegante, reconocida por sus flores blancas y su follaje verde intenso."
    },
    {
        id: 4,
        nombre: "Monstera deliciosa",
        precio: 18000,
        imagen: MonsteraDeli,
        categoria: 'planta',
        descripcion: "Planta de interior muy popular, con hojas grandes y recortadas que aportan un estilo moderno."
    },
    {
        id: 5,
        nombre: "Sansevieria trifasciata",
        precio: 2500,
        imagen: LenguaDeSuegra,
        categoria: 'planta',
        descripcion: "Planta resistente y de bajo mantenimiento, ideal para interiores y principiantes."
    },
    {
        id: 6,
        nombre: "Zamioculcas",
        precio: 4600,
        imagen: Zamioculcas,
        categoria: 'planta',
        descripcion: "Planta muy duradera y decorativa, tolera poca luz y riegos espaciados."
    },
    {
        id: 7,
        nombre: "Tierra Abonada",
        precio: 7500,
        imagen: TierraAbonada,
        categoria: 'abonos',
        descripcion: "Sustrato nutritivo ideal para macetas y jardines, favorece el crecimiento saludable."
    },
    {
        id: 8,
        nombre: "Perlita",
        precio: 3000,
        imagen: Perlita,
        categoria: 'abonos',
        descripcion: "Material liviano que mejora la aireación y el drenaje del sustrato."
    },
    {
        id: 9,
        nombre: "Musgo Sphagnum",
        precio: 5300,
        imagen: Musgo,
        categoria: 'abonos',
        descripcion: "Retiene la humedad y protege las raíces, ideal para plantas delicadas."
    },
    {
        id: 10,
        nombre: "Lombrices Californianas",
        precio: 1800,
        imagen: Lombrices,
        categoria: 'abonos',
        descripcion: "Perfectas para compostaje, generan humus de alta calidad para las plantas."
    },
    {
        id: 11,
        nombre: "Jabon Potásico Puro",
        precio: 4500,
        imagen: JabonPotasico,
        categoria: 'abonos',
        descripcion: "Producto natural para el control de plagas, seguro para plantas y el ambiente."
    },
    {
        id: 12,
        nombre: "Jabon Potasico con Aceite de Neem",
        precio: 7600,
        imagen: JabonPotasicoAceiteNeem,
        categoria: 'abonos',
        descripcion: "Insecticida natural que combate plagas y previene enfermedades."
    }
];


export const getProductos = () => {
    return new Promise((resolve) => {
        resolve(productos)
    });
};

export const getCategoria = (categoria) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter((prod) => prod.categoria === categoria);
        
        console.log("Filtrando por:", categoria, "Encontrados:", productosFiltrados.length);

        resolve(productosFiltrados);
    }, 1000);
}
    
export const getProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find((prod) => prod.id == id)
            resolve(producto)
        }, 2000)
    });
}