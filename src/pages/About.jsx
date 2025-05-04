import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => (
  <Box maxW="xl" mx="auto" mt={10} p={6} borderRadius="md" boxShadow="md">
    <Heading as="h2" size="lg" mb={4}>
      About Mini Notes App
    </Heading>
    <Text>
      This is a simple, responsive notes app built with React (Vite), Chakra UI, React Router, and Firebase Realtime Database. You can create, view, and delete notes. Theme preference is persisted, and all UI is styled with Chakra UI.
    </Text>
  </Box>
);

export default About;
