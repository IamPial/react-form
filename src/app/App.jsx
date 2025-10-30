import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";

// After salat & lunch , then work with functionalities
const App = () => {
  return (
    <div className="root">
      <form>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <InputGroup
            name={"title"}
            label={"Title:"}
            placeholder={"Software Engineer"}
          />
          <InputGroup
            name={"bio"}
            label={"Bio:"}
            placeholder={"Software Engineer"}
          />
          <InputGroup
            name={"skills"}
            label={"Skills:"}
            placeholder={"Software Engineer"}
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
