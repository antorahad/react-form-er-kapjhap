import { useState } from "react";
import { createContext } from "react";
import Fufi from "./Fufi";
import Kaka from "./Kaka";
import Papa from "./Papa";

export const RingContext = createContext('Finger Ring');
export const MoneyContext = createContext('10000');
const Dada = () => {
    const [money, setMoney] = useState(10000);
    const ring = 'finger ring';
    return (
        
        <div>
            <h1>Dadaji</h1>
            <p>Dadar Teka: {money}</p>
            <div className="dadaji">
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value="Finger Ring">
                    <Papa ring={ring}></Papa>
                    <Kaka></Kaka>
                    <Fufi></Fufi>
                </RingContext.Provider>
            </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Dada;