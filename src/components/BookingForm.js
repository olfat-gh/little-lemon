import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const BookingForm = ({ sdate, times, handleDateChange, submitForm }) => {
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      date: sdate,
      guests: "",
      time: "",
      occasion: "Birthday",
    },
    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      guests: Yup.number()
        .min(1, "Must be at least 1 person")
        .max(10, "Must be at max 10 persons")
        .required("Required"),
      time: Yup.string().required("Required"),
      occasion: Yup.string().required("Required"),
    }),
  });

  return (
    <Center>
      <VStack p={32} alignItems="flex-start">
        <Heading as="h1">Reserve a Table</Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            style={{ display: "grid", "max-width": "200px", gap: "20px" }}
            onSubmit={formik.handleSubmit}
          >
            <VStack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input
                  id="res-date"
                  name="res-date"
                  type="date"
                  value={sdate}
                  onChange={(e) => {
                    formik.setFieldValue("date", e.target.value);
                    handleDateChange(e);
                  }}
                />
              </FormControl>
              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
              >
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select
                  id="res-time"
                  name="res-time"
                  {...formik.getFieldProps("time")}
                >
                  <option value="">--- Select ---</option>
                  {times.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
            </VStack>
            <FormControl
              isInvalid={formik.touched.guests && formik.errors.guests}
            >
              <FormLabel htmlFor="guests">Number of guests</FormLabel>
              <Input
                id="guests"
                name="guests"
                type="number"
                placeholder="1"
                {...formik.getFieldProps("guests")}
              />
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </Select>
            </FormControl>
            <Button
              type="submit"
              colorScheme="yellow"
              width="full"
              isLoading={isLoading}
            >
              Make Your reservation
            </Button>
          </form>
        </Box>
      </VStack>
    </Center>
  );
};

export default BookingForm;
