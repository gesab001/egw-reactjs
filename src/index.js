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
      selectedVoice: 27
    };
  }

  handleOnChange=(e)=> {
    this.setState({
      selectedVoice: e
    });
  }
  


  render() {
      return (
        <div>      
          <Router>
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark  fixed-top">

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                          <Link class="nav-link" to={"/"}>Home</Link>
                      </li> 
                      <li class="nav-item">
                          <Link class="nav-link" to={"/slideshow/"+this.state.selectedVoice}>Slideshow</Link>
                      </li>   
                      <li class="nav-item">
                          <VoicesList selectedVoice={this.handleOnChange.bind(this)}/>
                      </li>
                     
                    </ul>
                  </div>  
                </nav>
              <Route exact path="/"  
                     render={(props) => (
                        <App {...props} selectedVoice={this.state.selectedVoice} />
                      )} 
              />
              <Route path="/slideshow:selectedVoice" component={Slideshow} />
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
