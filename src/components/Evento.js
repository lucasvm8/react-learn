import Button from "./Button";

function Evento () {
    function meuEvento () {
        console.log('CLICK!');
    }

    function segundoEvento () {
        console.log('CLICK!');
    }

    return (
        <div>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento