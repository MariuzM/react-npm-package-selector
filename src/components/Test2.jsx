/* eslint-disable react/prop-types */
import React from 'react'

export default function App() {
  const state = {
    dataState: [
      { id: 1, value: 'Test 1', isChecked: false },
      { id: 2, value: 'Test 2', isChecked: false },
      { id: 3, value: 'Test 3', isChecked: false },
      { id: 4, value: 'Test 4', isChecked: false },
    ],
  }
  const { dataState } = state
  const [data, setData] = React.useState(dataState)

  const handleCheckChieldElement = (el, id) => {
    setData({
      ...data,
      [id - 1]: { ...data[id - 1], isChecked: el.target.checked },
    })
  }

  // React.useEffect(() => {
  //   return console.log(`myState`, data)
  // })

  const OutPutValues = () => {
    return (
      <div>
        {Object.entries(data).map(e => {
          // console.log(e[1].value)
          if (e[1].isChecked === true) {
            return <div key={e[1].id}>{e[1].value}</div>
          }
        })}
      </div>
    )
  }

  return (
    <div className="App">
      {/* <h1>Check and Uncheck All Example</h1>
      <input type="checkbox" onChange={handleAllChecked} value="checkedall" />
      Check / Uncheck All */}
      <ul>
        <br />
        {dataState.map(e => {
          const { id, value } = e
          return (
            <form key={id}>
              <input
                type="checkbox"
                name={value}
                onChange={el => handleCheckChieldElement(el, id)}
              />
              {value}
            </form>
          )
        })}
      </ul>
      <OutPutValues />
    </div>
  )
}
