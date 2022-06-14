import React from "react";

function GamePanel()
{
    return(
    <div style={{backgroundColor: "#1f3d59", paddingLeft: 250,paddingRight: 250}}>
        <h2 style={{fontSize: 28}}>Tabuleiro</h2>

        <Tabuleiro></Tabuleiro>
        <ListaDePalavras></ListaDePalavras>
    </div>
    )
}

function Tabuleiro()
{
    let linhas = 10
    let colunas = 10

    let t_col = ""
    for(let i = 0; i < colunas; i++)
        t_col += "auto "


    let tabuleiro = []
    const alfabeto = "QWERTYUIOPASDFGHJKLZXCVBNM"
    for(let i = 0; i < linhas * colunas; i++)
    {
        let temp = Math.floor(Math.random() * (alfabeto.length - 1))
        tabuleiro.push(alfabeto.charAt(temp))
    }

    return (
        <div style = { { display: 'grid', gridTemplateColumns: t_col} } >
            { tabuleiro.map(letter => <p className = "letter" style = {{ fontSize: 20, border: "1 solid white", padding: 10, marginTop: -20 }}> {letter} </p>) }
        </div>
    )
}

function ListaDePalavras()
{
    return(
        <div>

        </div>
    )
}

export default GamePanel
