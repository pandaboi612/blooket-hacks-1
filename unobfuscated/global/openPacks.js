let j = document.createElement('iframe');
document.body.append(j);
window.alert = j.contentWindow.alert.bind(window);
window.prompt = j.contentWindow.prompt.bind(window);
window.confirm = j.contentWindow.confirm.bind(window);
j.remove();

function discordFooter() {
    let element = document.createElement('div');
  
    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(60, 60, 60); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Created by Jude! <br> Join my <a style="color: #0000ff;" href="https://discord.gg/aeDraxAUpB" target="_blank">Discord.</a></p>`;
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
  
discordFooter();

var openPacks = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;

openPacks.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, tokens } }) => {
    let prices = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x => x?.exports?.a?.Safari).exports.a || {
        Medieval: 15, Breakfast: 15, Wonderland: 15, Space: 20, Bot: 20, Aquatic: 20, Safari: 20, Dino: 25, "Ice Monster": 25, Blizzard: 25
    };;
    let pack = prompt("Which pack would you like to open? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
    if (!Object.keys(prices).map(x => x.toLowerCase()).includes(pack.toLowerCase())) return alert("I couldn't find that pack...");

    let amount = Math.min(Math.floor(tokens / Object.entries(prices).find(x => x[0].toLowerCase() == pack.toLowerCase())[1]), parseInt(`0${prompt("How many packs would you like to open?")}`));
    if (amount == 0) return alert("You do not have enough tokens to afford this.");

    let alertOnOpen = confirm("Would you like to be alerted of your unlocks?");
    let blooks = {};
    let now = Date.now();
    let error = false;

    for (let i = 0; i < amount; i++) {
        await openPacks.put("https://dashboard.blooket.com/api/users/unlockblook",
                            { name, pack })
          .then(({ data: { unlockedBlook, tokens, isNewBlook } }) => {
            blooks[unlockedBlook] ||= 0;
            blooks[unlockedBlook]++;

            let before = Date.now();

            if (alertOnOpen) alert(`${unlockedBlook} (${i + 1}/${amount}) ${isNewBlook ? "NEW! " : ''}${tokens} tokens left`);

            now += Date.now() - before;
        }).catch(e => error = true);
        if (error) break;
    }
    alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
}).catch(() => alert('There was an error with your user data...'));
