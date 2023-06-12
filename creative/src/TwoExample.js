import React, { useEffect, useRef } from 'react'
import Two from 'two.js'

function TwoExample() {
  const ref = useRef()

  useEffect(() => {
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(ref.current)

    let clickPosition = new Two.Vector(two.width / 2, two.height / 2)
    const colors = ['green', 'black', 'red', 'blue', 'yellow', 'white']

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
        line.linewidth = 1
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
  }, [])

  return <div ref={ref} />
}

export default TwoExample
