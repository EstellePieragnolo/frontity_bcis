const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/bcis_theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "bcis_theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
