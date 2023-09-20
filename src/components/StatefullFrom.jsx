import { useState } from "react";

const StatefullFrom = () => {
    const [text, setText] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 8){
            setError('password should be at least 8 characters')
        }else{
            setError('');
        }
        console.log(text,password);
    }
    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleTextChange}
                type="text" name="name" placeholder="Your Name"/>
                <br />
                <input
                onChange={handlePassword}
                type="password" name="password" placeholder="Your Password"/>
                <br />
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    );
};

export default StatefullFrom;