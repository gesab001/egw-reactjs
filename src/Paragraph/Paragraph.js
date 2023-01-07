import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './paragraph.css';

function    checkIfItsABookBible(_string){
	  var bookNames = [

		'1 Samuel',
		'2 Samuel',
		'1 Kings',
		'2 Kings',
		'1 Chronicles',
		'2 Chronicles',
		'1 Corinthians',
		'2 Corinthians',
		'1 Thessalonians',
		'2 Thessalonians',
		'1 Timothy',
		'2 Timothy',
		'1 Peter',
		'2 Peter',
		'1 John',
		'2 John',
		'3 John'
	  ];
	  var result;
	  if (new RegExp(bookNames.join("|")).test(_string)) {
		 //alert(_string + "is a book");
		 result = true;
	  }else{
		 result = false;
	  }
	  return result;
	}
	
function getWordwithoutNumbers(word){
	    word = word.replace(/\n/g, " ");
        let pattern =  /\d+\s\w+/g;
		let result = word.match(pattern);
		console.log(word);
		console.log("result: " + result);
		try{
			for (var x=0; x<result.length;x++){
			   var item = result[x];
			   if (checkIfItsABookBible(item)){
			   }else{
				 let pattern = /\d+/g;
				 var pagenumber = item.match(pattern); 
				 word = word.replace(pagenumber, "" );

			   };
			}
		}catch(e){
		  //alert(word + e);
		}
		return word.trim().replace(/-/g, ' ').replace(/\s\s+/g, ' ');
}
class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      word: null,
	  jsonId: null,
    };
  }

  componentWillMount(){
	this.setState({jsonId: this.props.id});
	  
  }
  componentDidMount() {
	console.log("this.props.id: " + this.props.id);
	console.log("this.state.jsonId: " + this.state.jsonId);
    this.getWordJson(this.state.jsonId);
  }

  getWordJson(id){
    const url = "https://gesab001.github.io/assets/egw/"+this.props.bookcode+"/"+"book_"+this.props.bookcode+"_id_"+id+".json";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            word: this.removeNumbers(result.word)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
			jsonId: parseInt(this.state.jsonId) - 1
          });
        }
      )	  
  }
 
   showPreviousParagraph(){
	   console.log("this.state.jsonId before change: " + this.state.jsonId);

	   var index = parseInt(this.state.jsonId) - 1;
	   if (index<0){
	      index = 0;
	   }
	   console.log("index: " + index);
	   this.setState({jsonId: index.toString()});
	   console.log("this.state.jsonId: " + this.state.jsonId);
	   this.getWordJson(index);
	   
   }
   
    showNextParagraph(){
	   var index = parseInt(this.state.jsonId) + 1;
	   this.setState({jsonId: index.toString()});
	   this.getWordJson(index);
	   
   }
   
   removeNumbers(word){
      return getWordwithoutNumbers(word);
   }
  
  render() {
    const { error, isLoaded, items } = this.state;
    const fontSize = localStorage.getItem("fontsize");
    const mystyle = {
          fontSize: fontSize
        };
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <div>          <button onClick={() => this.showPreviousParagraph()} type="button" className="btn btn-primary">BACK</button>
		<button onClick={() => this.showNextParagraph()} type="button" className="btn btn-primary">NEXT</button>
		<h2 id={items.bookcode+items.page+items.paragraph}style={mystyle} className="shadow">{this.state.word}</h2><p style={mystyle} className="shadow"> ({items.bookcode}, p.{items.page}, par.{items.paragraph})</p><TextToSpeech id={items.bookcode+items.page+items.paragraph} selectedVoice={this.props.selectedVoice} text={this.state.word}/></div>

      );
    }
  }
}
export default Paragraph;
