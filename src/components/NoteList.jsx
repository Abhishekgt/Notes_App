import React from 'react';
import { Spinner, Text, SimpleGrid, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import NoteItem from './NoteItem';
import { useNotesContext } from '../contexts/NotesContext';

const NoteList = () => {
  const { notes, loading, deleteNote } = useNotesContext();
  const bg = useColorModeValue('gray.100', 'gray.900');
  if (loading) return (
    <Flex justifyContent="center" mt={10} bg={bg} p={10} borderRadius="lg" boxShadow="md">
      <Spinner size="xl" />
    </Flex>
  );
  if (!notes.length) return (
    <Flex justifyContent="center" mt={10} bg={bg} p={10} borderRadius="lg" boxShadow="md">
      <Text textAlign="center" color="gray.500">No notes yet. Add your first note!</Text>
    </Flex>
  );
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2 }}
      spacing={6}
      bg={bg}
      p={10}
      borderRadius="lg"
      boxShadow="md"
      w="100%"
      justifyItems="center"
      justifyContent="center"
    >
      {notes.map((note) => (
        <Box key={note.id} w="100%" maxW="340px">
          <NoteItem note={note} onDelete={deleteNote} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default NoteList;
