import Cousin from "./Cousin";

const Kaka = () => {
    return (
        <div className="bakira">
            <h3>Chachaji</h3>
            <div className="flex">
                <Cousin name={'Lokesh'}></Cousin>
                <Cousin name={'Rakesh'}></Cousin>
            </div>
        </div>
    );
};

export default Kaka;