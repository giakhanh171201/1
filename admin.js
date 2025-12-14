function logout(){
  location.href = "index.html";
}

function getData(){
  return JSON.parse(localStorage.getItem("bases") || "[]");
}

function saveData(d){
  localStorage.setItem("bases", JSON.stringify(d));
}

function addBase(){
  const data = getData();
  data.push({ name: baseName.value, floors: [] });
  saveData(data);
  baseName.value="";
  render();
}

function removeBase(i){
  const data = getData();
  data.splice(i,1);
  saveData(data);
  render();
}

function openBase(i){
  localStorage.setItem("currentBase", i);
  location.href="tang.html";
}

function render(){
  const data = getData();
  baseList.innerHTML="";
  data.forEach((b,i)=>{
    baseList.innerHTML+=`
    <div class="card list-item">
      <div>${b.name}</div>
      <div>
        <button onclick="openBase(${i})">Mở</button>
        <button class="danger" onclick="removeBase(${i})">Xóa</button>
      </div>
    </div>`;
  });
}
render();
