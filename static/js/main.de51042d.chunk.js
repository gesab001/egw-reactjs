(this.webpackJsonpegw=this.webpackJsonpegw||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(4),s=a(6),r=a(5),c=a(0),i=a.n(c),l=a(18),d=a.n(l),u=(a(25),a(12)),m=a(1);var h=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={error:null,isLoaded:!1,selected_voice:null,id:null,items:[],synth:null,voices:null},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,t;0===window.speechSynthesis.getVoices().length&&window.speechSynthesis.addEventListener("voiceschanged",(function(){e=window.speechSynthesis.getVoices(),t=window.speechSynthesis})),e=window.speechSynthesis.getVoices(),t=window.speechSynthesis,this.setState({isLoaded:!0,items:e,selected_voice:27,synth:t,voices:e})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({isLoaded:!0,selected_voice:t})}},{key:"playText",value:function(e,t,a){0===window.speechSynthesis.getVoices().length&&window.speechSynthesis.addEventListener("voiceschanged",(function(){window.speechSynthesis.getVoices(),window.speechSynthesis})),window.speechSynthesis.getVoices(),window.speechSynthesis,alert(e);var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.pitch=0,n.rate=.7;var o=document.getElementById(a).innerHTML;!function(e,t,a){var n=window.speechSynthesis,o=0;document.getElementById(t).innerHTML=e;var s=document.getElementById(t).innerHTML,r=s.split(" ");console.log("textsplit: "+r);var c=new SpeechSynthesisUtterance(s);c.addEventListener("boundary",(function(n){if(document.getElementById(t).innerHTML=e,console.log("".concat(n.name," boundary reached after ").concat(n.elapsedTime," seconds.")),"word"==n.name)try{console.log("wordIndex: "+o);var s=r[o];console.log("wordToHighlight: "+s);var c="<span style='color: red; font-size:'>"+s+"</span>",i=n.charIndex,l=n.charIndex+s.length;console.log("startIndex: "+n.charIndex),console.log("endIndex: "+l);var d=document.getElementById(t).innerHTML.substring(0,i)+c+document.getElementById(t).innerHTML.substring(l,a);document.getElementById(t).innerHTML=d,o+=1}catch(u){console.log(u)}})),n.speak(c)}(o,a,o.length)}},{key:"cancelText",value:function(){alert("stop"),this.state.synth.cancel()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.playText(e.props.text,e.props.selectedVoice,e.props.id)},type:"button",className:"btn btn-primary"},"play"),i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.cancelText()}},"stop"))}}]),a}(i.a.Component);a(26);var v=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={error:null,isLoaded:!1,items:[],word:null},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://gesab001.github.io/assets/egw/"+this.props.bookcode+"/book_"+this.props.bookcode+"_id_"+this.props.id+".json";fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,word:e.removeNumbers(t.word)})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"removeNumbers",value:function(e){return function(e){var t,a=(e=e.replace(/\n/g," ")).match(/\d+\s\w+/g);console.log(e),console.log("result: "+a);try{for(var n=0;n<a.length;n++){var o=a[n];if(t=o,new RegExp(["1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","1 Corinthians","2 Corinthians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","1 Peter","2 Peter","1 John","2 John","3 John"].join("|")).test(t));else{var s=o.match(/\d+/g);e=e.replace(s," ")}}}catch(r){}return e}(e)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,o={fontSize:localStorage.getItem("fontsize")};return t?i.a.createElement("div",null,"Error: ",t.message):a?i.a.createElement("div",null,i.a.createElement("h2",{id:n.bookcode+n.page+n.paragraph,style:o,className:"shadow"},this.state.word," (",n.bookcode,", p.",n.page,", par.",n.paragraph,")"),i.a.createElement(h,{id:n.bookcode+n.page+n.paragraph,selectedVoice:this.props.selectedVoice,text:this.state.word})):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component);a(27);function p(e){var t=new Date,a=new Date(2018,5,22);"DA"===e&&(a=new Date(2016,11,30)),"CL"===e&&(a=new Date(2016,4,15));var n=t.getTime()-a.getTime();return Math.floor(n/1e3/60/60/24)}var g=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).handleOnChange=function(e){o.setState({selectedVoice:e})},o.state={error:null,isLoaded:!1,booklist:[],imagelist:[],selectedVoice:27},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/images/imagelist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,imagelist:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,o=t.imagelist,s="https://resources.stuff.co.nz/content/dam/images/1/p/i/h/p/2/image.related.StuffLandscapeSixteenByNine.710x400.1pj19x.png/1524876169700.jpg";return a?i.a.createElement("div",null,"Error: ",a.message):n?i.a.createElement("div",{id:"demo",className:"carousel slide",keyboard:"true","data-wrap":"false","data-interval":"false"},i.a.createElement("ul",{className:"carousel-indicators"},i.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),this.props.booklist.map((function(e,t){return i.a.createElement("li",{"data-target":"#demo","data-slide-to":t,key:t})}))),i.a.createElement("div",{className:"carousel-inner"},i.a.createElement("div",{className:"carousel-item active"},i.a.createElement("img",{className:"d-block w-100",src:s,alt:"Los Angeles"}),i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h3",null,"today"),i.a.createElement("p",null,"Read now"))),this.props.booklist.map((function(t,a){var n=t.bookcode,r=s;try{var c=o[n].length,l=Math.floor(Math.random()*c+0);r=o[n][l]}catch(d){}return i.a.createElement("div",{className:"carousel-item",key:a},i.a.createElement("img",{className:"d-block w-100",src:r,alt:"New York"}),i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h1",{className:"shadow"},t.title),i.a.createElement(v,{className:"shadow",selectedVoice:e.props.selectedVoice,bookcode:t.bookcode,id:p(t.bookcode)%t.total})))}))),i.a.createElement("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev"},i.a.createElement("span",{className:"carousel-control-prev-icon"})),i.a.createElement("a",{className:"carousel-control-next",href:"#demo","data-slide":"next"},i.a.createElement("span",{className:"carousel-control-next-icon"}))):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/booklist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?i.a.createElement("div",null,"Error: ",t.message):a?i.a.createElement("div",{className:"container-fluid"},i.a.createElement(g,{selectedVoice:this.props.selectedVoice,booklist:n})):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component);a(28);function b(e){var t=new Date,a=new Date(2018,5,22);"DA"===e&&(a=new Date(2016,11,30)),"CL"===e&&(a=new Date(2016,4,15));var n=t.getTime()-a.getTime();return Math.floor(n/1e3/60/60/24)}var w=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).handleOnChange=function(e){o.setState({selectedVoice:e})},o.state={error:null,isLoaded:!1,booklist:[],selectedVoice:27},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"card-columns"},"  ",this.props.booklist.map((function(t,a){return i.a.createElement("div",{className:"card",key:a},i.a.createElement("div",{className:"card-header"},i.a.createElement("h5",{className:"card-title"}," ",t.title)),i.a.createElement("div",{className:"card-body bg-secondary"},i.a.createElement(v,{className:"card-text",selectedVoice:e.props.selectedVoice,bookcode:t.bookcode,id:b(t.bookcode)%t.total})))}))))}}]),a}(i.a.Component),E=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gesab001.github.io/assets/egw/booklist.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?i.a.createElement("div",null,"Error: ",t.message):a?i.a.createElement(w,{selectedVoice:this.props.selectedVoice,booklist:n}):i.a.createElement("div",null,"Loading...")}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).updateSelectedVoice=function(e){o.setState({selectedVoice:e})},o.biggerFont=function(e){var t=o.state.slide_font_size+.2;o.setState({slide_font_size:t});var a=t+"vw";localStorage.setItem("fontsize",a)},o.smallerFont=function(e){var t=o.state.slide_font_size-.2;o.setState({slide_font_size:t});var a=t+"vw";localStorage.setItem("fontsize",a)},o.state={error:null,isLoaded:!1,booklist:[],selectedVoice:27,slide_font_size:2},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar bg-dark navbar-dark  fixed-top"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{className:"nav-link",to:"/egw-reactjs/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{className:"nav-link",to:"/egw-reactjs/slideshow"},"Slideshow")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("button",{onClick:this.biggerFont.bind(this)},"+")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("button",{onClick:this.smallerFont.bind(this)},"-")))),i.a.createElement(m.a,{exact:!0,path:"/egw-reactjs/",render:function(t){return i.a.createElement(E,Object.assign({},t,{selectedVoice:e.state.selectedVoice}))}}),i.a.createElement(m.a,{exact:!0,path:"/egw-reactjs/slideshow/",render:function(t){return i.a.createElement(f,Object.assign({},t,{selectedVoice:e.state.selectedVoice}))}}))))}}]),a}(i.a.Component);d.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.de51042d.chunk.js.map