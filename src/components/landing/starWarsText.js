import React, {Component} from 'react'
import '../../assets/css/starwarstext.css'
import { withRouter } from "react-router-dom";



class StarWarsText extends Component {
    componentDidMount(){
        let scroll_text = document.querySelector('.scroll-text');
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        var max;
        if(isMobile){
            max = 700;
        }else{
            max = 1400;
        }

        document.body.style.backgroundColor =  "black";
        document.body.style.overfolw =  "hidden";
        document.body.style.fontFamily = 'Roboto';
        document.body.style.margin= "0 0 0 0";
        document.body.style.position= "relative";

        document.body.style.content = '';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '50%';
        

       let interval = setInterval(() => {
           if(scroll_text.offsetTop < -max){
               console.log(scroll_text.offsetTop);
               clearInterval(interval);
              this.props.history.push('/space')
           } 
        }, 1000);
        
        

        
        
    }
    componentWillUnmount(){
        document.body.style.backgroundColor =  "";
        document.body.style.overfolw =  "";
        document.body.style.fontFamily = '';
        document.body.style.margin= "";
        document.body.style.position= "";

        document.body.style.content = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';

    }
    render(){
    return(
        <div className="b1">
            <div className="wrapper">
            <div className="scroll-text">
                <h1>Welcome To</h1>
                <h2>Web Grand Tour</h2>
                <p>Get ready for an exciting journey of space with many of stars and four planets revolving around an big one, all in the web devleoped using react and threejs.  </p>
                <p>Click on any planet in the space to explore more about that planet from inside.</p>
                <h1>Developed By:</h1>
                <h1>Gouransh Sachdeva</h1>
                <h2>UI/ UX Designer & Web Developer</h2>
            </div>
        </div>  
        </div>  
    )
    }
}

export default withRouter(StarWarsText)