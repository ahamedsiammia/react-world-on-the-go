import { Suspense } from 'react'
import './App.css'
import Countries from './componnets/countries/countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
     <Suspense fallback={<p>Nadir vai Loading...</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
     </Suspense>
    </>
  )
}

export default App
