(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{406:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"projects__grid-item"},[e("img",{staticClass:"projects__grid-item-photo",attrs:{src:t.getAbsoluteImgPath}}),e("div",{staticClass:"projects__grid-item-content"},[e("div",{staticClass:"projects__grid-item-title"},[t._v(t._s(t.project.title))]),e("div",{staticClass:"projects__grid-item-descr"},[t._v(t._s(t.project.description))]),e("a",{staticClass:"projects__grid-item-link"},[t._v(t._s(t.project.link))]),e("ul",{staticClass:"projects__item-content-tags"},t._l(t.tagsArray,function(s){return e("li",{staticClass:"projects__item-content-tags-item"},[t._v(t._s(s))])}),0),e("div",{staticClass:"projects__grid-item-controls"},[e("div",{staticClass:"controls-wrap"},[e("button",{staticClass:"controls-edit",attrs:{type:"button"},on:{click:t.editCurrentProject}},[t._v("Править")])]),e("div",{staticClass:"projects__grid-item-controls-wrap"},[e("button",{staticClass:"controls-del",attrs:{type:"button"},on:{click:t.deleteCurrentProject}},[t._v("Удалить")])])])])])};i._withStripped=!0;var r=e(55),c=e(15),o={data(){return{tagsString:this.project.techs,tagsArray:[]}},props:{project:Object},computed:{getAbsoluteImgPath(){var t=this.project.photo;return`${r.a.defaults.baseURL}/${t}`}},watch:{tagsString:function(t){console.log("lol")}},methods:{...Object(c.b)("projects",["deleteProject"]),...Object(c.c)("projects",["SET_CURRENT_PROJECT"]),deleteCurrentProject(){this.deleteProject(this.project.id)},editCurrentProject(){this.SET_CURRENT_PROJECT(this.project.id),this.splitTags(),this.$emit("editProject")},splitTags(){this.tagsArray=this.project.techs.split(",")}},created(){this.splitTags()}},a=e(10),l=Object(a.a)(o,i,[],!1,null,null,null);l.options.__file="src/admin/components/projectsGridItem.vue";s.default=l.exports}}]);