import styled, { css } from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
  object-fit: cover;
  ${({ variant }) =>
    variant === "logo" &&
    css`
      padding: 15px;
      object-fit: contain;
    `}
`;

export { StyledImage };
