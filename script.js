const NUM="5519983640257",C=window.DUARTE_CATALOG,$=s=>document.querySelector(s);
const wa=m=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(m);
const brl=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa("Olá! Vim pelo site e gostaria de um orçamento.");a.target="_blank";a.rel="noopener"});
$("#yr").textContent=new Date().getFullYear();
const P={screen:"M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2",battery:"M3 8h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM22 11v2M9 10l-2 3h4l-2 3","back-cover":"M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM9 6h4v4H9z","charging-port":"M13 2L4 14h7l-1 8 9-12h-7z",camera:"M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",cleaning:"M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.700L5.500 9.500l4.700-1.800zM19 15l.8 2.200L22 18l-2.200.8L19 21l-.8-2.200L16 18l2.200-.8z",oxidation:"M12 2.500s6 6.500 6 11a6 6 0 0 1-12 0c0-4.500 6-11 6-11z",microsoldering:"M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M8 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",diagnostics:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.300-4.300"};
const S={};
const mk=(t,c,h,fn)=>{const b=document.createElement("button");b.type="button";b.className=c;b.innerHTML=h;b.onclick=fn;t.append(b);return b};
const sel=(box,b)=>{box.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));b.classList.add("sel")};
const progress=n=>{$("#prog").style.width=n*33.4+"%";["s2","s3"].forEach((id,i)=>$("#"+id).classList.toggle("on",n>=i+1))};
const mid=r=>(r.min+r.max)/2;
const label=id=>C.services.find(s=>s.id===id).label;
const models=(sv,br)=>C.models.filter(m=>m.brand===br&&m.prices?.[sv]).sort((a,b)=>mid(a.prices[sv])-mid(b.prices[sv]));
const reset=()=>{$("#final").hidden=true;$("#hint").hidden=false};
C.services.forEach(s=>{const b=mk($("#services"),"opt",`<svg viewBox="0 0 24 24"><path d="${P[s.id]||P.diagnostics}"/></svg>${s.label}`,()=>{
 sel($("#services"),b);S.service=s.id;S.brand=S.model=null;reset();
 const bs=Object.keys(C.brands).filter(k=>models(s.id,k).length);$("#brands").innerHTML="";$("#models").innerHTML="";
 if(!bs.length){progress(1);$("#s2").classList.remove("on");$("#s3").classList.remove("on");
  $("#hint").hidden=true;show(label(s.id),"Sob avaliação","Este serviço é orçado na bancada. Envie os detalhes pelo WhatsApp.",wa("Olá! Gostaria de um orçamento de "+label(s.id).toLowerCase()+"."));return}
 bs.forEach(k=>{const p=mk($("#brands"),"opt",C.brands[k],()=>{sel($("#brands"),p);S.brand=k;S.model=null;reset();
  $("#models").innerHTML="";models(S.service,k).forEach(m=>{const r=m.prices[S.service];const q=mk($("#models"),"opt",`<span>${m.name}</span><small>${brl(r.min)} – ${brl(r.max)}</small>`,()=>{sel($("#models"),q);S.model=m;done()})});
  progress(2);$("#s3").classList.add("on");$("#hint").textContent="Agora escolha o modelo.";$("#other").href=wa("Olá! Quero orçamento de "+label(S.service).toLowerCase()+" e meu modelo não apareceu no site. Marca: "+C.brands[k]+".");
 })});
 progress(1);$("#s2").classList.add("on");$("#s3").classList.remove("on");$("#hint").textContent="Agora escolha a marca."})});
$("#s2").classList.remove("on");
function show(t,v,n,link){$("#final").hidden=false;$("#rt").textContent=t;$("#rv").textContent=v;$("#rn").textContent=n;$("#go").href=link}
function msg(){const r=S.model.prices[S.service],nm=$("#nm").value.trim(),ob=$("#ob").value.trim();
 return["Olá"+(nm?", sou "+nm:"")+"! Vim pelo site e quero um orçamento.","• Serviço: "+label(S.service),"• Aparelho: "+S.model.name,"• Faixa vista no site: "+brl(r.min)+" a "+brl(r.max),ob&&"• Relato: "+ob].filter(Boolean).join("\n")}
function done(){const r=S.model.prices[S.service];progress(3);$("#hint").hidden=true;
 show(S.model.name+" · "+label(S.service),brl(r.min)+" – "+brl(r.max),C.demoMode?"Valores demonstrativos (modo teste).":"Faixa de referência para este modelo.",wa(msg()));
 if(innerWidth<860)$("#result").scrollIntoView({behavior:"smooth",block:"center"})}
["#nm","#ob"].forEach(i=>$(i).addEventListener("input",()=>{if(S.model)$("#go").href=wa(msg())}));
