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
      imagelist: [],
      selectedVoice: 27
    };
  }
  handleOnChange=(e)=> {
    this.setState({
      selectedVoice: e
    });
  }

 componentDidMount() {

    const url = "https://gesab001.github.io/assets/egw/images/imagelist.json";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            imagelist: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, items, imagelist } = this.state;
    this.state.booklist = this.props.booklist;

    if (error) {
      return <div>Error: {error.message}</div>; 
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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
                          <img class="d-block w-100" src="https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg" alt="Los Angeles"/>
                          <div class="carousel-caption">
                            <h3>today</h3>
                            <p>Read now</p>
                          </div>   
                        </div>
        {this.state.booklist.map((value,index) =>  {
             const bookcode = value.bookcode;
             var imageurl = "https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg";
             try {
                 imageurl = imagelist[bookcode][0];
                }catch(err){
              }
                       return <div class="carousel-item">
                                 <img class="d-block w-100" src={imageurl} alt="New York" />
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
                   
             </div>
         </div>);

    }
  
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


