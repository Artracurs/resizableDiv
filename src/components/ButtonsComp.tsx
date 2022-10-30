import React from 'react'

type Props = {}

export default function ButtonsComp({}: Props) {

  const hight = () => {
    console.log('hight');
    
  }

  const width = () => {
    console.log('width');
    
  }

  return (
    <div>
      <button onClick={() => width} style={{ margin: '10px' }}>width</button>
      <button onClick={() => hight} style={{ margin: '10px' }}>hight</button>
    </div>
  )
}