import { StyledButton } from "./Button.styled";

function Button({ type, variant, children, ariaLabel, onClick }) {
  return (
    <StyledButton
      type={type}
      variant={variant}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
