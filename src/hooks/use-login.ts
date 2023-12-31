import { FormEvent, useState } from "react";

import { signInWithEmail } from "../services";
import { useSetLogin } from "../store/user";
import { useNavigate } from "react-router-dom";

const signInMethod = signInWithEmail;

export const useLogin = () => {
  const setLogin = useSetLogin();
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
