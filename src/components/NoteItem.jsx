import React from 'react';
import { Box, IconButton, Text, Heading, Flex, useColorModeValue } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const NoteItem = ({ note, onDelete }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBgDark = useColorModeValue('white', 'linear-gradient(135deg, #232526 0%, #414345 100%)');
  const border = useColorModeValue('1px solid #e2e8f0', '1px solid #2d3748');
  const btnColor = useColorModeValue('purple', 'orange');
  return (
    <Box
      p={5}
      borderRadius="lg"
      boxShadow="md"
      bg={cardBgDark}
      border={border}
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: 'xl' }}
      minH="180px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box mb={3}>
        <Heading as="h3" size="md" mb={2} noOfLines={1}>{note.title}</Heading>
        <Text mb={2} noOfLines={4}>{note.content}</Text>
      </Box>
      <Flex align="center" justify="space-between">
        <Text fontSize="xs" color="gray.500">
          {new Date(note.createdAt).toLocaleString()}
        </Text>
        <IconButton
          aria-label="Delete note"
          icon={<DeleteIcon />}
          colorScheme={btnColor}
          variant="ghost"
          size="sm"
          onClick={() => onDelete(note.id)}
        />
      </Flex>
    </Box>
  );
};

export default NoteItem;
