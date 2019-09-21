import React from 'react'

class Num extends React.Component {
    constructor() {
        super()
        this.state = {
            count:0
        }
        this.Nu=this.Nu.bind(this)
    }
    Nu(){
        this.setState(pervist => {
            return {
            count: pervist.count + 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Nu}>Click me</button>
            </div>
        )
    }

}
export default Num