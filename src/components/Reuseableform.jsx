const Reuseableform = ({fromTitle, handleSubmit, submitBtnText = 'Submit'}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h1>{fromTitle}</h1>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="submit" value={submitBtnText} /> 
            </form>
        </div>
    );
};

export default Reuseableform;