var j = document.createElement('iframe')
j.style.display = 'none'
document.body.appendChild(j)
window.console.log = j.contentWindow.console.log.bind(window);
window.alert - j.contentWindow.alert.bind(window);
alert('Anti-Ban has been activated.')


function discordFooter() {
  let element = document.createElement('div');

  element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(60, 60, 60); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
  element.innerHTML = `<p>Created by Jude! <br> Heres my <a style="color: #0000ff;" href="https://twitter.com/judergideon" target="_blank">twitter.</a></p>`;
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


var original_open = XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open = function () {
  if (!arguments[1].includes('suspend')) {
    original_open.apply(this, arguments)
  } else {
    console.log('Avoided ban')
  }
}

    console.log(
        '%c CHEATS BY JUDE GIDEON %c\n\thttps://discord.gg/aeDraxAUpB',
        'color: #3632a8; font-size: 2rem',
        'color: #8332a8; font-size: 1rem'
      )
