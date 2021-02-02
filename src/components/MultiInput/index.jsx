import React, { Component } from "react"

export default class MultiInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input1: "",
      input2: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(input, value) {
    this.setState({
      [input]: value,
      copied: false,
    })
  }

  // handle copy to clipboard
  copyToClipboard = e => {
    this.refs.textArea.select()
    document.execCommand("copy")
    e.target.focus()
    this.setState({ btnText: "Copied!" })
  }

  render() {
    return (
      <div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div>
              <P>
                Input1: <span>{this.state.input1}</span>
              </P>
            </div>
            <div className="flex flex-grow">
              <div className="inline-flex">
                <TextField
                  aria-describedby="input1"
                  label="Input1"
                  name="input1"
                  id="value01"
                  onChange={e => this.handleChange("input1", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <P>
              Input2: <span>{this.state.input2}</span>
            </P>

            <TextArea
              aria-describedby="input2"
              label="Input2"
              name="input2"
              id="value02"
              onChange={e => this.handleChange("input2", e.target.value)}
            />
          </div>
        </div>
        <br />
      </div>
    )
  }
}
