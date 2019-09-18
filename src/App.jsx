import React from 'react'
import { Form } from 'react-bootstrap'
import npmPackages from './dataBase'

const { dependencies, devDependencies } = npmPackages
const divStyle = { backgroundColor: 'grey' }
// const log = () => console.log({ dependencies })

export default function App() {
  const [state, setState] = React.useState(dependencies)

  const handleCheckChieldElement = () => setState(!isChecked)
  console.log(state)
  // const handleCheckChieldElement = event => {
  //   const { name } = dependencies
  //   dependencies.forEach(e => {
  //     if (e.id === event.target.id) {
  //       e.isChecked = event.target.checked
  //     }
  //   })
  //   console.log(state)
  //   // setState({ state })
  // }

  return (
    <>
      <div>
        {dependencies.map(e => {
          const { id, name } = e
          return (
            <Form.Group controlId={id} key={id}>
              <Form.Check
                type="checkbox"
                label={name}
                onClick={handleCheckChieldElement}
              />
            </Form.Group>
          )
        })}
      </div>
      <br />
      <div style={divStyle}>
        {devDependencies.map(e => {
          const { id, name } = e
          return (
            <Form.Group controlId={id} key={id}>
              <Form.Check type="checkbox" label={name} />
            </Form.Group>
          )
        })}
      </div>
    </>
  )
}
