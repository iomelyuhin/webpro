(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{363:function(t,o,e){},391:function(t,o,e){"use strict";var s=e(363);e.n(s).a},416:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"works-section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"page-title"},[t._v(t._s(t.pageTitle))])]),e("div",{staticClass:"works-container"},[e("div",{staticClass:"container container--mobile-wide"},[t.showForm?e("add-new-work-form",{attrs:{mode:t.mode},on:{closeForm:function(o){t.showForm=!1}}}):t._e(),e("ul",{staticClass:"works"},[e("li",{staticClass:"works__item"},[e("add-new-button",{on:{click:t.openAddingForm}})],1),t._l(t.works,function(o){return e("li",{staticClass:"works__item"},[e("works-item",{attrs:{work:o},on:{updateWork:t.updateWork}})],1)})],2)],1)])])};s._withStripped=!0;var i=e(31),r={props:{pageTitle:{type:String,default:""}},components:{addNewButton:()=>e.e(5).then(e.bind(null,439)),addNewWorkForm:()=>e.e(13).then(e.bind(null,428)),worksItem:()=>e.e(14).then(e.bind(null,429))},data:()=>({showForm:!1,mode:"add"}),computed:{...Object(i.e)("works",{works:t=>t.works})},methods:{...Object(i.b)("works",["fetchWorks"]),...Object(i.b)("tooltips",["showTooltip"]),openAddingForm(){this.showForm=!0,this.mode="add"},async collectWorks(){try{await this.fetchWorks()}catch(t){this.showTooltip({type:"error",text:"Ошибка при загрузке работ"})}},updateWork(){this.mode="edit",this.showForm=!0}},created(){this.collectWorks()}},n=(e(391),e(98)),a=Object(n.a)(r,s,[],!1,null,"8ee67ea4",null);a.options.__file="src/admin/pages/works.vue";o.default=a.exports}}]);