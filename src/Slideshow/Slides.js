import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import VoicesList from '../TextToSpeech/VoicesList';
import './slideshow.css';
class Slides extends React.Component {
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
    this.state.booklist = this.props.booklist;
    const items = this.state.booklist;

    return (
         <div>
             <div id="demo" class="carousel slide" data-interval="false">
                  <ul class="carousel-indicators">
<li data-target="#demo" data-slide-to="0" class="active"></li>
{this.state.booklist.map((value,index) =>  {
                       return <li data-target="#demo" data-slide-to={index}></li>
                    })}
                   
                  </ul>

                    <div class="carousel-inner">
   <div class="carousel-item active">
                          <img src="https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg" alt="Los Angeles" width="1100" height="500"/>
                          <div class="carousel-caption">
                            <h3>today</h3>
                            <p>Read now</p>
                          </div>   
                        </div>
 {this.state.booklist.map((value,index) =>  {
                       return <div class="carousel-item">
                                 <img src="https://thumbs-prod.si-cdn.com/Rd7mIl8CQjsm86vJ4PQGU_xFi7A=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/53/27/5327288d-9a58-4375-9672-6db0df0222cf/42-72917447.jpg" alt="New York" width="1100" height="500"/>
                                 <div class="carousel-caption">
                                      <h1 class="shadow">{value.title}</h1>
                                      <Paragraph selectedVoice={this.props.selectedVoice} bookcode={value.bookcode} id={getCurrentID(value.bookcode)%value.total}/>
                                 </div> 
                             </div>
                    })}
                     
                       
                      </div>
                  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </a>
                    {this.state.booklist.map((value,index) =>  {
                       return <div class="carousel-item">
                                 <img src="https://thumbs-prod.si-cdn.com/Rd7mIl8CQjsm86vJ4PQGU_xFi7A=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/53/27/5327288d-9a58-4375-9672-6db0df0222cf/42-72917447.jpg" alt="New York" width="1100" height="500"/>
                                 <div class="carousel-caption">
                                      <h1>{value.title}</h1>
                                      <Paragraph selectedVoice={this.props.selectedVoice} bookcode={value.bookcode} id={getCurrentID(value.bookcode)%value.total}/>
                                 </div> 
                             </div>
                    })}
             </div>
         </div>);
  }
}

function getCurrentID(bookcode){

    var date1 = new Date();
    var date2 = new Date(2018, 5, 22);
    if (bookcode=="DA"){
       date2 = new Date(2016, 11, 30);
    }
    if (bookcode=="CL"){
       date2 = new Date(2016, 4,15);
    }
    var difference = date1.getTime() - date2.getTime();
    var minutesDifference = Math.floor(difference/1000/60/60/24);
    var currentID=minutesDifference;
    return currentID;
}
export default Slides;

/*
Notice that you now have three files in your project:
"App.js", "index.js", and "index.html".
*/


