(this.webpackJsonpdemoproject=this.webpackJsonpdemoproject||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/searchIcon.fc8e6cb1.jpg"},115:function(e,t,a){e.exports=a(155)},120:function(e,t,a){},122:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(120),a(80),a(121),a(48)),m=a(38),E=a(14),i=(a(122),a(46)),s=a.n(i),d=a(9),p=a(16),u=a.n(p),y=function(e){var t=e.isOpen,a=e.closePopup;s.a.setAppElement("#root");return r.a.createElement(s.a,{isOpen:t,className:"signupmodal",onRequestClose:a},r.a.createElement("div",{className:"signupcontainer"},r.a.createElement("div",{className:"close",onClick:a},"\xd7"),r.a.createElement("div",{className:"leftside"},r.a.createElement("div",{className:"signuptextupper"},"Looks like you're new here!"),r.a.createElement("div",{className:"signuptextlower"},"Sign up with your details to get started"),r.a.createElement("div",{className:"signupimage"})),r.a.createElement("div",{className:"rightside"},r.a.createElement(d.d,{initialValues:{UserName:"",Email:"",Password:"",confirmPassword:"",FirstName:"",LastName:"",DateOfBirth:"",PhoneNumber:""},onSubmit:function(e,t){var a=t.resetForm;u.a.post("http://www.absweb.somee.com/api/account/register",e).then((function(e){a({})})).catch((function(e){return console.log(e)}))},validate:function(e){var t={};return e.FirstName||(t.FirstName="First Name is required"),e.LastName||(t.LastName="Last Name is required"),e.Email?/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.Email)||(t.Email="Invalid Email format"):t.Email="Email is required",e.PhoneNumber?/^(\+\d{1,3}[- ]?)?\d{10}$/.test(e.PhoneNumber)||(t.PhoneNumber="Invalid Mobile number"):t.PhoneNumber="Mobile number is required",e.DateOfBirth||(t.DateOfBirth="Date of Birth is required"),e.Password||(t.Password="Password is required"),e.confirmPassword?e.Password!==e.confirmPassword&&(t.confirmPassword="Password is not matched"):t.confirmPassword="Re-type Password is required",t}},r.a.createElement(d.c,null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement(d.a,{name:"FirstName",component:"div"}),r.a.createElement(d.b,{placeholder:"First Name",type:"text",id:"FirstName",name:"FirstName"}),r.a.createElement(d.a,{name:"LastName",component:"div"}),r.a.createElement(d.b,{placeholder:"Last Name",type:"text",id:"LastName",name:"LastName"}),r.a.createElement(d.a,{name:"Email",component:"div"}),r.a.createElement(d.b,{placeholder:"E-mail",type:"text",id:"Email",name:"Email"}),r.a.createElement(d.a,{name:"PhoneNumber",component:"div"}),r.a.createElement(d.b,{placeholder:"Enter Mobile number",type:"text",id:"PhoneNumber",name:"PhoneNumber"}),r.a.createElement(d.a,{name:"DateOfBirth",component:"div"}),r.a.createElement(d.b,{placeholder:"Date of Birth-mm/dd/yyyy",type:"text",id:"DateOfBirth",name:"DateOfBirth"}),r.a.createElement(d.a,{name:"Password",component:"div"}),r.a.createElement(d.b,{placeholder:"Password",type:"Password",id:"Password",name:"Password"}),r.a.createElement(d.a,{name:"confirmPassword",component:"div"}),r.a.createElement(d.b,{placeholder:"Re-type Password",type:"Password",id:"confirmPassword",name:"confirmPassword"}),r.a.createElement("button",{type:"submit"},"Sign Up"))))))},b=function(e){var t=e.isOpen,a=e.closePopup;s.a.setAppElement("#root");return r.a.createElement(s.a,{isOpen:t,className:"signinmodal",onRequestClose:a},r.a.createElement("div",{className:"signincontainer"},r.a.createElement("div",{className:"close",onClick:a},"\xd7"),r.a.createElement("div",{className:"formcontainer"},r.a.createElement(d.d,{initialValues:{email:"",password:""},onSubmit:function(e){console.log(e)},validate:function(e){var t={};return e.email?/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.email)||(t.email="Invalid email format"):t.email="Email is required",e.password||(t.password="Password is required"),t}},r.a.createElement(d.c,null,r.a.createElement("h1",null,"Sign In"),r.a.createElement(d.a,{name:"email",component:"div"}),r.a.createElement(d.b,{placeholder:"E-mail",type:"text",id:"email",name:"email"}),r.a.createElement(d.a,{name:"password",component:"div"}),r.a.createElement(d.b,{placeholder:"Password",type:"password",id:"password",name:"password"}),r.a.createElement("button",{type:"submit"},"Sign In"))))))},f=a(96),S=a(97),T=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(E.a)(o,2),m=c[0],i=c[1];return r.a.createElement("div",{className:"parentcontainer"},r.a.createElement("div",{className:"firstheader"},r.a.createElement("div",{className:"searchcontainer"},r.a.createElement("input",{placeholder:"Search here",className:"searchbox",type:"text"}),r.a.createElement(f.a,{className:"searchicon",icon:S.a})),r.a.createElement("button",{onClick:function(){return i(!0)},className:"loginbutton"},"Login"),r.a.createElement("button",{onClick:function(){return l(!0)},className:"signupbutton"},"Sign Up")),r.a.createElement(y,{isOpen:a,closePopup:function(){l(!1)}}),r.a.createElement(b,{isOpen:m,closePopup:function(){i(!1)}}))},D=a(184),_=a(182),g=r.a.memo((function(){return console.log("navigation render"),r.a.createElement(D.a,{bg:"dark",expand:"lg"},r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"}),r.a.createElement(_.a,null,r.a.createElement(c.b,{to:"/",className:"d-inline p-2 bg-dark text-white"},"Home"),r.a.createElement(c.b,{to:"/Departments",className:"d-inline p-2 bg-dark text-white"},"Departments"),r.a.createElement(c.b,{to:"/Employees",className:"d-inline p-2 bg-dark text-white"},"Employees")))})),h=a(44),O=a(176),v=a(177),N=a(175),R=a(68),w=a(179),j=a(174),U=a(106),P=a(180),I=r.a.memo((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{show:e.show,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(w.a.Header,{closeButton:!0,onClick:e.onHide},r.a.createElement(w.a.Title,{id:"contained-modal-title-vcenter"},e.department&&e.department.isEdit?"Edit Department Details":"Add Department Details")),r.a.createElement(w.a.Body,null,r.a.createElement(j.a,null,r.a.createElement(U.a,{sm:6},r.a.createElement(P.a,{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e&&e.department&&e.department.isEdit?e.editDepartment({DeptId:t.target.DepartmentId.value,DepartmentName:t.target.DepartmentName.value}):e.saveDepartment({DepartmentName:t.target.DepartmentName.value})}},e.department&&e.department.isEdit&&r.a.createElement(P.a.Group,{controlId:"DepartmentId"},r.a.createElement(P.a.Label,null,"DepartmentId"),r.a.createElement(P.a.Control,{type:"text",name:"DepartmentId",required:!0,defaultValue:e.department.deptId,placeholder:"DepartmentId",disabled:"true"})),r.a.createElement(P.a.Group,{controlId:"DepartmentName"},r.a.createElement(P.a.Label,null,"DepartmentName"),r.a.createElement(P.a.Control,{type:"text",name:"DepartmentName",required:!0,placeholder:"DepartmentName",defaultValue:e.department&&e.department.deptName})),r.a.createElement(P.a.Group,null,r.a.createElement(N.a,{variant:"primary",type:"submit"},e.department&&e.department.isEdit?"Edit Department":"Add Department")))))),r.a.createElement(w.a.Footer,null,r.a.createElement(N.a,{variant:"danger",onClick:e.onHide},"Close"))))})),C=a(13),A=a(20),L=(a(93),function(){return function(e){e({type:"GET_DEPARTMENT_REQUEST"}),u.a.get("http://www.absweb.somee.com/api/department").then((function(t){var a=t.data;e(function(e){return{type:"GET_DEPARTMENT_REQUEST_SUCCESS",payload:e}}(a))})).catch((function(t){e({type:"GET_DEPARTMENT_REQUEST_FAILURE",payload:t.message})}))}}),M=function(e,t){return function(a){a({type:"SAVE_DEPARTMENT_REQUEST"}),u.a.post("http://www.absweb.somee.com/api/department",e).then((function(e){a({type:"SAVE_DEPARTMENT_REQUEST_SUCCESS",payload:e.data}),t("Department save successfully")})).catch((function(e){a({type:"SAVE_DEPARTMENT_REQUEST_FAILURE",payload:e.message}),t(e.message)}))}},Q=function(e,t){return function(a){a({type:"EDIT_DEPARTMENT_REQUEST"}),u.a.put("http://www.absweb.somee.com/api/department",e).then((function(e){a({type:"EDIT_DEPARTMENT_REQUEST_SUCCESS",payload:e.data}),t()})).catch((function(e){console.log(e),a({type:"EDIT_DEPARTMENT_REQUEST_FAILURE",payload:e.message})}))}},k=function(e){return function(t){t({type:"DELETE_DEPARTMENT_REQUEST"}),u.a.delete("http://www.absweb.somee.com/api/department/".concat(e)).then((function(e){t({type:"DELETE_DEPARTMENT_REQUEST_SUCCESS",payload:e.data})})).catch((function(e){t({type:"DELETE_DEPARTMENT_REQUEST_FAILURE",payload:e.message})}))}},F=Object(h.b)((function(e){return{departments:e.departmentReducer,postResponse:e.departmentReducer.message}}),(function(e){return{getDepartments:Object(C.bindActionCreators)(L,e),saveDepartment:Object(C.bindActionCreators)(M,e),editDepartment:Object(C.bindActionCreators)(Q,e),deleteDepartment:Object(C.bindActionCreators)(k,e)}}))(r.a.memo((function(e){var t=e.departments,a=e.getDepartments,l=e.saveDepartment,o=e.editDepartment,c=e.deleteDepartment,m=e.postResponse,i=Object(n.useState)(!1),s=Object(E.a)(i,2),d=s[0],p=s[1],u=Object(n.useState)(!1),y=Object(E.a)(u,2),b=y[0],f=y[1],S=Object(n.useState)({deptId:0,deptName:"",isEdit:!1}),T=Object(E.a)(S,2),D=T[0],_=T[1];return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",null,r.a.createElement(A.a,null),r.a.createElement(O.a,{className:"mt-4",striped:!0,border:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"DepartmentID"),r.a.createElement("th",null,"DepartmentName"),r.a.createElement("th",null,"Option"))),t.loading?r.a.createElement(R.a,{animated:!0,now:60}):r.a.createElement("tbody",null,t&&t.departments&&t.departments.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.DeptId),r.a.createElement("td",null,e.DepartmentName),r.a.createElement("td",null,r.a.createElement(v.a,null,r.a.createElement(N.a,{className:"mr-2",variant:"info",onClick:function(){return t=e.DeptId,a=e.DepartmentName,f(!0),void _({deptId:t,deptName:a,isEdit:!0});var t,a}},"Edit"))),r.a.createElement("td",null,r.a.createElement(v.a,null,r.a.createElement(N.a,{className:"mr-2",variant:"danger",onClick:function(){return t=e.DeptId,void c(t,(function(){return Object(A.b)("Department remove successfully")}));var t}},"Delete"))))})))),t.loading?null:r.a.createElement(v.a,null,r.a.createElement(N.a,{variant:"primary",onClick:function(){p(!0)}},"Add Department")),r.a.createElement(I,{editDepartment:function(e){o(e,(function(){return Object(A.b)("Department modify successfully")}))},show:b,onHide:function(){return f(!1)},department:D}),r.a.createElement(I,{saveDepartment:function(e){l(e,(function(e){return Object(A.b)(e)}))},show:d,onHide:function(){return p(!1)}}),JSON.stringify(m))}))),Y=a(181),x=a(183),V=r.a.memo((function(e){console.log("empmodel render");return r.a.createElement("div",{className:"container"},r.a.createElement(Y.a,{anchorOrigin:{vertical:"centre",horizontal:"center"},open:e&&e.showSnack&&e.showSnack.value,autoHideDuration:5e3,onClose:e&&e.snackbar&&e.snackbar,message:r.a.createElement("span",{id:"message-id"},e&&e.showSnack&&e.showSnack.message),action:[r.a.createElement(x.a,{key:"close","arial-label":"close",color:"inherit",onClick:e&&e.snackbar},"X")]}),r.a.createElement(w.a,{show:e.show,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(w.a.Header,{closeButton:!0,onClick:e.onHide},r.a.createElement(w.a.Title,{id:"contained-modal-title-vcenter"},e.employee&&e.employee.isEdit?"Edit Employee Details":"Add Employee Details")),r.a.createElement(w.a.Body,null,r.a.createElement(j.a,null,r.a.createElement(U.a,{sm:6},r.a.createElement(P.a,{onSubmit:function(t){t.preventDefault(),e.employee&&e.employee.isEdit?e.editEmployee({EmpId:t.target.EmployeeId.value,EmpName:t.target.EmployeeName.value,DeptId:t.target.DepartmentId.value,Email:t.target.Email.value,Doj:t.target.Doj.value}):e.saveEmployee({EmpName:t.target.EmployeeName.value,DeptId:t.target.DepartmentId.value,Email:t.target.Email.value,Doj:t.target.Doj.value})},autoComplete:"off"},e.employee&&e.employee.isEdit&&r.a.createElement(P.a.Group,{controlId:"EmployeeId"},r.a.createElement(P.a.Label,null,"EmployeeId"),r.a.createElement(P.a.Control,{type:"text",name:"EmployeeId",required:!0,defaultValue:e.employee&&e.employee.empId,placeholder:"EmployeeId",disabled:"true"})),r.a.createElement(P.a.Group,{controlId:"EmployeeName"},r.a.createElement(P.a.Label,null,"EmployeeName"),r.a.createElement(P.a.Control,{type:"text",name:"EmployeeName",required:!0,placeholder:"EmployeeName",defaultValue:e.employee&&e.employee.empName})),r.a.createElement(P.a.Group,{controlId:"DepartmentId"},r.a.createElement(P.a.Label,null,"DepartmentId"),r.a.createElement(P.a.Control,{type:"text",name:"DepartmentId",required:!0,placeholder:"DepartmentId",defaultValue:e.employee&&e.employee.deptId})),r.a.createElement(P.a.Group,{controlId:"Email"},r.a.createElement(P.a.Label,null,"Email"),r.a.createElement(P.a.Control,{type:"text",name:"Email",required:!0,placeholder:"Email",defaultValue:e.employee&&e.employee.email})),r.a.createElement(P.a.Group,{controlId:"Doj"},r.a.createElement(P.a.Label,null,"Doj"),r.a.createElement(P.a.Control,{type:"text",name:"Doj",required:!0,placeholder:"Doj",defaultValue:e.employee&&e.employee.doj})),r.a.createElement(P.a.Group,null,r.a.createElement(N.a,{variant:"primary",type:"submit"},e.employee&&e.employee.isEdit?"Edit Employee":"Add Employee")))))),r.a.createElement(w.a.Footer,null,r.a.createElement(N.a,{variant:"danger",onClick:e.onHide},"Close"))))})),G=function(){return function(e){e({type:"GET_EMPLOYEE_REQUEST"}),u.a.get("http://www.absweb.somee.com/api/employee").then((function(t){var a=t.data;e(function(e){return{type:"GET_EMPLOYEE_REQUEST_SUCCESS",payload:e}}(a))})).catch((function(t){e({type:"GET_EMPLOYEE_REQUEST_FAILURE",payload:t.message})}))}},q=function(e){return function(t){return t({type:"SAVE_EMPLOYEE_REQUEST"}),u.a.post("http://www.absweb.somee.com/api/employee",e).then((function(e){return t({type:"SAVE_EMPLOYEE_REQUEST_SUCCESS",payload:e.data})})).catch((function(e){return t({type:"SAVE_EMPLOYEE_REQUEST_FAILURE",payload:e.message})}))}},B=function(e){return function(t){return t({type:"EDIT_EMPLOYEE_REQUEST"}),u.a.put("http://www.absweb.somee.com/api/employee",e).then((function(e){return t({type:"EDIT_EMPLOYEE_REQUEST_SUCCESS",payload:e.data})})).catch((function(e){return t({type:"EDIT_EMPLOYEE_REQUEST_FAILURE",payload:e.message})}))}},H=function(e){return function(t){return t({type:"DELETE_EMPLOYEE_REQUEST"}),u.a.delete("http://www.absweb.somee.com/api/employee/".concat(e)).then((function(e){return t({type:"DELETE_EMPLOYEE_REQUEST_SUCCESS",payload:e.data})})).catch((function(e){return t({type:"DELETE_EMPLOYEE_REQUEST_FAILURE",payload:e.message})}))}},z=Object(h.b)((function(e){return{employees:e.employeeReducer,postResponseEmployee:e.employeeReducer.message}}),(function(e){return{getEmployees:Object(C.bindActionCreators)(G,e),saveEmployee:Object(C.bindActionCreators)(q,e),editEmployee:Object(C.bindActionCreators)(B,e),deleteEmployee:Object(C.bindActionCreators)(H,e)}}))(r.a.memo((function(e){var t=e.employees,a=e.getEmployees,l=e.saveEmployee,o=e.editEmployee,c=e.deleteEmployee,m=e.postResponseEmployee,i=Object(n.useState)(!1),s=Object(E.a)(i,2),d=s[0],p=s[1],u=Object(n.useState)(!1),y=Object(E.a)(u,2),b=y[0],f=y[1],S=Object(n.useState)({value:!1,message:""}),T=Object(E.a)(S,2),D=T[0],_=T[1],g=Object(n.useState)({empId:0,empName:"",depId:0,email:"",doj:"",isEdit:!1}),h=Object(E.a)(g,2),w=h[0],j=h[1],U=function(){_({value:!D.value,message:m})};return Object(n.useEffect)((function(){console.log("EmployeeEffect call"),a()}),[a]),r.a.createElement("div",null,r.a.createElement(A.a,null),r.a.createElement(O.a,{className:"mt-4",striped:!0,border:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"EmployeeId"),r.a.createElement("th",null,"EmployeeName"),r.a.createElement("th",null,"DepartmentId"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Date of Joining"),r.a.createElement("th",null,"Option"))),t.loading?r.a.createElement(R.a,{animated:!0,now:60}):r.a.createElement("tbody",null,t&&t.employees&&t.employees.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.EmpId),r.a.createElement("td",null,e.EmpName),r.a.createElement("td",null,e.DeptId),r.a.createElement("td",null,e.Email),r.a.createElement("td",null,e.Doj),r.a.createElement("td",null,r.a.createElement(v.a,null,r.a.createElement(N.a,{className:"mr-2",variant:"info",onClick:function(){return t=e.EmpId,a=e.EmpName,n=e.DeptId,r=e.Email,l=e.Doj,f(!0),void j({empId:t,empName:a,deptId:n,email:r,doj:l,isEdit:!0});var t,a,n,r,l}},"Edit"))),r.a.createElement("td",null,r.a.createElement(v.a,null,r.a.createElement(N.a,{className:"mr-2",variant:"danger",onClick:function(){return t=e.EmpId,void c(t).then((function(e){"DELETE_EMPLOYEE_REQUEST_SUCCESS"==e.type?A.b.success("Department remove successfully"):A.b.error(e.payload)}));var t}},"Delete"))))})))),t.loading?null:r.a.createElement(v.a,null,r.a.createElement(N.a,{variant:"primary",onClick:function(){p(!0)}},"Add Employee")),r.a.createElement(V,{showSnack:D,snackbar:U,editEmployee:function(e){o(e).then((function(e){"EDIT_EMPLOYEE_REQUEST_SUCCESS"==e.type?A.b.success("Employee modify successfully"):A.b.error(e.payload)}))},show:b,onHide:function(){return f(!1)},employee:w}),r.a.createElement(V,{showSnack:D,snackbar:U,saveEmployee:function(e){l(e).then((function(e){"SAVE_EMPLOYEE_REQUEST_SUCCESS"==e.type?A.b.success("Employee added successfully"):A.b.error(e.payload)}))},show:d,onHide:function(){return p(!1)}}))}))),$=(r.a.memo((function(){return console.log("footer render"),r.a.createElement("div",null,"Footer")})),a(6)),Z={loading:!1,departments:{},employees:{},message:""},J=a(79),W=a.n(J),X=Object(C.combineReducers)({departmentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DEPARTMENT_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"GET_DEPARTMENT_REQUEST_SUCCESS":return W()(e,{departments:{$set:t.payload},loading:{$set:!1}});case"GET_DEPARTMENT_REQUEST_FAILURE":return W()(e,{message:{$set:t.payload},loading:{$set:!1}});case"SAVE_DEPARTMENT_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"SAVE_DEPARTMENT_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:"Deparment Save Successfully",departments:t.payload});case"SAVE_DEPARTMENT_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});case"EDIT_DEPARTMENT_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"EDIT_DEPARTMENT_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:"Department Modify Successfully",departments:t.payload});case"EDIT_DEPARTMENT_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});case"DELETE_DEPARTMENT_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"DELETE_DEPARTMENT_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:"Department Remove Succssfully",departments:t.payload});case"DELETE_DEPARTMENT_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});default:return{state:e}}},employeeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMPLOYEE_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"GET_EMPLOYEE_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,employees:t.payload});case"GET_EMPLOYEE_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});case"SAVE_EMPLOYEE_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"SAVE_EMPLOYEE_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:"Employee Save Successfully",employees:t.payload});case"SAVE_EMPLOYEE_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});case"EDIT_EMPLOYEE_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"EDIT_EMPLOYEE_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:"Employee Modify Successfully",employees:t.payload});case"EDIT_EMPLOYEE_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});case"DELETE_EMPLOYEE_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"DELETE_EMPLOYEE_REQUEST_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:"Employee remove successfully",employees:t.payload});case"DELETE_EMPLOYEE_REQUEST_FAILURE":return Object($.a)(Object($.a)({},e),{},{loading:!1,message:t.payload});default:return{state:e}}}}),K=a(107),ee=a(108),te=Object(C.createStore)(X,Object(K.composeWithDevTools)(Object(C.applyMiddleware)(ee.a)));r.a.memo((function(){return console.log("home render"),r.a.createElement("div",null,"Home")}));var ae=function(){return r.a.createElement(h.a,{store:te},r.a.createElement(c.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",component:T,exact:!0}),r.a.createElement(m.a,{path:"/Departments",component:F,exact:!0}),r.a.createElement(m.a,{path:"/Employees",component:z,exact:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(109);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.3c01c5c0.chunk.js.map