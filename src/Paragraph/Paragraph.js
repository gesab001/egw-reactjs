import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './paragraph.css';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      word: null
    };
  }

  componentDidMount() {
    const url = "https://gesab001.github.io/assets/egw/"+this.props.bookcode+"/"+"book_"+this.props.bookcode+"_id_"+this.props.id+".json";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            word: result.word//this.removeNumbers(result.word)
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

  removeNumbers(word){
     console.log("remove numbers"); 
     const withoutNumbers = word.replace(/\s+\d+\s+/g, ' ')
     return withoutNumbers;
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

        <div><h2 style={mystyle} className="shadow">{this.state.word} ({items.bookcode}, p.{items.page}, par.{items.paragraph})</h2><TextToSpeech selectedVoice={this.props.selectedVoice} text={this.state.word}/></div>

      );
    }
  }
}
export default Paragraph;
