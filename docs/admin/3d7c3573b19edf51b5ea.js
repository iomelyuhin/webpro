(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{358:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return s});var i=r(55);const o=t=>{const e=new FileReader;return new Promise((r,i)=>{try{e.readAsDataURL(t),e.onloadend=(()=>{r(e.result)})}catch(t){throw new Error("Ошибка при чтении файла")}})},s=t=>{return`${i.a.defaults.baseURL}/${t}`}},373:function(t,e,r){},401:function(t,e,r){"use strict";var i=r(373);r.n(i).a},428:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=this,r=e.$createElement,i=e._self._c||r;return i("adding-form",{attrs:{title:e.editFormTitle,disabled:e.disableForm},on:{cancel:e.cancelAdding,submit:function(t){"add"===e.mode?e.addNewWork():e.editWork()}}},[i("template",{slot:"form-content"},[i("div",{staticClass:"edit-form__container"},[i("div",{staticClass:"edit-form__col"},[e.renderedPhoto.length?i("div",{staticClass:"edit-form__btn"},[i("div",{staticClass:"edit-form__pic",style:{backgroundImage:e.workPhotoUrl}}),i("label",{staticClass:"edit-form__change-preview"},[i("a",{staticClass:"edit-form__change-pic"},[e._v("Изменить превью")]),i("input",{staticClass:"edit-form__preview-input",attrs:{type:"file"},on:{change:e.handlePhotoUpload}})])]):i("label",{staticClass:"edit-form__picture",class:{error:e.validation.hasError("work.photo")}},[i("div",{staticClass:"edit-form__picture-text"},[e._v("Перетащите либо загрузите изображения")]),i("app-button",{attrs:{elem:"file",text:"Загрузить"},on:{change:e.handlePhotoUpload}}),i("div",{staticClass:"edit-form__file-error"},[i("errors-tooltip")],1)],1)]),i("div",{staticClass:"edit-form__col"},[i("div",{staticClass:"edit-form__row"},[i("app-input",{attrs:{title:"Название",errorText:e.validation.firstError("work.title")},model:{value:e.work.title,callback:function(t){e.$set(e.work,"title",t)},expression:"work.title"}})],1),i("div",{staticClass:"edit-form__row"},[i("app-input",{attrs:{title:"Ссылка",errorText:e.validation.firstError("work.link")},model:{value:e.work.link,callback:function(t){e.$set(e.work,"link",t)},expression:"work.link"}})],1),i("div",{staticClass:"edit-form__row"},[i("app-input",{attrs:{title:"Описание",fieldType:"textarea",errorText:e.validation.firstError("work.description")},model:{value:e.work.description,callback:function(t){e.$set(e.work,"description",t)},expression:"work.description"}})],1),i("div",{staticClass:"edit-form__row"},[i("add-tags",{attrs:{errorText:e.validation.firstError("work.techs")},on:{removeTag:function(e){return t.work.techs=e}},model:{value:e.work.techs,callback:function(t){e.$set(e.work,"techs",t)},expression:"work.techs"}})],1)])])])],2)};i._withStripped=!0;var o=r(31),s=r(358),a=r(99),l={mixins:[r(99).mixin],validators:{"work.title":t=>a.Validator.value(t).required("Заполните название"),"work.techs":t=>a.Validator.value(t).required("Заполните технологии"),"work.link":t=>a.Validator.value(t).required("Заполните ссылку"),"work.description":t=>a.Validator.value(t).required("Заполните описание"),"work.photo":t=>a.Validator.value(t).required("Вставьте файл")},props:{mode:{type:String,default:"add",validator:t=>["add","edit"].includes(t)},disabled:{type:Boolean,default:!1}},components:{appInput:()=>r.e(0).then(r.bind(null,423)),addTags:()=>r.e(16).then(r.bind(null,437)),addingForm:()=>r.e(6).then(r.bind(null,414)),appButton:()=>r.e(3).then(r.bind(null,436)),errorsTooltip:()=>r.e(4).then(r.bind(null,438))},data(){return{disableForm:this.disabled,renderedPhoto:"",work:{id:0,title:"",techs:"",link:"",photo:"",description:""}}},computed:{...Object(o.e)("works",{currentWork:t=>t.currentWork}),workPhotoUrl(){return`url(${this.renderedPhoto})`},editFormTitle(){switch(this.mode){case"edit":return"Редактирование работы";case"add":return"Добавление работы"}}},created(){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},watch:{currentWork(t){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},mode(t){"add"===t&&this.clearFormFields()}},methods:{...Object(o.b)("works",["storeWork","updateWork"]),...Object(o.b)("tooltips",["showTooltip"]),async editWork(){if(!1!==await this.$validate()){this.disableForm=!0;try{await this.updateWork(this.work);this.$emit("closeForm"),this.showTooltip({type:"success",text:"Работа обновлена"})}catch(t){this.showTooltip({type:"error",text:t.message})}finally{this.disableForm=!1,this.validation.reset()}}},async addNewWork(){if(!1!==await this.$validate()){this.disableForm=!0;try{await this.storeWork(this.work);this.clearFormFields(),this.showTooltip({text:"Работа создана",type:"success"})}catch(t){this.showTooltip({type:"error",text:t.message})}finally{this.disableForm=!1,this.validation.reset()}}},cancelAdding(){this.clearFormFields(),this.$emit("closeForm")},clearFormFields(){this.work={},this.renderedPhoto=""},fillFormWithCurrentWorkData(){this.work={...this.currentWork},this.renderedPhoto=Object(s.a)(this.currentWork.photo)},async handlePhotoUpload(t){const e=t.target.files[0];this.work.photo=e;try{const t=await Object(s.b)(e);this.renderedPhoto=t}catch(t){this.showTooltip({type:"error",text:t.message})}}}},d=(r(401),r(98)),n=Object(d.a)(l,i,[],!1,null,"07f536f6",null);n.options.__file="src/admin/components/works-add.vue";e.default=n.exports}}]);