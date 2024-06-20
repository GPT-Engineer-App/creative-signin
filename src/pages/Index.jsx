import { Container, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const toast = useToast();

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSigninData({ ...signinData, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Signed in.",
      description: "You've successfully signed in.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as={motion.h1} size="2xl" mb={6} initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          Welcome to Our App
        </Heading>
        <Tabs variant="soft-rounded" colorScheme="teal" as={motion.div} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <TabList>
            <Tab>Sign Up</Tab>
            <Tab>Sign In</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box as="form" onSubmit={handleSignupSubmit}>
                <VStack spacing={4}>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" name="username" value={signupData.username} onChange={handleSignupChange} />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={signupData.email} onChange={handleSignupChange} />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" value={signupData.password} onChange={handleSignupChange} />
                  </FormControl>
                  <Button type="submit" colorScheme="teal" size="lg" as={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Sign Up
                  </Button>
                </VStack>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box as="form" onSubmit={handleSigninSubmit}>
                <VStack spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={signinData.email} onChange={handleSigninChange} />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" value={signinData.password} onChange={handleSigninChange} />
                  </FormControl>
                  <Button type="submit" colorScheme="teal" size="lg" as={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Sign In
                  </Button>
                </VStack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default Index;