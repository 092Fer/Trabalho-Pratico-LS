import React from "react";


function ControlPanel()
{
    return(
        <div style={{backgroundColor: "#1f3d59",}}>
            <h1 style={{fontSize: 42}}>Sopa de Letras</h1>
            <h2 style={{fontSize: 28}}>Linguagens Script</h2>

            <div style={{backgroundColor: "white", color: "black", paddingLeft: 200, paddingRight: 200}}>
                <Dificuldade/>
                <Comecar/>
            </div>
        </div>
    )
}

function Dificuldade()
{
    return(
    <div>
        <p style={{display: "inline", paddingRight: 20, fontSize: 16}}>Dificuldade:</p>
        <select>
            <option value={1}>Facil</option>
            <option value={2}>Normal</option>
            <option value={3}>Dificil</option>
        </select>
    </div>
    )
}

function Comecar()
{
    return (
    <div style={{display: "inline", margin: 10}}>
        <button style={{margin: 10}}>Comecar</button>
        <button style={{margin: 10}}>Reiniciar</button>
    </div>
    )
}

export default ControlPanel
