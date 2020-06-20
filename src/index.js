import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Slideshow from './Slideshow/Slideshow';
import App from './App';
import * as serviceWorker from './serviceWorker';
import VoicesList from './TextToSpeech/VoicesList';

class Index extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      booklist: [],
      selectedVoice: 27,
      slide_font_size: 2
    };
  }

  updateSelectedVoice=(e)=> {
    this.setState({
      selectedVoice: e
    });
  }
  
  biggerFont=(e)=> {
    const newsize = this.state.slide_font_size + 0.2;
    this.setState({
      slide_font_size: newsize
    }); 
    const fontsizestring = newsize + "vw";
    localStorage.setItem("fontsize", fontsizestring);
  }

  smallerFont=(e)=> {
    const newsize = this.state.slide_font_size - 0.2;
    this.setState({
      slide_font_size: newsize
    }); 
    const fontsizestring = newsize + "vw";
    localStorage.setItem("fontsize", fontsizestring);
  }

  render() {

      return (
        <div class="container-fluid">      
          <Router>
            <div>
                <nav class="navbar bg-dark navbar-dark  fixed-top">

                 
                
                    <ul class="nav">
                      <li class="nav-item">
                          <Link class="nav-link" to={"/egw-reactjs/"}>Home</Link>
                      </li> 
                      <li class="nav-item">
                          <Link class="nav-link" to={"/egw-reactjs/slideshow"}>Slideshow</Link>
                      </li>   
                    
                     <li class="nav-item">
                          <button onClick={this.biggerFont.bind(this)}>+</button>
                      </li>
                     <li class="nav-item">
                          <button onClick={this.smallerFont.bind(this)}>-</button>
                      </li>
                        <li class="nav-item">

                      </li>                    
                    </ul>

                </nav>
  <VoicesList selectedVoice={this.updateSelectedVoice.bind(this)}/>
              <Route exact path="/egw-reactjs/"  
                     render={(props) => (
                        <App {...props} selectedVoice={this.state.selectedVoice} />
                      )} 
              />
              <Route exact path="/egw-reactjs/slideshow/"  
                     render={(props) => (
                        <Slideshow {...props} selectedVoice={this.state.selectedVoice} />
                      )} 
              />
            </div>
          </Router>
        </div>


      );
  }
}
ReactDOM.render(<Index/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
