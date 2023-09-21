import { useContext } from "react";
import { RingContext } from "./Dada";

const Cousin = ({name}) => {
    const gift = useContext(RingContext);
    return (
        <div className="single">
            <h3>Cousin</h3>
            <p>{name}</p>
            <p>Dadir {gift}</p>
        </div>
    );
};

export default Cousin;