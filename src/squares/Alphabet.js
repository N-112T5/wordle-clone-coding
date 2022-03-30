import { useContext } from 'react';
import { BoardContext } from '../App';
import './Alphabet.css'; 

function Alphabet({x, y}){
    const { board } = useContext(BoardContext);
    const alphabet = board[y][x];
    return (
        <div className="alphabet">{ alphabet }</div>
    )
}

export default Alphabet;