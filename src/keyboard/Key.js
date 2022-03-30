import { useContext } from "react";
import { BoardContext } from "../App";

function Key({ keyValue, id }){
    const { board, setBoard, curPosition, setCurPosition} = useContext(BoardContext);

    const pushKey = function(){
        const curBoard = [...board];
        
        if (keyValue === "ENTER"){
            if (curPosition.cx !== 5) return;
            setCurPosition({cy: curPosition.cy + 1, cx: 0});
        }
        else if (keyValue === "DELETE") {
            curBoard[curPosition.cy][curPosition.cx-1] = '';
            setBoard(curBoard);
            setCurPosition({...curPosition, cx: curPosition.cx - 1})
        }
        else {
            if (curPosition.cx > 4) return;
            
            curBoard[curPosition.cy][curPosition.cx] = keyValue;
            setBoard(curBoard);
            setCurPosition({...curPosition, cx: curPosition.cx + 1});
        }
    }

    return (
        <div className="key" onClick={ pushKey } id={ id }>{ keyValue }</div>
    )
}

export default Key;