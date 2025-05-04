import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  return (
    <Flex as="nav" p={4} align="center" boxShadow="sm" mb={4}>
      <Heading size="md" as={Link} to="/" _hover={{ textDecor: 'none' }}>
        Mini Notes
      </Heading>
      <Spacer />
      <Button
        as={Link}
        to="/"
        variant={location.pathname === '/' ? 'solid' : 'ghost'}
        mr={2}
      >
        Dashboard
      </Button>
      <Button
        as={Link}
        to="/about"
        variant={location.pathname === '/about' ? 'solid' : 'ghost'}
        mr={2}
      >
        About
      </Button>
      <ThemeToggle />
    </Flex>
  );
};

export default Navbar;
