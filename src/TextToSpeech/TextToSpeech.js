import React from 'react';


class TextToSpeech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      selected_voice: null,
      items: [],
      synth: null,
      voices: null,
      
    };
    
  }
  componentDidMount() {
        var available_voices;
        var synth;
            
        // list of languages is probably not loaded, wait for it
        if(window.speechSynthesis.getVoices().length === 0) {
	        window.speechSynthesis.addEventListener('voiceschanged', function() {
		        available_voices = window.speechSynthesis.getVoices();
                synth = window.speechSynthesis;
	        });
        }
        available_voices = window.speechSynthesis.getVoices();
        synth = window.speechSynthesis;
        this.setState({
          isLoaded: true,
          items: available_voices,
          selected_voice: 27,
          synth: synth,
          voices: available_voices
        });
  }

  handleChange(event) {
        let value = event.target.value;
            this.setState({
              isLoaded: true,
              selected_voice: value
            });
  }

  playText(text, index){
      alert(text);
      var utterThis = new SpeechSynthesisUtterance();
      utterThis.text = text;
      //utterThis.voice = this.state.voices[index] ;
      utterThis.lang = 'en-US';
      utterThis.pitch = 0;
      utterThis.rate = 0.7;
      this.state.synth.speak(utterThis);
  }

  cancelText(){
    alert("stop");
    this.state.synth.cancel();
  }
  

  
  render() {

      return (
        <div>
          <button onClick={() => this.playText(this.props.text, this.props.selectedVoice)} type="button" className="btn btn-primary">play</button>
          <button type="button" className="btn btn-danger" onClick={() => this.cancelText()}>stop</button>  
        </div>
      );
  }
}


export default TextToSpeech;
