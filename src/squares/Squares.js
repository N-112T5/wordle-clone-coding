import Alphabet from "./Alphabet";
import "./Squares.css";

function Squares(){
    return (
        <div className="board">
            <div className="row">
                <Alphabet x={0} y={0} />
                <Alphabet x={1} y={0} />
                <Alphabet x={2} y={0} />
                <Alphabet x={3} y={0} />
                <Alphabet x={4} y={0} />
            </div>
            <div className="row">
                <Alphabet x={0} y={1} />
                <Alphabet x={1} y={1} />
                <Alphabet x={2} y={1} />
                <Alphabet x={3} y={1} />
                <Alphabet x={4} y={1} />
            </div>
            <div className="row">
                <Alphabet x={0} y={2} />
                <Alphabet x={1} y={2} />
                <Alphabet x={2} y={2} />
                <Alphabet x={3} y={2} />
                <Alphabet x={4} y={2} />
            </div>
            <div className="row">
                <Alphabet x={0} y={3} />
                <Alphabet x={1} y={3} />
                <Alphabet x={2} y={3} />
                <Alphabet x={3} y={3} />
                <Alphabet x={4} y={3} />
            </div>
            <div className="row">
                <Alphabet x={0} y={4} />
                <Alphabet x={1} y={4} />
                <Alphabet x={2} y={4} />
                <Alphabet x={3} y={4} />
                <Alphabet x={4} y={4} />
            </div>
            <div className="row">
                <Alphabet x={0} y={5} />
                <Alphabet x={1} y={5} />
                <Alphabet x={2} y={5} />
                <Alphabet x={3} y={5} />
                <Alphabet x={4} y={5} />
            </div>
        </div> 
    )
}

export default Squares;