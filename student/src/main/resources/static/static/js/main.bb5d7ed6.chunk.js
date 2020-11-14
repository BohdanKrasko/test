(this.webpackJsonpjs=this.webpackJsonpjs||[]).push([[0],{152:function(e,t,n){},205:function(e,t,n){e.exports=n(382)},211:function(e,t,n){},330:function(e,t,n){},336:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),l=(n(210),n(211),n(79)),c=n(80),u=n(91),s=n(87),d=(n(152),n(86)),m=n(33),f=n(92),h=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,e.json().then((function(e){t.error=e})),Promise.reject(t)},E=function(){return Object(f.a)("/api/students").then(h)},S=function(e){return Object(f.a)("/api/students/".concat(e,"/course")).then(h)},p=function(e){return Object(f.a)("/api/students/".concat(e),{method:"DELETE"}).then(h)},g=function(e,t){return Object(f.a)("/api/students/".concat(e),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(t)}).then((function(e){console.log("response: "+JSON.stringify(e))})).catch(h)},y=n(385),b=n(58),v=function(e){return r.a.createElement("div",{style:{width:"1400px",margin:"0 auto"}},e.children)},N=n(388),k=function(e,t,n){N.a[e]({message:t,description:n})},I=function(e,t){return k("success",e,t)},M=function(e,t){return k("info",e,t)},A=function(e,t){return k("error",e,t)},C=n(177),x=n(387),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={courses:[],studentId:"",isFetching:!1},e.fetchStudentCourses=function(){e.setState({isFetching:!0});var t=e.props.match.params.studentId;e.setState({studentId:t}),S(t).then((function(e){return e.json()})).then((function(t){e.setState({courses:t}),e.setState({isFetching:!1})})).catch((function(t){var n=t.error.error,a=t.error.description;M(n,a),e.setState({isFetching:!1})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.fetchStudentCourses()}},{key:"render",value:function(){var e=this.state,t=e.courses;if(e.isFetching)return r.a.createElement("div",{className:"spinner"},r.a.createElement(C.a,{indicator:r.a.createElement(x.a,{style:{fontSize:24},spin:!0})}));if(t&&t.length){return r.a.createElement(v,null,r.a.createElement(y.a,{dataSource:t,columns:[{title:"Course Id",dataIndex:"courseId",key:"courseId"},{title:"Department",dataIndex:"department",key:"department"},{title:"Description",dataIndex:"description",key:"description"},{title:"Grade",dataIndex:"grade",key:"grade"},{title:"Name",dataIndex:"name",key:"name"},{title:"Start Date",dataIndex:"startDate",key:"startDate"},{title:"End Date",dataIndex:"endDate",key:"endDate"},{title:"Teacher Name",dataIndex:"teacherName",key:"teacherName"}],rowKey:"courseId",pagination:!1}))}return r.a.createElement(v,null,r.a.createElement(b.a,{style:{marginTop:"9em"},image:b.a.PRESENTED_IMAGE_SIMPLE,description:"No course found"}))}}]),n}(a.Component),j=n(42),F=n(384),w=n(390),T=(n(330),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement(v,null,void 0!==e.numberOfStudents?r.a.createElement(F.a,{style:{backgroundColor:"#f56a00",marginRight:"5px"},size:"large"},e.numberOfStudents):null,r.a.createElement(j.a,{onClick:function(){return e.handleAddStudentClickEvent()},type:"primary"},"Add new student +")))}),D=n(97),V=n.n(D),L=n(54),B=n(386),G=n(389),J={marginBottom:"10px"},P=function(e){return r.a.createElement(L.c,{initialValues:{firstName:"",lastName:"",email:"",gender:""},validate:function(e){var t={};return e.firstName||(t.firstName="First Name required"),e.lastName||(t.lastName="Last Name required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email required",e.gender?["MALE","male","FEMALE","female"].includes(e.gender)||(t.gender="Gender must be (MALE, male, FEMALE)"):t.gender="Gender required",t},onSubmit:function(t,n){var a,r=n.setSubmitting;(a=t,Object(f.a)("/api/students",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then(h)).then((function(){e.onSuccess()})).catch((function(t){e.onFailuer(t)})).finally(r(!1))}},(function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,o=e.handleBlur,l=e.handleSubmit,c=e.isSubmitting,u=e.submitForm,s=e.isValid;return r.a.createElement("form",{onSubmit:l},r.a.createElement(B.a,{style:J,name:"firstName",onChange:i,onBlur:o,value:t.firstName,placeholder:"First name. E.g. John"}),n.firstName&&a.firstName&&r.a.createElement(G.a,{color:"red",style:J},n.firstName),r.a.createElement(B.a,{style:J,name:"lastName",onChange:i,onBlur:o,value:t.lastName,placeholder:"Last name. E.g. Nelson"}),n.lastName&&a.lastName&&r.a.createElement(G.a,{color:"red",style:J},n.lastName),r.a.createElement(B.a,{style:J,name:"email",type:"email",onChange:i,onBlur:o,value:t.email,placeholder:"Email. E.g. example@gmail.com"}),n.email&&a.email&&r.a.createElement(G.a,{color:"red",style:J},n.email),r.a.createElement(B.a,{style:J,name:"gender",onChange:i,onBlur:o,value:t.gender,placeholder:"Gender. E.g. MALE or FEMALE"}),n.gender&&a.gender&&r.a.createElement(G.a,{color:"red",style:J},n.gender),r.a.createElement(j.a,{onClick:function(){return u()},type:"submit",disabled:c||a&&!s},"Submit"))}))},z=(n(336),{marginBottom:"10px"}),R=function(e){var t=e.submitter,n=e.initialValues;return r.a.createElement(L.c,{initialValues:n,enableReinitialize:!0,onSubmit:function(e,n){var a=n.setSubmitting;t(e),a(!1)}},(function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,o=e.handleBlur,l=e.handleSubmit,c=e.isSubmitting,u=e.submitForm,s=e.isValid;return r.a.createElement("form",{onSubmit:l},r.a.createElement(B.a,{style:z,name:"firstName",onChange:i,onBlur:o,value:t.firstName,placeholder:"First name. E.g. John"}),n.firstName&&a.firstName&&r.a.createElement(G.a,{color:"red",style:z},n.firstName),r.a.createElement(j.a,{onClick:function(){return u()},type:"submit",disabled:c||a&&!s},"Submit"))}))},_=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={students:[],selectedStudent:{},isFetching:!1,isAddStuudentModalVisibility:!1,isEditStudentModalVisibil:!1},e.openAddStuudentModal=function(){return e.setState({isAddStuudentModalVisibility:!0})},e.openEditStudentModal=function(){return e.setState({isEditStudentModalVisibil:!0})},e.closeAddStuudentModal=function(){return e.setState({isAddStuudentModalVisibility:!1})},e.closeEditStudentModal=function(){return e.setState({isEditStudentModalVisibil:!1})},e.deleteSt=function(t,n){p(t).then((function(){I("You delete ".concat(n),""),e.fetchStudents()})).catch((function(e){console.log(e)}))},e.editStudent=function(t){e.setState({selectedStudent:t}),e.openEditStudentModal()},e.updateStudentFormSubmitter=function(t){g(t.studentId,t).then((function(){e.closeEditStudentModal(),e.fetchStudents()}))},e.fetchStudents=function(){e.setState({isFetching:!0}),E().then((function(t){return t.json().then((function(t){console.log(t),e.setState({students:t,isFetching:!1})}))})).catch((function(t){var n=t.error.message,a=t.error.error;A(n,a),e.setState({isFetching:!1})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.fetchStudents()}},{key:"render",value:function(){var e=this,t=this.state,n=t.students,a=t.isFetching,i=t.isAddStuudentModalVisibility,o=t.isEditStudentModalVisibil;if(a)return r.a.createElement("div",{className:"spinner"},r.a.createElement(C.a,{indicator:r.a.createElement(x.a,{style:{fontSize:24},spin:!0})}));var l=function(){return r.a.createElement("div",null,r.a.createElement(V.a,{title:"Add new student",visible:i,onOk:e.closeAddStuudentModal,onCancel:e.closeAddStuudentModal,cancelText:!0,okText:!0,width:1e3},r.a.createElement(P,{onSuccess:function(){e.closeAddStuudentModal(),e.fetchStudents(),I("Congratulation!","You successfully added new student")},onFailuer:function(e){var t=e.error.message,n=e.error.error;A(t,n)}})),r.a.createElement(T,{numberOfStudents:n.length,handleAddStudentClickEvent:e.openAddStuudentModal}))};if(n&&n.length){var c=[{title:"",key:"avatar",render:function(e,t){return r.a.createElement(F.a,{size:"large"},"".concat(t.firstName.charAt(0).toUpperCase()," ").concat(t.lastName.charAt(0).toUpperCase()))}},{title:"StudentId",dataIndex:"studentId",key:"studentId"},{title:"First Name",dataIndex:"firstName",key:"firstName"},{title:"Last Name",dataIndex:"lastName",key:"lastName"},{title:"Email",dataIndex:"email",key:"email"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"",key:"course",render:function(e,t){return r.a.createElement(d.b,{to:"/".concat(t.studentId,"/courses")},"Course")}},{title:"",key:"edit",render:function(t,n){return r.a.createElement(j.a,{onClick:function(){return e.editStudent(n)}},"Edit")}},{title:"",key:"delete",render:function(t,n){return r.a.createElement(w.a,{placement:"topLeft",title:"Are you sure to delete this task?",onConfirm:function(){return e.deleteSt(n.studentId,n.firstName)},okText:"Yes",cancelText:"No"},r.a.createElement(j.a,{danger:!0},"Delete"))}}];return r.a.createElement(v,null,r.a.createElement(y.a,{style:{marginBottom:"100px"},dataSource:n,columns:c,rowKey:"studentId",pagination:!1}),l(),r.a.createElement("div",null,r.a.createElement(V.a,{visible:o,title:"Edit",onOk:e.closeEditStudentModal,onCancel:e.closeEditStudentModal,width:1e3,footer:[r.a.createElement(j.a,{key:"back",onClick:e.closeEditStudentModal},"Return"),r.a.createElement(j.a,{key:"submit",type:"primary"},"Submit")]},r.a.createElement(R,{initialValues:e.state.selectedStudent,submitter:e.updateStudentFormSubmitter}))))}return r.a.createElement(v,null,r.a.createElement(b.a,{style:{marginTop:"9em"},image:b.a.PRESENTED_IMAGE_SIMPLE,description:"No student found"}),l(),";")}}]),n}(a.Component),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:_}),r.a.createElement(m.a,{exact:!0,path:"/:studentId/courses",component:O}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.bb5d7ed6.chunk.js.map