import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Plot from 'react-plotly.js'
import choroplethJSON from '../../choropleth.json';
import choroplethscatterJSON from '../../choropleth_with_scatter.json';

import '@mantine/core/styles.css';
import Cards from "./components/Cards"
import Intro from "./components/Intro"
import Title from "./components/Title"


import { MantineProvider } from '@mantine/core';
function App() {
  const [count, setCount] = useState(0)


  


    return <MantineProvider>{
    <>
    <Title />
    <Intro />
    <Cards />

    <br></br>
      
      <Plot data={choroplethJSON.data} layout={choroplethJSON.layout}/>
    </>

    }

</MantineProvider>;
}
  


export default App
