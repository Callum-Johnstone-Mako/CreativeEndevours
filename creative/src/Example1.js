import React, { useEffect, useRef } from 'react'
import Two from 'two.js'
import { useNavigate } from 'react-router-dom'
import { Text, VStack } from '@chakra-ui/react'

function Example1() {
  const ref = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(ref.current)

    let clickPosition = new Two.Vector(two.width / 2, two.height / 2)
    const colors = ['green', 'black', 'red', 'blue', 'yellow']

    // Flag indicating whether the user has clicked
    let hasUserClicked = false

    function generateBorderPosition() {
      const side = Math.floor(Math.random() * 4)
      switch (side) {
        default:
          return new Two.Vector(Math.random() * two.width, 0)
        case 0: // top
          return new Two.Vector(Math.random() * two.width, 0)
        case 1: // right
          return new Two.Vector(two.width, Math.random() * two.height)
        case 2: // bottom
          return new Two.Vector(Math.random() * two.width, two.height)
        case 3: // left
          return new Two.Vector(0, Math.random() * two.height)
      }
    }

    setInterval(() => {
      // Only draw lines if the user has clicked
      if (hasUserClicked) {
        const borderPosition = generateBorderPosition()
        const line = two.makeLine(
          borderPosition.x,
          borderPosition.y,
          clickPosition.x,
          clickPosition.y
        )
        line.stroke = colors[Math.floor(Math.random() * colors.length)]
        line.linewidth = 3

        // After 20 seconds remove the line from the scene
        setTimeout(() => {
          two.remove(line)
        }, 30000)
      }
    }, 0.1)

    two.renderer.domElement.addEventListener(
      'click',
      function (e) {
        // Set the flag to true when the user clicks
        hasUserClicked = true
      },
      false
    )

    // Update clickPosition every time the mouse moves
    two.renderer.domElement.addEventListener(
      'mousemove',
      function (e) {
        const rect = two.renderer.domElement.getBoundingClientRect()
        clickPosition.set(e.clientX - rect.left, e.clientY - rect.top)
      },
      false
    )

    two.renderer.domElement.addEventListener('contextmenu', function (e) {
      e.preventDefault()
      navigate('/') // Go back to home page on right click
    })
  }, [navigate])

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      h="100vh"
      id="info-text"
    >
      <Text fontSize="3xl">Click to begin</Text>
      <Text fontSize="3xl">Right click to go home</Text>
      <div ref={ref} />
    </VStack>
  )
}

export default Example1
