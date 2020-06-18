import React from 'react';


class VoicesList extends React.Component {
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

  handleChange=(e)=> {
        let value = e.target.value;
            this.setState({
              isLoaded: true,
              selected_voice: value
            });
        this.props.selectedVoice(value);
  }


  render() {

      return (
        <div><p>{this.state.selected_voice}</p><select onChange={this.handleChange.bind(this)}> {this.state.items.map((value,index) =>  {
              if (index===27){
                return <option selected="selected" value={index}>{value.name}</option>
              }else{
                return <option value={index}>{value.name}</option>
              } 

          })}</select>
        </div>
      );
  }
}


export default VoicesList;
