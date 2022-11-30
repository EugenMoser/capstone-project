import styled from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
  padding: 5px;

  ${({ variant }) => variant === "???" && css``}
`;

export { StyledImage };
