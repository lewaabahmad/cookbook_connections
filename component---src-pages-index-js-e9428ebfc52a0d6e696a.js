(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=(a(146),a(153)),o=a(151),s=a(7),c=a.n(s),l=a(4),u=a.n(l),d=(a(147),a(149),function(t){function e(e){var a;return(a=t.call(this,e)||this).state={},a}c()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this;fetch("https://www.zapi.app/api/v1/models/99fd801f-5baa-4c02-8b34-089030ec5436/instances?key=zapi_pub_5VB_l3VpCiEtILanHdibtQ").then(function(t){return t.json()}).then(function(e){t.setState({posts:e.data})}).catch(function(t,e){alert("Request: "+JSON.stringify(t))})},a.renderPostCard=function(t){var e=new Date(t.attributes.created_at).toDateString();return r.a.createElement("div",{className:"card pb-1 card-gold"},r.a.createElement("h4",{className:"pb-0 mb-0"},t.attributes.data.title),r.a.createElement("small",null,e),r.a.createElement("p",{className:"pt-3"},t.attributes.data.caption))},a.render=function(){var t=this;return console.log(this.state),this.state.posts?r.a.createElement("div",null,this.state.posts.map(function(e){return t.renderPostCard(e)})):r.a.createElement("h4",{className:"pb-0 mb-0"},"Loading...")},e}(r.a.Component));d.propTypes={siteTitle:u.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(165),function(t){function e(e){var a;return(a=t.call(this,e)||this).state={},a}c()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this;fetch("https://www.zapi.app/api/v1/models/a9f48acc-8714-46fc-b919-22141d5c940b/instances?key=zapi_pub_5VB_l3VpCiEtILanHdibtQ").then(function(t){return t.json()}).then(function(e){t.setState({events:e.data})}).catch(function(t,e){alert("Request: "+JSON.stringify(t))})},a.renderEventCard=function(t){return r.a.createElement("div",{className:"card pb-1 card-gold"},r.a.createElement("h4",{className:"pb-0 mb-0"},t.attributes.data.title))},a.render=function(){var t=this;if(this.state.events){var e=this.state.events.filter(function(t){return new Date(t.attributes.data.dateAndTime)>Date.now()}).sort(function(t,e){return new Date(t.attributes.data.dateAndTime)-new Date(e.attributes.data.dateAndTime)}),a=this.state.events.filter(function(t){return new Date(t.attributes.data.dateAndTime)<Date.now()}).sort(function(t,e){return new Date(t.attributes.data.dateAndTime)-new Date(e.attributes.data.dateAndTime)});return r.a.createElement("div",null,r.a.createElement("h3",null,"Upcoming Events"),e.map(function(e){return t.renderEventCard(e)}),r.a.createElement("h3",null,"Past Events"),a.map(function(e){return t.renderEventCard(e)}))}return r.a.createElement("h4",{className:"pb-0 mb-0"},"Loading...")},e}(r.a.Component));p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:""};var f=p;e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",{className:"d-none"},"Cookbook Connections"),r.a.createElement("h2",{className:"d-none"},"A community that connects over creations of new, inspiring cookbooks and their authors."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement(m,null)),r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement(f,null))))}},146:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(e,"a",function(){return c.a});a(148),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},147:function(t,e,a){t.exports=a.p+"static/cclogo-bae507afad69dff228764d43d9a2cf3f.jpg"},148:function(t,e,a){var n;t.exports=(n=a(150))&&n.default||n},150:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},151:function(t,e,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(156),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Cookbook Connections",description:"A community that connects over creations of new, inspiring cookbooks and their authors.",author:"@lewaabahmad"}}}}},153:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(146),c=a(147),l=a.n(c),u=(a(149),function(t){t.siteTitle;return r.a.createElement("header",{style:{marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},r.a.createElement("div",{style:{width:"100px",margin:"0 auto"}},r.a.createElement("img",{src:l.a,alt:"Logo"}))))))});u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var d=u,m=function(t){t.siteTitle;return r.a.createElement("div",{className:"text-center"},r.a.createElement(s.a,{to:"/about",className:"py-2 px-5",style:{textDecoration:"none"}},"About"),r.a.createElement(s.a,{to:"/contact",className:"py-2 px-5",style:{textDecoration:"none"}},"Contact"))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var p=m,f=(a(154),a(155),function(t){var e=t.children;return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement("main",null,e),r.a.createElement("footer",{className:"text-center"},"© ",(new Date).getFullYear(),", Cookbook Connections - Built with ZAPI")))});f.propTypes={children:o.a.node.isRequired};e.a=f},165:function(t,e,a){"use strict";var n=a(11),r=a(25),i=a(26),o=a(18),s=[].sort,c=[1,2,3];n(n.P+n.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!a(166)(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t))}})},166:function(t,e,a){"use strict";var n=a(18);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-index-js-e9428ebfc52a0d6e696a.js.map