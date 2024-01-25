function foo() {
    let a = document.getElementById("arrow");
    let d = document.getElementById("option");
    d.style.display = "block"; 
    a.style.transition = "all 0.3s";
    a.style.transform = "rotate(180deg)";
}

// function out() {
//     let a = document.getElementById("arrow");
//     let d = document.getElementById("option");
//     d.style.display = "none"; 
//     a.style.transition = "all 0.3s";
//     a.style.transform = "rotate(0deg)";
// }

function choose(e) {
    let btn = document.getElementById("btn");
    let option = document.getElementById("option");
    btn.innerHTML = e.innerHTML + " <i id='arrow' class='fa-solid fa-caret-down'></i>";
    option.style.display = "none";
}

function post() {
    let d = document.getElementById("post");
    let p = document.getElementById("pimg");
    let n = document.getElementById("pname");
    let enter = document.getElementById("enter");
    d.innerHTML += "<div class='main'><div class='in1'><img width='60' height='60' src='" + p.src + "' alt='dp'><p>" + n.innerHTML + "</p></div><div class='usert'><p>" + enter.value + "</p></div><div class='comp'><p onclick='like(this)'><i id='thumb' class='fa-regular fa-thumbs-up'></i> Like</p><p onclick='comment(this)'><i class='fa-regular fa-comment'></i> Comment</p><p><i class='fa-regular fa-share-from-square'></i> Share</p></div><div id='forcom' class='forcom'><img src='Images/IMG-20210324-WA0039.jpg' width='50px' height='50px' alt='dp'><textarea cols='61' rows='2' placeholder='Enter your comment...'></textarea><button onclick='postComment(this)'><i class='fa-solid fa-play'></i></button></div></div>"
}

function like(e) {
    let thumb = e.childNodes[0];
    if (thumb.className === "fa-regular fa-thumbs-up") {
        thumb.className = "fa-solid fa-thumbs-up";
    } else {
        thumb.className = "fa-regular fa-thumbs-up";
    }
}

function comment(e) {
    let d = e.parentNode.nextSibling;
    let b = e.parentNode;
    if (d.style.display === "block") {
        d.style.display = "none";
        b.style.borderBottom = "0px";
    } else {
        d.style.display = "block";
        b.style.borderBottom = "1px solid grey";
    }
}

function postComment(e) {
    let forcom = e.parentNode;
    let text = e.previousSibling.value;
    console.log(text)
    let pimg = document.getElementById("pimg");
    let div = document.createElement("div");
    forcom.appendChild(div);
    div.setAttribute("class", "readcom");
    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("Comments: ");
    h4.appendChild(h4Text);
    div.appendChild(h4);
    let img = document.createElement("img");
    img.setAttribute("src", pimg.src);
    img.setAttribute("width", "40");
    img.setAttribute("height", "40");
    div.appendChild(img);
    let cbox = document.createElement("div");
    cbox.setAttribute("class", "cbox");
    let p = document.createElement("p");
    p.innerHTML = text;
    cbox.appendChild(p);
    div.appendChild(cbox);
    console.log(forcom);
}