import useInputState from '../hooks/useInputState'
const Hookform = () => {
    // const [name, handleNameChange] = useInputState(null);
    const emailState = useInputState(null);

    const handleSubmit = e => {
        // console.log(name);
        console.log(emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Your Name"/> */}
                <input {...emailState} type="email" name="email" placeholder="Your Email"/>
                <br />
                <input type="password" name="password" placeholder="Your password"/>
                <br />
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    );
};

export default Hookform;