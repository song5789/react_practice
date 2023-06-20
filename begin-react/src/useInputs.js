import { useState, useCallback, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET_FORM":
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = "";
        return acc;
      }, {});
    default:
      return state;
  }
}

function useInputs(initialForm) {
  //   const [form, setForm] = useState(initialForm);
  const [state, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", name, value });
  }, []);
  const reset = useCallback(() => dispatch({ type: "RESET_FORM" }), []);
  return [state, onChange, reset];
}

export default useInputs;
