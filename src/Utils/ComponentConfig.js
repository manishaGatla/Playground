const createComponentConfig = (type) => {
  switch (type) {
    case "Button":
      return {
        id: Date.now(),
        type: "Button",
        props: {
          label: "Button",
          variant: "contained",
        },
      };
    case "TextField":
      return {
        id: Date.now(),
        type: "TextField",
        props: {
          label: "Input",
          name: "inputName",
          id: "inputId",
          placeholder: "Enter text",
        },
      };

    default:
      return null;
  }
};

export default createComponentConfig;
