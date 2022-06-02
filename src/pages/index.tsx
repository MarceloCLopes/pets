import type { NextPage } from "next";
import { List } from "../ui/components/List/List";
import { Title } from "../ui/components/Title/Title";

const Home: NextPage = () => {
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
      <List
        pets={[
          {
            id: 1,
            name: "Killua",
            history:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequat explicabo iure dicta consectetur commodi quaerat sit aperiam, enim, aliquid iusto, explicabo iure dicta consectetur commodi quaerat sit aperiam, enim, aliquid iusto ",
            photo:
              "https://i.pinimg.com/564x/ed/d7/c7/edd7c719e49a2bc9d04e168971cd3802.jpg",
          },
          {
            id: 2,
            name: "Killua",
            history:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequat explicabo iure dicta consectetur commodi quaerat sit aperiam, enim, aliquid iusto ",
            photo:
              "https://i.pinimg.com/originals/c7/4a/08/c74a08f746a58e554c7a26dc747d8a9e.jpg",
          },
        ]}
      />
    </>
  );
};

export default Home;
