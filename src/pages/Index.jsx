import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCut } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="white">
        <Box as="header" w="full" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <FaCut size="2em" color="#FC8D29" />
            <Stack direction="row" spacing={8}>
              <Link href="#services" fontWeight="bold">
                Services
              </Link>
              <Link href="#about" fontWeight="bold">
                About
              </Link>
              <Link href="#contact" fontWeight="bold">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Box>

        <VStack spacing={10} py={20} px={6} textAlign="center">
          <Heading fontSize="4xl" fontWeight="bold" color="gray.800">
            Elegant Styles for Every Hair
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Discover your new look with our experienced stylists.
          </Text>
          <Button size="lg" colorScheme="orange" px={10}>
            Book Now
          </Button>
        </VStack>

        <Image src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwwfHx8fDE3MTU0NDEzNjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hair Salon Interior" w="full" h="400px" objectFit="cover" />

        <VStack spacing={8} py={20} px={6} textAlign="center">
          <Heading fontSize="3xl" fontWeight="bold" color="gray.800">
            Our Services
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Hair Cutting</Heading>
              <Text mt={4}>Precision cuts for all genders and ages.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Coloring</Heading>
              <Text mt={4}>Vibrant colors that make a statement.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Styling</Heading>
              <Text mt={4}>Styling for special events and everyday looks.</Text>
            </Box>
          </Stack>
        </VStack>

        <Box as="footer" w="full" py={4} px={8} bg="gray.100" textAlign="center">
          <Text>© 2023 Elegant Styles Salon. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
