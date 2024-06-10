"use strict";(self.webpackChunkanalyzer=self.webpackChunkanalyzer||[]).push([[244],{5244:(e,n,i)=>{i.r(n),i.d(n,{default:()=>L});var t,s,o,a,c,l=i(7528),r=i(927),d=i(7929),p=i(3910),x=i(547),h=i(490),j=i(5043),u=i(7912),v=i(1238),b=i(1434),m=i(3602),g=i(3362),y=i(294),f=i(683),k=i(6885),A=i(3216),w=i(579);const C=r.Ay.div(t||(t=(0,l.A)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nheight: 100vh;\nwidth: ",";\ntransition: width 0.3s;\ndisplay:flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ngap: 10px;\nbackground: rgba(255, 255, 255, 0);\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(9.7px);\n-webkit-backdrop-filter: blur(9.7px);\nborder: 1px solid rgba(255, 255, 255, 1);\nz-index:99;\n\n& span {\n    cursor: pointer;\n    width: 100%;\n    height: 50px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n\n    &:hover{\n        scale: ",";\n    }\n\n    & div{\n        width: 100%;\n        display: flex;\n        gap: 12px;\n        align-items: center;\n        justify-content: center;\n    }\n}"])),(e=>e.isOpen?"15vw":"4vw"),(e=>e.isOpen?"1.2":"1.4")),S=r.Ay.div(s||(s=(0,l.A)(["\ncursor: pointer;\nposition: absolute;\ntop: 3vh;"]))),z=r.Ay.div(o||(o=(0,l.A)(["\ncursor: pointer;\nposition: absolute;\nbottom: 3vh;"]))),R=(0,r.Ay)(x.A)(a||(a=(0,l.A)(["\nz-index: 9999999 !important;\nposition: absolute;\nwidth: 100vw;\ntop:0;"]))),O=r.Ay.div(c||(c=(0,l.A)(["\nwidth:100%;\nposition: absolute;\ntop: 16%;\n"]))),L=e=>{let{isOpen:n,setIsOpen:i,selectedOption:t,content:s}=e;const o=(0,A.Zp)(),[a,c]=(0,j.useState)(!1),[l,r]=(0,j.useState)(),[x,L]=(0,j.useState)(),[U,N]=(0,j.useState)();(0,j.useEffect)((()=>{a&&setTimeout((()=>{c(!1)}),3500)}),[a]);const F=(e,n,i)=>{if(n&&n.length){if("json"===i){const i=JSON.stringify(n),t=new Blob([i],{type:"application/json"}),s=URL.createObjectURL(t),o=document.createElement("a");o.href=s,o.download="".concat(e.value,".json"),document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}else if("csv"===i){const i=(0,u.Vu)(n),t=new Blob([i],{type:"text/csv"}),s=URL.createObjectURL(t),o=document.createElement("a");o.href=s,o.download="".concat(e.value,".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}else if("xlsx"===i){const i=v.Wp.json_to_sheet(n),t=v.Wp.book_new();v.Wp.book_append_sheet(t,i,"Sheet1");const s=v.M9(t,{bookType:"xlsx",type:"array"}),o=new Blob([s],{type:"application/octet-stream"}),a=URL.createObjectURL(o),c=document.createElement("a");c.href=a,c.download="".concat(e.value,".xlsx"),document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(a)}r("success"),L("Fatto!"),N("Il tuo file ".concat(e.value,".").concat(i," \xe8 stato scaricato!")),c(!0)}else r("warning"),L("Attenzione!"),N("Non hai selezionato una tabella scaricabile!!"),c(!0)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(C,{className:"left-nav",isOpen:n,children:[(0,w.jsx)(S,{onClick:()=>i(!n),children:(0,w.jsx)(p.g,{size:"lg",icon:n?d.Jyw:d.Ju_})}),(0,w.jsxs)(O,{children:[(0,w.jsx)("span",{title:"Home",onClick:()=>o("/"),children:n?(0,w.jsxs)("div",{className:"navigator-open-div",children:[(0,w.jsx)(m.A,{style:{color:"#0062e5"}}),"Home"]}):(0,w.jsx)(m.A,{})}),(0,w.jsx)("span",{title:"Ricerca personalizzata",onClick:()=>o("/query-builder"),children:n?(0,w.jsxs)("div",{className:"navigator-open-div",children:[(0,w.jsx)(g.A,{style:{color:"#a77600"}}),"Filtra colonne"]}):(0,w.jsx)(g.A,{})}),(0,w.jsx)("span",{title:"Mostra le statistiche",onClick:()=>o("/show-statistics-and-reports"),children:n?(0,w.jsxs)("div",{className:"navigator-open-div",children:[(0,w.jsx)(b.A,{style:{color:"#32a700"}}),"Statistiche e ",(0,w.jsx)("br",{}),"reportstica"]}):(0,w.jsx)(b.A,{})})]}),s.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("span",{title:"Scarica in Formato JSON",onClick:()=>F(t,s,"json"),children:n?(0,w.jsxs)("div",{children:[(0,w.jsx)(p.g,{icon:d.ruc,size:"xl"}),"Scarica Json"]}):(0,w.jsx)(p.g,{icon:d.ruc,size:"xl"})}),(0,w.jsx)("span",{title:"Scarica in Formato Excel",onClick:()=>F(t,s,"xlsx"),children:n?(0,w.jsxs)("div",{children:[(0,w.jsx)(p.g,{icon:d.fny,size:"xl"}),"Scarica Excel"]}):(0,w.jsx)(p.g,{icon:d.fny,size:"xl"})}),(0,w.jsx)("span",{title:"Scarica in Formato CSV",onClick:()=>F(t,s,"csv"),children:n?(0,w.jsxs)("div",{children:[(0,w.jsx)(p.g,{icon:d.Wxp,size:"xl"}),"Scarica CSV"]}):(0,w.jsx)(p.g,{icon:d.Wxp,size:"xl"})})]}):null,(0,w.jsxs)(z,{children:[(0,w.jsx)("span",{title:"Visualizza le tue richieste",onClick:()=>o("/see-requests"),children:n?(0,w.jsxs)("div",{className:"navigator-open-div",children:[(0,w.jsx)(y.A,{style:{color:"#00b4fb"}}),"Le mie richieste"]}):(0,w.jsx)(y.A,{})}),(0,w.jsx)("span",{title:"Richiedi un report in aggiunta ai presenti",onClick:()=>o("/request-a-new-report"),children:n?(0,w.jsxs)("div",{className:"navigator-open-div",children:[(0,w.jsx)(f.A,{style:{color:"#2d8500"}}),"Richiedi un report",(0,w.jsx)("br",{}),"aggiuntivo"]}):(0,w.jsx)(f.A,{})}),(0,w.jsx)("span",{title:"Segnala un problema",onClick:()=>o("/report-a-problem"),children:n?(0,w.jsxs)("div",{className:"navigator-open-div",children:[(0,w.jsx)(k.A,{style:{color:"#850000"}}),"Segnala un problema"]}):(0,w.jsx)(k.A,{})})]})]}),a&&(0,w.jsxs)(R,{className:"mui-alert",severity:l,children:[(0,w.jsx)(h.A,{children:x}),U]})]})}}}]);
//# sourceMappingURL=244.a326449f.chunk.js.map