webpackJsonp([2],{"5iUv":function(t,e,a){var n=a("8JiU");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("15517e9c",n,!0)},"8JiU":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.new-category-form{\r\n    border: 1px solid #EBEEF5;\r\n    padding: 0 10px 0 10px;\n}\r\n",""])},"E/TR":function(t,e){t.exports=function(){return Function.call.apply(Array.prototype.concat,arguments)}},"JuR+":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'\n.ms-tree-space[data-v-51226dd0] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 18px;\n  height: 14px;\n}\n.ms-tree-space[data-v-51226dd0]::before {\n    content: "";\n}\n.processContainer[data-v-51226dd0] {\n  width: 100%;\n  height: 100%;\n}\ntable td[data-v-51226dd0] {\n  line-height: 26px;\n}\n.tree-ctrl[data-v-51226dd0] {\n  position: relative;\n  cursor: pointer;\n  color: #2196F3;\n  margin-left: -18px;\n}\n',""])},P3vl:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n@keyframes treeTableShow {\nfrom {opacity: 0;\n}\nto {opacity: 1;\n}\n}\n@-webkit-keyframes treeTableShow {\nfrom {opacity: 0;\n}\nto {opacity: 1;\n}\n}\n",""])},SeII:function(t,e,a){var n=a("P3vl");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3042b006",n,!0)},dXij:function(t,e,a){t.exports={default:a("E/TR"),__esModule:!0}},"hX/2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("h3d2"),o=a("dXij"),r=a.n(o),i=a("c/Tr"),l=a.n(i),s=a("/5sW");function d(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=[];return l()(t).forEach(function(t){void 0===t._expanded&&s.default.set(t,"_expanded",e);var r=1;if(void 0!==n&&null!==n&&(r=n+1),s.default.set(t,"_level",r),a&&s.default.set(t,"parent",a),o.push(t),t.children&&t.children.length>0){var i=d(t.children,e,t,r);o=o.concat(i)}}),o}var c={name:"treeTable",props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!0}},computed:{formatData:function(){var t=void 0;t=Array.isArray(this.data)?this.data:[this.data];var e=this.evalFunc||d,a=this.evalArgs?r()([t,this.expandAll],this.evalArgs):[t,this.expandAll];return e.apply(null,a)}},methods:{showRow:function(t){var e=!t.row.parent||t.row.parent._expanded&&t.row.parent._show;return t.row._show=e,e?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},toggleExpanded:function(t){var e=this.formatData[t];e._expanded=!e._expanded},iconShow:function(t,e){return 0===t&&e.children&&e.children.length>0}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",t._b({attrs:{data:t.formatData,"row-style":t.showRow}},"el-table",t.$attrs,!1),[0===t.columns.length?a("el-table-column",{attrs:{width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row._level,function(t){return a("span",{key:t,staticClass:"ms-tree-space"})}),t._v(" "),t.iconShow(0,e.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(a){t.toggleExpanded(e.$index)}}},[e.row._expanded?a("i",{staticClass:"el-icon-caret-bottom"}):a("i",{staticClass:"el-icon-caret-right"})]):t._e(),t._v("\n      "+t._s(e.$index)+"\n    ")]}}])}):t._l(t.columns,function(e,n){return a("el-table-column",{key:e.value,attrs:{label:e.text,width:e.width},scopedSlots:t._u([{key:"default",fn:function(o){return[t._l(o.row._level,function(e){return 0===n?a("span",{key:e,staticClass:"ms-tree-space"}):t._e()}),t._v(" "),t.iconShow(n,o.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(e){t.toggleExpanded(o.$index)}}},[o.row._expanded?a("i",{staticClass:"el-icon-caret-bottom"}):a("i",{staticClass:"el-icon-caret-right"})]):t._e(),t._v("\n      "+t._s(o.row[e.value])+"\n    ")]}}])})}),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var m={name:"category",components:{treeTable:a("VU/8")(c,u,!1,function(t){a("SeII"),a("xPaY")},"data-v-51226dd0",null).exports},data:function(){return{columns:[{text:this.$t("taxonomy.category"),value:"name",width:200},{text:this.$t("taxonomy.taxonomySlug"),value:"slug",width:200},{text:this.$t("taxonomy.taxonomyDesc"),value:"description"},{text:this.$t("taxonomy.articleNumber"),value:"count",width:100}],data:[],dataWithoutDefault:[],listLoading:!0,newForm:{name:"",slug:"",description:"",parentId:0},newProps:{label:"name",value:"term_id"},dialogFormVisible:!1,defaultParentId:[],updateForm:{id:void 0,name:"",slug:"",description:"",parentId:0},updateParentId:[],updateDisabled:!1}},created:function(){this.setTitle(),this.getList()},methods:{setTitle:function(){document.title=this.$t("route."+this.$route.meta.title)+" | Puti"},getList:function(){var t=this;this.listLoading=!0,Object(n.c)({type:"category"}).then(function(e){t.data=e.data,t.dataWithoutDefault=t.getDataWithoutDefault(e.data),t.listLoading=!1})},getDataWithoutDefault:function(t){for(var e=[],a=0;a<t.length;a++)1===t[a].term_id&&"uncategorized"===t[a].slug||e.push(t[a]);return e},handleDetail:function(t){var e=this;Object(n.d)(t.term_id).then(function(t){e.dialogFormVisible=!0,e.updateForm.id=t.data.term_id,e.updateForm.name=t.data.name,e.updateForm.slug=t.data.slug,e.updateForm.description=t.data.description,e.updateForm.parentId=t.data.parent_term_id,e.updateParentId=e.getParentArr(t.data)}),t.children.length>0&&(this.updateDisabled=!0)},getParentArr:function(t){var e=[];if(0!==t.parent_term_id){var a=this.getParent(this.data,t.parent_term_id,[]);e.push(a[0]),e=this.handleParent(a,a[0],e)}return e},handleParent:function(t,e,a){for(var n=0;n<=t.length-1;n++)if(void 0!==t[n]&&n===e){a.push(t[n]),a=this.handleParent(t,t[n],a);break}return a},getParent:function(t,e,a){var n=this.getUpdateParentId(t,e,[]);return a[n.pid]=n.id,0!==n.pid&&(a=this.getParent(t,n.pid,a)),a},getUpdateParentId:function(t,e,a){for(var n=0;n<=t.length-1;n++){if(e===t[n].term_id){a.id=t[n].term_id,a.pid=t[n].pid,0!==t[n].pid&&(a=this.getUpdateParentId(t,t[n].pid,a));break}null!==t[n].children&&(a=this.getUpdateParentId(t[n].children,e,a))}return a},handleChange:function(t){t.length>0?this.newForm.parentId=t[t.length-1]:this.newForm.parentId=0},handleChangeUpdate:function(t){if(t.length>0){var e=t[t.length-1];this.updateForm.id===e&&(this.updateParentId=[],this.$message.error(this.$t("taxonomy.parentCannotBeSelf"))),this.updateForm.parentId=e}else this.updateForm.parentId=0},closeUpdateDialog:function(){this.updateDisabled=!1},clearNewForm:function(){this.newForm.name="",this.newForm.slug="",this.newForm.description="",this.newForm.parentId=0,this.defaultParentId=[]},createCategory:function(){var t=this;this.newForm.taxonomy="category",Object(n.a)(this.newForm).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),t.getList()})},updateCategory:function(){var t=this;this.dialogFormVisible=!1,this.updateForm.taxonomy="category",Object(n.e)(this.updateForm.id,this.updateForm).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),t.getList()})},handleDelete:function(t){var e=this;this.$confirm(this.$t("taxonomy.confirmToDeleteCategory"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning",center:!0}).then(function(){Object(n.b)(t.id,{taxonomy:"category"}).then(function(t){e.getList(),e.$message({type:"success",message:e.$t("common.deleteSucceeded")})})}).catch(function(){e.$message({type:"info",message:e.$t("common.cancelDelete")})})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[a("el-form",{ref:"newForm",staticClass:"new-category-form",attrs:{model:t.newForm,"label-width":"80px","label-position":"top"}},[a("h4",[t._v(t._s(t.$t("taxonomy.newCategory")))]),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.taxonomyName")}},[a("el-input",{model:{value:t.newForm.name,callback:function(e){t.$set(t.newForm,"name",e)},expression:"newForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.taxonomySlug")}},[a("el-input",{model:{value:t.newForm.slug,callback:function(e){t.$set(t.newForm,"slug",e)},expression:"newForm.slug"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.categoryParent")}},[a("el-cascader",{attrs:{placeholder:t.$t("taxonomy.categoryNoParents"),options:t.dataWithoutDefault,props:t.newProps,"change-on-select":"true",clearable:"true"},on:{change:t.handleChange},model:{value:t.defaultParentId,callback:function(e){t.defaultParentId=e},expression:"defaultParentId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.taxonomyDesc")}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.newForm.description,callback:function(e){t.$set(t.newForm,"description",e)},expression:"newForm.description"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.createCategory()}}},[t._v(t._s(t.$t("common.addNow")))]),t._v(" "),a("el-button",{attrs:{size:"small",plain:""},on:{click:function(e){t.clearNewForm()}}},[t._v(t._s(t.$t("common.clear")))])],1)],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:16,lg:16,xl:16}},[a("tree-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.data,columns:t.columns,"max-height":"800",border:""}},[a("el-table-column",{attrs:{label:t.$t("common.action"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row.id?a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini",circle:""},on:{click:function(a){t.handleDetail(e.row)}}}):t._e(),t._v(" "),null==e.row.children&&1!=e.row.id?a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(a){t.handleDelete(e.row)}}}):t._e()]}}])})],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.$t("taxonomy.categoryDetail"),visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.updateForm}},[a("el-form-item",{attrs:{label:t.$t("taxonomy.taxonomyName"),"label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateForm.name,callback:function(e){t.$set(t.updateForm,"name",e)},expression:"updateForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.taxonomySlug"),"label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateForm.slug,callback:function(e){t.$set(t.updateForm,"slug",e)},expression:"updateForm.slug"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.categoryParent")}},[a("el-cascader",{attrs:{placeholder:t.$t("taxonomy.categoryNoParents"),options:t.dataWithoutDefault,props:t.newProps,"change-on-select":"true",clearable:"true"},on:{change:t.handleChangeUpdate},model:{value:t.updateParentId,callback:function(e){t.updateParentId=e},expression:"updateParentId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("taxonomy.taxonomyDesc")}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.updateForm.description,callback:function(e){t.$set(t.updateForm,"description",e)},expression:"updateForm.description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.updateCategory()}}},[t._v(t._s(t.$t("common.confirm")))])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(m,p,!1,function(t){a("5iUv")},null,null);e.default=h.exports},xPaY:function(t,e,a){var n=a("JuR+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("29576f66",n,!0)}});