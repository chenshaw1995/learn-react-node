webpackJsonp([35],{276:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n.n(r),c=n(9),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleLoanInfo=n.toggleLoanInfo.bind(n),n.toggleLoanResults=n.toggleLoanResults.bind(n),n.state={collapseNew:!1,collapseAll:!1,fadeIn:!0,timeout:300,status:"Closed",applications:null,profileId:n.props.match.params.id},n}return l(t,e),s(t,[{key:"toggleLoanInfo",value:function(){this.setState({collapseNew:!this.state.collapseNew,collapseAll:!1})}},{key:"toggleLoanResults",value:function(){this.setState({collapseNew:!1,collapseAll:!this.state.collapseAll})}},{key:"componentDidMount",value:function(){var e=this,t=new FormData;t.append("profileId",this.state.profileId),fetch("/api/applications/profile",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(t){return e.setState({applications:t},function(){return console.log("Fetched ")})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(c._6,null,i.a.createElement(c.t,{xs:"12",lg:"6",style:{margin:"0 auto"}},i.a.createElement(c.i,null,i.a.createElement(c.n,null,i.a.createElement(c.e,{color:"primary",onClick:this.toggleNew,style:{marginBottom:"1rem"}},"Application Info")),i.a.createElement(c.u,{isOpen:this.state.collapseNew},i.a.createElement(c.j,null,i.a.createElement(c._9,{responsive:!0},i.a.createElement("tbody",null,this.state.applications.map(function(e,t){return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,"Name :")),i.a.createElement("td",null,e.First_Name," ",e.Last_Name))})))))))))}}]),t}(r.Component);t.default=u}});
//# sourceMappingURL=35.c37f161d.chunk.js.map