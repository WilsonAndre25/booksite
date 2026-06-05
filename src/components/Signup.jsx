
import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./AuthCriterion";
import AuthForm from "./AuthForm";
import { Container, Row, Col } from "react-bootstrap";
import api from "../api/api";



const Signup = () => {
  const { login } = useAuth()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address:"",
    pais:""
  });
   

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] =useState(false)
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
   if (!form.name || !form.email || !form.password || !form.address) {
    setError("Please fill in all required fields");
    return;
  }
    setLoading(true);
    setError("");

    try {
      const res = await api.post("user/register", form);
      console.log(res.data);
      if (res.status >= 200 && res.status < 300) {
        login(res.data.user, res.data.token);
        console.log(res.data.user);
        navigate("/home", {
          state: {
            message: "Account successfully created",
            email: form.email,
          },
        });

      } else {
        setError("Erro ao criar conta");
      }

    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Erro no servidor");
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
          <h1>Sign Up</h1>
          <p style={{ maxWidth: "300px", textAlign: "center" }}>
            Get your free Open Library card and borrow digital books from the nonprofit Internet Archive
          </p>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ width: "80%", maxWidth: "400px" }}>

            <AuthForm
              title="Register"
              buttonText="Register"
              fields={[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Enter name",
                  value: form.name,
                  required: true
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter email",
                  value: form.email,
                  required: true
                },
                {
                  name:"address",
                  label:"Address",
                  type:"text",
                  placeholder:"address",
                  value:form.address,
                  required: true
                },
                {
                  name:"pais",
                  label:"Country --",
                  type:"select",
                  value:form.pais,  
                  options:[
                     { value: "", label: " Select Country--" },
                     { value: "Portugal", label: "Portugal" },
                     { value: "Zambia", label: "Zambia" },
                     { value: "Brasíl", label: "Brasíl" },
                     { value: "Angola", label: "Angola" },
                     { value: "França", label: "França" },
                     { value: "Japão", label: "Japão" },
                     { value: "Dinamarca", label: "Dinamarca" },
                     { value: "Mexico", label: "Mexico" },
                     { value: "England", label: "England" },
                     { value: "Nigéria", label: "Nigéria" },
                     { value: "South Africa", label: "South Africa" },
                     { value: "Cabo-Verde", label: "Cabo-Verde" },
                     { value: "United State", label: "United State" },
                     { value: "Polónia", label: "Polónia" },
                     { value: "Austrália", label: "Austrália" },
                     { value: "Espanha", label: "Espanha" },
                     { value: "Guiné-Bissau", label: "Guiné-Bissau" },
                     { value: "São Tomé e Príncipe", label: "São Tomé e Príncipe" },
                     { value: "Timor-Leste", label: "Timor-Leste" }
                  ],
                   required: false
                },
                {
                  name: "password",
                  label: "Password",
                  type: showPassword ? "text" : "password",
                  placeholder: "Enter password",
                  value: form.password,
                  toggleVisibility: () => setShowPassword((prev) => !prev),
                  showPassword: showPassword,
                  required: true
                },
                {
                  name: "confirmPassword",
                  label: "Confirm Password",
                  type: showConfirmPassword ? "text" : "password",
                  placeholder: "Confirm password",
                  required: true,
                  value: form.confirmPassword,
                  toggleVisibility: () =>setShowConfirmPassword ((prev) => !prev),
                  showPassword: showConfirmPassword,
                }
              ]}
              onChange={handleChange}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
            <Row className="py-3">
              <Col className="text-center">
                Do you already have an account?? <Link to="/Login1">Login</Link>
              </Col>
            </Row>

          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Signup;