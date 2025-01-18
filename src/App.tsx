import { useState } from "react"
// import Fah from "./Fah"
/** SPA
 *
 *
 * Component ---> Render ---> Virtual DOM ---> Real DOM
 * React is SPA (Single Page Application)
 * React Angular Vue Svelte
 * useState is a hook
 */

function App() {
  /**
   *
   *   const [value, setValue] = useState(initialValue)
   *   const [name, setName] = useState("Fah")
   *
   */

  const [sum, setSum] = useState(0)
  /**
   * sum and setSum is a pair useState
   *  sum = 0
   * setSum change value sum
   */
  const [counter, setCounter] = useState<number[]>([])
  // console.log("🚀 ~ App ~  State sum:", sum)
  // console.log("🚀 ~ App ~  State counter:", counter)
  /** After Start */

  const CalSum = (newCounter: number[]) => {
    let calSum = 0
    newCounter.forEach((num) => {
      // calSum += num
      calSum = calSum + num
    })
    setSum(calSum)
  }

  const AddCounter = () => {
    /** counter = [1,3,6] */
    setCounter([...counter, 0])
    /** counter = [1,3,6,0] */
  }

  const MinusCounter = (index: number) => {
    if (counter[index] >= 0) {
      const minusCounter = counter.map((value, indexCounter) => {
        if (indexCounter === index) {
          return --value
        }
        return value
      })
      setCounter(minusCounter)
      CalSum(minusCounter)
    }
  }

  const PlusCounter = (index: number) => {
    if (counter[index] >= 0) {
      const plusCounter = counter.map((value, i) => {
        if (i === index) {
          return ++value
        }
        return value
      })

      setCounter(plusCounter)
      CalSum(plusCounter)
    }
  }

  const SetZero = (index: number) => {
    if (counter[index] >= 0) {
      const zeroCounter = counter.map((value, i) => {
        if (i === index) {
          return 0
        }
        return value
      })
      setCounter(zeroCounter)
      CalSum(zeroCounter)
    }
  }

  const RemoveCounter = (index: number) => {
    if (counter[index] >= 0) {
      const removeCounter = counter.filter((value, i) => i !== index)

      setCounter(removeCounter)
      CalSum(removeCounter)
    }
  }

  return (
    <>
      {/* <Fah /> */}
      <div style={{ textAlign: "center" }}>
        <h1>Sum:{sum}</h1>
        <button onClick={() => AddCounter()}>Add Counter</button>

        {counter.map((number, index) => (
          <div key={index}>
            <p>
              <button
                disabled={number == 0}
                onClick={() => MinusCounter(index)}
              >
                -
              </button>
              <input
                disabled
                style={{
                  background: "lightblue",
                }}
                value={number}
              ></input>
              <button onClick={() => PlusCounter(index)}>+</button>
              <button onClick={() => SetZero(index)}>C</button>
              <button onClick={() => RemoveCounter(index)}>X</button>
            </p>
          </div>
        ))}

        {/* {counter.map((number, index) => (
          <div key={index}>
            <p>
              <button
                disabled={number == 0}
                onClick={() => MinusCounter(index)}
              >
                -
              </button>
              <input
                disabled
                style={{
                  background: "lightblue",
                }}
                value={number}
              ></input>
              <button onClick={() => PlusCounter(index)}>+</button>
              <button onClick={() => SetZero(index)}>C</button>
              <button onClick={() => RemoveCounter(index)}>X</button>
            </p>
          </div>
        ))} */}
        {/**
         * array.map((value, index) => {}
         * array.forEach((value, index) => {}
         *
         */}
      </div>
    </>
  )
}

export default App
