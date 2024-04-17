import { useEffect, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/fakeAPI";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "updateDate":
      return { ...state, selectedDate: action.date };
    case "updateTimes":
      return { ...state, availableTimes: action.newTimes };

    default:
      throw new Error();
  }
};

const Booking = () => {
  const initializeTimes = {
    availableTimes: [],
    selectedDate: new Date().toISOString().split("T")[0],
  };
  const [state, dispatch] = useReducer(reducer, initializeTimes);

  const updateDate = (e) => {
    dispatch({ type: "updateDate", date: e.target.value });
  };

  useEffect(() => {
    //calling the rest api
    const newTimes = fetchAPI(new Date(state.selectedDate));
    //update availableTimes
    dispatch({ type: "updateTimes", newTimes });
  }, [state.selectedDate]);

  const navigate = useNavigate();
  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response) navigate("/confirm-booking");
  };

  return (
    <BookingForm
      sdate={state.selectedDate}
      times={state.availableTimes}
      handleDateChange={updateDate}
      submitForm={submitForm}
    />
  );
};

export default Booking;
