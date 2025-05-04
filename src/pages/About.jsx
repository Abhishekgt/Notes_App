import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const shadow = useColorModeValue('lg', 'dark-lg');
  return (
    <Box
      maxW={{ base: '100vw', sm: '100vw', md: '100vw', lg: '100vw' }}
      minH="100vh"
      mx="auto"
      p={{ base: 4, sm: 8, md: 12 }}
      borderRadius={{ base: 'none', md: 'xl' }}
      boxShadow={shadow}
      bg={bg}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        as="h2"
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        mb={{ base: 3, md: 6 }}
        textAlign="center"
      >
        About Mini Notes App
      </Heading>
      <Text
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        textAlign="center"
        color={useColorModeValue('gray.700', 'gray.200')}
        maxW={{ base: '100%', md: '80%' }}
      >
        This is a simple, responsive notes app built with React (Vite), Chakra UI, React Router, and Firebase Realtime Database. You can create, view, and delete notes. Theme preference is persisted, and all UI is styled with Chakra UI.
      </Text>
    </Box>
  );
};

export default About;
