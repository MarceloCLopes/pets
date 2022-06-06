import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  const [listPets, setListPets] = useState<Pet[]>([]);
  const [petSelected, setPetSelected] = useState<Pet | null>(null);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((response) => {
      setListPets(response.data);
    });
  }, []);

  useEffect(() => {
    if (petSelected === null) {
      cleanForm();
    }
  }, [petSelected]);

  function adotar() {
    if (petSelected !== null) {
      if (validateAdoptionData()) {
        ApiService.post("/adocoes", {
          pet_id: petSelected.id,
          email,
          amount,
        })
          .then(() => {
            setPetSelected(null);
            setMessage("Pet adotado com sucesso!");
          })
          .catch((error: AxiosError) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage("Preencha todos os campos corretamente!");
      }
    }
  }

  function validateAdoptionData() {
    return email.length > 0 && amount.length > 0;
  }

  function cleanForm() {
    setEmail("");
    setAmount("");
  }

  return {
    listPets,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    amount,
    setAmount,
    message,
    setMessage,
    adotar,
  };
}
