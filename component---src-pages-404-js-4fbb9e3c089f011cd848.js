(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(194),u=n(161),s=n.n(u),l=n(191),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{title:"Not Found"},i.a.createElement(s.a,{paragraph:!0,color:"primary",gutterBottom:!0,variant:"h3",component:"span"},"Hey! You just hit a page that doesn't exist."))},t}(i.a.Component);t.default=Object(l.a)(m)},162:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=n(152),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(163),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},174:function(e){e.exports={data:{site:{siteMetadata:{company:"Fox and Geese",contact:{email:"hi@foxandgeese.com"}}}}}},175:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=n(60),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},191:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(158),u=n(230),s=n.n(u),l=n(223),m=n.n(l),p=n(193),d=n(172),f=n.n(d);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(p.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return i.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(s.a,null),i.a.createElement(f.a,{implementation:"css"},i.a.createElement(e,this.props))))},n}(i.a.Component)}},193:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return u});n(77),n(55),n(78),n(227);var r=n(165),o=n(158),i=Object(o.createMuiTheme)({typography:{useNextVariants:!0}});function c(){return{theme:i,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(o.createGenerateClassName)()}}function u(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=c()),a.__INIT_MATERIAL_UI__):c()}}).call(this,n(226),n(73))},194:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(174),u=n(162),s=n(196),l=n.n(s),m=n(161),p=n.n(m),d=n(172),f=n.n(d),h=n(218),g=n.n(h),y=n(173),E=function(e){var t=e.data.site.siteMetadata,n=t.company,a=t.contact.email;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(p.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",n," ",i.a.createElement(f.a,{only:["xs","sm"]},"–"),i.a.createElement(f.a,{only:["xl","lg","md"]},i.a.createElement("br",null))," ",a),i.a.createElement("a",{href:"https://github.com/foxandgeese/simple-react-company-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(g.a,null,i.a.createElement(y.b,null))))))},v=function(e){return i.a.createElement(u.StaticQuery,{query:"2334881711",render:function(e){return i.a.createElement(E,{data:e})},data:c})},x=n(190),b=n.n(x),w=n(158),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.classes;return i.a.createElement("div",{className:n.topper},i.a.createElement(b.a,{container:!0,justify:"center",alignItems:"stretch"},i.a.createElement(b.a,{item:!0,xs:!0,className:n.root},t,i.a.createElement(v,null))))},t}(i.a.Component);t.a=Object(w.withStyles)(function(e){return{topper:{backgroundColor:"#eee"},root:{maxWidth:"1168px",marginTop:"94px"}}})(_)}}]);
//# sourceMappingURL=component---src-pages-404-js-4fbb9e3c089f011cd848.js.map