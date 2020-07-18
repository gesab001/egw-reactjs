import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
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

    const { error, isLoaded, imagelist } = this.state;
    const default_image = "https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg";

    if (error) {
      return <div>Error: {error.message}</div>; 
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
   return (
        
             <div id="demo" className="carousel slide" keyboard="true" data-wrap="false" data-interval="false">
                  <ul className="carousel-indicators">
<li data-target="#demo" data-slide-to="0" className="active"></li>
{this.props.booklist.map((value,index) =>  {
                       return <li data-target="#demo" data-slide-to={index} key={index}></li>
                    })}
                   
                  </ul>

                  <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100" src={default_image} alt="Los Angeles"/>
                          <div className="carousel-caption">
                            <h3>today</h3>
                            <p>Read now</p>
                          </div>   
                        </div>
        {this.props.booklist.map((value,index) =>  {
             const bookcode = value.bookcode;
             var imageurl = default_image;
             try {
                 var totalimages = imagelist[bookcode].length;
                 var randomindex = Math.floor((Math.random() * totalimages) + 0);
                 imageurl = imagelist[bookcode][randomindex];
                }catch(err){
              }
                       return <div className="carousel-item" key={index}>
                                 <img className="d-block w-100" src={imageurl} alt="New York" />
                                 <div className="carousel-caption">
                                      <h1 className="shadow">{value.title}</h1>
                                      <Paragraph className="shadow" selectedVoice={this.props.selectedVoice} bookcode={value.bookcode} id={getCurrentID(value.bookcode)%value.total}/>
                                 </div> 
                             </div>
                    })}
                     
                       
                      </div>
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </a>
                   
             </div>);

    }
  
  }
}

function getCurrentID(bookcode){

    var date1 = new Date();
    var date2 = new Date(2018, 5, 22);
    if (bookcode==="DA"){
       date2 = new Date(2016, 11, 30);
    }
    if (bookcode==="CL"){
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


