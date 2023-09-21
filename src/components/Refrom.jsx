import { useEffect } from "react";
import { useRef } from "react";

const Refrom = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(() => {
        emailRef.current.focus();
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder="Your email"/>
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="Your password"/>
                <br />
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    );
};

export default Refrom;