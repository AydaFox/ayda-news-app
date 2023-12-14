const Error = ({ msg }) => {
    return (
        <div className="error-message">
            <h2>Error</h2>
            <p>{ msg }</p>
        </div>
    );
};

export default Error;