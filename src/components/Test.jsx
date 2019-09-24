/* eslint-disable react/prop-types */
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import './App.css'

const testDependencies = {
  dependencies: [
    {
      id: 1,
      nameValue: 'React',
      npmValue: 'react',
      isChecked: false,
    },
    {
      id: 2,
      nameValue: 'React Router',
      npmValue: 'react-router',
      isChecked: false,
    },
  ],
}
const { dependencies } = testDependencies

export default function Test() {
  const [set, setSet] = React.useState(dependencies)
  console.log(set)

  function buttonClick(e) {
    // const { isChecked } = dependencies
    // setSet(e.target.value)
    // console.log(setSet({ isChecked: !set.isChecked }))
    // console.log('Test', setSet({ isChecked: true }))
  }

  return (
    <div className="container">
      {/* <div>
        {dependencies.forEach(({ id, nameValue }) => {
          console.log(id)
          return <div type="button" key={id} />
        })}
      </div>

      <div>
        {Object.entries(set).map(c => {
          console.log(c[0])
          return <Button key={c[1].id}>{c[1].nameValue}</Button>
        })}
      </div> */}

      {/* <div>
        {Object.keys(set).map(c => {
          // console.log(set[c].id)
          return (
            <p key={set[c].id}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label={set[c].nameValue}
                onClick={() => setSet(!set[c].isChecked)}
              />
            </p>
          )
        })}
      </div> */}

      <div>
        {Object.keys(set).map(c => {
          return (
            <div key={set[c].id}>
              <button type="button" onClick={() => setSet(!set[c].isChecked)}>
                {set[c].nameValue}
                {`Current status: ${set[c].nameValue ? 'on' : 'off'}`}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// export default function Test() {
//   const [planets, setPlanets] = React.useState({})

//   async function fetchData() {
//     const res = await fetch('https://swapi.co/api/planets/4')
//     res
//       .json()
//       .then(r => {
//         setPlanets(r)
//       })
//       .catch(err => console.log(err))
//   }

//   setTimeout(() => {
//     console.log(planets.name, 'test')
//   }, 2000)

//   React.useEffect(() => {
//     fetchData()
//   })

//   return (
//     <div>
//       <span>{JSON.stringify(planets)}</span>
//     </div>
//   )
// }

// const useFetch = (url, options) => {
//   const [response, setResponse] = React.useState(null)
//   const [error, setError] = React.useState(null)

//   React.useEffect(() => {
//     const FetchData = async () => {
//       try {
//         const res = await fetch(url, options)
//         const json = await res.json()
//         setResponse(json)
//       } catch (e) {
//         setError(e)
//       }
//     }
//     FetchData()
//   }, [])
//   return { response, error }
// }

// export default function Test() {
//   const res = useFetch(`https://dog.ceo/api/breeds/image/random`, {})

//   if (!res.response) {
//     return <div>Loading...</div>
//   }

//   const dogName = res.response.status
//   const imageUrl = res.response.message
//   return (
//     <div className="App">
//       <div>
//         <h3>{dogName}</h3>
//         <div>
//           <img src={imageUrl} alt="avatar" />
//         </div>
//       </div>
//     </div>
//   )
// }
