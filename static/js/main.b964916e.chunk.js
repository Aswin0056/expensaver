(this.webpackJsonpexpensaver=this.webpackJsonpexpensaver||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),c=a(5),s=a(3),i=a(34);a(23);var m=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),m=Object(s.p)();return l.a.createElement("div",{className:"login-container"},l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"logo",className:"login-logo"}),l.a.createElement("div",{className:"login-box"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault(),c("");try{const t=await i.a.post("http://localhost:5000/login",{email:e,password:a});console.log("Login Response:",t.data),t.data.token?(localStorage.setItem("authToken",t.data.token),localStorage.setItem("userId",t.data.userId),i.a.defaults.headers.common.Authorization="Bearer "+t.data.token,m("/dashboard")):c("Login failed, please try again.")}catch(s){var n,l,r,o;console.error("Login Error:",null===(n=s.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.error),c((null===(r=s.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.error)||"Invalid email or password")}}},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",value:e,onChange:e=>t(e.target.value),required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",value:a,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("button",{type:"submit",className:"login-button"},"Login")),o&&l.a.createElement("p",{className:"error-message"},o),l.a.createElement("p",{className:"signup-text"},"Don't have an account?"," ",l.a.createElement("button",{onClick:()=>m("/register"),className:"register-button"},"Register"))))};a(28);var u=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),[m,u]=Object(n.useState)(""),d=Object(s.p)();return l.a.createElement("div",{className:"register-container"},l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"logo",className:"register-logo"}),l.a.createElement("div",{className:"register-box"},l.a.createElement("h2",null,"Register"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault(),u("");try{const t=await i.a.post("http://localhost:5000/register",{username:e,email:a,password:o});console.log("Register Response:",t.data),"User already exists"===t.data.message?u("Email is already registered. Try logging in."):"Registration successful!"===t.data.message&&(u("Registration successful! Redirecting to login..."),setTimeout(()=>d("/login"),2e3))}catch(s){var n,l,r,c;console.error("Register Error:",null===(n=s.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.error),u((null===(r=s.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.error)||"Registration failed. Please try again.")}}},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",value:a,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",value:o,onChange:e=>c(e.target.value),required:!0})),l.a.createElement("button",{type:"submit",className:"register-button"},"Register")),m&&l.a.createElement("p",{className:"error-message"},m),l.a.createElement("p",{className:"login-text"},"Already have an account?"," ",l.a.createElement("button",{onClick:()=>d("/login"),className:"login-button"},"Login"))))};a(29);const d=e=>{let{handleLogout:t,username:a}=e;return l.a.createElement("nav",{className:"navbar"},l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"logo",className:"logo"}),l.a.createElement("div",{className:"navbar-right"},l.a.createElement("span",{className:"user-username"},a)," ",l.a.createElement("button",{className:"logout-button",onClick:t},"Logout")))},E=()=>{const e=Object(s.p)();return l.a.createElement("div",{className:"sidebar"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:()=>e("/dashboard")},"Dashboard"),l.a.createElement("li",{onClick:()=>e("/expenses")},"Expenses"),l.a.createElement("li",{onClick:()=>e("/income")},"Income")))},g=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ExpenSaver. All rights reserved."));var p=()=>{const e=Object(s.p)(),[t,a]=Object(n.useState)(""),[r,o]=Object(n.useState)(""),[c,m]=Object(n.useState)(""),[u,p]=Object(n.useState)(""),[h,v]=Object(n.useState)(JSON.parse(localStorage.getItem("lastExpense"))||null);Object(n.useEffect)(()=>{const t=localStorage.getItem("authToken");t?(i.a.defaults.headers.common.Authorization="Bearer "+t,b(),y()):e("/login")});const b=async()=>{try{const e=await i.a.get("http://localhost:5000/user",{headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});p(e.data.username)}catch(e){console.error("Error fetching user details:",e)}},y=async()=>{try{const e=await i.a.get("http://localhost:5000/last-expense",{headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});e.data&&(v(e.data),localStorage.setItem("lastExpense",JSON.stringify(e.data)))}catch(e){console.error("Error fetching last expense:",e)}};return l.a.createElement("div",{className:"dashboard-container"},l.a.createElement(d,{handleLogout:()=>{localStorage.removeItem("authToken"),localStorage.removeItem("lastExpense"),e("/login")},username:u})," ",l.a.createElement("div",{className:"main-content"},l.a.createElement(E,null),l.a.createElement("div",{className:"dashboard-content"},l.a.createElement("h2",null,"Welcome to Your Dashboard, ",u,"!")," ",h?l.a.createElement("div",{className:"last-expense"},l.a.createElement("h3",null,"Last Added Expense"),l.a.createElement("table",{className:"expense-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Date & Time"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,h.title),l.a.createElement("td",null,"\u20b9",h.amount),l.a.createElement("td",null,h.quantity||"-"),l.a.createElement("td",null,new Date(h.created_at).toLocaleString()))))):l.a.createElement("p",null,"No expenses added yet."),l.a.createElement("h3",null,"Add New Expense"),l.a.createElement("table",{className:"add-expense-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",placeholder:"Enter title",className:"input-field",value:t,onChange:e=>a(e.target.value)})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",placeholder:"Enter amount",className:"input-field",value:r,onChange:e=>o(e.target.value)})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",placeholder:"Enter quantity (optional)",className:"input-field",value:c,onChange:e=>m(e.target.value)})),l.a.createElement("td",null,l.a.createElement("button",{className:"add-button",onClick:async()=>{if(t&&r)try{const e=localStorage.getItem("authToken"),n={id:(await i.a.post("http://localhost:5000/add-expense",{title:t,amount:parseFloat(r),quantity:c?parseInt(c):null},{headers:{Authorization:"Bearer "+e}})).data.insertId,title:t,amount:parseFloat(r),quantity:c||"-",created_at:(new Date).toISOString()};v(n),localStorage.setItem("lastExpense",JSON.stringify(n)),a(""),o(""),m("")}catch(e){console.error("Error adding expense:",e)}else alert("Title and Amount are required!")}},"Add Expense"))))))),l.a.createElement(g,null))};a(30);const h=e=>{let{search:t,setSearch:a}=e;return l.a.createElement("nav",{className:"navbar"},l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"logo",className:"logo"}),l.a.createElement("input",{type:"text",placeholder:"Search expenses...",className:"search-input",value:t,onChange:e=>a(e.target.value)}))},v=()=>{const e=Object(s.p)();return l.a.createElement("div",{className:"sidebar"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:()=>e("/dashboard")},"Dashboard"),l.a.createElement("li",{onClick:()=>e("/expenses")},"Expenses"),l.a.createElement("li",{onClick:()=>e("/income")},"Income")))},b=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\xa9 2025 ExpenSaver. All rights reserved."));var y=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)([]),[o,c]=Object(n.useState)(null),m=Object(s.p)(),u=localStorage.getItem("authToken"),d=async()=>{const e=localStorage.getItem("authToken");if(!e)return console.error("No auth token found. Redirecting to login..."),void m("/login");try{const t=await i.a.get("http://localhost:5000/expenses",{headers:{Authorization:"Bearer "+e}});console.log("Expenses Fetched:",t.data),r(t.data)}catch(l){var t,a,n;console.error("Error fetching expenses:",(null===(t=l.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.error)||l.message),401===(null===(n=l.response)||void 0===n?void 0:n.status)&&(console.log("Unauthorized! Redirecting to login..."),localStorage.removeItem("authToken"),m("/login"))}};Object(n.useEffect)(()=>{u?d():m("/login")});const E=a.reduce((e,t)=>e+t.amount*(t.quantity||1),0),g=(e,t)=>{c(a=>({...a,[t]:e.target.value}))},p=async()=>{if(o)try{await i.a.put("http://localhost:5000/update-expense/"+o.id,o,{headers:{Authorization:"Bearer "+u}}),d(),c(null)}catch(a){var e,t;console.error("Error updating expense:",null===(e=a.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.error)}};return l.a.createElement("div",{className:"expenses-container"},l.a.createElement(h,{search:e,setSearch:t}),l.a.createElement("div",{className:"main-content"},l.a.createElement(v,null),l.a.createElement("div",{className:"expenses-content"},l.a.createElement("h2",null,"Expense History"),l.a.createElement("table",{className:"expense-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Amount (\u20b9)"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Total (\u20b9)"),l.a.createElement("th",null,"Date & Time"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,a.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())).map(e=>l.a.createElement("tr",{key:e.id},(null===o||void 0===o?void 0:o.id)===e.id?l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:o.title,onChange:e=>g(e,"title")})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:o.amount,onChange:e=>g(e,"amount")})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:o.quantity||"",onChange:e=>g(e,"quantity")})),l.a.createElement("td",null,(o.amount*(o.quantity||1)).toFixed(2)),l.a.createElement("td",null,new Date(o.created_at).toLocaleString()),l.a.createElement("td",{className:"action-button"},l.a.createElement("button",{className:"update-button",onClick:p},"Update"),l.a.createElement("button",{className:"cancel-button",onClick:()=>c(null)},"Cancel"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.amount),l.a.createElement("td",null,e.quantity||"-"),l.a.createElement("td",null,(e.amount*(e.quantity||1)).toFixed(2)),l.a.createElement("td",null,new Date(e.created_at).toLocaleString()),l.a.createElement("td",null,l.a.createElement("button",{className:"edit-button",onClick:()=>(e=>{c({...e})})(e)},"Edit"),l.a.createElement("button",{className:"delete-button",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this expense?"))try{await i.a.delete("http://localhost:5000/delete-expense/"+e,{headers:{Authorization:"Bearer "+u}}),d()}catch(n){var t,a;console.error("Error deleting expense:",null===(t=n.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.error)}})(e.id)},"Delete"))))),l.a.createElement("tr",{className:"grand-total-row"},l.a.createElement("td",{colSpan:"3"},l.a.createElement("strong",null,"Grand Total")),l.a.createElement("td",null,l.a.createElement("strong",null,"\u20b9 ",E.toFixed(2))),l.a.createElement("td",null),l.a.createElement("td",null)))))),l.a.createElement(b,null))};a(31);const x=e=>{let{search:t,setSearch:a}=e;return l.a.createElement("nav",{className:"navbar"},l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"logo",className:"logo"}),l.a.createElement("input",{type:"text",placeholder:"Search expenses...",className:"search-input",value:t,onChange:e=>a(e.target.value)}))},N=()=>{const e=Object(s.p)();return l.a.createElement("div",{className:"sidebar"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:()=>e("/dashboard")},"Dashboard"),l.a.createElement("li",{onClick:()=>e("/expenses")},"Expenses"),l.a.createElement("li",{onClick:()=>e("/income")},"Income")))},S=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\xa9 2025 ExpenSaver. All rights reserved."));var f=()=>{const[e,t]=Object(n.useState)("");return l.a.createElement("div",{className:"expenses-container"},l.a.createElement(x,{search:e,setSearch:t}),l.a.createElement("div",{className:"main-content"},l.a.createElement(N,null),l.a.createElement("h1",null,"Coming Soon..."),l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"income-logo",className:"income-logo"}),l.a.createElement("p",{style:{color:"grey",fontFamily:"cursive"}},"Updating by ExpenSaver")),l.a.createElement(S,null))},k=(a(32),a(7));var C=()=>{const e=Object(s.p)();return l.a.createElement("div",{className:"homepage-container"},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:"/ExpenSaver/logo192.png",alt:"ExpenSaver Logo",className:"homepage-logo"})),l.a.createElement("div",{className:"search-container"},l.a.createElement("input",{type:"text",placeholder:"Search...",className:"search-bar"})),l.a.createElement("div",{className:"nav-buttons"},l.a.createElement("button",{className:"login-btn",onClick:()=>e("/login")},"Login"),l.a.createElement("button",{className:"register-btn",onClick:()=>e("/register")},"Register"))),l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"left-section"},l.a.createElement("img",{src:"/ExpenSaver/only logo.png",alt:"ExpenSaver Logo",className:"large-logo"})),l.a.createElement("div",{className:"right-section"},l.a.createElement("h2",null,"Welcome to ExpenSaver"),l.a.createElement("p",null,l.a.createElement("strong",null,"ExpenSaver")," is a simple and easy-to-use personal finance tracker designed to help you manage your daily expenses effortlessly. With ExpenSaver, you can keep track of where your money goes, add and organize your expenses, and monitor your spending habits over time. Whether you want to set a budget, review past transactions, or manage your finances better, ExpenSaver provides all the tools you need in one place. Start using ExpenSaver today and take control of your financial future!"),l.a.createElement("h3",null,"How to Use ExpenSaver?"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(k.e,null)," ",l.a.createElement("strong",null,"Sign up")," for an account to get started."),l.a.createElement("li",null,l.a.createElement(k.c,null)," ",l.a.createElement("strong",null,"Log in")," to your secure dashboard."),l.a.createElement("li",null,l.a.createElement(k.b,null)," ",l.a.createElement("strong",null,"Add expenses")," with details like amount, category, and date."),l.a.createElement("li",null,l.a.createElement(k.a,null)," ",l.a.createElement("strong",null,"View "),"your transactions and track spending patterns."),l.a.createElement("li",null,l.a.createElement(k.d,null)," ",l.a.createElement("strong",null,"Manage "),"your expenses by editing or deleting unnecessary entries.")),l.a.createElement("p",null,"Start tracking your expenses today and take control of your finances!"))))};const w=e=>{let{handleLoading:t}=e;const a=Object(s.n)();return Object(n.useEffect)(()=>{t()},[a,t]),null},O={loader:{width:"80px",height:"80px"},overlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(5px)",zIndex:1e3},blurredContent:{filter:"blur(5px)",pointerEvents:"none",transition:"filter 0.3s ease-in-out"},normalContent:{transition:"filter 0.3s ease-in-out"}};var j=function(){const[e,t]=Object(n.useState)(!1),a=Object(n.useCallback)(()=>{t(!0),setTimeout(()=>t(!1),1e3)},[]);return l.a.createElement(c.a,null,l.a.createElement(w,{handleLoading:a}),e&&l.a.createElement("div",{style:O.overlay},l.a.createElement("img",{src:"/ExpenSaver/loading.gif",alt:"loading...",style:O.loader})),l.a.createElement("div",{style:e?O.blurredContent:O.normalContent},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(C,null)}),l.a.createElement(s.a,{path:"/login",element:l.a.createElement(m,null)}),l.a.createElement(s.a,{path:"/register",element:l.a.createElement(u,null)}),l.a.createElement(s.a,{path:"/dashboard",element:l.a.createElement(p,null)}),l.a.createElement(s.a,{path:"/expenses",element:l.a.createElement(y,null)}),l.a.createElement(s.a,{path:"/income",element:l.a.createElement(f,null)}))))};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)))}},[[16,1,2]]]);
//# sourceMappingURL=main.b964916e.chunk.js.map