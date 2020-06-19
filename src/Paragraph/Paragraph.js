import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './paragraph.css';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const url = "https://gesab001.github.io/assets/egw/book_"+this.props.bookcode+"_id_"+this.props.id+".json";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <div><h2 class="shadow">{items.word} ({items.bookcode}, p.{items.page}, par.{items.paragraph})</h2><TextToSpeech selectedVoice={this.props.selectedVoice} text={items.word}/></div>

      );
    }
  }
}
export default Paragraph;
