import React from 'react';
import './Chessboard.css'
import Tile from "../Tile/Tile";


const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const rows = ['1', '2', '3', '4', '5', '6', '7', '8']

interface Piece{
    image: string;
    col: number;
    row: number;
}

const pieces: Piece[] = []
pieces.push({image: 'assets/images/kk.png', col:0, row:7})
export default function Chessboard(){
    let board = [];

    for (let j = rows.length - 1;  j >= 0; j--){
        for (let i = 0; i < columns.length; i++){
            const number = j+i+2;
            let image = undefined;

            pieces.forEach(p => {
                if (p.col === i && p.row === j){
                    image = p.image
                }
            })

            board.push(<Tile image={image} number={number}/>)

        }
    }

    return <div id='chessboard'>{board}</div>
}