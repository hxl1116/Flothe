(this.webpackJsonpflothe=this.webpackJsonpflothe||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),c=a(1),r=a(2),i=a(4),l=a(3),m=a(5),u=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggleEditGroup=function(){a.setState({showEditGroup:!a.state.showEditGroup})},a.toggleOptionsGroup=function(){a.setState({showOptions:!a.state.showOptions}),setTimeout((function(){a.setState({showOptions:!1})}),5e3)},a.toggleTimeGroup=function(){a.setState({showTimeGroup:!a.state.showTimeGroup})},a.updateSelf=function(){var e=document.querySelector("#".concat(a.props.section,"-name-edit")),t=document.querySelector("#".concat(a.props.section,"-desc-edit"));a.props.updateItem(a.props.idx,{name:e.value||a.props.name,desc:t.value||a.props.desc})},a.deleteSelf=function(){a.props.deleteItem(a.props.idx)},a.scheduleSelf=function(){var e=document.querySelector("#".concat(a.props.section,"-start-time-edit")),t=document.querySelector("#".concat(a.props.section,"-end-time-edit"));a.props.scheduleItem(a.props.idx,{start:e.value,end:t.value})},a.state={showEditGroup:!1,showOptions:!1,showTimeGroup:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"options-group"},this.state.showOptions?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"material-icons",onClick:function(){e.state.showTimeGroup&&e.toggleTimeGroup(),e.toggleEditGroup(),e.toggleOptionsGroup()}},"create"),"todo"===this.props.section?s.a.createElement("i",{className:"material-icons",onClick:function(){e.state.showEditGroup&&e.toggleEditGroup(),e.toggleTimeGroup(),e.toggleOptionsGroup()}},"calendar_today"):s.a.createElement(s.a.Fragment,null),s.a.createElement("i",{className:"material-icons",onClick:function(){e.deleteSelf(),e.toggleOptionsGroup()}},"delete")):s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"material-icons",onClick:this.toggleOptionsGroup},"more_vert"))),a=s.a.createElement("div",{id:"".concat(this.props.section,"-edit-group"),className:"input-group ".concat(this.state.showEditGroup?"show":"hide")},s.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-name-edit"),placeholder:"Name"}),s.a.createElement("input",{type:"text",id:"".concat(this.props.section,"-desc-edit"),placeholder:"Description"}),s.a.createElement("button",{onClick:function(){e.updateSelf(),e.toggleEditGroup()}},"Change")),n=s.a.createElement("div",{id:"".concat(this.props.section,"-time-group"),className:"section-input-group ".concat(this.state.showTimeGroup?"show":"hide")},s.a.createElement("input",{type:"datetime-local",id:"".concat(this.props.section,"-start-time-edit")}),s.a.createElement("input",{type:"datetime-local",id:"".concat(this.props.section,"-end-time-edit")}),s.a.createElement("button",{onClick:function(){e.scheduleSelf(),e.deleteSelf(),e.toggleTimeGroup()}},"Schedule"));return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"item-group"},s.a.createElement("h3",null,this.props.name),s.a.createElement("div",{className:"item-content"},s.a.createElement("p",null,this.props.desc)),t),s.a.createElement("div",{className:"input-group ".concat(this.state.showEditGroup||this.state.showTimeGroup?"show":"hide")},a,n))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggleAddInput=function(){a.setState({showInputGroup:!a.state.showInputGroup})},a.addItem=function(){var e=document.querySelector("#".concat(a.props.name,"-name-input")),t=document.querySelector("#".concat(a.props.name,"-desc-input"));""!==e.value&&a.props.addItem({name:e.value,desc:t.value,day:(new Date).getDay(),month:(new Date).getMonth()})},a.updateItem=function(e,t){a.props.updateItem(e,t)},a.deleteItem=function(e){a.props.deleteItem(e)},a.scheduleItem=function(e,t){a.props.transferTaskToEvent(e,t)},a.state={showInputGroup:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"section-header"},s.a.createElement("h2",null,this.props.name),s.a.createElement("i",{className:"material-icons",style:{fontSize:40},onClick:this.toggleAddInput},this.state.showInputGroup?"remove":"add")),a=s.a.createElement("ol",{id:"".concat(this.props.id,"-section-list"),className:"section-list"},Object.values(this.props.items).map((function(t,a){return s.a.createElement(u,{key:"".concat(e.props.name,"-task-").concat(a),section:e.props.id,idx:a,name:t.name,desc:t.desc,start:t.start,end:t.end,updateItem:function(t,a){return e.updateItem(t,a)},deleteItem:function(t){return e.deleteItem(t)},scheduleItem:function(t,a){return e.scheduleItem(t,a)}})}))),n=s.a.createElement("div",{className:"section-input-group ".concat(this.state.showInputGroup?"show":"hide")},s.a.createElement("input",{type:"text",id:"".concat(this.props.name,"-name-input"),placeholder:"Name"}),s.a.createElement("input",{type:"text",id:"".concat(this.props.name,"-desc-input"),placeholder:"Description"}),s.a.createElement("button",{onClick:function(){e.addItem(),e.toggleAddInput()}},"Add"));return s.a.createElement("div",{id:"".concat(this.props.id,"-section"),className:"section-container"},t,a,n)}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"item-group"},s.a.createElement("li",null,s.a.createElement("h3",null,this.props.name),Object.values(this.props.members).map((function(e){return s.a.createElement("p",null,e)}))))}}]),t}(n.Component),h=["Profile","Settings"],f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggleSideMenu=function(){a.setState({showSideMenu:!a.state.showSideMenu})},a.toggleTeamGroup=function(){a.setState({showTeamInputGroup:!a.state.showTeamInputGroup})},a.addTeam=function(){var e=document.querySelector("#team-name-input"),t=document.querySelectorAll('input[type="email"]');t=Object.values(t).filter((function(e){return""!==e.value})),console.log(t),""!==e.value&&a.setState({teams:a.state.teams.concat({name:e.value,members:Object.values(t).map((function(e){return e.value}))})})},a.state={showSideMenu:!1,showTeamInputGroup:!1,teams:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this,a=s.a.createElement("div",{id:"team-input-group",className:"input-group ".concat(this.state.showTeamInputGroup?"show":"hide")},s.a.createElement("input",{type:"text",id:"team-name-input",placeholder:"Team Name",required:!0}),s.a.createElement("p",null,"Invite Members"),s.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),s.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),s.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),s.a.createElement("input",{type:"email",id:"team-email-input-1",placeholder:"Member 1"}),s.a.createElement("button",{onClick:function(){t.addTeam(),t.toggleTeamGroup()}},"Create"));return s.a.createElement(n.Fragment,null,s.a.createElement("i",{id:"side-menu-btn",className:"material-icons",onClick:this.toggleSideMenu},"dehaze"),s.a.createElement("div",{id:"side-bar",className:this.state.showSideMenu?"show":"hide"},s.a.createElement("ul",{id:"side-menu"},s.a.createElement("div",{id:"profile-img"}),s.a.createElement("div",{id:"team-section"},(e="Teams",s.a.createElement("div",{className:"section-header"},s.a.createElement("h2",null,e),s.a.createElement("i",{className:"material-icons",onClick:t.toggleTeamGroup},t.state.showTeamInputGroup?"remove":"add"))),s.a.createElement("ol",null,Object.values(this.state.teams).map((function(e,t){return s.a.createElement(d,{key:"team-".concat(t),idx:t,name:e.name,members:e.members})}))),a),Object.values(h).map((function(e){return s.a.createElement("li",{key:"".concat(e,"-side-menu-item")},s.a.createElement("h2",null,e))})))))}}]),t}(n.Component),E=[{name:"January",days:31},{name:"February",days:(new Date).getFullYear()%4===0?29:28},{name:"March",days:31},{name:"April",days:30},{name:"May",days:31},{name:"June",days:30},{name:"July",days:31},{name:"August",days:31},{name:"September",days:30},{name:"October",days:31},{name:"November",days:30},{name:"December",days:31}],v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).incrementMonth=function(){a.setState({currentMonth:11===a.state.currentMonth?0:a.state.currentMonth+1})},a.decrementMonth=function(){a.setState({currentMonth:0===a.state.currentMonth?11:a.state.currentMonth-1})},a.selectDay=function(e){a.props.selectDay(e)},a.state={currentMonth:(new Date).getMonth()},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=s.a.createElement("div",{id:"calendar-header",className:"section-header"},s.a.createElement("i",{className:"material-icons",onClick:this.decrementMonth},"chevron_left"),s.a.createElement("h2",null,E[this.state.currentMonth].name),s.a.createElement("i",{className:"material-icons",onClick:this.incrementMonth},"chevron_right")),n=function(t){return s.a.createElement("div",{key:"day-".concat(t),id:"day-".concat(t),className:"calendar-day ".concat(e.props.currentDay===t?"selected":""),onClick:function(){return e.selectDay(t)}},s.a.createElement("p",null,t+1))},o=0;o<E[this.state.currentMonth].days;o++)t.push(n(o));var c=s.a.createElement("div",{id:"days-group"},t);return s.a.createElement("div",{id:"".concat(this.props.id,"-section"),className:"section-container"},a,c)}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggleDesc=function(){a.setState({showDesc:!a.state.showDesc})},a.state={selected:!1,showDesc:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("li",{className:"today-item-group"},s.a.createElement("h3",null,this.props.name),s.a.createElement("p",{onClick:this.toggleDesc},this.state.showDesc?this.props.desc:this.props.location))}}]),t}(n.Component),I=["8:00","9:00","10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00"],y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).toggleAddInput=function(){a.setState({showInputGroup:!a.state.showInputGroup})},a.state={showInputGroup:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"section-header"},s.a.createElement("h2",null,this.props.name),s.a.createElement("i",{className:"material-icons",onClick:this.toggleAddInput},this.state.showInputGroup?"remove":"add")),a=s.a.createElement("div",{className:"section-input-group ".concat(this.state.showInputGroup?"show":"hide")},s.a.createElement("input",{type:"text",id:"".concat(this.props.name,"-name-input"),placeholder:"Name"}),s.a.createElement("input",{type:"text",id:"".concat(this.props.name,"-desc-input"),placeholder:"Description"}),this.props.timed?s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{type:"text",id:"".concat(this.props.name,"-start-input"),defaultValue:"Current time",placeholder:"Start time"}),s.a.createElement("input",{type:"text",id:"".concat(this.props,"-end-input"),placeholder:"End time"})):s.a.createElement(s.a.Fragment,null),s.a.createElement("button",{onClick:function(){e.addItem(),e.toggleAddInput()}},"Add"));return s.a.createElement("div",{id:"".concat(this.props.id,"-section"),className:"section-container"},t,s.a.createElement("div",{id:"time-block-list"},I.map((function(t,a){return function(t,a){return s.a.createElement("div",{key:"time-block-".concat(a),className:"time-block-group"},s.a.createElement("p",{className:"time-block-time"},t),s.a.createElement("div",{className:"time-block-display"},e.props.items.map((function(n){return n.day===e.props.currentDay.toString()&&n.start===t?s.a.createElement(g,{key:"today-item-".concat(a),idx:a,name:n.name,desc:n.desc,location:n.location,month:n.month,day:n.day,start:n.start,end:n.end}):s.a.createElement(s.a.Fragment,null)}))))}(t,a)}))),a)}}]),t}(n.Component),b={name:"Test Item",desc:"This is a test To-Do Item"},k={name:"Test Item",desc:"This is a test Calendar Event",location:"Victor, NY",month:"11",day:"5",start:"10:00",end:"11:00"},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).addItem=function(e,t){switch(e){case"calendar":a.setState({calendarEvents:a.state.calendarEvents.concat(t)});break;case"todo":a.setState({todoTasks:a.state.todoTasks.concat(t)});break;case"goal":a.setState({goalItems:a.state.goalItems.concat(t)});break;case"motivation":a.setState({motivationItems:a.state.motivationItems.concat(t)});break;case"happiness":a.setState({happinessItems:a.state.happinessItems.concat(t)})}},a.updateItem=function(e,t,n){switch(e){case"calendar":a.setState({calendarEvents:a.state.calendarEvents.map((function(e,a){return t===a?n:e}))});break;case"todo":a.setState({todoTasks:a.state.todoTasks.map((function(e,a){return t===a?n:e}))});break;case"goal":a.setState({goalItems:a.state.goalItems.map((function(e,a){return t===a?n:e}))});break;case"motivation":a.setState({motivationItems:a.state.motivationItems.map((function(e,a){return t===a?n:e}))});break;case"happiness":a.setState({happinessItems:a.state.happinessItems.map((function(e,a){return t===a?n:e}))})}},a.deleteItem=function(e,t){switch(e){case"calendar":a.setState({calendarEvents:a.state.calendarEvents.filter((function(e,a){return t!==a}))});break;case"todo":a.setState({todoTasks:a.state.todoTasks.filter((function(e,a){return t!==a}))});break;case"goal":a.setState({goalItems:a.state.goalItems.filter((function(e,a){return t!==a}))});break;case"motivation":a.setState({motivationItems:a.state.motivationItems.filter((function(e,a){return t!==a}))});break;case"happiness":a.setState({happinessItems:a.state.happinessItems.filter((function(e,a){return t!==a}))})}},a.transferTaskToEvent=function(e,t){var n=a.state.todoTasks.filter((function(t,a){return e===a}));n[0].start=t.start,n[0].end=t.end,a.setState({calendarEvents:a.state.calendarEvents.concat(n),todoTasks:a.state.todoTasks.filter((function(t,a){return e!==a}))})},a.selectDay=function(e){a.setState({currentDay:e})},a.state={calendarEvents:[k],todoTasks:[b],goalItems:[],motivationItems:[],happinessItems:[],currentDay:(new Date).getDay()},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null),s.a.createElement("div",{id:"sections-wrapper",className:"day-layout"},s.a.createElement(v,{id:"calendar",items:this.state.calendarEvents,currentDay:this.state.currentDay,selectDay:function(t){return e.selectDay(t)}}),s.a.createElement(y,{id:"today",name:"Today",items:this.state.calendarEvents,currentDay:this.state.currentDay}),s.a.createElement(p,{id:"todo",name:"ToDo",items:this.state.todoTasks,addItem:function(t){return e.addItem("todo",t)},updateItem:function(t,a){return e.updateItem("todo",t,a)},deleteItem:function(t){return e.deleteItem("todo",t)},transferTaskToEvent:function(t,a){return e.transferTaskToEvent(t,a)}}),s.a.createElement(p,{id:"goal",name:"Goal",items:this.state.goalItems,addItem:function(t){return e.addItem("goal",t)},updateItem:function(t,a){return e.updateItem("goal",t,a)},deleteItem:function(t){return e.deleteItem("goal",t)}}),s.a.createElement(p,{id:"motivation",name:"Motivation",items:this.state.motivationItems,addItem:function(t){return e.addItem("motivation",t)},updateItem:function(t,a){return e.updateItem("motivation",t,a)},deleteItem:function(t){return e.deleteItem("motivation",t)}}),s.a.createElement(p,{id:"happiness",name:"Happiness",items:this.state.happinessItems,addItem:function(t){return e.addItem("happiness",t)},updateItem:function(t,a){return e.updateItem("happiness",t,a)},deleteItem:function(t){return e.deleteItem("happiness",t)}})))}}]),t}(n.Component);Object(o.render)(s.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.8dc71641.chunk.js.map