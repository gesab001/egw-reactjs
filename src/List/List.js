import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import './list.css';

class List extends React.Component {
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
 
                <div  className="card-columns">  {this.props.booklist.map((value,index) =>  {
                      return <div className="card" key={index} ><div className="card-header"><h5 className="card-title"> {value.title}</h5></div><div className="card-body bg-secondary"><Paragraph className="card-text" selectedVoice={this.props.selectedVoice} bookcode={value.bookcode} id={getCurrentID(value.bookcode)%value.total}/></div></div>
                  })}</div>
         </div>);
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
export default List;

/*
Notice that you now have three files in your project:
"App.js", "index.js", and "index.html".
*/


