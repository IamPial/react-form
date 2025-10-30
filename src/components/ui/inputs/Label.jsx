import styled from "styled-components";

const fontSize = {
  sm: "1rem",
  md: "1.2rem",
  lg: " 1.5rem",
};

const Label = styled.label`
  font-size: ${(props) => fontSize[props.size]};
  font-family: Arial;
  color: #222;
`;
export default Label;
