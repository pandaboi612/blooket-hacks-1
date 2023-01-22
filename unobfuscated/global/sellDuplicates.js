let j = document.createElement('iframe');
            document.body.append(j);
            window.alert = j.contentWindow.alert.bind(window);
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

            var sellDuplicates = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
            sellDuplicates.get("https://dashboard.blooket.com/api/users")
              .then(async ({ data: { name, unlocks } }) => {
                let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
                if (confirm(`Are you sure you would like to sell all duplicate blooks?`)) {
                    let now = Date.now();
                    for (const [blook, amount] of blooks) 
                      await sellDuplicates.put("https://dashboard.blooket.com/api/users/sellblook",
                                               { name, blook, numSold: amount - 1 });
                    alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) =>
                                                                          `    ${blook} ${amount - 1}`).join(`\n`)}`);
                }
            }).catch(() => alert('There was an error with your user data...'));
