const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className="form">
            <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
                our newsletter{" "}
            </h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    first name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    defaultValue="john"
                />
            </div>
            <div className="form-row">
                <label htmlFor="lastName" className="form-label">
                    last name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    defaultValue="doe"
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    email
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-input"
                    defaultValue="test@test.com"
                />
            </div>
            <button
                type="submit"
                className="btn btn-block"
                style={{ marginTop: "0.5rem" }}
            >
                Submit
            </button>
        </form>
    );
};

export default Newsletter;
