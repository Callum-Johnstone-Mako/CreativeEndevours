// Importing necessary modules from react and two.js
import React, { useEffect, useRef } from 'react'
import Two from 'two.js'

// Creating a function component Example3
function Example3() {
  // Using useRef Hook to create a ref that can be attached to react DOM elements
  const ref = useRef()

  // Using useEffect Hook to execute the code after the component mounts
  useEffect(() => {
    // Creating a Two.js instance with fullscreen and autostart options
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(ref.current) // Appending the instance to the current reference

    // Setting the background color of the canvas to black
    two.renderer.domElement.style.backgroundColor = 'black'

    // Array to hold the circle objects
    const circles = []

    // Total number of circles
    const numOfCircles = 40

    // Loop to create each circle
    for (let i = 0; i < numOfCircles; i++) {
      // Making a circle at the center of the screen, radius increases for each new circle
      const circle = two.makeCircle(two.width / 2, two.height / 2, i * 15)

      // Setting the fill of the circle to transparent
      circle.noFill()

      // Setting the stroke of the circle to a random RGB color
      circle.stroke = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`

      // Setting the line width of the circle
      circle.linewidth = 2

      // Adding the circle to the circles array
      circles.push(circle)
    }

    // Function to be called for each frame of the animation
    two.bind('update', function (frameCount) {
      // Updating the radius and translation of each circle
      circles.forEach((circle, index) => {
        // Calculating a phase offset for each circle
        const offset = ((Math.PI * 2) / numOfCircles) * index

        // Updating the circle's radius based on the sinusoidal function for a pulsating effect
        circle.radius = index * 15 + Math.sin(frameCount / 60 + offset) * 50

        // Setting the circle's translation to the center of the screen
        circle.translation.set(two.width / 2, two.height / 2)
      })
    })
  }, [])

  return <div ref={ref} />
}

export default Example3
