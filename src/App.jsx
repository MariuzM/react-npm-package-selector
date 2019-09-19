// import React, { useState, useEffect } from 'react'
// import { Form } from 'react-bootstrap'
// import npmPackages from './dataBase'
// import Test from './components/Test'

// const divStyle = { backgroundColor: 'grey' }

// export default function App() {
//   // const { dependencies, devDependencies } = npmPackages
//   // const [state, setState] = React.useState(dependencies)

//   // const handleCheckChieldElement = event => {
//   //   dependencies.forEach(e => {
//   //     if (e.id === event.target.id) {
//   //       e.isChecked = event.target.checked
//   //       setState(state)
//   //     }
//   //   })
//   // }

//   // function test() {
//   //   React.useEffect(() =>
//   //     fetch('./fake_db.json')
//   //       .then(res => res.json())
//   //       .then(data => {
//   //         console.log(data)
//   //       }),
//   //   )
//   //   return null
//   // }

//   // const handlePetSelection = e => {
//   //   const newSelection = e.target.value
//   //   let newSelectionArray
//   //   if (state.key.indexOf(newSelection) > -1) {
//   //     newSelectionArray = state.selectedPets.filter(s => s !== newSelection)
//   //   } else {
//   //     newSelectionArray = [...state.selectedPets, newSelection]
//   //   }
//   //   setState({ selectedPets: newSelectionArray }, () =>
//   //     console.log('pet selection', state.selectedPets),
//   //   )
//   // }

//   return (
//     <>
//       <Test />
//       {/* <button type="button" onClick={test}>
//         Test
//       </button> */}
//       {/* <div>
//         {dependencies.map(e => {
//           const { id, name, isChecked } = e
//           return (
//             <Form.Group controlId={id} key={id}>
//               <Form.Check
//                 type="checkbox"
//                 label={name}
//                 onClick={handleCheckChieldElement}
//               />
//             </Form.Group>
//           )
//         })}
//       </div>
//       <br /> */}
//       {/* <div style={divStyle}>
//         {devDependencies.map(e => {
//           const { id, name } = e
//           return (
//             <Form.Group controlId={id} key={id}>
//               <Form.Check type="checkbox" label={name} />
//             </Form.Group>
//           )
//         })}
//       </div> */}
//     </>
//   )
// }

import React from 'react'
import FormContainer from './components/FormContainer'

export default function App() {
  return <FormContainer />
}
