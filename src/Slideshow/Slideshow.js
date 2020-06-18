import React from 'react';


class Slideshow extends React.Component {
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
                this.setState({
                              isLoaded: true,
                              items: available_voices,
                              selected_voice: 27,
                              synth: synth,
                              voices: available_voices 
                              
                });
	        });
        }
        else {
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
        
  }

  handleChange(event) {
        let value = event.target.value;
            this.setState({
              isLoaded: true,
              selected_voice: value
            });
  }

  playText(text, index){
      var utterThis = new SpeechSynthesisUtterance();
      utterThis.text = text;
      utterThis.voice = this.state.voices[index] ;
      utterThis.pitch = 0;
      utterThis.rate = 0.7;
      this.state.synth.speak(utterThis);
      utterThis.addEventListener('mark', function(event) { 
          console.log('A mark was reached: ' + event.name);
        });
  }

  cancelText(){
    this.state.synth.cancel();
  }
  

  
  render() {

      return (
        <div> test
        </div>
      );
  }
}


export default Slideshow;
