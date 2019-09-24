import React from 'react'

export default function Test3() {
  const INITIAL_STATE = { propA: false, propB: false }
  const [myState, setMyState] = React.useState(INITIAL_STATE)

  const { propA, propB } = myState
  console.log(propA)

  function toggle(e) {
    const { name } = e.target
    console.log(name)
    setMyState({ [name]: !myState[name] })
  }

  React.useEffect(() => {
    console.log(`myState`, myState)
  })

  return (
    <>
      PropA:
      <input type="checkbox" checked={propA} name="propA" onChange={toggle} />
      PropB:
      <input type="checkbox" checked={propB} name="propB" onChange={toggle} />
    </>
  )
}
