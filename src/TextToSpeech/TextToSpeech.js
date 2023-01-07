import React from 'react';


function play(originalText, id, textLength){

  const synth = window.speechSynthesis;
  var wordIndex = 0;

  document.getElementById(id).innerHTML = originalText;
  var text = document.getElementById(id).innerHTML;
  var textsplit = text.split(" ");
  console.log("textsplit: " + textsplit);
  const utterThis = new SpeechSynthesisUtterance(text);

  
  utterThis.addEventListener('boundary', (event) => {
      document.getElementById(id).innerHTML = originalText;
	  console.log(`${event.name} boundary reached after ${event.elapsedTime} seconds.`);
	  if (event.name=="word"){
		try{  
		  console.log("wordIndex: " + wordIndex);

		  var wordToHighlight = textsplit[wordIndex];
		  console.log("wordToHighlight: " + wordToHighlight);
		 
		  var span = "<span style='color: red; font-size:'>" + wordToHighlight + "</span>";

		  var startIndex = event.charIndex;
		  var endIndex = event.charIndex + wordToHighlight.length;
		  console.log("startIndex: " + event.charIndex);
		  console.log("endIndex: " + endIndex);		  
		  var highlightedText = document.getElementById(id).innerHTML.substring(0, startIndex) + span + document.getElementById(id).innerHTML.substring(endIndex, textLength) ;

          document.getElementById(id).innerHTML = highlightedText;
		  wordIndex = wordIndex + 1;
		}catch(e){
          console.log(e);
		}			
      }
  });
  synth.speak(utterThis);
}


class TextToSpeech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      selected_voice: null,
	  id: null,
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

  playText(text, index, paragraphId){
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
      alert(text);
      var utterThis = new SpeechSynthesisUtterance();
      utterThis.text = text;
      //utterThis.voice = available_voices[0] ;
      utterThis.lang = 'en-US';
      utterThis.pitch = 0;
      utterThis.rate = 0.7;
      //synth.speak(utterThis);
      //this.setState({synth: synth});
	  var originalText = document.getElementById(paragraphId).innerHTML;
	  var textLength = originalText.length;
	  play(originalText, paragraphId, textLength);
  }

  cancelText(){
    alert("stop");
    this.state.synth.cancel();
  }
  

  
  render() {

      return (
        <div>
          <button onClick={() => this.playText(this.props.text, this.props.selectedVoice,  this.props.id)} type="button" className="btn btn-primary">play</button>
          <button type="button" className="btn btn-danger" onClick={() => this.cancelText()}>stop</button>  
        </div>
      );
  }
}


export default TextToSpeech;
