import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuthForm";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthCriterion";





const Login1 = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const message = location.state?.message;
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/user/login", form);

      if (res.data?.auth) {
       
   login(res.data.user, res.data.token);

navigate("/home", {
  state: {
    message: `Bem-vindo, ${res.data.user.name}!`,
  },
});
       
      } else {
        setError("Email ou password inválidos");
      }
    } catch (err) {
      console.log("ERRO REAL:", err.response?.data);
      setError(err.response?.data?.msg || err.response?.data?.auth || "Erro")

    } finally {
      setLoading(false);
    }
  };
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center bg-light"
        >
          <h1>Login</h1>
          <p style={{ maxWidth: "300px", textAlign: "center" }}>
            Log in to your account and continue your experience.
          </p>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ width: "80%", maxWidth: "400px" }}>

            <AuthForm
              title="LOGIN"
              buttonText="Sign in"
              fields={[
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter email",
                  value: form.email,
                },
                {
                  name: "password",
                  label: "Password",
                  type: showPassword ? "text" : "password",
                  placeholder: "Enter password",
                  value: form.password,
                  toggleVisibility: () => setShowPassword((prev) => !prev),
                  showPassword: showPassword,
                },
              ]}
              onChange={handleChange}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
            <Row className="py-3">
              <Col className="text-center">
                You don't have an account? <Link to="/signup">Register</Link>
              </Col>
            </Row>
          </div>
          {message && (
            <>
              <p style={{ color: "green" }}>{message}</p>

              {/* <div style={{ marginTop: "10px" }}>
                <Link to="/">Ir para a minha conta</Link>
              </div> */}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Login1;