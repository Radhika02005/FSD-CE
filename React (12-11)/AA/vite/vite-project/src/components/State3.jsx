import React , { useState} from "react"

const State3 = () => {
  const [total, setTotal] = useState(0);
  return (
    <div>
      <button onClick={() => setTotal(total +1)}>
        Increasing
      </button>

      <button onClick={() => setTotal(total -1)}>
        Decreasing
      </button>

      <h1>{total}</h1>
    </div>
  )
}

export default State3