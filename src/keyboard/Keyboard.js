import { keys } from "./Keys";
import "./Keyboard.css";
import Key from "./Key";

function Keyboard(){
    return (
        <div className="keyboard">
            <div className="rows" id="row-first">
              {keys[0].map((key) => {
                return <Key keyValue={ key } /> 
            })}
            </div>
            <div className="rows" id="row-second">
                {keys[1].map((key) => {
              return <Key keyValue={ key } />
            })}
            </div>
            <div className="rows" id="row-third">
              <Key keyValue="DELETE" id="delete-key" />
              {keys[2].map((key) => {
                return <Key keyValue={ key } />
              })}
              <Key keyValue="ENTER" id="enter-key" />
            </div>
        </div>
    )
}

export default Keyboard;