(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{426:function(t,e,i){},453:function(t,e,i){"use strict";var s=i(426);i.n(s).a},480:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skills-title-container",class:{blocked:t.blocked}},[t.editmode?i("add-group-name",{attrs:{category:t.categoryData},on:{approve:t.changeSkillTitle,closeOrRemove:t.removeCategory},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}}):i("div",{staticClass:"skills-card-title"},[i("div",{staticClass:"skills-card-title__text"},[t._v(t._s(t.categoryData.category))]),i("div",{staticClass:"skills-card-title__icon"},[i("iconed-btn",{staticClass:"is-pencil no-words grayscale",on:{click:function(e){t.editmode=!0}}})],1)])],1)};s._withStripped=!0;var o=i(33),a={components:{addGroupName:()=>i.e(7).then(i.bind(null,486)),iconedBtn:()=>i.e(2).then(i.bind(null,494))},props:{categoryData:Object},data(){return{editmode:!1,newTitle:this.categoryData.category,blocked:!1}},updated(){this.newTitle=this.categoryData.category},methods:{...Object(o.b)("skills",["updateSkillsGroup","removeSkillsGroup"]),...Object(o.b)("tooltips",["showTooltip"]),async changeSkillTitle(){this.blocked=!0;try{await this.updateSkillsGroup({id:this.categoryData.id,title:this.newTitle});this.editmode=!1,this.showTooltip({type:"success",text:"Имя категории обновлено"})}catch(t){this.showTooltip({type:"error",text:t.message})}finally{this.blocked=!1}},async removeCategory(){if(!1!==confirm("Удалить группу?")){this.editmode=!1;try{await this.removeSkillsGroup(this.categoryData.id);this.showTooltip({type:"success",text:"Категория удалена"})}catch(t){this.showTooltip({type:"error",text:t.message})}}}}},l=(i(453),i(57)),c=Object(l.a)(a,s,[],!1,null,"997a26c6",null);c.options.__file="src/admin/components/skills-title.vue";e.default=c.exports}}]);