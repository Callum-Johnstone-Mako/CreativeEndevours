import React, { useEffect, useRef } from 'react'
import Two from 'two.js'

function Example2() {
  const ref = useRef()

  useEffect(() => {
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(ref.current)

    two.renderer.domElement.style.backgroundColor = 'black'

    const radius = Math.min(two.width, two.height) / 2 // Adjust to fit the window
    const sides = 36 // Increase to 36 sides
    const angle = (2 * Math.PI) / sides
    const center = new Two.Vector(two.width / 2, two.height / 2)

    // Generate vertices of the polygon
    const vertices = Array.from({ length: sides }, (_, i) => {
      const x = center.x + radius * Math.cos(i * angle)
      const y = center.y + radius * Math.sin(i * angle)
      return new Two.Vector(x, y)
    })

    // Generate all pairs of vertices
    const pairs = []
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        pairs.push([vertices[i], vertices[j]])
      }
    }

    let pairIndex = 0

    function drawNextLine() {
      if (pairIndex < pairs.length) {
        const [v1, v2] = pairs[pairIndex]
        const line = two.makeLine(v1.x, v1.y, v2.x, v2.y)

        // Use HSL color format to gradually change color
        const hue = (pairIndex / pairs.length) * 360 // vary hue from 0 to 360
        line.stroke = `hsl(${hue}, 100%, 50%)`

        pairIndex++

        setTimeout(drawNextLine, 10)
      } else {
        pairIndex = 0 // Reset pairIndex
        setTimeout(drawNextLine, 10) // Continue drawing
      }
    }

    drawNextLine()
  }, [])

  return <div ref={ref} />
}

export default Example2
