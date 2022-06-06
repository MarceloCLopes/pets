import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import {
  Description,
  Info,
  ItemList,
  ListStyled,
  Name,
  Photo,
} from "./List.style";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export function List(props: ListProps) {
  const maximumTextSize = 200;

  return (
    <ListStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Photo src={pet.photo} alt={pet.name} />
          <Info>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.limitText(pet.history, maximumTextSize)}
            </Description>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >
              Adotar {pet.name}
            </Button>
          </Info>
        </ItemList>
      ))}
    </ListStyled>
  );
}
