import { Box, Center, HStack, Image, Text, Button } from "@chakra-ui/react";

const CallToAction = () => {
  const style = {
    color: "#495e57",
  };

  return (
    <div style={{ backgroundColor: "#495e57" }}>
      <Center w="80%" p={4} color="white">
        <HStack spacing={2} alignItems="top">
          <Box maxW="400" maxH="330">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <Text fontSize="18">
              We are a family owned Meditteranean restaurant,focuased on
              traditional recipes served with a modern twist.
            </Text>
            <Button colorScheme="yellow" style={{ marginTop: 20 }}>
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
      </Center>
    </div>
  );
};

export default CallToAction;
