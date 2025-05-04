import React from 'react';
import { Box, Heading, Flex, useColorModeValue } from '@chakra-ui/react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const Dashboard = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, teal.50, gray.100)',
    'linear(to-br, #232526 0%, #414345 100%)'
  );
  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center" bgGradient={bgGradient} px={2} w="100vw">
      <Box
        w="100%"
        maxW="540px"
        py={8}
        boxShadow="xl"
        borderRadius="2xl"
        bg="white"
        _dark={{ bg: 'gray.900' }}
        mx="auto"
      >
        <Heading mb={6} size="lg" textAlign="center" letterSpacing={1}>
          My Notes
        </Heading>
        <Box maxW="xl">
          <NoteForm />
          <NoteList />
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
