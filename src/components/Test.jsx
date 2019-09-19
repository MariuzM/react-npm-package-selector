import React from 'react'

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

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
      } catch (e) {
        setError(e)
      }
    }
    FetchData()
  }, [])
  return { response, error }
}

export default function Test() {
  const res = useFetch(`https://dog.ceo/api/breeds/image/random`, {})

  if (!res.response) {
    return <div>Loading...</div>
  }

  const dogName = res.response.status
  const imageUrl = res.response.message
  return (
    <div className="App">
      <div>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  )
}
