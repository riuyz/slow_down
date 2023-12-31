const delay = ms => new Promise(res => setTimeout(res, ms));

const slow_down = async () => {
    let body = document.body.innerHTML
    let style = document.body.style
    document.body.style.textAlign = "center"
    document.body.style.margin = "350px"
    document.body.style.verticalAlign = "middle"
    document.body.innerHTML = "Remit not paucity!"
    await delay(5000);
    document.body.style = style
    document.body.innerHTML = body
};

slow_down()