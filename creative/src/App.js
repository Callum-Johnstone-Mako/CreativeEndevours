import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { VStack, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Example1 from './Example1'

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
    </VStack>
  )
}

export default App
