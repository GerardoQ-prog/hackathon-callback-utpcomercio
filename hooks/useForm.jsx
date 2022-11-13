import React from "react";

export const useForm = (initialState) => {
  const [state, setstate] = React.useState(initialState);
  const onChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setstate(initialState);
  };

  const onCancelEdit = (state) => {
    setstate(state);
  };

  const onChangeChecked = (name, e) => {
    setstate({
      ...state,
      [name]: e.target.checked,
    });
  };

  const onChangeSelect = (name, e) => {
    setstate({
      ...state,
      [name]: e.target.value,
    });
  };

  const onChangeValue = (name, value) => {
    setstate({
      ...state,
      [name]: value,
    });
  };

  const onChangeError = (stateError) => {
    setstate(stateError);
  };

  const onCompleteData = (data) => {
    setstate(data);
  };

  return {
    ...state,
    form: state,
    onChange,
    onReset,
    onCancelEdit,
    onChangeChecked,
    onChangeError,
    onCompleteData,
    onChangeSelect,
    onChangeValue,
  };
};
