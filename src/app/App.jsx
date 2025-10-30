import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";
import { useState } from "react";

const init = {
  title: "",
  bio: "",
  skills: "",
};

// After salat & lunch , then work with functionalities
const App = () => {
  const [values, setValues] = useState({ ...init });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <InputGroup
            name={"title"}
            label={"Title:"}
            placeholder={"Software Engineer"}
            value={values.title}
            onChange={handleChange}
          />
          <InputGroup
            name={"bio"}
            label={"Bio:"}
            placeholder={"Software Engineer"}
            value={values.bio}
            onChange={handleChange}
          />
          <InputGroup
            name={"skills"}
            label={"Skills:"}
            placeholder={"Software Engineer"}
            value={values.skills}
            onChange={handleChange}
          />
          <Button
            bg={"primary"}
            hover={"primaryHover"}
            size={"md"}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default App;
