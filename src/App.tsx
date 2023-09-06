import { useEffect, useState } from 'react'
import './App.css'

function App() {
  interface Advice {
    id: number
    advice: string
  }
  const [advice, setAdvice] = useState<Advice>({
    id: 0,
    advice: ""
  });

  const fetchAdvice = async(): Promise<void> => {
    try {
      const API = "https://api.adviceslip.com/advice";
      const data = await fetch(API);
      const res = await data.json();
      if (data.status === 200) {
        const AdviceMsg: Advice = {
          id: res.slip.id,
          advice: res.slip.advice
        }
        setAdvice(AdviceMsg);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, [])
  return (
    <>
      {advice.advice}
    </>
  )
}

export default App
