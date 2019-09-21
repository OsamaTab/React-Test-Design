import React from 'react'

import Header from "./Header";
import Main from "./Main";
import Game from "./TekTok";
import Footer from "./Footer";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    render(){
        if(this.state.isLoading == true){
            return (
                <div className='d-flex w-100' style={{height:'100vh'}}>
                    <div className="lds-dual-ring mx-auto my-auto" ></div>
                </div>
              )
        }
     
        return (
            <div>
                <Header />
                <div class="content container my-5">
                    <div class='my-5'>
                        <Game />
                    </div>              
                    <Main />
                </div>
                <Footer />
            </div>
        )
    
    }
}

export default App;