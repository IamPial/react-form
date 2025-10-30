import styled from "styled-components";

const TextInput = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #d3d3d3")};
  background-color: aliceblue;
  font-size: 16px;
  color: #333;
  width: 100%;

  &:focus {
    border: 1px solid #6c6ceb;
  }
`;

export default TextInput;
