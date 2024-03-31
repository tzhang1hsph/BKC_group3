import { useState } from 'react'
import './App.css'
import Plot from 'react-plotly.js'
import choroplethJSON from '../../maps/choropleth.json';
import spaceJSON from '../../maps/Chinatown Park.json'
import hourlyJSON from '../../hourly_plots/Boston Common.json';

import '@mantine/core/styles.css';
import Cards from "./components/Cards"
import Intro from "./components/Intro"
import Title from "./components/Title"
import Definition from "./components/Definition"
import Comparison from "./components/Comparison"
import Poll from "./components/Poll"


import { MantineProvider } from '@mantine/core';
function App() {
  const [count, setCount] = useState(0)





  return <MantineProvider>{
    <>
      <Title />
      <Intro />
      <Definition />
      <Comparison />
      <Poll></Poll>
      <Cards />
      <br></br>
      <Plot data={choroplethJSON.data} layout={choroplethJSON.layout} />
      <Plot data={spaceJSON.data} layout={spaceJSON.layout} />
      <Plot data={hourlyJSON.data} layout={hourlyJSON.layout} />
    </>

  }

  </MantineProvider>;
}



export default App
