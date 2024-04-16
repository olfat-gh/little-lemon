import { Box, Center, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import SpecialCard from "./SpecialCard";

const Specials = () => {
  const specials = [
    {
      title: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../assets/greeksalad.jpg"),
      price: "12.99",
    },
    {
      title: "Bruchetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../assets/bruchetta.jpg"),
      price: "5.99",
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../assets/lemondessert.jpg"),
      price: "5.00",
    },
  ];

  return (
    <>
      <br />
      <br />

      <Center p={4}>
        <VStack>
          <HStack>
            <Box>
              <h2>This weeks specials!</h2>
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme="yellow">Online Menu</Button>
            </Box>
          </HStack>
          <HStack>
            {specials.map((special) => (
              <Box>
                <SpecialCard
                  key={special.title}
                  title={special.title}
                  description={special.description}
                  price={special.price}
                  imageSrc={special.getImageSrc()}
                />
              </Box>
            ))}
          </HStack>
        </VStack>
      </Center>
    </>
  );
};

export default Specials;
