import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
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
    <Card maxW="sm" maxH="m" backgroundColor="#edefee">
      <CardBody>
        <Image src={imageSrc} alt={title} borderRadius="lg" />

        <Stack mt="2" spacing="1">
          <HStack justifyContent="space-between">
            <Heading size="md">{title}</Heading>
            <Text color="#ee9972">${price}</Text>
          </HStack>

          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="yellow">
          Order a delivery
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SpecialCard;
