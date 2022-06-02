import { Subtitle, TitleStyled } from "./Title.style";

interface TitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
}
