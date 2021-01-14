import React, { Component } from 'react'
import StarWarsText from '../landing/starWarsText'
//import dStar from '../../assets/PngItem_1076314.png'
//import p1 from '../../assets/PngItem_1101489.png'



class Dashboard extends Component{

    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <StarWarsText />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Dashboard