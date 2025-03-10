import { Form } from "react-router-dom";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // this is basically how to submit a form (similar to loader) by using action from react-router-dom
    // and using the Form component from react-router-dom. Keep in mind you have to set up action in App.jsx
    // where the main router configuration is created, and import the action hook that we are using here.
    console.log(data);

    return null;
};

const Newsletter = () => {
    return (
        <Form className="form" method="POST">
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
        </Form>
    );
};

export default Newsletter;
