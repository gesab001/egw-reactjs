(this.webpackJsonpegw=this.webpackJsonpegw||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(4),o=a(6),c=a(5),r=a(0),i=a.n(r),l=a(18),d=a.n(l),u=(a(25),a(12)),m=a(1),h=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,selected_voice:null,items:[],synth:null,voices:null},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t;0===window.speechSynthesis.getVoices().length&&window.speechSynthesis.addEventListener("voiceschanged",(function(){e=window.speechSynthesis.getVoices(),t=window.speechSynthesis})),e=window.speechSynthesis.getVoices(),t=window.speechSynthesis,this.setState({isLoaded:!0,items:e,selected_voice:27,synth:t,voices:e})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({isLoaded:!0,selected_voice:t})}},{key:"playText",value:function(e,t){var a;0===window.speechSynthesis.getVoices().length&&window.speechSynthesis.addEventListener("voiceschanged",(function(){window.speechSynthesis.getVoices(),a=window.speechSynthesis})),window.speechSynthesis.getVoices(),a=window.speechSynthesis,alert(e);var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.pitch=0,n.rate=.7,a.speak(n),this.setState({synth:a})}},{key:"cancelText",value:function(){alert("stop"),this.state.synth.cancel()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.playText(e.props.text,e.props.selectedVoice)},type:"button",className:"btn btn-primary"},"play"),i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.cancelText()}},"stop"))}}]),a}(i.a.Component),v=(a(26),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[],word:null},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://gesab001.github.io/assets/egw/"+this.props.bookcode+"/book_"+this.props.bookcode+"_id_"+this.props.id+".json";fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,word:t.word})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"removeNumbers",value:function(e){return console.log("remove numbers"),e.replace(/\s+\d+\s+/g," ")}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,s={fontSize:localStorage.getItem("fontsize")};return t?i.a.createElement("div",null,"Error: ",t.message):a?i.a.createElement("div",null,i.a.createElement("h2",{style:s,className:"shadow"},this.state.word," (",n.bookcode,", p.",n.page,", par.",n.paragraph,")"),i.a.createElement(h,{selectedVoice:this.props.selectedVoice,text:this.state.word})):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component));a(27);function p(e){var t=new Date,a=new Date(2018,5,22);"DA"===e&&(a=new Date(2016,11,30)),"CL"===e&&(a=new Date(2016,4,15));var n=t.getTime()-a.getTime();return Math.floor(n/1e3/60/60/24)}var f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleOnChange=function(e){s.setState({selectedVoice:e})},s.state={error:null,isLoaded:!1,booklist:[],imagelist:[],selectedVoice:27},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/images/imagelist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,imagelist:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,s=t.imagelist,o="https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg";return a?i.a.createElement("div",null,"Error: ",a.message):n?i.a.createElement("div",{id:"demo",className:"carousel slide",keyboard:"true","data-wrap":"false","data-interval":"false"},i.a.createElement("ul",{className:"carousel-indicators"},i.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),this.props.booklist.map((function(e,t){return i.a.createElement("li",{"data-target":"#demo","data-slide-to":t,key:t})}))),i.a.createElement("div",{className:"carousel-inner"},i.a.createElement("div",{className:"carousel-item active"},i.a.createElement("img",{className:"d-block w-100",src:o,alt:"Los Angeles"}),i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h3",null,"today"),i.a.createElement("p",null,"Read now"))),this.props.booklist.map((function(t,a){var n=t.bookcode,c=o;try{var r=s[n].length,l=Math.floor(Math.random()*r+0);c=s[n][l]}catch(d){}return i.a.createElement("div",{className:"carousel-item",key:a},i.a.createElement("img",{className:"d-block w-100",src:c,alt:"New York"}),i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h1",{className:"shadow"},t.title),i.a.createElement(v,{className:"shadow",selectedVoice:e.props.selectedVoice,bookcode:t.bookcode,id:p(t.bookcode)%t.total})))}))),i.a.createElement("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev"},i.a.createElement("span",{className:"carousel-control-prev-icon"})),i.a.createElement("a",{className:"carousel-control-next",href:"#demo","data-slide":"next"},i.a.createElement("span",{className:"carousel-control-next-icon"}))):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/booklist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?i.a.createElement("div",null,"Error: ",t.message):a?i.a.createElement("div",{className:"container-fluid"},i.a.createElement(f,{selectedVoice:this.props.selectedVoice,booklist:n})):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component);a(28);function g(e){var t=new Date,a=new Date(2018,5,22);"DA"===e&&(a=new Date(2016,11,30)),"CL"===e&&(a=new Date(2016,4,15));var n=t.getTime()-a.getTime();return Math.floor(n/1e3/60/60/24)}var w=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleOnChange=function(e){s.setState({selectedVoice:e})},s.state={error:null,isLoaded:!1,booklist:[],selectedVoice:27},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"card-columns"},"  ",this.props.booklist.map((function(t,a){return i.a.createElement("div",{className:"card",key:a},i.a.createElement("div",{className:"card-header"},i.a.createElement("h5",{className:"card-title"}," ",t.title)),i.a.createElement("div",{className:"card-body bg-secondary"},i.a.createElement(v,{className:"card-text",selectedVoice:e.props.selectedVoice,bookcode:t.bookcode,id:g(t.bookcode)%t.total})))}))))}}]),a}(i.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/booklist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?i.a.createElement("div",null,"Error: ",t.message):a?i.a.createElement(w,{selectedVoice:this.props.selectedVoice,booklist:n}):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).updateSelectedVoice=function(e){s.setState({selectedVoice:e})},s.biggerFont=function(e){var t=s.state.slide_font_size+.2;s.setState({slide_font_size:t});var a=t+"vw";localStorage.setItem("fontsize",a)},s.smallerFont=function(e){var t=s.state.slide_font_size-.2;s.setState({slide_font_size:t});var a=t+"vw";localStorage.setItem("fontsize",a)},s.state={error:null,isLoaded:!1,booklist:[],selectedVoice:27,slide_font_size:2},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar bg-dark navbar-dark  fixed-top"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{className:"nav-link",to:"/egw-reactjs/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{className:"nav-link",to:"/egw-reactjs/slideshow"},"Slideshow")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("button",{onClick:this.biggerFont.bind(this)},"+")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("button",{onClick:this.smallerFont.bind(this)},"-")))),i.a.createElement(m.a,{exact:!0,path:"/egw-reactjs/",render:function(t){return i.a.createElement(E,Object.assign({},t,{selectedVoice:e.state.selectedVoice}))}}),i.a.createElement(m.a,{exact:!0,path:"/egw-reactjs/slideshow/",render:function(t){return i.a.createElement(b,Object.assign({},t,{selectedVoice:e.state.selectedVoice}))}}))))}}]),a}(i.a.Component);d.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b54f68b.chunk.js.map