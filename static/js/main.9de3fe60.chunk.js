(this["webpackJsonpfilter-list"]=this["webpackJsonpfilter-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(7),i=n.n(o),s=(n(13),n(2)),l=n(3),h=n(5),d=n(4),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleFilterTextChange=function(t){return e.props.onFilterTextChange(t.target.value)},e.handleInStockChange=function(t){return e.props.onInStockChange(t.target.checked)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filterText,n=e.inStockOnly;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t,onChange:this.handleFilterTextChange}),Object(c.jsxs)("p",{children:[Object(c.jsx)("input",{id:"showInStock",type:"checkbox",checked:n,onChange:this.handleInStockChange}),Object(c.jsx)("label",{htmlFor:"showInStock",children:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0432\u0430\u0440\u044b \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"})]})]})}}]),n}(a.a.Component),u=function(e){var t=e.category;return Object(c.jsx)("tr",{children:Object(c.jsx)("th",{colSpan:"2",children:t})})},p=function(e){var t=e.product,n=t.name,r=t.stocked,a=t.price;return Object(c.jsxs)("tr",{className:r?"":"warning",children:[Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a})]})},x=function(e){var t=e.filterText,n=e.inStockOnly,r=e.products.filter((function(e){var c=e.name,r=e.stocked,a=e.price;return(-1!==c.toLowerCase().indexOf(t)||-1!==a.toLowerCase().indexOf(t))&&!(n&&!r)})),a=[],o=null;return r.forEach((function(e){var t=e.name,n=e.category;n!==o&&a.push(Object(c.jsx)(u,{category:n},n)),a.push(Object(c.jsx)(p,{product:e},t)),o=n})),0===a.length?Object(c.jsx)("p",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e..."}):Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(c.jsx)("th",{children:"\u0426\u0435\u043d\u0430"})]})}),Object(c.jsx)("tbody",{children:a})]})},O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={filterText:"",inStockOnly:!1},e.handleFilterTextChange=function(t){e.setState({filterText:t})},e.handleInStockChange=function(t){e.setState({inStockOnly:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"product-table",children:[Object(c.jsx)(j,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onFilterTextChange:this.handleFilterTextChange,onInStockChange:this.handleInStockChange}),Object(c.jsx)(x,{products:this.props.products,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly})]})}}]),n}(a.a.Component),b=[{category:"\u0421\u043f\u043e\u0440\u0442\u043e\u0432\u0430\u0440\u044b",price:"$49.99",stocked:!0,name:"\u0424\u0443\u0442\u0431\u043e\u043b"},{category:"\u0421\u043f\u043e\u0440\u0442\u043e\u0432\u0430\u0440\u044b",price:"$9.99",stocked:!0,name:"\u0411\u0435\u0439\u0441\u0431\u043e\u043b"},{category:"\u0421\u043f\u043e\u0440\u0442\u043e\u0432\u0430\u0440\u044b",price:"$29.99",stocked:!1,name:"\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b"},{category:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430",price:"$199.99",stocked:!0,name:"Nexus 7"}];i.a.render(Object(c.jsx)(O,{products:b}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9de3fe60.chunk.js.map