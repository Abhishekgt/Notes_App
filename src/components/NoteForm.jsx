import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useColorModeValue } from '@chakra-ui/react';
import { useNotesContext } from '../contexts/NotesContext';

const NoteForm = () => {
  const { addNote } = useNotesContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const inputBg = useColorModeValue('gray.50', 'gray.700');
  const btnColor = useColorModeValue('purple', 'orange');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    await addNote(title, content);
    setTitle('');
    setContent('');
    setLoading(false);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={8} boxShadow="md" borderRadius="lg" p={6} bg={inputBg}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" bg="white" _dark={{ bg: 'gray.800' }} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Note content" rows={4} bg="white" _dark={{ bg: 'gray.800' }} />
        </FormControl>
        <Button type="submit" colorScheme={btnColor} isLoading={loading} alignSelf="flex-end" px={8} py={2} fontWeight="bold">
          Add Note
        </Button>
      </VStack>
    </Box>
  );
};

export default NoteForm;
