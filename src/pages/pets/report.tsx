import { NextPage } from "next";
import { Title } from "../../ui/components/Title/Title";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useReport } from "../../data/hooks/pages/pets/useReport";

const Register: NextPage = () => {
  const { listReport } = useReport();

  return (
    <>
      <Title
        title={"Relatório de Adoção"}
        subtitle={"Veja a lista de pets adotados"}
      />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, mx: "auto", p: { xs: 3, md: 5 } }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={"right"}>Valor mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listReport.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.pet.name}</TableCell>
                <TableCell>{report.email}</TableCell>
                <TableCell align={"right"}>{report.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Register;
