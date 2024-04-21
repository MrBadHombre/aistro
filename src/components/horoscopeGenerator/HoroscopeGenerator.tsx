import { useState } from "react"

export const HoroscopeGenerator = () => {

   const [horoscope, setHoroscope] = useState("")
   const [inputValue, setInputValue] = useState("")
   
   const onClick = () => {

      setHoroscope(inputValue)
      
      

   }

   const handleInputChange = (event: any) => {

      setInputValue(event.target.value)
   }


    return (
      <>
      <h1>{horoscope}</h1>
      <input value ={inputValue} onChange={handleInputChange} />
      <button onClick={() => onClick()}>Get Horoscope</button>
      <h1>Generator </h1>
      
      </>
   )
}