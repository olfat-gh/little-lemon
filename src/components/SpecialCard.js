import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const SpecialCard = ({ title, description, price, imageSrc }) => {
  return (
    <Card maxW="sm" backgroundColor="#edefee">
      <CardBody>
        <Image src={imageSrc} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <HStack justifyContent="space-between">
            <Heading size="md">{title}</Heading>
            <Text color="#ee9972">${price}</Text>
          </HStack>

          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="yellow">
            Order a delivery
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default SpecialCard;
