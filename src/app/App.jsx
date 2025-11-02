import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";
import { useState } from "react";
import { deepClone, isEmpty, mapStateToValues } from "../utils/object-utility";

const init = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const App = () => {
  const [state, setState] = useState({ ...init });

  // DONE: Handling Error with Change Event
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        value: value,
      },
    }));

    const oldState = deepClone(state);
    oldState[key].value = value;
    const values = mapStateToValues(oldState);
    const { errors } = CheckErrorHandling(values);
    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };
  const handleSubmit = (e) => {
    // DONE: Handling Error For empty submit?
    e.preventDefault();
    const values = mapStateToValues(state);

    const { isValid, errors } = CheckErrorHandling(values);

    if (isValid) {
      console.log(state);
    } else {
      console.log(errors);
      const oldState = deepClone(state);
      Object.keys(oldState).forEach((key) => {
        oldState[key].error = errors[key];
      });
      setState(oldState);
    }
  };
  const handleFocus = (e) => {
    const oldState = deepClone(state);
    oldState[e.target.name].focus = true;
    setState(oldState);
  };
  const handleBlur = (e) => {
    const key = e.target.name;
    const values = mapStateToValues(state);
    const { errors } = CheckErrorHandling(values);
    const oldState = deepClone(state);
    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  const CheckErrorHandling = (values) => {
    const errors = {};
    const { title, skills, bio } = values;
    if (!title) {
      errors.title = "Please provide title*";
    }
    if (!bio) {
      errors.bio = "Please provide bio*";
    }
    if (!skills) {
      errors.skills = "Please provide skills*";
    }
    return {
      errors,
      isValid: isEmpty(errors),
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
            value={state.title.value}
            error={state.title.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"bio"}
            label={"Bio:"}
            placeholder={"Software Engineer"}
            value={state.bio.value}
            error={state.bio.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"skills"}
            label={"Skills:"}
            placeholder={"Software Engineer"}
            value={state.skills.value}
            error={state.skills.error}
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
