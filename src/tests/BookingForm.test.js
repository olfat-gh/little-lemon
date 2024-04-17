import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

// test("Renders the BookingForm heading", () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// });

test("renders BookingForm component", () => {
  const mockOnFormSubmit = jest.fn();
  const mockOnChangeDate = jest.fn();
  const today = new Date().toISOString().split("T")[0];
  const availableTimes = ["12:00", "13:00", "14:00"];

  render(
    <BookingForm
      sdate={today}
      submitForm={mockOnFormSubmit}
      times={availableTimes}
      handleDateChange={mockOnChangeDate}
    />
  );

  const dateLabel = screen.getByText(/Date/i);
  expect(dateLabel).toBeInTheDocument();
});
