import styled from "styled-components";

import TextInput from "../../ui/inputs/TextInput";

import Label from "../../ui/inputs/Label";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  user-select: none;
  border: 1px solid gray;
  border-radius: 0.25rem;
`;

const ErrorMessage = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: red;
`;

const InputGroup = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
}) => {
  return (
    <Container>
      <Label htmlFor={name} size={"md"}>
        {label}
      </Label>
      <TextInput
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputGroup;
