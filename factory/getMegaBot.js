    (async () => {
      let n = document.createElement('iframe');
      document.body.append(n);
      window.alert = n.contentWindow.alert.bind(window);
      window.confirm = n.contentWindow.confirm.bind(window);
      n.remove();

          var getValues = () => new Promise((e, t) => {
            try {
                let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
                e({
                    blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                    secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
                })
            } catch {
                t("Could not fetch auth details")
            }
        })
        var encodeValues = async (e, t) => {
            let d = window.crypto.getRandomValues(new Uint8Array(12));
            return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: d
            }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
                name: "AES-GCM"
            }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
        };
                if (window.location.pathname != '/play/factory') {
                alert('You must be in a factory game!');
            } else {
      var d = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state,
  e = parseInt(prompt('How many mega-bots do you want?'))
for (var i = 0; i < e; i++) {
  var megaBot = {
    name: 'Mega Bot',
    color: '#2fa04a',
    class: '\uD83E\uDD16',
    rarity: 'Mythical',
    cash: [80000, 430000, 4200000, 62000000, 1000000000],
    time: [5, 5, 3, 3, 3],
    price: [7000000, 120000000, 1900000000, 35000000000],
    active: false,
    level: 4,
    bonus: 10.0,
  }
  Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.blooks.push(megaBot)
}

      }})();

    function footer() {
        let element = document.createElement('div');

        element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
        element.innerHTML = `<p>Made by monkxy <br> Join my <a style="color: #0000ff;" href="https://discord.gg/aeDraxAUpB" target="_blank">Discord.</a></p>`;
        document.body.appendChild(element);

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = ((e = window.event) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = (() => {
                document.onmouseup = null;
                document.onmousemove = null;
            });
            document.onmousemove = ((e) => {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
                let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
                element.style.top = top + "px";
                element.style.left = left + "px";
            });
        });
    };

    footer();