import { useEffect, useState } from "react"

const useTshirts = () => {
  const [tShirts, setTShirts] = useState([]);
  useEffect(() => {
    fetch('tshirts.json')
    .then(res => res.json())
    .then(data => setTShirts(data))
  }, [tShirts])
  return [tShirts, setTShirts];
}

export default useTshirts;