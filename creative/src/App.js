import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { VStack, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <AppContent />
        </div>
      </Router>
    </ChakraProvider>
  )
}

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Example1" element={<Example1 />} />
        <Route path="/Example2" element={<Example2 />} />
        <Route path="/Example3" element={<Example3 />} />
        <Route path="/Example4" element={<Example4 />} />
      </Routes>
    </>
  )
}

function Home() {
  return (
    <VStack spacing={8} align="center" m={8}>
      <Heading as="h1" size="2xl">
        Welcome to the Two.js Fun Zone
      </Heading>
      <Text fontSize="xl">Enjoy these examples of two.JS</Text>
      <Button colorScheme="teal" size="lg" as={Link} to="/Example1">
        Example_1
      </Button>
      <Button colorScheme="teal" size="lg" as={Link} to="/Example2">
        Example_2
      </Button>
      <Button colorScheme="teal" size="lg" as={Link} to="/Example3">
        Example3
      </Button>
      <Button colorScheme="teal" size="lg" as={Link} to="/Example4">
        Example4
      </Button>
    </VStack>
  )
}

export default App
