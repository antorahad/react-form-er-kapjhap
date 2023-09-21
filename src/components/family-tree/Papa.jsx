import Ami from "./Ami";
import Vai from "./Vai";

const Papa = ({ring}) => {
    return (
        <div className="bakira">
            <h3>Papaji</h3>
            <div className="flex">
                <Vai></Vai>
                <Ami ring={ring}></Ami>
            </div>
        </div>
    );
};

export default Papa;