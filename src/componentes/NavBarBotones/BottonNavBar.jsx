import './BottonNavBar.css';

export default function BottonNavBar(props) {
    return (
        <>
            <button className="botones-navbar">{props.botones}</button>
        </>
    );
}