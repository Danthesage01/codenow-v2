import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import {
  Div,
  Form,
  Section,
  FormTitle,
  FormText,
  FormLink,
  ForgotWrapper,
  ForgotPassword,
  ForgotEmpty
} from "./SignInStyles";
import { useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow/FormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
const SignIn = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { loginUser, user, isLoading } = useAuthGlobalContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.warning("Please fill in all fields");
      return;
    }

    const currentUser = { email, password };
    loginUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user]);

  return (
    <Div>
      <Logo />
      <Section>
        <Form>
          <FormTitle>Login</FormTitle>
          <FormRow
            htmlFor="email"
            labelText="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required="required"
            autoComplete="false"
          />

          <FormRow
            htmlFor="password"
            labelText="Password"
            type={seePassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleChange}
            required="required"
            autoComplete="false"
          >
            <FaRegEye
              style={{ fontSize: "1.2rem", marginBottom: "-0.5rem",cursor: "pointer" }}
              onClick={() => setSeePassword(!seePassword)}
            />
          </FormRow>
          <ForgotWrapper>
            <ForgotEmpty />
            <ForgotPassword to="/user/forgot-password">
              forgot password?
            </ForgotPassword>
          </ForgotWrapper>
          <Button
            type="submit"
            buttonType={BUTTON_TYPE_CLASSES.block}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <FormText>
            No account yet? <FormLink to="/sign-up">Register</FormLink>
          </FormText>
        </Form>
      </Section>
    </Div>
  );
};

export default SignIn;
