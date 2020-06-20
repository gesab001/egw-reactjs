(this.webpackJsonpegw=this.webpackJsonpegw||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(4),o=a(6),i=a(5),c=a(0),r=a.n(c),l=a(18),d=a.n(l),u=(a(25),a(12)),h=a(1),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,selected_voice:null,items:[],synth:null,voices:null},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t;0===window.speechSynthesis.getVoices().length?window.speechSynthesis.addEventListener("voiceschanged",(function(){e=window.speechSynthesis.getVoices(),t=window.speechSynthesis,this.setState({isLoaded:!0,items:e,selected_voice:27,synth:t,voices:e})})):(e=window.speechSynthesis.getVoices(),t=window.speechSynthesis,this.setState({isLoaded:!0,items:e,selected_voice:27,synth:t,voices:e}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({isLoaded:!0,selected_voice:t})}},{key:"playText",value:function(e,t){var a=new SpeechSynthesisUtterance;a.text=e,a.voice=this.state.voices[t],a.pitch=0,a.rate=.7,this.state.synth.speak(a),a.addEventListener("mark",(function(e){console.log("A mark was reached: "+e.name)}))}},{key:"cancelText",value:function(){this.state.synth.cancel()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.playText(e.props.text,e.props.selectedVoice)}},"play"),r.a.createElement("button",{onClick:function(){return e.cancelText()}},"stop"))}}]),a}(r.a.Component),v=(a(26),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://gesab001.github.io/assets/egw/book_"+this.props.bookcode+"_id_"+this.props.id+".json";fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,s={fontSize:localStorage.getItem("fontsize")};return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",null,r.a.createElement("h2",{style:s,class:"shadow"},n.word," (",n.bookcode,", p.",n.page,", par.",n.paragraph,")"),r.a.createElement(m,{selectedVoice:this.props.selectedVoice,text:n.word})):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component)),p=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).updateSelectedVoice=function(e){var t=e.target.value;s.setState({isLoaded:!0,selected_voice:t}),s.props.selectedVoice(t)},s.state={error:null,isLoaded:!1,selected_voice:null,items:[],synth:null,voices:null},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t;0===window.speechSynthesis.getVoices().length?window.speechSynthesis.addEventListener("voiceschanged",(function(){e=window.speechSynthesis.getVoices(),t=window.speechSynthesis,this.setState({isLoaded:!0,items:e,selected_voice:27,synth:t,voices:e})})):(e=window.speechSynthesis.getVoices(),t=window.speechSynthesis,this.setState({isLoaded:!0,items:e,selected_voice:27,synth:t,voices:e}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:this.updateSelectedVoice.bind(this)}," ",this.state.items.map((function(e,t){return 27===t?r.a.createElement("option",{selected:"selected",value:t},e.name):r.a.createElement("option",{value:t},e.name)}))))}}]),a}(r.a.Component);a(27);function f(e){var t=new Date,a=new Date(2018,5,22);"DA"==e&&(a=new Date(2016,11,30)),"CL"==e&&(a=new Date(2016,4,15));var n=t.getTime()-a.getTime();return Math.floor(n/1e3/60/60/24)}var b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleOnChange=function(e){s.setState({selectedVoice:e})},s.state={error:null,isLoaded:!1,booklist:[],imagelist:[],selectedVoice:27},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/images/imagelist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,imagelist:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,s=(t.items,t.imagelist);this.state.booklist=this.props.booklist;var o="https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg";return a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("div",{id:"demo",class:"carousel slide",keyboard:"true","data-wrap":"false","data-interval":"false"},r.a.createElement("ul",{class:"carousel-indicators"},r.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",class:"active"}),this.state.booklist.map((function(e,t){return r.a.createElement("li",{"data-target":"#demo","data-slide-to":t})}))),r.a.createElement("div",{class:"carousel-inner"},r.a.createElement("div",{class:"carousel-item active"},r.a.createElement("img",{class:"d-block w-100",src:o,alt:"Los Angeles"}),r.a.createElement("div",{class:"carousel-caption"},r.a.createElement("h3",null,"today"),r.a.createElement("p",null,"Read now"))),this.state.booklist.map((function(t,a){var n=t.bookcode,i=o;try{var c=s[n].length,l=Math.floor(Math.random()*c+0);i=s[n][l]}catch(d){}return r.a.createElement("div",{class:"carousel-item"},r.a.createElement("img",{class:"d-block w-100",src:i,alt:"New York"}),r.a.createElement("div",{class:"carousel-caption"},r.a.createElement("h1",{class:"shadow"},t.title),r.a.createElement(v,{class:"shadow",selectedVoice:e.props.selectedVoice,bookcode:t.bookcode,id:f(t.bookcode)%t.total})))}))),r.a.createElement("a",{class:"carousel-control-prev",href:"#demo","data-slide":"prev"},r.a.createElement("span",{class:"carousel-control-prev-icon"})),r.a.createElement("a",{class:"carousel-control-next",href:"#demo","data-slide":"next"},r.a.createElement("span",{class:"carousel-control-next-icon"}))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/booklist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{class:"container-fluid"},r.a.createElement(b,{selectedVoice:this.props.selectedVoice,booklist:n})):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);a(28);function E(e){var t=new Date,a=new Date(2018,5,22);"DA"==e&&(a=new Date(2016,11,30)),"CL"==e&&(a=new Date(2016,4,15));var n=t.getTime()-a.getTime();return Math.floor(n/1e3/60/60/24)}var w=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleOnChange=function(e){s.setState({selectedVoice:e})},s.state={error:null,isLoaded:!1,booklist:[],selectedVoice:27},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;this.state.booklist=this.props.booklist;return r.a.createElement("div",null,r.a.createElement("div",{class:"card-columns"},"  ",this.state.booklist.map((function(t,a){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header"},r.a.createElement("h5",{class:"card-title"}," ",t.title)),r.a.createElement("div",{class:"card-body bg-secondary"},r.a.createElement(v,{class:"card-text",selectedVoice:e.props.selectedVoice,bookcode:t.bookcode,id:E(t.bookcode)%t.total})))}))))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/booklist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement(w,{selectedVoice:this.props.selectedVoice,booklist:n}):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).updateSelectedVoice=function(e){s.setState({selectedVoice:e})},s.biggerFont=function(e){var t=s.state.slide_font_size+.2;s.setState({slide_font_size:t});var a=t+"vw";localStorage.setItem("fontsize",a)},s.smallerFont=function(e){var t=s.state.slide_font_size-.2;s.setState({slide_font_size:t});var a=t+"vw";localStorage.setItem("fontsize",a)},s.state={error:null,isLoaded:!1,booklist:[],selectedVoice:27,slide_font_size:2},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container-fluid"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar bg-dark navbar-dark  fixed-top"},r.a.createElement("ul",{class:"nav"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(u.b,{class:"nav-link",to:"/egw-reactjs/"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(u.b,{class:"nav-link",to:"/egw-reactjs/slideshow"},"Slideshow")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(p,{selectedVoice:this.updateSelectedVoice.bind(this)})),r.a.createElement("li",{class:"nav-item"},r.a.createElement("button",{onClick:this.biggerFont.bind(this)},"+")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("button",{onClick:this.smallerFont.bind(this)},"-")))),r.a.createElement(h.a,{exact:!0,path:"/egw-reactjs/",render:function(t){return r.a.createElement(k,Object.assign({},t,{selectedVoice:e.state.selectedVoice}))}}),r.a.createElement(h.a,{exact:!0,path:"/egw-reactjs/slideshow/",render:function(t){return r.a.createElement(g,Object.assign({},t,{selectedVoice:e.state.selectedVoice}))}}))))}}]),a}(r.a.Component);d.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0cdf389b.chunk.js.map