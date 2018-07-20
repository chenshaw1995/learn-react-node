webpackJsonp([37],{274:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),c=a.n(r),m=a(9),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.toggleForm=a.toggleForm.bind(a),a.toggleUpload=a.toggleUpload.bind(a),a.handleUploadFile=a.handleUploadFile.bind(a),a.state={collapseForm:!1,collapseUpload:!1,fadeIn:!0,timeout:300,status:"Closed"},a}return o(t,e),i(t,[{key:"toggleForm",value:function(){this.setState({collapseForm:!this.state.collapseForm,collapseUpload:!1})}},{key:"toggleUpload",value:function(){this.setState({collapseForm:!1,collapseUpload:!this.state.collapseUpload})}},{key:"handleUploadFile",value:function(e){console.log("Submitting file ...");var t=new FormData(e.target);console.log("Request ",t),fetch("/api/upload-file",{method:"POST",body:t}).then(function(e){e.json().then(function(t){alert("Submitted"),e.redirect("/applications/manage")})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m._6,null,c.a.createElement(m.t,{xs:"24",md:"6",style:{margin:"0 auto"}},c.a.createElement(m.i,null,c.a.createElement(m.n,null,c.a.createElement("strong",null,"ADD NEW APPLICATION")),c.a.createElement("br",null),c.a.createElement(m.e,{color:"primary",onClick:this.toggleForm,style:{marginBottom:"1rem"}},"Show form"),c.a.createElement(m.e,{color:"primary",onClick:this.toggleUpload,style:{marginBottom:"1rem"}},"Upload file"),c.a.createElement(m.u,{isOpen:this.state.collapseForm,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},c.a.createElement(m.j,null,c.a.createElement(m.B,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"text-input"},"First Name")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"text",id:"text-input",name:"text-input",placeholder:""}))),c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"text-input"},"Last Name")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"text",id:"text-input",name:"text-input",placeholder:""}))),c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"select"},"Grade")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"select",name:"select",id:"grade",bsSize:"sm"},c.a.createElement("option",{value:"",disabled:!0},"Please select"),c.a.createElement("option",{value:"A"},"A"),c.a.createElement("option",{value:"B"},"B"),c.a.createElement("option",{value:"C"},"C"),c.a.createElement("option",{value:"D"},"D"),c.a.createElement("option",{value:"E"},"E"),c.a.createElement("option",{value:"F"},"F")))),c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"select"},"Sub Grade")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"select",name:"select",id:"sub-grade",bsSize:"sm"},c.a.createElement("option",{value:"",disabled:!0},"Please select"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"5"},"5")))),c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"select"},"Home Ownership")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"select",name:"select",id:"home-ownership",bsSize:"sm"},c.a.createElement("option",{value:"",disabled:!0},"Please select"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"5"},"5")))),c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"select"},"Verification Status")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"select",name:"select",id:"verification-status",bsSize:"sm"},c.a.createElement("option",{value:"",disabled:!0},"Please select"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"5"},"5")))))),c.a.createElement(m.l,null,c.a.createElement(m._6,{className:"align-items-center"},c.a.createElement(m.t,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},c.a.createElement(m.e,{type:"submit",block:!0,color:"success"},c.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit")),c.a.createElement(m.t,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},c.a.createElement(m.e,{type:"reset",block:!0,color:"danger"},c.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),c.a.createElement(m.u,{isOpen:this.state.collapseUpload,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},c.a.createElement(m.B,{id:"upload-file",onSubmit:this.handleUploadFile,method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(m.j,null,c.a.createElement(m.D,{row:!0},c.a.createElement(m.t,{md:"3"},c.a.createElement(m.K,{htmlFor:"file-input"},"Upload file")),c.a.createElement(m.t,{xs:"12",md:"9"},c.a.createElement(m.F,{type:"file",id:"file",name:"file"})))),c.a.createElement(m.l,null,c.a.createElement(m._6,{className:"align-items-center"},c.a.createElement(m.t,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},c.a.createElement(m.e,{type:"submit",block:!0,color:"success"},c.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit")),c.a.createElement(m.t,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},c.a.createElement(m.e,{type:"reset",block:!0,color:"danger"},c.a.createElement("i",{className:"fa fa-ban"})," Reset"))))))))))}}]),t}(r.Component);t.default=s}});
//# sourceMappingURL=37.f780f0c3.chunk.js.map