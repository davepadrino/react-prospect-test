const exampleActions = {
  INCREMENT: "example/increment",
  DECREMENT: "example/decrement"
};

export const increment = () => ({
    type: exampleActions.INCREMENT
})


export const decrement = () => ({
  type: exampleActions.DECREMENT
});

export default exampleActions;
