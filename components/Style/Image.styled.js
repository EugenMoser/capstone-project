import styled from "styled-components";
import Image from "next/image";
import { css } from "styled-components";

const StyledImage = styled(Image)`
  object-fit: contain;
  ${({ variant }) =>
    variant === "logo" &&
    css`
      padding: 15px;
    `}
  ${({ variant }) => variant === "article" && css``}
`;

export { StyledImage };
