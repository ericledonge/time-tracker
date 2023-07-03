import { FormEvent, useState } from "react";

import { signInWithEmail } from "../services";
import { useSetLogin } from "../store/user";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const setLogin = useSetLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    console.log("handleSubmit");
    e.preventDefault();

    try {
      const { data, error } = await signInWithEmail(email, password);
      if (data?.user?.aud === "authenticated") {
        setLogin();
        navigate("/tracking");
      } else {
        console.error(error);
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
