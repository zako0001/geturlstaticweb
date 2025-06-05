document.querySelector("button").addEventListener("click", async () => {
    const url = document.querySelector("input").value;
    fetch(url).then(res => res.text()).then(text => {
        document.querySelector("textarea").innerText = text;
    });
});