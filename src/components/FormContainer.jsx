/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'

const datas = require('./db.json')

const CheckboxOrRadioGroup = ({
  title,
  options,
  setName,
  controlFunc,
  selectedOptions,
  type,
  test,
}) => {
  // console.log('=== Options', typeof options)
  // console.log('=== Test', typeof test)
  return (
    <div>
      <label>{title}</label>
      <div className="checkbox-group">
        {options.map(e => {
          return (
            <label key={e}>
              <input
                className="form-checkbox"
                name={setName}
                onChange={controlFunc}
                value={e}
                checked={selectedOptions.indexOf(e) > -1}
                type={type}
              />
              {`${e}`}
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dependencies2: [],
      dependencies: [],
      selectedDep: [],
    }
    this.handleDepSel = this.handleDepSel.bind(this)
  }

  componentDidMount() {
    const { dependencies2, dependencies } = datas
    this.setState({ dependencies })
    console.log(dependencies)

    this.setState({ dependencies2 })
    console.log(dependencies2)
  }

  handleDepSel(e) {
    const { selectedDep } = this.state
    const newSelection = e.target.value
    let newSelectionArray
    if (selectedDep.indexOf(newSelection) > -1) {
      newSelectionArray = selectedDep.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...selectedDep, newSelection]
      // console.log(newSelectionArray)
    }
    this.setState({ selectedDep: newSelectionArray })
  }

  render() {
    const {
      dependencies,
      selectedDep,
      dependencies2: { react },
    } = this.state

    console.log('TypeOf', typeof dependencies, '== Dependencies :', dependencies)
    console.log('TypeOf', typeof react, '== Dependencies > React :', react)

    return (
      <div>
        <CheckboxOrRadioGroup
          title="What dependencies you want to select?"
          setName="Deps"
          type="checkbox"
          controlFunc={this.handleDepSel}
          options={dependencies}
          selectedOptions={selectedDep}
        />
        {/* <div>{selectedDep}</div> */}
        {/* <div>{`${selectedDep}`}</div> */}
        <div>{`${selectedDep.join(', ')}`}</div>

        <br />

        <CheckboxOrRadioGroup
          title="THIS IS TEST"
          setName="Deps"
          type="checkbox"
          controlFunc={this.handleDepSel}
          options={dependencies}
          selectedOptions={selectedDep}
          test={react}
        />
      </div>
    )
  }
}
