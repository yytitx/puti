webpackJsonp([29],{Dhb6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("iDPj"),i={name:"pageList",data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,number:15,title:void 0,sort:"DESC",status:void 0},sortOptions:["DESC","ASC"],statusOptions:["publish","draft","deleted"]}},filters:{statusFilter:function(t){return{publish:"success",draft:"info",deleted:"danger"}[t]}},created:function(){this.getList(),this.setTitle()},methods:{setTitle:function(){document.title=this.$t("route."+this.$route.meta.title)+" | Puti"},getList:function(){var t=this;this.listLoading=!0,Object(s.c)(this.listQuery).then(function(e){t.list=e.data.pageList,t.total=e.data.totalCount,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.number=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleEditPage:function(t){this.$router.push({path:"/page/edit/"+t})},handleDelete:function(t){var e=this;this.$confirm(this.$t("post.checkToDeletePage"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning",center:!0}).then(function(){Object(s.b)(t.id).then(function(t){e.$message({type:"success",message:e.$t("common.removeSucceeded")}),e.getList()})}).catch(function(){e.$message({type:"info",message:e.$t("common.cancelRemove")})})},handleTrashPage:function(t){var e=this;this.$confirm(this.$t("post.checkToTrashPage"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning",center:!0}).then(function(){var n={id:t.id,status:"deleted"};Object(s.e)(n).then(function(t){e.$message({message:e.$t("common.operationSucceeded"),type:"success",duration:2e3}),e.getList()})}).catch(function(){e.$message({type:"info",message:e.$t("common.cancelDelete")})})},handleRestorePage:function(t){var e=this,n={id:t.id,status:"restore"};Object(s.e)(n).then(function(t){e.$message({message:e.$t("common.operationSucceeded")+e.$t("post.restorePageSucceeded"),type:"success",duration:3e3}),e.getList()})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("post.title")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:t.$t("post.status")},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusOptions,function(e){return n("el-option",{key:e,attrs:{label:t.$t("post."+e),value:e}})}),1),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,function(e){return n("el-option",{key:e,attrs:{label:t.$t("common."+e),value:e}})}),1),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("common.search")))]),t._v(" "),n("router-link",{attrs:{to:"/page/new"}},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"}},[t._v(t._s(t.$t("common.add")))])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:t.$t("common.ID"),width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"180px",align:"center",label:t.$t("post.date")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.post_date))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"300px",label:t.$t("post.title")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{staticClass:"link-type",attrs:{to:"/page/edit/"+e.row.id}},[n("span",[t._v(t._s(e.row.title))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"120px",align:"center",label:t.$t("post.author")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.userId))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("post.comments"),width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.comment_count))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("post.views"),width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.view_count?n("span",[t._v(t._s(e.row.view_count))]):n("span",[t._v("0")])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center","class-name":"status-col",label:t.$t("post.status"),width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},["publish"===e.row.status?n("div",[n("i",{staticClass:"el-icon-check"}),t._v(" "+t._s(t.$t("post.publish"))+"\n          ")]):"draft"===e.row.status?n("div",[n("i",{staticClass:"el-icon-edit-outline"}),t._v(" "+t._s(t.$t("post.draft"))+"\n          ")]):"deleted"===e.row.status?n("div",[n("i",{staticClass:"el-icon-delete"}),t._v(" "+t._s(t.$t("post.deleted"))+"\n          ")]):n("div",[t._v("\n            "+t._s(t.$t("common.error"))+"\n          ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("post.action"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return["deleted"==e.row.status?[n("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-delete"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("\n            "+t._s(t.$t("common.remove"))+"\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-delete"},on:{click:function(n){return t.handleRestorePage(e.row)}}},[t._v("\n              "+t._s(t.$t("common.restore"))+"\n          ")])]:[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(n){return t.handleEditPage(e.row.id)}}},[t._v("\n            "+t._s(t.$t("common.edit"))+"\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(n){return t.handleTrashPage(e.row)}}},[t._v("\n            "+t._s(t.$t("common.delete"))+"\n          ")])]]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,15,20,30,50],"page-size":t.listQuery.number,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]},o=n("VU/8")(i,a,!1,null,null,null);e.default=o.exports}});