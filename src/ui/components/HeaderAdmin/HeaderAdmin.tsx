import { Box, Link } from "@mui/material";
import NextLink from "next/link";
import { HeaderContainer, LinksContainer, Logo } from "./HeaderAdmin.style";

export function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={"/images/logo.svg"} alt={"Adote um pet"} />
        <LinksContainer>
          <Link component={NextLink} href={"/pets/register"}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={"/pets/report"}>
            <a>
              Relatório{""}
              <Box
                component={"span"}
                sx={{ display: { sm: "initial", xs: "none" } }}
              >
                de Adoção
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
