import Cousin from "./Cousin";

const Fufi = () => {
    return (
        <div className="bakira">
            <h3>Buwaji</h3>
            <div className="flex">
                <Cousin name={'Sita'}></Cousin>
                <Cousin name={'Gita'}></Cousin>
                <Cousin name={"Rita"}></Cousin>
            </div>
        </div>
    );
};

export default Fufi;