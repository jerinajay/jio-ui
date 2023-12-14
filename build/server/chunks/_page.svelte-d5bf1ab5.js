import { c as create_ssr_component } from './index2-124de26d.js';

const css = {
  code: '.body.svelte-rquwdm.svelte-rquwdm{display:flex;justify-content:center;font-family:Roboto, Arial, sans-serif;font-size:15px;color:#ffffff}.body.svelte-rquwdm.svelte-rquwdm{background-image:url(https://jiotv.com/src/resources/images/Redirection-screen_Background.jpg);background-size:cover;height:92.5vh\n	}input[type="text"].svelte-rquwdm.svelte-rquwdm{width:100%;padding:16px 8px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button.svelte-rquwdm.svelte-rquwdm{background-color:#8ebf42;color:white;padding:14px 0;margin:10px 0;border:none;cursor:pointer;width:100%}.a.svelte-rquwdm.svelte-rquwdm{background-color:#8ebf42;color:white;padding:14px 0;margin:10px 0;border:none;cursor:pointer;width:100%;text-decoration:none;justify-content:center;flex:auto}h1.svelte-rquwdm.svelte-rquwdm{text-align:center;font-size:2rem;color:#ffffff}button.svelte-rquwdm.svelte-rquwdm:hover{opacity:0.8}a.svelte-rquwdm.svelte-rquwdm:hover{opacity:0.8}.formcontainer.svelte-rquwdm.svelte-rquwdm{text-align:left;margin:24px 50px 12px}.container.svelte-rquwdm.svelte-rquwdm{padding:16px 0;text-align:left}.alert.svelte-rquwdm.svelte-rquwdm{padding:20px;color:white}.closebtn.svelte-rquwdm.svelte-rquwdm{margin-left:15px;color:white;font-weight:bold;float:right;font-size:22px;line-height:20px;cursor:pointer;transition:0.3s}.closebtn.svelte-rquwdm.svelte-rquwdm:hover{color:black}@media screen and (max-width: 300px){}:root{--page-height:100vh;--page-width:100vw;--page-margin:0;--page-padding:0;--page-text-color:#8e9196;--page-text-color-hover:rgba(255, 255, 255, 1);--page-background-color:#1a1e23;--tab-display:grid;--tab-background-color:rgba(255, 255, 255, 0.03);--display-none:none;--box-sizing:border-box}.svelte-rquwdm.svelte-rquwdm:before,.svelte-rquwdm.svelte-rquwdm:after,.svelte-rquwdm.svelte-rquwdm,.svelte-rquwdm.svelte-rquwdm::after,.svelte-rquwdm.svelte-rquwdm::before{box-sizing:border-box}.body.svelte-rquwdm.svelte-rquwdm{justify-content:center;margin:var(--page-margin);padding:var(--page-padding)}p.svelte-rquwdm.svelte-rquwdm{padding:0 1em}tab-container.svelte-rquwdm.svelte-rquwdm{display:var(--tab-display);margin-top:50px;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;border:solid rgba(255, 255, 255, 0.03);border-radius:0.5em;background-color:var(--page-background-color);color:var(--page-text-color)}input.svelte-rquwdm.svelte-rquwdm{display:none}input.svelte-rquwdm:checked+label.svelte-rquwdm{color:var(--page-text-color-hover);background-color:rgba(255, 255, 255, 0);transition:all 250ms}.toggleLabel.svelte-rquwdm.svelte-rquwdm{cursor:pointer;transition:color 250ms;padding:1em;border-right:solid 2px var(--page-background-color);background-color:var(--tab-background-color);text-align:center;transition:all 250ms}.toggleLabel.svelte-rquwdm.svelte-rquwdm:last-of-type{border:none}.toggleLabel.svelte-rquwdm.svelte-rquwdm:hover{color:var(--page-text-color-hover);background-color:rgba(255, 255, 255, 0.05)}tab-content.svelte-rquwdm.svelte-rquwdm{display:var(--tab-display);grid-column:1 / -1}input#tabToggle01.svelte-rquwdm:checked~tab-content.svelte-rquwdm:not(:nth-of-type(1)),input#tabToggle02.svelte-rquwdm:checked~tab-content.svelte-rquwdm:not(:nth-of-type(2)){display:none}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<svelt:head class="svelte-rquwdm"><script class="svelte-rquwdm">let ipinfo;
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
    }
  <\/script></svelt:head>





<div class="body flex flex-col svelte-rquwdm"><img src="https://jiotv.com/src/resources/images/JioTV_logo.png" alt="JioTV Logo" width="100px" height="100px" class="mx-auto svelte-rquwdm">
	<h1 class="text-3xl font-bold mx-auto title-font text-white svelte-rquwdm">JTVServer admin</h1>
	
	<div class="alert svelte-rquwdm" style="display: none"><span class="closebtn svelte-rquwdm" onclick="this.parentElement.style.display='none';">×</span></div>
	<tab-container class="svelte-rquwdm"><input type="radio" id="tabToggle01" name="tabs" value="1" checked class="svelte-rquwdm">
		<label class="toggleLabel svelte-rquwdm" for="tabToggle01" checked="checked">JioTV Login</label>
		<input type="radio" id="tabToggle02" name="tabs" value="2" class="svelte-rquwdm">
		<label class="toggleLabel svelte-rquwdm" for="tabToggle02">IP Setup</label>
		<tab-content class="svelte-rquwdm"><form action="/login" method="POST" class="svelte-rquwdm"><div class="formcontainer svelte-rquwdm"><div class="container svelte-rquwdm"><input id="mobile" name="mobile" type="text" placeholder="Mobile Number" required class="svelte-rquwdm">
						<input id="otp" name="otp" type="hidden" placeholder="OTP" class="svelte-rquwdm"></div>
					<button id="sendOTP" type="submit" class="svelte-rquwdm">Send OTP</button>
					<p style="text-align: center; font-size: small; opacity: 0.5" class="svelte-rquwdm">JioTV login</p></div></form></tab-content>
		<tab-content class="svelte-rquwdm"><form action="/ip" method="POST" class="svelte-rquwdm"><div class="formcontainer svelte-rquwdm"><div class="container svelte-rquwdm"><input id="ipinput" name="ip" type="text" placeholder="Enter Your IP" required class="svelte-rquwdm"></div>
					<button type="submit" class="svelte-rquwdm">Set IP</button>
					<p style="text-align: center; font-size: small; opacity: 0.5" class="svelte-rquwdm">JioTV IP Setup</p></div></form></tab-content></tab-container>
	<div class="formcontainer svelte-rquwdm"><a class="a svelte-rquwdm" href="/playlist/download"><button class="svelte-rquwdm">Download Playlist</button></a>
		<button id="copyPlaylist" onclick="copyPlaylist()" type="submit" class="svelte-rquwdm">Copy Playlist Url</button></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d5bf1ab5.js.map
