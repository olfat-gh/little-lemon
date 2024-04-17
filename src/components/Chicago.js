import { Box, HStack, Image, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Chicago = () => {
  const navigate = useNavigate();
  return (
    <HStack spacing={2} alignItems="top">
      <Box maxW="400" maxH="330">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <Text fontSize="18">
          We are a family owned Meditteranean restaurant,focuased on traditional
          recipes served with a modern twist.
        </Text>
        <Button
          colorScheme="yellow"
          style={{ marginTop: 20 }}
          onClick={() => navigate("/booking")}
        >
          Reserve a Table
        </Button>
      </Box>
      <Box>
        <Image
          style={{ position: "absolute", "border-radius": "10px" }}
          height="375px"
          width="325px"
          src={require("../assets/restauranfood.jpg")}
        />
      </Box>
    </HStack>
  );
};

export default Chicago;
