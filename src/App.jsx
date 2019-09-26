import React from 'react'

const dataState = [
  { id: 1, value: 'Test 1', npmValue: 'test-1', isChecked: false },
  { id: 2, value: 'Test 2', npmValue: 'test-2', isChecked: false },
  { id: 3, value: 'Test 3', npmValue: 'test-3', isChecked: false },
  { id: 4, value: 'Test 4', npmValue: 'test-4', isChecked: false },
]

const npmCopy = `npm install --save-dev`

export default function App() {
  const [data, setData] = React.useState(dataState)
  const [npmData, setNpmData] = React.useState()

  const handleAllChecked = el => {
    Object.entries(data).map((e, id) => {
      e[1].isChecked = el.target.checked
      return setData(
        data.map(item =>
          item.id === id ? { ...item, isChecked: el.target.checked } : item,
        ),
      )
    })
  }

  const handleCheckElement = (el, id, val) => {
    setData(
      data.map(item =>
        item.id === id ? { ...item, isChecked: el.target.checked } : item,
      ),
    )
  }

  React.useEffect(() => {
    setNpmData(
      data.map(item => {
        if (item.isChecked) {
          return `${item.value} = ${item.isChecked}`
        }
        return null
      }),
    )
  }, [data])

  console.log(npmData)

  const OutPutValues = () => (
    <div className="Test">
      {npmCopy}

      {Object.entries(data).map(e => {
        if (e[1].isChecked === true) {
          return ` ${e[1].npmValue}`
        }
        return null
      })}
    </div>
  )

  return (
    <>
      <div className="App">
        <h1>Check and Uncheck All Example</h1>
        <input type="checkbox" onChange={handleAllChecked} />
        Check / Uncheck All
        <ul>
          {Object.entries(data).map(e => {
            return (
              <form key={e[1].id}>
                <input
                  type="checkbox"
                  checked={e[1].isChecked}
                  onChange={el => handleCheckElement(el, e[1].id, e[1].npmValue)}
                />
                {e[1].value}
              </form>
            )
          })}
        </ul>
      </div>
      <OutPutValues />
    </>
  )
}
