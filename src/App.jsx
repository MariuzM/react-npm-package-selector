import React, { useState, useEffect } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

import './App.scss'

const dataState = [
  { id: 1, value: 'React', npmValue: 'react', isChecked: false },
  { id: 2, value: 'React Dom', npmValue: 'react-dom', isChecked: false },
  { id: 3, value: 'Prop Types', npmValue: 'prop-types', isChecked: false },
  { id: 4, value: 'React Boostrap', npmValue: 'react-bootstrap', isChecked: false },
]

const npmCopy = `npm install`

export default function App() {
  const [data, setData] = useState(dataState)
  const [npmData, setNpmData] = useState([])

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

  const handleCheckElement = (el, id) => {
    setData(
      data.map(item =>
        item.id === id ? { ...item, isChecked: el.target.checked } : item,
      ),
    )
  }

  useEffect(() => {
    setNpmData(
      data.map(item => {
        if (item.isChecked) {
          return ` ${item.npmValue}`
        }
        return null
      }),
    )
  }, [data])

  const OutPutValues = () => (
    <div className="field">
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
        <Checkbox type="checkbox" onChange={handleAllChecked} />
        Check / Uncheck All
        <ul>
          <form>
            {Object.entries(data).map(e => {
              return (
                <div key={e[1].id}>
                  <Checkbox
                    color="primary"
                    type="checkbox"
                    checked={e[1].isChecked}
                    onChange={el => handleCheckElement(el, e[1].id, e[1].npmValue)}
                  />
                  {e[1].value}
                </div>
              )
            })}
          </form>
        </ul>
      </div>
      <Button
        className="button"
        variant="contained"
        color="primary"
        onClick={() => navigator.clipboard.writeText(`${npmCopy}${npmData.join('')}`)}
      >
        Copy to Clipboard
        <OutPutValues />
      </Button>
    </>
  )
}
