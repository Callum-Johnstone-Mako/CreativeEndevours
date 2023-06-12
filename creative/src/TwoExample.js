import React, { useEffect, useRef } from 'react'
import Two from 'two.js'

function TwoExample() {
  const ref = useRef()

  useEffect(() => {
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(ref.current)

    const circle = two.makeCircle(two.width / 2, two.height / 2, 50)
    circle.fill = '#FF8000'
    circle.stroke = 'orangered'

    two.bind('update', function () {
      circle.rotation += 0.001
    })
  }, [])

  return <div ref={ref} />
}

export default TwoExample
