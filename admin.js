let cosoList = JSON.parse(localStorage.getItem("cosoList")) || [];

function save() {
    localStorage.setItem("cosoList", JSON.stringify(cosoList));
}

function addCoSo() {
    const name = document.getElementById("coso").value;
    if (!name) return;
    cosoList.push({ name, tang: [] });
    save();
    render();
}

function render() {
    const div = document.getElementById("list");
    div.innerHTML = "";
    cosoList.forEach((c, i) => {
        div.innerHTML += `
        <div class="card">
            <b>${c.name}</b>
            <button onclick="openCoSo(${i})">Mở</button>
            <button class="danger" onclick="del(${i})">Xóa</button>
        </div>`;
    });
}

function openCoSo(i) {
    localStorage.setItem("cosoIndex", i);
    location.href = "tang.html";
}

function del(i) {
    cosoList.splice(i,1);
    save(); render();
}

function logout(){
    localStorage.clear();
    location.href="index.html";
}

render();
