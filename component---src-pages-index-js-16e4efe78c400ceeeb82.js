(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"77cP":function(e){e.exports=JSON.parse('[{"date":"2021-01-01","time":"23:45","distance":0.95,"map":"https://onthegomap.com/s/rf9hfdqk","remark":"Little after-Buckeyes victory run to kick things off"},{"date":"2021-01-02","time":"00:00","distance":0.96,"map":"https://onthegomap.com/s/rf9hfdqk"},{"date":"2021-01-03","time":"11:00","distance":4.12,"map":"https://onthegomap.com/s/3bjjdf6p"},{"date":"2021-01-04","time":"06:40","distance":2.02,"map":"https://onthegomap.com/s/4qkfvuk4","remark":"This bed is cozy... this was a terrible idea."},{"date":"2021-01-05","time":"18:15","distance":3.1,"map":"https://onthegomap.com/s/oj0mjo5h"},{"date":"2021-01-06","time":"21:15","distance":2.49,"map":"https://onthegomap.com/s/67ca4tg3"},{"date":"2021-01-07","time":"23:45","distance":1,"map":"https://onthegomap.com/s/4qkfvuk4","remark":"(Split)"},{"date":"2021-01-08","time":"00:00","distance":1.01,"map":"https://onthegomap.com/s/4qkfvuk4","remark":"(Split)"},{"date":"2021-01-09","time":"21:30","distance":4.45,"map":"https://onthegomap.com/s/vrbb2m83","remark":"Spotted 2 meteors!"},{"date":"2021-01-10","time":"23:30","distance":0.9,"map":"https://onthegomap.com/s/omdmrgvq"},{"date":"2021-01-11","time":"23:15","distance":0.9,"map":"https://onthegomap.com/s/omdmrgvq"},{"date":"2021-01-12","time":"21:15","distance":6.54,"map":"https://onthegomap.com/s/fs6gros9"},{"date":"2021-01-13","time":"22:30","distance":2.02,"map":"https://onthegomap.com/s/4qkfvuk4"},{"date":"2021-01-14","time":"20:15","distance":2.03,"map":"https://onthegomap.com/s/30mp0qqs"},{"date":"2021-01-15","time":"21:55","distance":3.11,"map":"https://onthegomap.com/s/pkm4ksle","remark":"As Richard would say, “Slipperier than snot on a door knob”"},{"date":"2021-01-16","time":"16:35","distance":2.46,"map":"https://onthegomap.com/s/acj7gqs2"},{"date":"2021-01-17","time":"23:50","distance":1.25,"map":"https://onthegomap.com/s/ac2e3n7b","remark":"(Split)"},{"date":"2021-01-18","time":"00:00","distance":1.25,"map":"https://onthegomap.com/s/ac2e3n7b","remark":"(Split)"},{"date":"2021-01-19","time":"05:40","distance":4.63,"map":"https://onthegomap.com/s/8prpmtes"},{"date":"2021-01-20","time":"22:30","distance":2.03,"map":"https://onthegomap.com/s/30mp0qqs","remark":"Steps feel a little lighter today..."},{"date":"2021-01-21","time":"18:40","distance":2.53,"map":"https://onthegomap.com/s/nh2d1s3q"},{"date":"2021-01-22","time":"15:50","distance":5.44,"map":"https://onthegomap.com/s/hannlncb"},{"date":"2021-01-23","time":"12:35","distance":2.69,"map":"https://onthegomap.com/s/r6eig9ot","remark":"Hello Westerville..."},{"date":"2021-01-24","time":"17:40","distance":4.06,"map":"https://onthegomap.com/s/9ngkgg3c"},{"date":"2021-01-25","time":"15:55","distance":3.2,"map":"https://onthegomap.com/s/afo71mej"},{"date":"2021-01-26","time":"23:45","distance":2.1,"map":"https://onthegomap.com/s/4l8poca3","remark":"(Split)"},{"date":"2021-01-27","time":"00:00","distance":2.19,"map":"https://onthegomap.com/s/4l8poca3","remark":"(Split)"},{"date":"2021-01-28","time":"18:30","distance":4.87,"map":"https://onthegomap.com/s/e492qn1t","remark":"Brrrr.... "},{"date":"2021-01-29","time":"15:50","distance":2.67,"map":"https://onthegomap.com/s/tmka5iq4"},{"date":"2021-01-30","time":"17:25","distance":5.47,"map":"https://onthegomap.com/s/nivvmhrf"},{"date":"2021-01-31","time":"14:50","distance":3.07,"map":"https://onthegomap.com/s/vuetie73"},{"date":"2021-02-01","time":"15:40","distance":2.81,"map":"https://onthegomap.com/s/hu4gv0ja","remark":"Snowy!"},{"date":"2021-02-02","time":"23:40","distance":3.57,"map":"https://onthegomap.com/s/vk6jnq96"}]')},RXBc:function(e,t,a){"use strict";a.r(t);var m=a("q1tI"),n=a.n(m),s=a("Bl7J"),c=a("vrFN"),o=(a("E9XD"),a("77cP")),l=a("Wbzz"),r=function(e,t){return e+t},i=function(e){return Math.round(100*e)/100},p=function(){var e=100*o.map((function(e){return e.distance})).reduce(r);return n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"col-date"},"Date"),n.a.createElement("th",{className:"col-time"},"Time of Day"),n.a.createElement("th",{className:"col-distance"},"Distance"),n.a.createElement("th",{className:"col-cumulative"},"Total Distance"),n.a.createElement("th",{className:"col-route"},"Route"),n.a.createElement("th",{className:"col-remarks"},"Remarks"))),n.a.createElement("tbody",null,o.reverse().map((function(t){var a=Math.round(e)/100;return e-=100*t.distance,n.a.createElement("tr",{key:t.date},n.a.createElement("td",{className:"col-date"},t.date),n.a.createElement("td",{className:"col-time"},t.time),n.a.createElement("td",{className:"col-distance"},t.distance),n.a.createElement("td",{className:"col-cumulative"},a),n.a.createElement("td",{className:"col-route"},n.a.createElement(l.Link,{target:"_blank",to:t.map},"Map")),n.a.createElement("td",{className:"col-remarks"},t.remark))}))))},d=function(){var e=o.map((function(e){return e.distance})).reduce(r),t=o.length,a=e/t,m=Math.max.apply(Math,o.map((function(e){return parseFloat(e.distance)}))),s=1e3/365*t-e,c=s>0?"behind":"ahead";return n.a.createElement("div",{className:"stats"},n.a.createElement("dl",null,n.a.createElement("div",null,n.a.createElement("dt",null,"Average Distance"),n.a.createElement("dd",null,i(a)," miles")),n.a.createElement("div",null,n.a.createElement("dt",null,"Maximum Distance"),n.a.createElement("dd",null,m," miles")),n.a.createElement("div",null,n.a.createElement("dt",null,"Yearly Completion"),n.a.createElement("dd",null,i(o.length/3.65),"%")),n.a.createElement("div",null,n.a.createElement("dt",null,"1,000 Mile Goal Pace"),n.a.createElement("dd",null,i(Math.abs(s))," miles ",c))))};t.default=function(){return n.a.createElement(s.a,null,n.a.createElement(c.a,{title:"Phil Birnie runs for 365 Days in a Row"}),n.a.createElement("p",null,"Hello! My name is Phil.  I live in Worthington, Ohio."),n.a.createElement("p",null,"Starting on January 1, 2021, I will attempt to run for 365 days in a row -- just for fun. Keep track of my progress below."),n.a.createElement("h3",null,"Rules:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Run at least 0.5 miles per day"),n.a.createElement("li",null,"Runs than span midnight may count as both days.")),n.a.createElement(d,null),n.a.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-16e4efe78c400ceeeb82.js.map