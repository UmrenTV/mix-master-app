import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await axios.post(newsletterUrl, data);
        toast.success(response.data.msg);
        return redirect("/");
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const Newsletter = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
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
                    required
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
                    required
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
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-block"
                style={{ marginTop: "0.5rem" }}
                disabled={isSubmitting}
            >
                {isSubmitting ? "submitting" : "submit"}
            </button>
            <p
                style={{
                    marginTop: "1rem",
                    fontSize: "0.7rem",
                    color: "grey",
                }}
            >
                This is a demonstration only form, it doesn't do anything. Keep
                the email to be "test@test.com" or else it won't work
            </p>
        </Form>
    );
};

export default Newsletter;
