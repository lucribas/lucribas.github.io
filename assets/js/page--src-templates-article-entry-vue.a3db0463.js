(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+6Vx":function(t,e,r){"use strict";r("TeQF"),r("yq1k");var s={components:{},props:["record"],computed:{subtitles:function(){var t=this.record.headings.filter((function(t,e,r){return[2,3].includes(t.depth)}));return t}}},n=r("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar position-sticky"},[t.subtitles.length>0?r("div",{staticClass:"toc"},[r("h6",[t._v("On this page")]),r("ul",{staticClass:"pl-0"},t._l(t.subtitles,(function(e){return r("li",{key:e.value,staticClass:"toc-item",class:"toc-item-level-"+e.depth},[r("a",{staticClass:"toc-link",attrs:{href:e.anchor}},[t._v(t._s(e.value))])])})),0)]):t._e(),t.record.tags.length>0?r("div",{staticClass:"tags d-lg-block d-none",class:[t.subtitles.length>0?"mt-3":""]},[r("h6",[t._v("Tags")]),r("div",{staticClass:"tags-items"},t._l(t.record.tags,(function(e){return r("g-link",{key:e.id,staticClass:"mr-2",attrs:{to:e.path}},[r("span",[t._v("#")]),t._v(t._s(e.title)+"\n      ")])})),1)]):t._e()])}),[],!1,null,null,null);e.a=i.exports},Og40:function(t,e,r){},"P/C9":function(t,e,r){"use strict";var s=r("Og40");r.n(s).a},TeQF:function(t,e,r){"use strict";var s=r("I+eb"),n=r("tycR").filter,i=r("Hd5f"),a=r("rkAj"),l=i("filter"),c=a("filter");s({target:"Array",proto:!0,forced:!l||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"U/NN":function(t,e,r){"use strict";var s={components:{},props:["record"]},n=r("KHd+"),i=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"height-30 jarallax bg-gray-100 border-bottom"},[e("b-container",{staticClass:"pt-5 pb-5"},[e("h1",{staticClass:"display-4"},[this._v(this._s(this.record.title))])])],1)}),[],!1,null,null,null);e.a=i.exports},yq1k:function(t,e,r){"use strict";var s=r("I+eb"),n=r("TWQb").includes,i=r("RNIs");s({target:"Array",proto:!0,forced:!r("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},zuSY:function(t,e,r){"use strict";r.r(e);var s=r("U/NN"),n=r("+6Vx"),i=r("LvDl"),a={components:{SectionHeader:s.a,SectionSidebar:n.a},methods:{recordLink:function(t){return"/articles/".concat(t.slug)}},computed:{relatedRecords:function(){return Object(i.sampleSize)(this.$page.related.edges,2)}},metaInfo:function(){return{title:this.$page.entry.title}}},l=(r("P/C9"),r("KHd+")),c=null,o=Object(l.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("DefaultLayout",[r("SectionHeader",{attrs:{record:t.$page.entry}}),r("b-container",{staticClass:"mt-5 mb-5"},[r("b-row",[r("b-col",{staticClass:"article-content",attrs:{order:"2","order-lg":"1",cols:"12",lg:"8"}},[r("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.entry.content)}})]),r("b-col",{attrs:{lg:"3",order:"1","order-lg":"2","offset-lg":"1"}},[r("SectionSidebar",{attrs:{record:t.$page.entry}})],1)],1)],1),2==t.relatedRecords.length?r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"text-center pt-5 bg-gray-100"},[r("b-col",[r("h2",{staticClass:"display-4"},[t._v("You might also like")])])],1),r("b-row",{staticClass:"height-30 bg-gray-100 pb-5 related-records"},t._l(t.relatedRecords,(function(e){return r("b-col",{key:e.node.id,staticClass:"pr-5 pl-5 mt-5 border-right",attrs:{sm:"12",md:"6"}},[r("h4",{},[t._v(t._s(e.node.title))]),r("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.excerpt)}}),r("g-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:t.recordLink(e.node)}},[t._v("Continue reading")])],1)})),1)],1):t._e()],1)}),[],!1,null,null,null);"function"==typeof c&&c(o);e.default=o.exports}}]);