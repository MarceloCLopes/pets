import { useState } from "react";
import { AxiosError } from "axios";
import { ApiService } from "../../../services/ApiService";

export function useRegister() {
  const [name, setName] = useState("");
  const [history, setHistory] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");

  function register() {
    if (validateForm()) {
      ApiService.post("/pets", {
        name,
        history,
        photo,
      })
        .then(() => {
          cleanForm();
          setMessage("Pet cadastrado co sucesso");
        })
        .catch((error: AxiosError) => {
          setMessage(error.response?.data.message);
        });
    } else {
      setMessage("Preencha todos os campos");
    }
  }

  function validateForm() {
    return name.length > 2 && history.length > 20 && photo.length > 5;
  }

  function cleanForm() {
    setName("");
    setHistory("");
    setPhoto("");
  }

  return {
    name,
    history,
    photo,
    message,
    setName,
    setHistory,
    setPhoto,
    setMessage,
    register,
  };
}
