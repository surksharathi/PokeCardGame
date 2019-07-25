import React, { Component } from 'react'

export default class newBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            color: "",
        }
    }


    handleChange = (e) => {
        console.log(e.target)
        console.log(e.target.value)
        this.setState = ({ height: e.target.value })
    }
    render() {
        return (

            <form>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type="text"
                        id="height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>

            </form>


        );
    }
}
