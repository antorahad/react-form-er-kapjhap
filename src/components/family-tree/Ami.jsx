import { useContext } from 'react';
import Bahu from './Bahu'
import { MoneyContext } from './Dada';
const Ami = ({ring}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="single">
            <h3>Ami</h3>
            <div className='single'>
                <Bahu ring={ring}></Bahu>
            </div>
            <p>Money: {money}</p>
            <div>
                <button onClick={() => setMoney(money + 1000)}>Add Money</button>
            </div>
        </div>
    );
};

export default Ami;