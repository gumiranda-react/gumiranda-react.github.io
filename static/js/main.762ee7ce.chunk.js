(this.webpackJsonpnethoses=this.webpackJsonpnethoses||[]).push([[0],{161:function(e,n,a){e.exports=a(339)},339:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(26),i=a.n(o),c=a(45),l=a(144),u=a(31),s=a(20),m=(a(170),a(182),a(183),a(61)),p=a(157),h=a(156),b=a(13),d=a(146),f=a.n(d),g=a(59),v={token:null,signed:!1,loading:!1};var E={profile:null};var x=Object(b.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;return Object(g.a)(e,(function(e){switch(n.type){case"@auth/SIGN_IN_SUCCESS":e.token=n.payload.token,e.signed=!0,e.loading=!1;break;case"@auth/SIGN_IN_REQUEST":e.loading=!0;break;case"@auth/SIGN_FAILURE":e.loading=!1}}))},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"@auth/SIGN_IN_SUCCESS":return Object(g.a)(e,(function(e){e.profile=n.payload.user}));default:return e}}}),y=a(21),j=a.n(y),O=a(10),S=a(147),k=a.n(S).a.create({baseURL:"https://graduandoeasy.herokuapp.com/api/"});function I(e,n){return{type:"@auth/SIGN_IN_SUCCESS",payload:{token:e,user:n}}}var w=a(11),C=Object(w.a)(),N=j.a.mark(U),_=j.a.mark(R);function U(e){var n,a,t,r,o,i,l,u;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=e.payload,s.prev=1,a=n.email,t=n.senha,r=t,s.next=6,Object(O.call)(k.post,"usuario/autenticar",{email:a,senha:t,senhaConfirmacao:r});case 6:return o=s.sent,i=o.data,l=i.token,u=i.usuario,s.next=10,Object(O.put)(I(l,u));case 10:C.push("/dashboard"),s.next=18;break;case 13:return s.prev=13,s.t0=s.catch(1),c.b.error("Falha na autentica\xe7\xe3o, verifique usu\xe1rio e senha"),s.next=18,Object(O.put)({type:"@auth/SIGN_FAILURE"});case 18:case"end":return s.stop()}}),N,null,[[1,13]])}function R(e){var n,a,t,r,o;return j.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,i.prev=1,a=n.nome,t=n.email,r=n.senha,o=n.senhaConfirmacao,i.next=5,Object(O.call)(k.post,"usuario/register",{nome:a,email:t,senha:r,senhaConfirmacao:o});case 5:C.push("/"),i.next=13;break;case 8:return i.prev=8,i.t0=i.catch(1),c.b.error("Falha no cadastro, verifique os dados"),i.next=13,Object(O.put)({type:"@auth/SIGN_FAILURE"});case 13:case"end":return i.stop()}}),_,null,[[1,8]])}var G=Object(O.all)([Object(O.takeLatest)("@auth/SIGN_UP_REQUEST",R),Object(O.takeLatest)("@auth/SIGN_IN_REQUEST",U)]),q=Object(O.all)([]),A=j.a.mark(F);function F(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.all)([G,q]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),A)}var P,L=Object(p.a)({sagaMonitor:null}),Q=[L],T=function(e,n){var a=b.a.apply(void 0,Object(h.a)(n));return Object(b.e)(e,a)}((P=x,Object(m.a)({key:"barber",storage:f.a,whitelist:["auth","user"]},P)),Q),z=Object(m.b)(T);L.run(F);var B=a(150),J=a(154),D=a.n(J),H=a(159),M=a(29),K=a(30),V=a(155);function W(){var e=Object(M.a)(["\n    width: 100%;\n    max-width: 315px;\n    margin-top: 50px;\n    text-align: center;\n    form {\n        display: flex;\n        flex-direction: column;\n        margin-top: 30px;\n        input {\n            background: rgba(0, 0, 0, 0.1);\n            border: 0;\n            border-radius: 4px;\n            height: 44px;\n            padding: 0 15px;\n            color: #fff;\n            margin: 0 0 10px;\n            &::placeholder {\n                color: rgba(255, 255, 255, 0.7);\n            }\n        }\n        span {\n            color: #fb6f91;\n            align-self: flex-start;\n            margin: 0 0 10px;\n            font-weight: bold;\n        }\n        button {\n            margin: 5px 0 0;\n            height: 44px;\n            background: #3b9eff;\n            font-weight: bold;\n            color: #fff;\n            border: 0;\n            border-radius: 4px;\n            font-size: 16px;\n            transition: background 0.2s;\n            &:hover {\n                background: ",";\n            }\n        }\n        a {\n            color: #fff;\n            margin-top: 15px;\n            font-size: 16px;\n            opacity: 0.8;\n            &:hover {\n                opacity: 1;\n            }\n        }\n    }\n"]);return W=function(){return e},e}function X(){var e=Object(M.a)(["\n    height: 100%;\n    background: linear-gradient(-90deg, #7159c1, #ab59c1);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return X=function(){return e},e}var Y=K.b.div(X()),Z=K.b.div(W(),Object(V.a)(.03,"#3b9eff"));function $(e){var n=e.children;return r.a.createElement(Y,null,r.a.createElement(Z,null,n))}function ee(){var e=Object(M.a)(["\n    height: 100%;\n    background: linear-gradient(-90deg, #7159c1, #ab59c1);\n"]);return ee=function(){return e},e}var ne=K.b.div(ee());function ae(e){var n=e.children;return r.a.createElement(ne,null,n)}function te(e){var n=e.component,a=e.isPrivate,t=void 0!==a&&a,o=Object(H.a)(e,["component","isPrivate"]),i=T.getState().auth.signed;if(!i&&t)return r.a.createElement(s.a,{to:"/"});if(i&&!t)return r.a.createElement(s.a,{to:"/dashboard"});var c=i?ae:$;return r.a.createElement(s.b,Object.assign({},o,{render:function(e){return r.a.createElement(c,null,r.a.createElement(n,e))}}))}te.defaultProps={isPrivate:!1};var re=a(27),oe=a(16),ie=a(17),ce=a(60),le=a.n(ce),ue=ie.object().shape({email:ie.string().email("Insira um email v\xe1lido").required("O email \xe9 obrigat\xf3rio"),senha:ie.string().required("A senha \xe9 obrigat\xf3ria")});function se(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.auth.loading}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:le.a,alt:"Barber"}),r.a.createElement(oe.a,{schema:ue,onSubmit:function(n){var a=n.email,t=n.senha;e(function(e,n,a){return{type:"@auth/SIGN_IN_REQUEST",payload:{email:e,senha:n,senhaConfirmacao:a}}}(a,t,t))}},r.a.createElement(oe.b,{name:"email",type:"email",placeholder:"Seu email"}),r.a.createElement(oe.b,{name:"senha",type:"password",placeholder:"Sua senha"}),r.a.createElement("button",{type:"submit"},n?"Carregando...":"Acessar"),r.a.createElement(re.a,{to:"/register"},"Ainda n\xe3o tem conta? Clique aqui para criar")))}var me=ie.object().shape({nome:ie.string().required("O nome \xe9 obrigat\xf3rio"),email:ie.string().email("Insira um email v\xe1lido").required("O email \xe9 obrigat\xf3rio"),senha:ie.string().min(6,"No m\xednimo 6 caracteres").required("A senha \xe9 obrigat\xf3ria"),senhaConfirmacao:ie.string().min(6,"No m\xednimo 6 caracteres").required("A senha \xe9 obrigat\xf3ria")});function pe(){var e=Object(u.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:le.a,alt:"Barber"}),r.a.createElement(oe.a,{schema:me,onSubmit:function(n){var a=n.nome,t=n.email,r=n.senha,o=n.senhaConfirmacao;e(function(e,n,a,t){return{type:"@auth/SIGN_UP_REQUEST",payload:{nome:e,email:n,senha:a,senhaConfirmacao:t}}}(a,t,r,o)),console.tron.log({nome:a,email:t,senha:r,senhaConfirmacao:o})}},r.a.createElement(oe.b,{name:"nome",placeholder:"Nome completo"}),r.a.createElement(oe.b,{name:"email",type:"email",placeholder:"Seu email"}),r.a.createElement(oe.b,{name:"senha",type:"password",placeholder:"Sua senha"}),r.a.createElement(oe.b,{name:"senhaConfirmacao",type:"password",placeholder:"Sua senha"}),r.a.createElement("button",{type:"submit"},"Criar conta"),r.a.createElement(re.a,{to:"/"},"J\xe1 tenho login")))}function he(){return r.a.createElement("h1",null,"Dashboard")}function be(){return r.a.createElement("div",null)}function de(){var e=D()({basename:""});return r.a.createElement(B.ConnectedRouter,{history:e},r.a.createElement(s.d,null,r.a.createElement(te,{path:"/dashboard",component:he,isPrivate:!0}),r.a.createElement(te,{path:"/register",component:pe}),r.a.createElement(te,{path:"/",exact:!0,component:se}),r.a.createElement(te,{path:"/profile",component:be,isPrivate:!0}),r.a.createElement(te,{path:"/",component:function(){return r.a.createElement("h1",null,"404")}})))}a(338);function fe(){var e=Object(M.a)(["\n\n@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus{\n      outline:0;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    color: #222;\n    font-size: 14px;\n    font-family: 'Roboto',Arial, Helvetica, sans-serif;\n  }\n\n  a{\n      text-decoration:none;\n  }\n\n  ul{\n    list-style:none;\n  }\n  button {\n    cursor: pointer;\n  }\n"]);return fe=function(){return e},e}var ge=Object(K.a)(fe());var ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{store:T},r.a.createElement(l.a,{persistor:z},r.a.createElement(s.c,{history:C},r.a.createElement(de,null)),r.a.createElement(ge,null),r.a.createElement(c.a,{autoClose:3e3}))))};i.a.render(r.a.createElement(ve,null),document.getElementById("root"))},60:function(e,n,a){e.exports=a.p+"static/media/logo.63c71f84.svg"}},[[161,1,2]]]);
//# sourceMappingURL=main.762ee7ce.chunk.js.map