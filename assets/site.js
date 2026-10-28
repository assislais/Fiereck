
/* ===== CONFIGURAÇÃO (PENDENTE: preencha com dados reais) ===== */
const CONFIG={
  whatsapp:"5531971726126",      // PENDENTE: só dígitos com DDI e DDD, ex.: 5531999999999
  email:"",         // PENDENTE
  regiao:"Betim, Juatuba, Mateus Leme, Igarapé e São Joaquim de Bicas (MG)",        // PENDENTE: cidade/região de atendimento
  instagram:"", tiktok:"", youtube:"" // PENDENTE: URLs completas
};
/* Troque por caminhos de fotos reais, ex.: hero:"img/hero.jpg" */
const IMAGES={chatAvatar:"" /* foto do chat: caminho ou data URI */,hero:"",sobre:"",s0:"",s1:"",s2:"",s3:"",s4:"",s5:""};
const GALERIA=[
["Casas e construções","t-brick"],["Radier e fundações","t-concrete"],["Tijolinho ecológico","t-brick"],["Reformas e acabamentos","t-fin"],
["Casas de campo e sítios","t-field"],["Detalhes de materiais","t-wood"],["Casas de campo e sítios","t-stone"],["Radier e fundações","t-concrete"],["Detalhes de materiais","t-stone"]];

const wa=t=>"https://wa.me/"+CONFIG.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent(t);
const $=s=>document.querySelector(s);
function img(el,key){if(el&&IMAGES[key])el.style.backgroundImage="url('"+IMAGES[key]+"')";}
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa(a.dataset.wa));
img($(".hero"),"hero");$(".hero")?.style.setProperty("--hero",IMAGES.hero?"url('"+IMAGES.hero+"')":"none");
$("#yr").textContent=new Date().getFullYear();
const cats=["Todos",...new Set(GALERIA.map(g=>g[0]))];let cur="Todos";
function drawGal(){if(!$("#gal"))return;
 $("#filters").innerHTML="";$("#gal").innerHTML="";
 cats.forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c===cur);b.onclick=()=>{cur=c;drawGal()};$("#filters").appendChild(b)});
 const list=GALERIA.filter(g=>cur==="Todos"||g[0]===cur);
 if(!list.length){$("#gal").textContent="Nenhuma imagem nesta categoria ainda.";return}
 list.forEach(g=>{const b=document.createElement("button");b.className="ph "+g[1];b.dataset.label=g[0]+" (demonstrativa)";b.setAttribute("aria-label","Ampliar: "+g[0]);b.onclick=()=>openDlg(g);$("#gal").appendChild(b)});
}
const dlg=document.createElement("dialog");dlg.setAttribute("aria-label","Imagem ampliada");
dlg.innerHTML='<div class="ph" id="dimg" role="img"></div><div class="bar"><span id="dcap"></span><button class="btn ghost" id="dclose">Fechar</button></div>';
document.body.appendChild(dlg);
function openDlg(g){$("#dimg").className="ph "+g[1];$("#dimg").setAttribute("aria-label",g[0]+", imagem demonstrativa");$("#dcap").textContent=g[0]+" · imagem demonstrativa";dlg.showModal()}
$("#dclose").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
drawGal();
const L=$("#links")||document.createElement("ul");
function addLink(txt,href){if(href)L.insertAdjacentHTML("beforeend",'<li><a target="_blank" rel="noopener" href="'+href+'">'+txt+'</a></li>')}
addLink("WhatsApp",wa("Olá! Vim pelo site da Fiereck Construções."));
addLink("Instagram",CONFIG.instagram);addLink("TikTok",CONFIG.tiktok);addLink("YouTube",CONFIG.youtube);
if(CONFIG.email)addLink(CONFIG.email,"mailto:"+CONFIG.email);
if(CONFIG.regiao)L.insertAdjacentHTML("beforeend","<li>Atendimento: "+CONFIG.regiao+"</li>");
if($("#form"))$("#form").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
 let m="Olá! Meu nome é "+f.get("nome")+". Tenho interesse em: "+f.get("servico")+". Local da obra: "+f.get("local")+".";
 if(f.get("desc").trim())m+=" Sobre o projeto: "+f.get("desc").trim();
 window.open(wa(m),"_blank","noopener")};
const bg=$("#burger"),mn=$("#menu");
bg.onclick=()=>{const o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
mn.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mn.classList.remove("open");bg.setAttribute("aria-expanded","false")}));

const wab=$("#wab");
function pop(){try{const C=new(window.AudioContext||window.webkitAudioContext)(),t=C.currentTime,o=C.createOscillator(),g=C.createGain();
o.type="sine";o.frequency.setValueAtTime(420,t);o.frequency.exponentialRampToValueAtTime(980,t+.09);
g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.35,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+.2);
o.connect(g);g.connect(C.destination);o.start(t);o.stop(t+.22);
setTimeout(()=>{if(C.state!=="running")C.close()},150)}catch(e){}}
setTimeout(()=>{wab.classList.add("show");pop()},3000);
const chat=$("#chat"),chi=$("#chi");
if(IMAGES.chatAvatar){$("#av").style.backgroundImage="url('"+IMAGES.chatAvatar+"')";$("#av").textContent=""}
document.querySelectorAll(".tm").forEach(t=>t.textContent=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}));
function tg(o){chat.hidden=!o;wab.setAttribute("aria-expanded",o);if(o){const b=$("#bdg");if(b)b.remove();setTimeout(()=>chi.focus(),60)}else wab.focus()}
wab.onclick=()=>tg(chat.hidden);$("#chx").onclick=()=>tg(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!chat.hidden)tg(false)});
$("#chf").onsubmit=e=>{e.preventDefault();window.open(wa(chi.value.trim()||"Olá! Vim pelo site da Fiereck Construções e gostaria de um orçamento."),"_blank","noopener");chi.value=""};
