(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),b=n.n(l),u=(n(12),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:""},t.timerId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;console.log(e.toLocaleTimeString()),t.setState({date:e.toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("New clock name is ".concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.date;return Object(u.jsx)(u.Fragment,{children:t})}}]),n}(b.a.Component),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Clock name: ".concat(this.state.clockName)}),Object(u.jsx)("h1",{children:"React clock"}),Object(u.jsxs)("p",{children:["Current time: ",Object(u.jsx)("span",{className:" my-time bg-info p-2 text-dark bg-opacity-50 ",children:this.state.isClockVisible&&Object(u.jsx)(m,{name:this.state.clockName})})]})]}),Object(u.jsx)("button",{type:"button","data-cy":"time",className:"btn btn-success d-inline-block",onClick:function(){t.setState({isClockVisible:!0})},children:"Show Clock"}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide Clock"}),Object(u.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){t.setState({clockName:Math.floor(100*Math.random())+1})},children:"Set random name"})]})}}]),n}(b.a.Component),d=h;a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.248f11de.chunk.js.map