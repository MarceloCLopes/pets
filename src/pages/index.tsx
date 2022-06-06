import type { NextPage } from "next";

import { List } from "../ui/components/List/List";
import { Title } from "../ui/components/Title/Title";

import {
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";

import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br /> pode
            <strong> adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List pets={listPets} onSelect={(pet) => setPetSelected(pet)} />

      <Dialog
        open={petSelected !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelected(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              type={"email"}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={"Quantia por mês"}
              type={"number"}
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setPetSelected(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => adotar()}>
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
      />
    </>
  );
};

export default Home;
