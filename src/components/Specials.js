import {
  Box,
  Center,
  Button,
  Spacer,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
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
        <Grid templateColumns="repeat(3,minmax(0,1fr))" gridGap={3}>
          <GridItem colSpan={3}>
            <Flex justifyContent="space-between" maxH="100">
              <Box>
                <h2>This weeks specials!</h2>
              </Box>
              <Spacer />
              <Box>
                <Button colorScheme="yellow">Online Menu</Button>
              </Box>
            </Flex>
          </GridItem>
          {specials.map((special) => (
            <SpecialCard
              key={special.title}
              title={special.title}
              description={special.description}
              price={special.price}
              imageSrc={special.getImageSrc()}
            />
          ))}
        </Grid>
      </Center>
    </>
  );
};

export default Specials;
