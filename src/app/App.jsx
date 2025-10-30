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
  const [focus, setFocus] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    const key = e.target.name;
    const { errors } = CheckValidity(values);
    if (!errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
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

  const handleFocus = (e) => {
    setFocus((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = CheckValidity(values);
    if (errors[key] && focus[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const CheckValidity = (values) => {
    const errors = {};
    const { title, bio, skills } = values;
    if (!title) {
      errors.title = "Please filled the required field *";
    }
    if (!bio) {
      errors.bio = "Please filled the required field *";
    }
    if (!skills) {
      errors.skills = "Please filled the required field *";
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
            error={errors.title}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"bio"}
            label={"Bio:"}
            placeholder={"Software Engineer"}
            value={values.bio}
            error={errors.bio}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"skills"}
            label={"Skills:"}
            placeholder={"Software Engineer"}
            value={values.skills}
            error={errors.skills}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
