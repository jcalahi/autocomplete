(window.webpackJsonpautocomplete=window.webpackJsonpautocomplete||[]).push([[0],{107:function(e,t,a){e.exports=a(193)},115:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(34),u=(a(115),a(198)),s=a(199),i={searchMapOnPlaceChanged:function(e){return{type:"SEARCH_MAP_ON_PLACE_CHANGED",payload:e}}},p=Object(o.b)(null,i)((function(e){var t=e.searchMapOnPlaceChanged,a=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useCallback)((function(){var e=c.current.getPlace();a.current.value="",t(e)}),[t]);return Object(n.useEffect)((function(){c.current=new window.google.maps.places.Autocomplete(a.current);var e=c.current.addListener("place_changed",l);return function(){c.current.removeListener(e)}}),[l]),r.a.createElement("input",{ref:a,className:"ant-input",placeholder:"Search for places"})})),d=a(200),m=a(202),E=a(201),f={searchMapOnDelete:function(e){return{type:"SEARCH_MAP_ON_DELETE",payload:e}},searchMapOnView:function(e){return{type:"SEARCH_MAP_ON_VIEW",payload:e}}},h=Object(o.b)((function(e){return{searchResults:e.searchMap.searchResults}}),f)((function(e){var t=e.searchResults,a=e.searchMapOnDelete,n=e.searchMapOnView;return 0===t.length?null:r.a.createElement(d.b,{dataSource:t,renderItem:function(e){return r.a.createElement(d.b.Item,{actions:[r.a.createElement(m.a,{key:"list-item-view",type:"link",onClick:function(){return n(e)}},"View"),r.a.createElement(m.a,{key:"list-item-delete",type:"link",onClick:function(){return a(e.place_id)}},"Delete")]},r.a.createElement(d.b.Item.Meta,{avatar:r.a.createElement(E.a,{src:e.icon}),title:e.name,description:e.formatted_address}))}})})),b=a(105),O=(a(192),function(){return r.a.createElement("div",{className:"marker"})}),y=Object(o.b)((function(e){return{coordinates:e.searchMap.coordinates}}))((function(e){var t=e.coordinates;return r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(b.a,{bootstrapURLKeys:"AIzaSyC76N5DcRHwF7pjbpP2Yne7uZwiB9bU8jY",defaultZoom:16,center:t},r.a.createElement(O,{lat:t.lat,lng:t.lng,text:"here"})))})),_=function(){return r.a.createElement(u.a,null,r.a.createElement(s.a,{span:8},r.a.createElement(p,null),r.a.createElement(h,null)),r.a.createElement(s.a,{span:16},r.a.createElement(y,null)))};var g=function(){return r.a.createElement("div",null,r.a.createElement(_,null))},j=a(46),v=a(100),R=a(101),w=a(103),A=a(43),M={coordinates:{lat:1.2760274,lng:103.7993483},searchResults:[]},C={searchMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MAP_ON_PLACE_CHANGED":return Object(A.a)(Object(A.a)({},e),{},{coordinates:{lat:t.payload.geometry.location.lat(),lng:t.payload.geometry.location.lng()},searchResults:[].concat(Object(w.a)(e.searchResults),[t.payload])});case"SEARCH_MAP_ON_VIEW":return Object(A.a)(Object(A.a)({},e),{},{coordinates:{lat:t.payload.geometry.location.lat(),lng:t.payload.geometry.location.lng()}});case"SEARCH_MAP_ON_DELETE":return Object(A.a)(Object(A.a)({},e),{},{searchResults:e.searchResults.filter((function(e){return e.place_id!==t.payload}))});default:return e}}},P=Object(j.combineReducers)(C),N=Object(v.composeWithDevTools)(Object(j.applyMiddleware)(R.a)),k=Object(j.legacy_createStore)(P,N);l.a.render(r.a.createElement(o.a,{store:k},r.a.createElement(g,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.640aa097.chunk.js.map