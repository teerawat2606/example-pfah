import { useState } from "react"

function Fah() {
  const [isFah, setIsFah] = useState(true)
  return (
    <div style={{ textAlign: "center", backgroundColor: "burlywood" }}>
      Hello Fah : {`${isFah}`}
      <button onClick={() => setIsFah(!isFah)}> click</button>
    </div>
  )
}

export default Fah
