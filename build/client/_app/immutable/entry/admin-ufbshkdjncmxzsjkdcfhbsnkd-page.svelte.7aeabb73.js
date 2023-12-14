import{S as Ye,i as ze,s as Ge,k as l,q as d,a as o,l as n,m as s,r as m,h as r,c as i,n as e,J as Ke,p as N,O as Ie,b as we,D as t,H as Pe}from"../chunks/index.ea98a15b.js";function Qe(je){let v,$,W,G,c,E,ke,X,U,Z,ee,A,O,te,le,a,h,ne,P,re,se,k,ae,M,oe,ie,F,q,y,C,b,ce,S,pe,x,ue,de,T,me,ye,D,L,g,J,_,ge,V,fe,ve,I,Ee,he,B,H,R,be,Te,w,_e;return{c(){v=l("svelt:head"),$=l("script"),W=d(`let ipinfo;
    document.body.onload = () => {

      var params = new URLSearchParams(window.location.search);
      alertEl = document.querySelector(".alert");
      if (params.has("success")) {
        setIp();
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML +=
          "<strong>Success!</strong> You have been logged in";
      } else if (params.has("error")) {
        setIp();
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#f44336";
        alertEl.innerHTML += "<strong>Error!</strong> " + params.get("error");
      } else if (params.has("iperror")) {
        setIp();
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#f44336";
        alertEl.innerHTML += "<strong>Error!</strong> " + params.get("iperror");
      } else if (params.has("otpsent")) {
        setIp();
        document.getElementById("otp").type = "password";
        document.getElementById("sendOTP").innerText = "Sign In";
        document.getElementById("mobile").value = params.get("otpsent");
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML += "<strong>Success!</strong> OTP Sent";
      } else if (params.has("ipset")) {
          document.getElementById("tabToggle02").click();
          alertEl.style.display = "block";
          alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML += "<strong>Success!</strong> IP Setup Successfully";
        document.getElementById("ipinput").value = params.get("ipset");
        setIp()
      } else {
        setIp();
      }
    };
    function copyPlaylist() {
      navigator.clipboard.writeText(\`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`).then(function () {
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML = "<strong>Success!</strong> Playlist Copyed to clipboard \\n" + \`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`;
        console.log("su");
      }, function (err) {
        console.log("er");
        console.error('Async: Could not copy text: ', err);
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML += "<strong>Error!</strong> Error while Copying Playlist to clipboard \\n" + \`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`;
      });
    }
    async function setIp() {
        let data = await fetch('/ip');
        ipinfo = await data.json();
        // document.getElementById("copyPlaylist").innerText = \`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`;
        document.getElementById("ipinput").value = ipinfo['ip'];
    }`),G=o(),c=l("div"),E=l("img"),X=o(),U=l("h1"),Z=d("JTVServer admin"),ee=o(),A=l("div"),O=l("span"),te=d("×"),le=o(),a=l("tab-container"),h=l("input"),ne=o(),P=l("label"),re=d("JioTV Login"),se=o(),k=l("input"),ae=o(),M=l("label"),oe=d("IP Setup"),ie=o(),F=l("tab-content"),q=l("form"),y=l("div"),C=l("div"),b=l("input"),ce=o(),S=l("input"),pe=o(),x=l("button"),ue=d("Send OTP"),de=o(),T=l("p"),me=d("JioTV login"),ye=o(),D=l("tab-content"),L=l("form"),g=l("div"),J=l("div"),_=l("input"),ge=o(),V=l("button"),fe=d("Set IP"),ve=o(),I=l("p"),Ee=d("JioTV IP Setup"),he=o(),B=l("div"),H=l("a"),R=l("button"),be=d("Download Playlist"),Te=o(),w=l("button"),_e=d("Copy Playlist Url"),this.h()},l(u){v=n(u,"SVELT:HEAD",{class:!0});var j=s(v);$=n(j,"SCRIPT",{class:!0});var qe=s($);W=m(qe,`let ipinfo;
    document.body.onload = () => {

      var params = new URLSearchParams(window.location.search);
      alertEl = document.querySelector(".alert");
      if (params.has("success")) {
        setIp();
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML +=
          "<strong>Success!</strong> You have been logged in";
      } else if (params.has("error")) {
        setIp();
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#f44336";
        alertEl.innerHTML += "<strong>Error!</strong> " + params.get("error");
      } else if (params.has("iperror")) {
        setIp();
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#f44336";
        alertEl.innerHTML += "<strong>Error!</strong> " + params.get("iperror");
      } else if (params.has("otpsent")) {
        setIp();
        document.getElementById("otp").type = "password";
        document.getElementById("sendOTP").innerText = "Sign In";
        document.getElementById("mobile").value = params.get("otpsent");
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML += "<strong>Success!</strong> OTP Sent";
      } else if (params.has("ipset")) {
          document.getElementById("tabToggle02").click();
          alertEl.style.display = "block";
          alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML += "<strong>Success!</strong> IP Setup Successfully";
        document.getElementById("ipinput").value = params.get("ipset");
        setIp()
      } else {
        setIp();
      }
    };
    function copyPlaylist() {
      navigator.clipboard.writeText(\`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`).then(function () {
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML = "<strong>Success!</strong> Playlist Copyed to clipboard \\n" + \`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`;
        console.log("su");
      }, function (err) {
        console.log("er");
        console.error('Async: Could not copy text: ', err);
        alertEl.style.display = "block";
        alertEl.style.backgroundColor = "#4CAF50";
        alertEl.innerHTML += "<strong>Error!</strong> Error while Copying Playlist to clipboard \\n" + \`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`;
      });
    }
    async function setIp() {
        let data = await fetch('/ip');
        ipinfo = await data.json();
        // document.getElementById("copyPlaylist").innerText = \`http://\${ipinfo['ip']}:\${ipinfo['port']}/playlist\`;
        document.getElementById("ipinput").value = ipinfo['ip'];
    }`),qe.forEach(r),j.forEach(r),G=i(u),c=n(u,"DIV",{class:!0});var f=s(c);E=n(f,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),X=i(f),U=n(f,"H1",{class:!0});var Ce=s(U);Z=m(Ce,"JTVServer admin"),Ce.forEach(r),ee=i(f),A=n(f,"DIV",{class:!0,style:!0});var Se=s(A);O=n(Se,"SPAN",{class:!0,onclick:!0});var xe=s(O);te=m(xe,"×"),xe.forEach(r),Se.forEach(r),le=i(f),a=n(f,"TAB-CONTAINER",{class:!0});var p=s(a);h=n(p,"INPUT",{type:!0,id:!0,name:!0,class:!0}),ne=i(p),P=n(p,"LABEL",{class:!0,for:!0,checked:!0});var Le=s(P);re=m(Le,"JioTV Login"),Le.forEach(r),se=i(p),k=n(p,"INPUT",{type:!0,id:!0,name:!0,class:!0}),ae=i(p),M=n(p,"LABEL",{class:!0,for:!0});var Be=s(M);oe=m(Be,"IP Setup"),Be.forEach(r),ie=i(p),F=n(p,"TAB-CONTENT",{class:!0});var Ae=s(F);q=n(Ae,"FORM",{action:!0,method:!0,class:!0});var Oe=s(q);y=n(Oe,"DIV",{class:!0});var Y=s(y);C=n(Y,"DIV",{class:!0});var K=s(C);b=n(K,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),ce=i(K),S=n(K,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),K.forEach(r),pe=i(Y),x=n(Y,"BUTTON",{id:!0,type:!0,class:!0});var Me=s(x);ue=m(Me,"Send OTP"),Me.forEach(r),de=i(Y),T=n(Y,"P",{style:!0,class:!0});var Ve=s(T);me=m(Ve,"JioTV login"),Ve.forEach(r),Y.forEach(r),Oe.forEach(r),Ae.forEach(r),ye=i(p),D=n(p,"TAB-CONTENT",{class:!0});var He=s(D);L=n(He,"FORM",{action:!0,method:!0,class:!0});var Ne=s(L);g=n(Ne,"DIV",{class:!0});var z=s(g);J=n(z,"DIV",{class:!0});var $e=s(J);_=n($e,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),$e.forEach(r),ge=i(z),V=n(z,"BUTTON",{type:!0,class:!0});var Ue=s(V);fe=m(Ue,"Set IP"),Ue.forEach(r),ve=i(z),I=n(z,"P",{style:!0,class:!0});var Fe=s(I);Ee=m(Fe,"JioTV IP Setup"),Fe.forEach(r),z.forEach(r),Ne.forEach(r),He.forEach(r),p.forEach(r),he=i(f),B=n(f,"DIV",{class:!0});var Q=s(B);H=n(Q,"A",{class:!0,href:!0});var De=s(H);R=n(De,"BUTTON",{class:!0});var Je=s(R);be=m(Je,"Download Playlist"),Je.forEach(r),De.forEach(r),Te=i(Q),w=n(Q,"BUTTON",{id:!0,onclick:!0,type:!0,class:!0});var Re=s(w);_e=m(Re,"Copy Playlist Url"),Re.forEach(r),Q.forEach(r),f.forEach(r),this.h()},h(){e($,"class","svelte-rquwdm"),e(v,"class","svelte-rquwdm"),Ke(E.src,ke="https://jiotv.com/src/resources/images/JioTV_logo.png")||e(E,"src",ke),e(E,"alt","JioTV Logo"),e(E,"width","100px"),e(E,"height","100px"),e(E,"class","mx-auto svelte-rquwdm"),e(U,"class","text-3xl font-bold mx-auto title-font text-white svelte-rquwdm"),e(O,"class","closebtn svelte-rquwdm"),e(O,"onclick","this.parentElement.style.display='none';"),e(A,"class","alert svelte-rquwdm"),N(A,"display","none"),e(h,"type","radio"),e(h,"id","tabToggle01"),e(h,"name","tabs"),h.value="1",h.checked=!0,e(h,"class","svelte-rquwdm"),e(P,"class","toggleLabel svelte-rquwdm"),e(P,"for","tabToggle01"),e(P,"checked","checked"),e(k,"type","radio"),e(k,"id","tabToggle02"),e(k,"name","tabs"),k.value="2",e(k,"class","svelte-rquwdm"),e(M,"class","toggleLabel svelte-rquwdm"),e(M,"for","tabToggle02"),e(b,"id","mobile"),e(b,"name","mobile"),e(b,"type","text"),e(b,"placeholder","Mobile Number"),b.required=!0,e(b,"class","svelte-rquwdm"),e(S,"id","otp"),e(S,"name","otp"),e(S,"type","hidden"),e(S,"placeholder","OTP"),e(S,"class","svelte-rquwdm"),e(C,"class","container svelte-rquwdm"),e(x,"id","sendOTP"),e(x,"type","submit"),e(x,"class","svelte-rquwdm"),N(T,"text-align","center"),N(T,"font-size","small"),N(T,"opacity","0.5"),e(T,"class","svelte-rquwdm"),e(y,"class","formcontainer svelte-rquwdm"),e(q,"action","/login"),e(q,"method","POST"),e(q,"class","svelte-rquwdm"),Ie(F,"class","svelte-rquwdm"),e(_,"id","ipinput"),e(_,"name","ip"),e(_,"type","text"),e(_,"placeholder","Enter Your IP"),_.required=!0,e(_,"class","svelte-rquwdm"),e(J,"class","container svelte-rquwdm"),e(V,"type","submit"),e(V,"class","svelte-rquwdm"),N(I,"text-align","center"),N(I,"font-size","small"),N(I,"opacity","0.5"),e(I,"class","svelte-rquwdm"),e(g,"class","formcontainer svelte-rquwdm"),e(L,"action","/ip"),e(L,"method","POST"),e(L,"class","svelte-rquwdm"),Ie(D,"class","svelte-rquwdm"),Ie(a,"class","svelte-rquwdm"),e(R,"class","svelte-rquwdm"),e(H,"class","a svelte-rquwdm"),e(H,"href","/playlist/download"),e(w,"id","copyPlaylist"),e(w,"onclick","copyPlaylist()"),e(w,"type","submit"),e(w,"class","svelte-rquwdm"),e(B,"class","formcontainer svelte-rquwdm"),e(c,"class","body flex flex-col svelte-rquwdm")},m(u,j){we(u,v,j),t(v,$),t($,W),we(u,G,j),we(u,c,j),t(c,E),t(c,X),t(c,U),t(U,Z),t(c,ee),t(c,A),t(A,O),t(O,te),t(c,le),t(c,a),t(a,h),t(a,ne),t(a,P),t(P,re),t(a,se),t(a,k),t(a,ae),t(a,M),t(M,oe),t(a,ie),t(a,F),t(F,q),t(q,y),t(y,C),t(C,b),t(C,ce),t(C,S),t(y,pe),t(y,x),t(x,ue),t(y,de),t(y,T),t(T,me),t(a,ye),t(a,D),t(D,L),t(L,g),t(g,J),t(J,_),t(g,ge),t(g,V),t(V,fe),t(g,ve),t(g,I),t(I,Ee),t(c,he),t(c,B),t(B,H),t(H,R),t(R,be),t(B,Te),t(B,w),t(w,_e)},p:Pe,i:Pe,o:Pe,d(u){u&&r(v),u&&r(G),u&&r(c)}}}class Xe extends Ye{constructor(v){super(),ze(this,v,null,Qe,Ge,{})}}export{Xe as default};
