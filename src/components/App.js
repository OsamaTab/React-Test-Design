import React from 'react'

import Header from "./Header";
import Main from "./Main";
import Game from "./TekTok";
import Footer from "./Footer";


function App() {
    return (
        <div>
            <Header />
            <div class="content container my-5">
                <Main />
                <div class='my-5'>
                    <Game />
                </div>              
            </div>
            <Footer />
        </div>
    )
}

export default App;