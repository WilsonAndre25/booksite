import { Form, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEye } from "@fortawesome/free-solid-svg-icons";
const AuthForm = ({
  title,
  fields,
  onSubmit,
  onChange,
  loading,
  error,
  buttonText,
}) => {

  return (
    <Form onSubmit={onSubmit}>
      <h3>{title}</h3>

      {fields.map((field) => (
        <Form.Group key={field.name} className="mb-3">
          <Form.Label>{field.label}</Form.Label>

          {field.name === "password" || field.name === "confirmPassword" ? (
            <InputGroup>
              <Form.Control
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                required={field.required}
                onChange={(e) => onChange(field.name, e.target.value)}
              />
              <Button
                variant="outline-secondary"
                onClick={field.toggleVisibility}
              >
                {field.showPassword ? "Hide" : <FontAwesomeIcon icon={faEye} />}
              </Button>

            </InputGroup>
          )

            : field.type === "select" ? (
              <Form.Select
                value={field.value}
                required={field.required}
                onChange={(e) => onChange(field.name, e.target.value)}
              >
                {field.options?.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ""}
                  >
                    {opt.label}
                  </option>
                ))}
              </Form.Select>
            )
              : (
                <Form.Control
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  required={field.required}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              )}

          {field.helpText && (
            <Form.Text className="text-muted">
              {field.helpText}
            </Form.Text>
          )}
        </Form.Group>
      ))}
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="I have read and agree to the terms and conditions" />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? "A processar..." : buttonText}
      </Button>
      {error && (
        <p style={{color: "red", marginTop: "10px"}}>
          {error}
        </p>
      )}
    </Form>
  );
};
export default AuthForm;