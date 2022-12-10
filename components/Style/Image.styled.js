import styled, { css } from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
  object-fit: cover;
  overflow: hidden;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  ${({ variant }) =>
    variant === "logo" &&
    css`
      padding: 15px;

      object-fit: contain;
    `}
`;

export { StyledImage };
