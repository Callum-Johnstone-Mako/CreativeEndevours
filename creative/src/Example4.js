import React, { useEffect, useRef } from 'react'
import Two from 'two.js'

function Example4() {
  // Create a reference to a DOM element that we will use to attach our Two.js scene
  const ref = useRef()

  // Use the useEffect hook to setup the scene when the component mounts
  useEffect(() => {
    // Create a new Two.js instance, make it fullscreen and autostart, and append it to our ref element
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(ref.current)

    // Set the background color of the scene to black
    two.renderer.domElement.style.backgroundColor = 'black'

    // Prepare an array to store our hexagons and a variable for the number of hexagons
    const numOfHexagons = 20
    const hexagons = []

    // Create the hexagons and store them in the hexagons array
    for (let i = 0; i < numOfHexagons; i++) {
      const hexagon = two.makePolygon(
        two.width / 2,
        two.height / 2,
        50 + i * 20,
        6
      )
      hexagon.noFill()
      hexagon.linewidth = 2
      hexagons.push(hexagon)
    }

    // Bind the update event of Two.js to a function that updates the rotation and color of each hexagon
    two.bind('update', function (frameCount) {
      hexagons.forEach((hexagon, index) => {
        const offset = ((Math.PI * 2) / numOfHexagons) * index
        hexagon.rotation = (frameCount / 60 + offset) / 2

        const hue =
          ((75 * frameCount) / 60 + index * (360 / numOfHexagons)) % 360
        hexagon.stroke = `hsl(${hue}, 100%, 50%)`
      })
    })
  }, [])

  // Render a div that we will attach our Two.js scene to
  return <div ref={ref} />
}

export default Example4
