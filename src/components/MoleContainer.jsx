import Mole from "./Mole";
import Empty from "../Empty";
import { useState } from "react"

export default function MoleContainer() {
    const [isShowing, setIsShowing] = useState(false);
    const onMoleClick= () => {
        if (isShowing ){
            setIsShowing(false)
        }
    }
    return (
        <div className="mole-container">
            {isShowing ? (
                <Mole setIsShowing={setIsShowing} onMoleClick={onMoleClick}/>
            ) : (
                <Empty setIsShowing={setIsShowing} />
            )}
            
        </div>
    );
}  