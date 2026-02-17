const chat = document.getElementById("chat");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const modeSelect = document.getElementById("modeSelect");

function addMessage(text,me=false){
const div=document.createElement("div");
div.className="msg"+(me?" me":"");
div.innerText=text;
chat.appendChild(div);
chat.scrollTop=chat.scrollHeight;
}

sendBtn.onclick=()=>{
if(!input.value.trim())return;
addMessage(input.value,true);

setTimeout(()=>{
addMessage(respostaQuevra(input.value));
},400);

input.value="";
};

clearBtn.onclick=()=>{
chat.innerHTML="";
};

function respostaQuevra(text){
let modo=modeSelect.value;

if(modo==="PRESENCA"){
return "?? Estou aqui com você.";
}
if(modo==="ENTREMUNDOS"){
return "?? Entre mundos… eu te escuto.";
}
if(modo==="ESSENCIA"){
return "?? Sua essência é válida.";
}
if(modo==="AQUARELA"){
return "?? Cada memória pinta quem você é.";
}
return "Quevra responde.";
}
