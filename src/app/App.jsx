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
  const [errors, setErrors] = useState({ ...init });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = CheckValidity(values);
    if (isValid) {
      console.log(values);
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }
  };

  const CheckValidity = (values) => {
    const errors = {};
    const { title, bio, skills } = values;
    if (!title) {
      errors.title = "Invalid Title";
    }
    if (!bio) {
      errors.bio = "Invalid Bio";
    }
    if (!skills) {
      errors.skills = "Invalid Skills";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
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
            error={errors.title}
          />
          <InputGroup
            name={"bio"}
            label={"Bio:"}
            placeholder={"Software Engineer"}
            value={values.bio}
            onChange={handleChange}
            error={errors.bio}
          />
          <InputGroup
            name={"skills"}
            label={"Skills:"}
            placeholder={"Software Engineer"}
            value={values.skills}
            onChange={handleChange}
            error={errors.skills}
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
