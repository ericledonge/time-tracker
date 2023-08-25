import { useNavigate } from "react-router-dom";
import { useSetLogout } from "../store/user";
import { FormEvent, useState } from "react";

export const useSignup = () => {
  const setLogout = useSetLogout();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await signInMethod(email, password);
      if (response) {
        setLogin();
        navigate("/tracking");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};
