import React from 'react'

function Home() {
  return (
    <div>
        <p>hola mundo</p>
    </div>
  )
}

Home.layout = page => <App children={ page } title="Inicio" />
export default Home
