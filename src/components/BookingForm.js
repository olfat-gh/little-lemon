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
import { useState } from "react";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00"]);

  return (
    <Center>
      <VStack p={32} alignItems="flex-start">
        <Heading as="h1">Reserve a Table</Heading>
        <Box p={6} rounded="md" w="100%">
          <form style={{ display: "grid", "max-width": "200px", gap: "20px" }}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input id="res-date" name="res-date" type="date" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select id="res-time" name="res-time">
                  {availableTimes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </VStack>
            <FormControl>
              <FormLabel htmlFor="guests">Number of guests</FormLabel>
              <Input
                id="guests"
                name="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select id="occasion" name="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
              </Select>
            </FormControl>
            <Button
              type="submit"
              colorScheme="yellow"
              width="full"
              isLoading={false}
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
