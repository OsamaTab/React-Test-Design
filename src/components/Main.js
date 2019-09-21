import React from 'react'
import Card from './Card'
import Num from './Num'
import CallApi from './CallApi'

function Main(){
    const time=new Date(2019,12,12,11);
    const houre=time.getHours();
    let timeOfDay
    const styles={
        fontSize:24
    }

    if(houre<12){
        timeOfDay=React.version
        styles.color="#434532"
    }
    else if(houre>=12 &&houre <17){
        timeOfDay=React.version
        styles.color="red"
    }
    else{
        timeOfDay=React.version
        styles.color="#7645632"
    }

    return (
        <main>
            <form action="/action_page.php">
                <input type="checkbox" name="vehicle1" value="Bike"/> I have a bike <br/>
                <input type="checkbox" name="vehicle2" value="Car"/> I have a car  <br/>
                <input type="checkbox" name="vehicle3" value="Boat" checked/> I have a boat <br/>

               </form>
               <h1 style={styles}>{timeOfDay}</h1>
               <Card 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
                />

                <Num/>
                <CallApi/>
        </main>
    )
}
export default Main;