(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!1===t.editModeOn?a("div",{staticClass:"about-adm-grid__item-upper-row"},[a("input",{staticClass:"about-adm-grid__item-group-name",attrs:{type:"text"},domProps:{value:t.category.category}}),a("div",{staticClass:"about-adm-grid__item-btns-wrap about-edit-btns"},[a("button",{staticClass:"about-adm-grid__item-edit",attrs:{type:"button"},on:{click:function(e){t.editModeOn=!0}}}),a("button",{staticClass:"about-adm-grid__item-del",attrs:{type:"button"},on:{click:t.removeExistedCategory}})])]):a("div",{staticClass:"about-adm-grid__item-upper-row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedCategory.title,expression:"editedCategory.title"}],staticClass:"about-adm-grid__item-group-name active",attrs:{placeholder:"Наименование группы",type:"text"},domProps:{value:t.editedCategory.title},on:{input:function(e){e.target.composing||t.$set(t.editedCategory,"title",e.target.value)}}}),a("div",{staticClass:"about-adm-grid__item-btns-wrap about-edit-btns"},[a("button",{staticClass:"about-adm-grid__item-ok",attrs:{type:"button"},on:{click:t.editCurrentCategory}}),a("button",{staticClass:"about-adm-grid__item-deny",attrs:{type:"button"},on:{click:function(e){t.editModeOn=!1}}})])])};i._withStripped=!0;var o=a(26),s={data(){return{editModeOn:!1,editedCategory:{...this.category}}},props:{category:Object,skills:Array},methods:{...Object(o.b)("categories",["removeCategory","editCategory"]),async removeExistedCategory(){try{await this.removeCategory(this.category.id)}catch(t){console.log(t.message)}},async editCurrentCategory(){try{await this.editCategory(this.editedCategory),this.editModeOn=!1}catch(t){console.log(t.message)}}}},r=a(10),d=Object(r.a)(s,i,[],!1,null,null,null);d.options.__file="src/admin/components/skills-group.vue";e.default=d.exports}}]);