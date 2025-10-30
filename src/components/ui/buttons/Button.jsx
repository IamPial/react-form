import styled from "styled-components";

const fontSize = {
  sm: "0.7rem",
  md: "1rem",
  lg: "1.2rem",
};

const backgroundColor = {
  primary: "#0d6efd",
  secondary: "#aeb2b6",
  success: "#198754",
  danger: "#dc3545",
};

const hoverOnBtn = {
  primaryHover: "#052657",
  secondaryHover: "#444647",
  successHover: "#0a3d25",
  dangerHover: "#6d0d16",
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${(props) => fontSize[props.size]};
  font-family: Arial;
  background-color: ${(props) => backgroundColor[props.bg]};
  color: #fff;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  transition: 0.3;

  &:hover {
    background-color: ${(props) => hoverOnBtn[props.hover]};
  }
`;

export default Button;
