import React from 'react'

class Card extends React.Component{
    render(){
    return (
        <div>
             <img src={this.props.contact.imgUrl}/>
            <h3>{this.props.contact.name}</h3>
            <p>Phone: {this.props.contact.phone}</p>
            <p>Email: {this.props.contact.email}</p>
        </div>
    )
    }
}

export default Card