import { useContext } from "react";
import { RingContext } from "./Dada";

const Bahu = ({ring}) => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p>Dadaji er {ring}</p>
            <p>Dadiji er {gift}</p>
        </div>
    );
};

export default Bahu;