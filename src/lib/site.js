export function initSite() {
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],R=document.documentElement,B=document.body,
dot=$('#dot'),amb=$('#amb'),c=$('#c'),hd=$('.hd'),W=$('.w'),SEC=$$('.s'),M=v=>'$'+v.toLocaleString('es-AR'),
lp=(a,b,t)=>a+(b-a)*t,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,
fx=e=>{void e.offsetWidth;$$('i[data-w]').forEach(i=>i.style.width=i.dataset.w)};
// Demo A
const ST=[['Moda Norte',168000,1],['Deportes Sur',174500,1],['Urbano',159900,0],['Click Sport',171000,1]],dA=$('#dA'),rA=$('.rs',dA);let cu=6,on=1;
function A(){const L=ST.filter(s=>!on||s[2]).sort((a,b)=>a[1]-b[1]);
  rA.innerHTML=L.map((s,i)=>`<div class="rw${i?'':' b'}"><span>${s[0]}${s[2]?'':' <em>sin GoCuotas</em>'}</span><b>${cu} × ${M(Math.round(s[1]/cu))}</b><div class="bar"><i data-w="${30+(s[1]-150000)/28000*70}%"></i></div></div>`).join('');fx(rA)}
dA.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.c){cu=+b.dataset.c;$$('#dA [data-c]').forEach(x=>x.setAttribute('aria-pressed',x===b))}
  else{on=!on;b.setAttribute('aria-pressed',on)}A()};
// Demo B
const IT=['Leche','Arroz','Aceite','Yerba'],PR=[[1450,1390,1520],[1980,2100,1890],[3300,3150,3420],[4900,5200,4750]],SU=['Súper Norte','Mercado Sur','Hiper Centro'],sel=new Set([0,1,2]),dB=$('#dB'),rB=$('.rs',dB),sB=$('.sg',dB);
sB.innerHTML=IT.map((n,i)=>`<button data-i="${i}" aria-pressed="${sel.has(i)}">${n}</button>`).join('');
function Bf(){const s=[...sel];if(!s.length){rB.innerHTML='<p class="cb">Elegí al menos un producto.</p>';return}
  const t=SU.map((_,j)=>s.reduce((a,i)=>a+PR[i][j],0)),lo=Math.min(...t),hi=Math.max(...t),mix=s.reduce((a,i)=>a+Math.min(...PR[i]),0);
  rB.innerHTML=SU.map((n,j)=>`<div class="rw${t[j]==lo?' b':''}"><span>${n}</span><b>${M(t[j])}</b><div class="bar"><i data-w="${40+60*(t[j]-lo)/(hi-lo||1)}%"></i></div></div>`).join('')+`<p class="cb">Cada cosa donde sale menos: <b>${M(mix)}</b>. Ahorrás ${M(lo-mix)}.</p>`;fx(rB)}
dB.onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=+b.dataset.i;
  sel.has(i)?sel.delete(i):sel.add(i);b.setAttribute('aria-pressed',sel.has(i));Bf()};
// Demo C
const SV=[['App en Docker','la app y sus servicios'],['PostgreSQL','base de datos local'],['LocalStack','servicios AWS simulados'],['Tailscale','acceso remoto seguro']],up3=new Set([0,1,2,3]),dC=$('#dC'),rC=$('.rs',dC),sC=$('.sg',dC);
sC.innerHTML=SV.map((v,i)=>`<button data-i="${i}" aria-pressed="true">${v[0].split(' ')[0]}</button>`).join('');
function Cf(){const u=i=>up3.has(i),m=!u(0)?'La app no corre: no hay entorno local.':!u(1)?'La app corre sin base de datos: la mayoría de las rutas falla.':!u(2)?'Sin LocalStack no hay nube simulada: las pruebas con AWS no corren.':!u(3)?'Todo corre en local, pero sin acceso remoto seguro.':'Entorno completo: reproducible, remoto y seguro.';
  rC.innerHTML=SV.map((v,i)=>`<div class="rw${u(i)?' b':''}"><span>${v[0]} <em>${v[1]}</em></span><b>${u(i)?'activo':'apagado'}</b></div>`).join('')+`<p class="cb">${m}</p>`}
dC.onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=+b.dataset.i;
  up3.has(i)?up3.delete(i):up3.add(i);b.setAttribute('aria-pressed',up3.has(i));Cf()};
$$('.rs').forEach(e=>{e.setAttribute('role','status');e.setAttribute('aria-live','polite')});
A();Bf();Cf();
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{e.target.classList.toggle('on',e.isIntersecting);e.target.classList.toggle('pass',!e.isIntersecting&&e.boundingClientRect.top<innerHeight/2)}),{rootMargin:'-42% 0px -42% 0px'});$$('.it').forEach(i=>io.observe(i))}
$$('.cp').forEach((c,i)=>c.style.setProperty('--n',i%9));
(()=>{
const NS='http://www.w3.org/2000/svg',PS=.85,ORD={r:0,h:1,e:2,b:3,n:4,p:5,i:6,t:7};
const mk=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.append(e);return e};
const RV=(v,s)=>{if(v&&typeof v==='object'){let r;for(const k in v)if(+k<=s)r=v[k];return r}return v};
const ST=o=>{const r=[];for(const k in o){const [a,b]=k.split('-').map(Number);for(let i=a;i<=(b===undefined?a:b);i++)r[i]=o[k]}return r};
const n=(id,i,lab,sub,s,o)=>({t:'n',id,ic:i,lab,sub,s:ST(s),...o}),b=(id,lab,s,o)=>({t:'b',id,lab,s:ST(s),...o}),r=(id,s,o)=>({t:'r',id,s:ST(s),...o}),
 hx=(id,s,o)=>({t:'h',id,s:ST(s),...o}),tx=(id,lab,s,o)=>({t:'t',id,lab,s:ST(s),...o}),pt=(id,s)=>({t:'p',id,s:ST(s)}),
 ic=(id,i,z,s)=>({t:'i',id,ic:i,z,s:ST(s)}),ed=(id,a,c,sa,sb,s,o)=>({t:'e',id,a,b:c,sa,sb,s:ST(s),...o});
const D1=[
 tx('t0','Eventos del negocio, siempre en pasado',{0:[380,26]}),
 b('e1','Pedido creado',{0:[20,70,165,52]},{c:'ev'}),b('e2','Pago aprobado',{0:[205,70,165,52]},{c:'ev'}),b('e3','Stock reservado',{0:[390,70,165,52]},{c:'ev'}),b('e4','Envío despachado',{0:[575,70,165,52]},{c:'ev'}),
 ed('ee1','e1','e2','r','l',{0:1}),ed('ee2','e2','e3','r','l',{0:1}),ed('ee3','e3','e4','r','l',{0:1}),
 n('a1','mob','Cliente','',{0:[66,170]}),n('a2','cloud','Pasarela','',{0:[251,170]}),n('a3','box','Depósito','',{0:[436,170]}),n('a4','srv','Transportista','',{0:[621,170]}),
 ed('ae1','a1','e1','t','b',{0:1}),ed('ae2','a2','e2','t','b',{0:1}),ed('ae3','a3','e3','t','b',{0:1}),ed('ae4','a4','e4','t','b',{0:1}),
 tx('lu','Lenguaje ubicuo',{0:[100,266]}),
 b('cPe','pedido',{0:[170,252,82,28],1:[44,112,152,30]},{r:1}),b('cPa','pago',{0:[262,252,82,28],1:[304,112,152,30]},{r:1}),
 b('cSt','stock',{0:[354,252,82,28],1:[564,156,152,30]},{r:1}),b('cEn','envío',{0:[446,252,82,28],1:[564,112,152,30]},{r:1}),
 r('cV',{1:[20,50,200,170,'bd'],2:[290,50,230,160,'k'],3:[90,100,150,56,'k'],4:[230,93,140,60,'k']}),
 r('cP',{1:[280,50,200,170,'bd']}),r('cL',{1:[540,50,200,170,'bd']}),
 tx('nV','Ventas',{1:[120,76]},{c:'tt'}),tx('gV','núcleo del negocio',{1:[120,92]}),tx('nP','Pagos',{1:[380,76]},{c:'tt'}),tx('gP','soporte',{1:[380,92]}),tx('nL','Logística',{1:[640,76]},{c:'tt'}),tx('gL','genérico',{1:[640,92]}),
 b('cCa','catálogo',{1:[44,156,152,30]},{r:1}),b('cRe','reembolso',{1:[304,156,152,30]},{r:1}),
 ed('xv','cV','cP','r','l',{1:1},{l:'contrato'}),ed('xp','cP','cL','r','l',{1:1},{l:'evento'}),
 tx('n1','Cada contexto tiene su propio modelo y su propio lenguaje',{1:[380,256]}),
 tx('et','Entidad: Pedido',{2:[405,78]},{c:'tt'}),tx('e_a','identidad: PedidoId',{2:[405,110]},{c:''}),tx('e_b','estado: Confirmado',{2:[405,132]},{c:''}),tx('e_c','total: Dinero',{2:[405,154]},{c:''}),tx('e_d','destino: Dirección',{2:[405,176]},{c:''}),
 b('v1','Dinero',{2:[40,56,150,34]},{r:1}),b('v2','Dirección',{2:[40,110,150,34]},{r:1}),b('v3','Cantidad',{2:[40,164,150,34]},{r:1}),tx('lv','Objetos de valor',{2:[115,44]}),
 b('pid','PedidoId',{2:[590,108,130,34]},{r:1}),tx('li','Identidad',{2:[655,98]}),
 ed('w1','v1','cV','r','l',{2:1}),ed('w2','v2','cV','r','l',{2:1}),ed('w3','v3','cV','r','l',{2:1}),ed('w4','pid','cV','l','r',{2:1}),
 tx('n2','Una entidad cambia con el tiempo; un objeto de valor es inmutable y se define por sus datos',{2:[380,252]}),
 r('ag',{3:[60,34,420,236,'bd']},{f:'cV'}),tx('nag','Agregado Pedido',{3:[270,56]},{c:'tt'}),
 tx('rt','Pedido',{3:[165,124],4:[300,120]},{c:'tt'}),tx('rs',{3:'raíz del agregado',4:'aplica las reglas'},{3:[165,142],4:[300,138]},{c:'t2'}),
 b('l1','Línea 1',{3:[300,84,150,40]},{f:'cV'}),b('l2','Línea 2',{3:[300,140,150,40]},{f:'cV'}),ed('la','cV','l1','r','l',{3:1}),ed('lb','cV','l2','r','l',{3:1}),
 ic('lk','lock',16,{3:[176,70]}),tx('inv','Invariante: total = suma de las líneas',{3:[290,74]}),
 n('cl','srv','Cliente','otro agregado',{3:[560,190]}),ed('cr','cV','cl','b','l',{3:1},{l:'se referencia solo por id'}),
 n('oc','srv','Otro código','',{3:[560,50]}),ed('ox','oc','l2','l','r',{3:1},{k:'no',x:1}),
 b('cm','Comando: ConfirmarPedido',{4:[20,100,160,46]}),ed('c1','cm','cV','r','l',{4:1}),
 b('ev','PedidoConfirmado',{4:[430,100,150,46]},{c:'ev'}),ed('c2','cV','ev','r','l',{4:1}),
 b('h1','Pagos: iniciar cobro',{4:[620,58,130,44]}),b('h2','Logística: reservar stock',{4:[620,168,130,44]}),ed('c3','ev','h1','r','l',{4:1}),ed('c4','ev','h2','r','l',{4:1}),
 b('sv','Servicio de dominio',{4:[230,200,140,40,'bd']}),ed('c5','sv','cV','t','b',{4:1}),tx('n4','regla que cruza entidades',{4:[300,258]}),
 hx('hex',{'5-6':[220,60,320,180]},{f:'cV'}),tx('hd','Dominio',{'5-6':[380,84]},{c:'tt'}),
 b('uc','Casos de uso',{'5-6':[276,100,98,30]}),b('en','Entidades',{'5-6':[386,100,98,30]}),b('ag2','Agregados',{'5-6':[276,142,98,30]}),b('ev2','Eventos de dominio',{'5-6':[386,142,98,30]}),
 tx('sin','sin conocer la infraestructura',{5:[380,204]}),
 pt('p1',{'5-6':[220,150]}),pt('p2',{'5-6':[540,150]}),pt('p3',{5:[380,60]}),
 tx('q1','PedidoRepository',{5:[150,138]}),tx('q2','EventPublisher',{5:[612,138]}),tx('q3','PaymentGateway',{5:[380,44]}),tx('u1','puerto',{6:[220,172]}),tx('u2','puerto',{6:[540,172]}),
 n('aw',{5:null,6:'web'},{5:'?',6:'Navegador'},{6:'HTTP'},{5:[20,128,56,44,'bd'],6:[8,36,72,58,'n']}),
 n('ad',{5:null,6:'db'},{5:'?',6:'PostgreSQL'},{6:'relacional'},{5:[684,128,56,44,'bd'],6:[680,22,72,58,'n']}),
 ed('g1','aw','p1','r','l',{'5-6':1}),ed('g2','ad','p2','l','r',{'5-6':1}),
 n('am','mob','App móvil','HTTP',{6:[8,121]}),n('ag3','gw','Webhook','eventos',{6:[8,206]}),n('ao','doc','MongoDB','documentos',{6:[680,98]}),n('ar','cache','Redis','caché',{6:[680,174]}),n('aq','q','Cola','eventos',{6:[680,238]}),
 ed('g3','am','p1','r','l',{6:1}),ed('g4','ag3','p1','r','l',{6:1}),ed('g5','ao','p2','l','r',{6:1}),ed('g6','ar','p2','l','r',{6:1}),ed('g7','aq','p2','l','r',{6:1}),
 tx('ent','Entrada',{6:[44,22]}),tx('sal','Salida',{6:[716,14]}),
 tx('n6a','Interfaces que el dominio necesita: todavía sin tecnología asignada',{5:[380,274]}),tx('n6b','Los adaptadores traducen: las dependencias apuntan siempre hacia adentro',{6:[380,282]})];
const D2=[
 tx('t0','Qué habla con qué, y qué nunca',{0:[380,26]}),
 n('sU','srv','Usuarios',{1:'servicio',3:''},{0:[40,110],1:[60,30],2:[548,200]}),
 n('sP',{0:'srv',4:'lock',5:'srv'},{0:'Pedidos',3:'Servicio',4:'Política',5:'Servicio'},{1:'servicio',3:'',4:'rol + recurso',5:''},{0:[344,110],1:[344,30],2:[548,60],3:[610,110],4:[330,110,72,58,'k'],5:[650,110,72,58,'n']}),
 n('sG','srv','Pagos',{1:'servicio',3:''},{0:[648,110],1:[628,30],2:[548,130]}),
 ed('m1','sP','sU','l','r',{'0-1':1},{l:{0:'API con contrato',1:'se piden por API'}}),ed('m2','sP','sG','r','l',{0:1},{l:'evento'}),
 ed('mx','sU','sG','b','b',{0:1},{k:'no',x:1,cl:102}),tx('n0','Usuarios y Pagos no se hablan directo',{0:[380,282]}),
 n('dU','db','Datos','propios',{1:[60,170]},{f:'sU'}),n('dP','db','Datos','propios',{1:[344,170]},{f:'sP'}),n('dG','db','Datos','propios',{1:[628,170]},{f:'sG'}),
 ed('o1','sU','dU','b','t',{1:1}),ed('o2','sP','dP','b','t',{1:1}),ed('o3','sG','dG','b','t',{1:1}),ed('fx','sP','dU','l','r',{1:1},{k:'no',x:1,l:'sin acceso directo'}),
 r('zn',{2:[430,24,310,252,'bd']}),tx('zl','Red privada',{2:[585,46]}),tx('inet','Internet',{2:[44,22]}),
 n('wc','web',{2:'Navegador',3:'Persona'},'',{2:[8,60],3:[20,110]}),n('mc','mob','App móvil','',{2:[8,150]}),
 n('wf','cloud','WAF / CDN','filtro',{2:[146,111]}),n('gw','gw','Gateway',{2:'TLS · límites',3:'verifica firma'},{2:[260,111,72,58,'k'],3:[400,110,72,58,'k']}),
 ed('c1','wc','wf','r','l',{2:1}),ed('c2','mc','wf','r','l',{2:1}),ed('c3','wf','gw','r','l',{2:1}),
 ed('c4','gw','sP','r','l',{'2-3':1},{l:{3:'identidad verificada'}}),ed('c5','gw','sG','r','l',{2:1}),ed('c6','gw','sU','r','l',{2:1}),
 n('idp','lock','Identidad','proveedor IdP',{3:[210,110]}),
 ed('i1','wc','idp','r','l',{3:1},{po:10,l:'credenciales'}),ed('i2','idp','wc','l','r',{3:1},{po:-10}),b('tk','token',{3:[125,162,52,22]},{r:1}),
 ed('i3','wc','gw','t','t',{3:1},{cl:90,l:'cada pedido lleva el token'}),
 b('q1','GET /pedidos/12 · dueño',{4:[20,64,200,30]},{r:1}),b('q2','DELETE /pedidos/12 · cliente',{4:[20,184,200,30]},{r:1}),
 b('ok','permitido',{4:[560,64,170,30]},{r:1}),b('dn','denegado',{4:[560,184,170,30,'bd']},{r:1}),b('mp','mínimo privilegio',{4:[300,248,160,28]},{r:1}),
 ed('a1','q1','sP','r','l',{4:1}),ed('a2','q2','sP','r','l',{4:1}),ed('a3','sP','ok','r','l',{4:1}),ed('a4','sP','dn','r','l',{4:1},{k:'no',x:1}),
 n('rq','web','Pedido','',{5:[8,110]}),
 b('g1','Esquema',{5:[120,118,110,44]}),b('g2','Sanitización',{5:[252,118,110,44]}),b('g3','Límites',{5:[384,118,110,44]}),b('g4','Regla de dominio',{5:[516,118,110,44]}),
 ed('v0','rq','g1','r','l',{5:1}),ed('v1','g1','g2','r','l',{5:1}),ed('v2','g2','g3','r','l',{5:1}),ed('v3','g3','g4','r','l',{5:1}),ed('v4','g4','sP','r','l',{5:1}),
 ed('z1','g1',null,'b',null,{5:1},{l:'rechazo'}),ed('z2','g2',null,'b',null,{5:1},{l:'rechazo'}),ed('z3','g3',null,'b',null,{5:1},{l:'rechazo'}),ed('z4','g4',null,'b',null,{5:1},{l:'rechazo'}),
 n('au','doc','Auditoría','todo se registra',{5:[650,214]}),ed('v5','sP','au','b','t',{5:1})];
const D3=[
 n('ed','web','Editor','',{0:[20,100]}),n('es','test','ESLint','Prettier',{0:[170,100]}),n('hu','lock','Husky','pre-commit',{0:[320,100]}),
 n('cm','git',{0:'Commit',2:'Pull request'},{0:'convencional',2:''},{0:[470,100],2:[20,110]}),n('rm','cloud','Remoto','',{0:[620,100]}),
 ed('k1','ed','es','r','l',{0:1}),ed('k2','es','hu','r','l',{0:1}),ed('k3','hu','cm','r','l',{0:1}),ed('k4','cm','rm','r','l',{0:1}),
 b('fc','feat(pedidos): confirmar pedido',{0:[411,200,190,28]},{r:1}),ed('kz','hu',null,'b',null,{0:1},{l:'si falla, no hay commit'}),
 r('mi',{1:[20,40,360,180,'bd']}),r('ci',{1:[400,40,340,180,'bd']}),tx('tmi','Mi máquina · docker compose up',{1:[200,28]}),tx('tci','CI y entornos de prueba',{1:[570,28]}),
 n('x1','box','App','contenedor',{1:[32,110]},{f:'ed'}),n('x2','db','Postgres','local',{1:[112,110]},{f:'es'}),n('x3','cloud','LocalStack','AWS simulado',{1:[192,110]},{f:'hu'}),n('x4','lock','Tailscale','acceso remoto',{1:[272,110]},{f:'cm'}),
 n('y1','box','App','contenedor',{1:[414,110]},{f:'rm'}),n('y2','db','Postgres','local',{1:[494,110]},{f:'rm'}),n('y3','cloud','LocalStack','AWS simulado',{1:[574,110]},{f:'rm'}),n('y4','lock','Tailscale','acceso remoto',{1:[654,110]},{f:'rm'}),
 tx('eq','=',{1:[390,150]},{c:'eq'}),tx('n1','Mismas versiones, mismas variables, mismo resultado',{1:[380,258]}),
 r('cg',{2:[170,92,270,92,'bd']}),tx('tcg','CI',{2:[305,84]}),
 n('li','test','Lint','',{2:[182,104,76,68]}),n('ts','test','Tests','',{2:[266,104,76,68]}),n('bn','box','Build','',{2:[350,104,76,68]}),
 n('ck',{2:'test',3:'tag'},{2:'Checks',3:'semantic-release'},{2:'todos en verde',3:''},{2:[500,110,72,58,'k'],3:[320,120,110,58,'k']}),n('mg','git','Merge','a main',{2:[650,110]}),
 ed('p1','cm','cg','r','l',{2:1}),ed('p2','cg','ck','r','l',{2:1}),ed('p3','ck','mg','r','l',{2:1}),ed('pz','cg',null,'b',null,{2:1},{l:'si algo falla, no se integra'}),
 tx('tc','Commits convencionales',{3:[80,48]}),b('c1','fix → parche',{3:[20,64,130,30]},{r:1}),b('c2','feat → menor',{3:[20,126,130,30]},{r:1}),b('c3','feat! → mayor',{3:[20,188,130,30]},{r:1}),
 ed('r1','c1','ck','r','l',{3:1}),ed('r2','c2','ck','r','l',{3:1}),ed('r3','c3','ck','r','l',{3:1}),
 n('vr','tag','Versión','v2.1.0',{3:[560,70]},{f:'ck'}),n('cl','doc','Changelog','automático',{3:[560,170]},{f:'ck'}),ed('r4','ck','vr','r','l',{3:1}),ed('r5','ck','cl','r','l',{3:1}),
 r('aw',{4:[180,36,560,228,'bd']}),tx('taw','AWS',{4:[460,58]}),tx('tec','ECS',{4:[326,82]}),
 n('rg','box','Registro','imagen Docker',{4:[20,110]},{f:'vr'}),
 n('t1','box',{4:'Tarea',5:'ECS'},{5:'en producción'},{4:[210,92,72,54],5:[20,100,72,58]}),n('t2','box','Tarea','',{4:[296,92,72,54]}),n('t3','box','Tarea','',{4:[382,92,72,54]}),
 n('rd','db','RDS','Postgres',{4:[580,110]}),b('cf','configuración por entorno',{4:[240,200,200,28]},{r:1}),
 ed('d1','rg','t1','r','l',{4:1}),ed('d2','t3','rd','r','l',{4:1}),ed('d3','cf','t2','t','b',{4:1}),
 n('cw','eye','CloudWatch','métricas y logs',{5:[200,100]},{f:'t2'}),n('al','cache','Alarma','umbral superado',{5:[380,100]},{f:'t3'}),n('rb','git','Rollback','imagen anterior',{5:[560,100,72,58,'k']},{f:'rd'}),
 ed('e1','t1','cw','r','l',{5:1}),ed('e2','cw','al','r','l',{5:1}),ed('e3','al','rb','r','l',{5:1}),ed('e4','rb','t1','b','b',{5:1},{cl:110,l:'vuelve a la versión estable'})];
const ez=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,cl01=x=>Math.max(0,Math.min(1,x));
const SM={r:'b',l:'t',t:'l',b:'r'},DV={r:[1,0],l:[-1,0],t:[0,-1],b:[0,1]};
const ap=(q,sd)=>{const [x,y,w,h]=q;return sd==='l'?[x,y+h/2]:sd==='r'?[x+w,y+h/2]:sd==='t'?[x+w/2,y]:[x+w/2,y+h]};
function Scene(svg,def,rm){
  const els=def.slice().sort((a,c)=>ORD[a.t]-ORD[c.t]).map(d=>{
    d.s=d.s.map(v=>v&&v.length<4?[v[0],v[1],...(d.t==='n'?[72,58]:[0,0])]:v);
    const g=mk('g',{},svg),e={d,g,cur:[0,0,0,0],from:[0,0,0,0],tg:null,op:0,op0:0,to:0,dl:0,cl:'n',lab:'',sub:'',ic:null,rb:null};
    if(d.t==='n'){e.r=mk('rect',{rx:10},g);e.u=mk('use',{width:20,height:20},g);e.l=mk('text',{},g);e.s2=mk('text',{class:'t2'},g)}
    else if(d.t==='b'){e.r=mk('rect',{},g);e.l=mk('text',{},g)}
    else if(d.t==='r')e.r=mk('rect',{rx:14},g);
    else if(d.t==='h')e.r=mk('polygon',{},g);
    else if(d.t==='t')e.l=mk('text',{class:d.c===undefined?'t2':d.c},g);
    else if(d.t==='p')e.r=mk('circle',{class:'pt',r:4},g);
    else if(d.t==='i')e.u=mk('use',{},g);
    else if(d.t==='e'){e.r=mk('path',{},g);e.l=mk('text',{class:'t2'},g);e.x=mk('path',{class:'xx'},g)}
    g.style.opacity=0;return e});
  const by={};els.forEach(e=>by[e.d.id]=e);
  let PT=false,t0=0,raf=0,step=0;
  const lay=(t,q)=>{if(!PT||t==='h')return q;const [x,y,w,h]=q;if(t==='r')return [y,x*PS,h,w*PS];const cx=x+w/2,cy=y+h/2;return [cy-w/2,cx*PS-h/2,w,h]};
  const render=()=>{
    els.forEach(e=>{const d=e.d;if(d.t==='e')return;const op=e.op<.02?0:e.op;e.g.style.opacity=op;if(!op)return;
      const q=lay(d.t,e.cur);e.rb=q;const [x,y,w,h]=q;
      if(d.t==='n'){e.g.setAttribute('transform',`translate(${x} ${y})`);e.r.setAttribute('width',w);e.r.setAttribute('height',h);
        const hi=!!e.ic;e.u.style.display=hi?'':'none';e.u.setAttribute('x',w/2-10);e.u.setAttribute('y',7);
        e.l.setAttribute('x',w/2);e.l.setAttribute('y',hi?h-16:h/2+4);e.s2.setAttribute('x',w/2);e.s2.setAttribute('y',h-6);
        const k=cl01((w-40)/20);e.l.style.opacity=k;e.s2.style.opacity=k;e.u.style.opacity=k}
      else if(d.t==='b'){e.g.setAttribute('transform',`translate(${x} ${y})`);e.r.setAttribute('width',w);e.r.setAttribute('height',h);e.r.setAttribute('rx',d.r?h/2:8);
        e.l.setAttribute('x',w/2);e.l.setAttribute('y',h/2+3.5);e.l.style.opacity=cl01((w-30)/20)}
      else if(d.t==='r'){e.r.setAttribute('x',x);e.r.setAttribute('y',y);e.r.setAttribute('width',w);e.r.setAttribute('height',h)}
      else if(d.t==='h'){const [X,Y,W,H]=e.cur,pp=[[X+.25*W,Y],[X+.75*W,Y],[X+W,Y+H/2],[X+.75*W,Y+H],[X+.25*W,Y+H],[X,Y+H/2]].map(v=>PT?[v[1],v[0]*PS]:v);e.r.setAttribute('points',pp.map(v=>v.join(',')).join(' '))}
      else if(d.t==='t'){e.l.setAttribute('x',x+w/2);e.l.setAttribute('y',y+h/2)}
      else if(d.t==='p'){e.r.setAttribute('cx',x);e.r.setAttribute('cy',y)}
      else if(d.t==='i'){const z=d.z;e.u.setAttribute('x',x-z/2);e.u.setAttribute('y',y-z/2);e.u.setAttribute('width',z);e.u.setAttribute('height',z)}});
    els.forEach(e=>{const d=e.d;if(d.t!=='e')return;const A_=by[d.a],B_=d.b&&by[d.b];
      const op=Math.min(e.op,A_.op,B_?B_.op:1);e.g.style.opacity=op<.02?0:op;if(op<.02||!A_.rb||(B_&&!B_.rb))return;
      const sa=PT?SM[d.sa]:d.sa,sh=(pt,sd)=>{if(d.po){(sd==='l'||sd==='r')?pt[1]-=d.po:pt[0]-=d.po}return pt};
      const A=sh(ap(A_.rb,sa),sa);let B,sb,path;
      if(B_){sb=PT?SM[d.sb]:d.sb;B=sh(ap(B_.rb,sb),sb);const k=d.cl||Math.max(18,Math.hypot(B[0]-A[0],B[1]-A[1])*.4),a=DV[sa],c=DV[sb];
        path=`M${A} C${A[0]+a[0]*k},${A[1]+a[1]*k} ${B[0]+c[0]*k},${B[1]+c[1]*k} ${B}`}
      else{const a=DV[sa];B=[A[0]+a[0]*34,A[1]+a[1]*34];path=`M${A} L${B}`}
      e.r.setAttribute('d',path);e.r.setAttribute('class',d.k==='no'||!B_?'no':'f');if(d.k!=='no'&&B_)e.r.style.animationDuration=(1.4+(d.id.charCodeAt(0)%5)*.15)+'s';
      let M;if(B_){const k=d.cl||Math.max(18,Math.hypot(B[0]-A[0],B[1]-A[1])*.4),a=DV[sa],c=DV[sb],p1=[A[0]+a[0]*k,A[1]+a[1]*k],p2=[B[0]+c[0]*k,B[1]+c[1]*k];M=[0,1].map(i=>(A[i]+3*p1[i]+3*p2[i]+B[i])/8)}else M=B;
      if(d.x||!B_){e.x.style.display='';e.x.setAttribute('d',`M${B[0]-6} ${B[1]-6}l12 12M${B[0]+6} ${B[1]-6}l-12 12`);if(d.x&&B_)e.x.setAttribute('d',`M${M[0]-6} ${M[1]-6}l12 12M${M[0]+6} ${M[1]-6}l-12 12`)}else e.x.style.display='none';
      if(e.lab){const z=!B_,hor=Math.abs(B[0]-A[0])>=Math.abs(B[1]-A[1]);let lx,ly,an='middle';
        if(z){const a=DV[sa];lx=B[0]+a[0]*10;ly=B[1]+a[1]*14+(a[1]?3:3);an=a[0]?'start':'middle'}
        else if(hor){lx=M[0];ly=M[1]-9}else{lx=M[0]-9;ly=M[1]+3;an='end'}
        e.l.setAttribute('x',lx);e.l.setAttribute('y',ly);e.l.setAttribute('text-anchor',an)}})};
  const tick=t=>{const u=t-t0;let busy=u<1400;
    els.forEach(e=>{const d=e.d;
      if(e.tg){const p=ez(cl01(u/820));for(let i=0;i<4;i++)e.cur[i]=e.from[i]+(e.tg[i]-e.from[i])*p}
      const du=e.to?450:260,q=cl01((u-e.dl)/du);e.op=e.op0+(e.to-e.op0)*(1-Math.pow(1-q,2))});
    render();if(busy)raf=requestAnimationFrame(tick);else raf=0};
  const api={
    setP(v){PT=v;render()},
    focus(s){let a=1e9,z=-1e9;els.forEach(e=>{const d=e.d;if(d.t==='e'||d.t==='t')return;const q=d.s[s];if(!q)return;const o=d.s[s-1];if(o&&o[0]===q[0]&&o[2]===q[2])return;a=Math.min(a,q[0]);z=Math.max(z,q[0]+q[2])});return a<z?[a,z]:null},
    reset(){els.forEach(e=>{e.op=e.op0=e.to=0;e.tg=null;e.g.style.opacity=0})},
    go(s,inst){step=s;
      els.forEach((e,i)=>{const d=e.d;
        if(d.t==='e'){const on=!!d.s[s];e.op0=e.op;e.to=on?1:0;e.dl=on?.35:0;e.lab=RV(d.l,s)||'';e.l.textContent=e.lab;return}
        const tg=d.s[s];e.op0=e.op;
        if(tg){const q=tg.slice(0,4);e.cl=tg[4]||d.c||'n';
          if(e.op<.02){const f=d.f&&by[d.f];e.cur=f&&f.op>.02?f.cur.slice():q.slice();e.dl=.12+Math.min(.5,i*.01)}else e.dl=0;
          e.from=e.cur.slice();e.tg=q;e.to=1;
          if(d.t==='n'||d.t==='b'||d.t==='t'||d.t==='r'||d.t==='h'){if(e.r)e.r.setAttribute('class',d.t==='h'?'k':e.cl)}
          e.lab=RV(d.lab,s)||'';e.sub=RV(d.sub,s)||'';e.ic=RV(d.ic,s)||null;
          if(e.l)e.l.textContent=e.lab;if(e.s2)e.s2.textContent=e.sub;if(e.u&&d.t==='n'&&e.ic)e.u.setAttribute('href','#i-'+e.ic);if(e.u&&d.t==='i')e.u.setAttribute('href','#i-'+d.ic)}
        else{e.to=1&&0;e.dl=0;e.tg=null;e.from=e.cur.slice()}});
      cancelAnimationFrame(raf);
      if(inst||rm){els.forEach(e=>{if(e.tg)e.cur=e.tg.slice();e.op=e.to});render();raf=0}else{t0=performance.now();raf=requestAnimationFrame(tick)}}};
  return api}
// controlador de las diapositivas
{const stg=document.querySelector('.stage');if(!stg)return;
const CAP=[[["Entiendo el negocio", "Empiezo conversando con quienes conocen el negocio y mapeo los eventos que ocurren, siempre en pasado. De ahí sale un lenguaje compartido, el lenguaje ubicuo, que uso igual en las conversaciones y en el código."], ["Separo subdominios y contextos", "Agrupo ese lenguaje en contextos delimitados, cada uno con su propio modelo. El núcleo del negocio recibe la mayor inversión; lo genérico se simplifica o se compra hecho."], ["Modelo entidades y objetos de valor", "Una entidad se distingue por su identidad y evoluciona con el tiempo. Un objeto de valor se define por sus datos y es inmutable: Dinero, Dirección, Cantidad."], ["Agrupo en agregados", "El agregado es la unidad de consistencia: protege sus reglas, las invariantes, y solo se modifica a través de su raíz. Los demás agregados se referencian por id, nunca por dentro."], ["Expreso comandos, reglas y eventos", "Un comando pide un cambio, el agregado aplica las reglas y emite un evento de dominio. Lo que no pertenece a una sola entidad vive en un servicio de dominio."], ["Defino casos de uso y puertos", "Los casos de uso orquestan el dominio. Lo que necesitan del exterior lo declaro como interfaces, los puertos. Todavía no decidí qué tecnología los implementa."], ["Conecto con adaptadores", "Cada adaptador traduce entre el mundo exterior y un puerto: HTTP, bases de datos, caché, colas. Cambiar de base o de framework no toca las reglas del negocio. Es la arquitectura hexagonal, también llamada puertos y adaptadores."]], [["Dibujo el mapa de contextos", "Antes de escribir código defino qué contexto habla con cuál, por qué canal y con qué contrato. También dejo escrito lo que nunca debe pasar."], ["Cada servicio es dueño de sus datos", "Nadie lee la base de otro servicio. Los datos ajenos se piden por su API o se reciben como eventos."], ["Perímetro: WAF y gateway", "Todo el tráfico entra por un único punto: filtro de ataques comunes, TLS, límites de tasa y enrutado. Los servicios quedan en una red privada."], ["Identidad: autenticación", "La persona se identifica una sola vez ante un proveedor de identidad y recibe un token firmado y con vencimiento. El gateway lo verifica en cada pedido."], ["Autorización en cada servicio", "Que el token sea válido no alcanza: cada servicio decide qué puede hacer cada rol sobre cada recurso, con el mínimo privilegio necesario."], ["Validación defensiva en cada API", "Trato toda entrada como no confiable: valido el esquema, sanitizo, limito tamaños y verifico las reglas de dominio. Lo rechazado devuelve un error claro y queda registrado."]], [["Convenciones que se cumplen solas", "Linter y formateador corren antes de cada commit y los mensajes siguen Conventional Commits. Las reglas no dependen de la memoria de nadie."], ["El entorno viaja con el código", "Con Docker Compose levanto la app, PostgreSQL y servicios de AWS simulados con LocalStack, y accedo en forma remota y segura con Tailscale. El mismo entorno corre en mi máquina y en CI."], ["Cada cambio se prueba igual", "Cada pull request pasa por el mismo pipeline: lint, tests y build. Si algo falla, no se puede integrar."], ["Release semántico automático", "Los commits convencionales deciden la versión: fix sube el parche, feat sube la menor y un cambio incompatible sube la mayor. semantic-release publica versión y changelog sin pasos manuales."], ["Despliegue reproducible", "La misma imagen que pasó por CI es la que corre en AWS. Lo único que cambia entre entornos es la configuración."], ["Observo y puedo volver atrás", "CloudWatch junta métricas y logs. Si salta una alarma, puedo volver a la imagen anterior en lugar de arreglar bajo presión."]]],NM=["Dominio antes que framework", "Límites claros y seguridad", "Entornos predecibles"],DEF=[D1,D2,D3],rmq=matchMedia('(prefers-reduced-motion: reduce)').matches;
const vp=stg.querySelector('.vp'),caps=stg.querySelector('.caps'),dots=stg.querySelector('.dots'),cn=stg.querySelector('.cn'),nxt=stg.querySelector('.nxt'),pl=stg.querySelector('.pl2'),bar=stg.querySelector('.pg i'),pv=stg.querySelector('.pv'),nx=stg.querySelector('.nx');
const svgs=DEF.map(()=>mk('svg',{class:'dg',role:'img'},vp)),scenes=DEF.map((d,i)=>Scene(svgs[i],d,rmq));
const capEls=CAP.map(cs=>cs.map((c,i)=>{const e=document.createElement('div');e.className='cap';e.innerHTML='<b></b><span></span>';e.firstChild.textContent=(i+1)+'. '+c[0];e.lastChild.textContent=c[1];caps.append(e);return e}));
const pcs=[...document.querySelectorAll('.pc')],mq=matchMedia('(max-width:700px)');
svgs.forEach(s=>s.setAttribute('viewBox','0 0 760 300'));
let p=-1,n=0,ap=false,el=0,vis=false,started=false;
const dw=()=>n===CAP[p].length-1?9500:7000;
const sync=()=>{pl.textContent=ap?'Pausar':'Reproducir';pl.setAttribute('aria-pressed',ap)};
const show=(np,nn,inst)=>{nn=Math.max(0,Math.min(CAP[np].length-1,nn));const sw=np!==p;
  if(sw){svgs.forEach((s,j)=>s.classList.toggle('on',j===np));scenes[np].reset()}
  p=np;n=nn;stg.dataset.p=p;
  capEls.forEach((cs,j)=>cs.forEach((c,k)=>c.classList.toggle('on',j===p&&k===n)));
  scenes[p].go(n,inst||rmq);svgs[p].setAttribute('aria-label',CAP[p][n][0]);
  if(mq.matches){const f=scenes[p].focus(n);if(f)vp.scrollTo({left:Math.max(0,(f[0]+f[1])/2-vp.clientWidth/2),behavior:inst||rmq||sw?'auto':'smooth'})}
  if(dots.children.length!==CAP[p].length)dots.innerHTML=CAP[p].map((_,j)=>'<button aria-label="Paso '+(j+1)+'"></button>').join('');
  [...dots.children].forEach((d,j)=>d.setAttribute('aria-current',j===n));cn.textContent=(n+1)+' / '+CAP[p].length;
  pcs.forEach((b,j)=>b.setAttribute('aria-pressed',j===p));
  nxt.textContent=n===CAP[p].length-1&&p<2?'Sigue: '+NM[p+1]:(n===CAP[p].length-1&&p===2?'Sigue: '+NM[0]:'');
  pv.disabled=p===0&&n===0;nx.disabled=false;el=0;bar.style.width='0'};
const adv=d=>{const L=CAP[p].length;if(d>0){n<L-1?show(p,n+1):show((p+1)%3,0)}else{n>0?show(p,n-1):show((p+2)%3,CAP[(p+2)%3].length-1)}};
const man=f=>{ap=false;sync();f()};
pv.onclick=()=>man(()=>adv(-1));nx.onclick=()=>man(()=>adv(1));
dots.onclick=e=>{const b=e.target.closest('button');if(b)man(()=>show(p,[...dots.children].indexOf(b)))};
pcs.forEach((b,i)=>{b.onclick=()=>{if(p!==i)man(()=>show(i,0))}});
stg.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();man(()=>adv(1))}else if(e.key==='ArrowLeft'){e.preventDefault();man(()=>adv(-1))}});
let sx=null;caps.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')sx=e.clientX});
caps.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>50)man(()=>adv(e.clientX<sx?1:-1));sx=null});
pl.onclick=()=>{ap=!ap;sync();el=0};
let last=0;const loop=t=>{requestAnimationFrame(loop);const dt=Math.min(64,t-last||16);last=t;
  if(ap&&vis&&!document.hidden){el+=dt;bar.style.width=Math.min(100,el/dw()*100)+'%';if(el>=dw())adv(1)}else if(!ap)bar.style.width='0'};
requestAnimationFrame(loop);
show(0,0,true);stg.__show=show;
new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis&&!started){started=true;if(!rmq){scenes[p].reset();scenes[p].go(n);ap=true;sync()}}},{threshold:.5}).observe(stg);
}
})();
// Versión real de cada proyecto: la card se agranda y carga el sitio en un iframe
const bk=document.createElement('div');bk.id='bk';B.append(bk);let cur=null,cool=0;
const closeLv=()=>{if(!cur)return;cur.classList.remove('ex');cur.style.minHeight='';bk.classList.remove('on');cur=null;cool=performance.now()+700};
$$('.dm[data-live]').forEach(d=>{const u=d.dataset.live,b=$('.lv',d);if(!u)return;b.hidden=false;
  const open=()=>{if(cur===d)return;closeLv();d.style.minHeight=d.offsetHeight+'px';d.classList.add('ex');bk.classList.add('on');cur=d;
    if(!$('.fr',d)){const f=document.createElement('div');f.className='fr';f.innerHTML='<div class="ld" role="status"><i></i><span>Cargando la versión real…</span></div><a class="ol" target="_blank" rel="noopener">Abrir en una pestaña nueva</a>';
      const fr=document.createElement('iframe');fr.title='Versión real: '+$('h3',d).textContent;fr.src=u;fr.onload=()=>f.classList.add('rd');$('.ol',f).href=u;f.prepend(fr);setTimeout(()=>{f.classList.contains('rd')||f.classList.add('er')},9000);d.append(f)}};
  b.onmouseenter=()=>{performance.now()>cool&&open()};b.onclick=open;d.addEventListener('mouseleave',closeLv)});
bk.onclick=closeLv;addEventListener('keydown',e=>{if(e.key==='Escape')closeLv()});
// Línea viva sobre canvas: serpentea por la página y se pinta con el scroll
const cv=$('#cv'),cx=cv.getContext('2d'),dp=Math.min(2,devicePixelRatio||1);let P=[],ST2=1;
const sz=()=>{cv.width=innerWidth*dp;cv.height=innerHeight*dp};
function build(){
  const Wd=W.offsetWidth,Hh=W.offsetHeight,Lx=Wd<600?12:18,Rx=Wd-Math.max(14,Wd*.03),k=innerHeight*.6/(Rx-Lx),r=16,
  ys=SEC.slice(1).map(e=>e.querySelector('h2').offsetTop+1),wp=[[Lx,0]];let sd=0;
  ys.forEach(y=>{wp.push([sd?Rx:Lx,y]);sd^=1;wp.push([sd?Rx:Lx,y])});wp.push([sd?Rx:Lx,Hh-14]);
  P=[];let l=0,v=0;
  const add=(x,y)=>{const q=P[P.length-1];if(q){l+=Math.hypot(x-q.x,y-q.y);v+=Math.abs(y-q.y)+Math.abs(x-q.x)*k}P.push({x,y,l,v})},
  ln=(x,y)=>{const q=P[P.length-1],x0=q.x,y0=q.y,n=Math.max(1,Math.ceil(Math.hypot(x-x0,y-y0)/8));for(let i=1;i<=n;i++)add(x0+(x-x0)*i/n,y0+(y-y0)*i/n)};
  add(Lx,0);
  for(let i=1;i<wp.length;i++){const a=wp[i-1],b=wp[i],d=wp[i+1],dx=Math.sign(b[0]-a[0]),dy=Math.sign(b[1]-a[1]);
    if(d){const ex=b[0]-dx*r,ey=b[1]-dy*r,fx2=b[0]+Math.sign(d[0]-b[0])*r,fy=b[1]+Math.sign(d[1]-b[1])*r;
      ln(ex,ey);for(let j=1;j<=8;j++){const t=j/8,u=1-t;add(u*u*ex+2*u*t*b[0]+t*t*fx2,u*u*ey+2*u*t*b[1]+t*t*fy)}}
    else ln(b[0],b[1])}
  ST2=Math.max(1,P[P.length-1].v)}
let sp=-1,pt0=0;
function draw(t){
  const IH=innerHeight,y0=scrollY,p=Math.min(1,y0/Math.max(1,R.scrollHeight-IH));
  sp=sp<0||rm?p:sp+(p-sp)*(1-Math.exp(-Math.min(64,t-pt0||16)/110));pt0=t;
  cx.setTransform(dp,0,0,dp,0,0);cx.clearRect(0,0,innerWidth,IH);if(P.length<2)return;
  const S=sp*ST2;let lo=0,hi=P.length-1;while(lo<hi){const m=(lo+hi)>>1;P[m].v<S?lo=m+1:hi=m}
  const h=P[lo],hy=h.y-y0,vis=q=>q.y-y0>-40&&q.y-y0<IH+40;
  const path=(a,b)=>{cx.beginPath();let on=0;for(let i=a;i<=b;i++){const q=P[i];if(vis(q)){on?cx.lineTo(q.x,q.y-y0):cx.moveTo(q.x,q.y-y0);on=1}else on=0}};
  cx.lineJoin='round';cx.lineCap='round';
  let g=cx.createLinearGradient(0,hy,0,hy+560);g.addColorStop(0,'rgba(70,205,240,.30)');g.addColorStop(1,'rgba(70,205,240,.03)');
  path(lo,P.length-1);cx.strokeStyle=g;cx.lineWidth=1;cx.stroke();
  g=cx.createLinearGradient(0,hy-460,0,hy);g.addColorStop(0,'rgba(45,212,191,0)');g.addColorStop(.5,'rgba(34,211,238,.35)');g.addColorStop(.85,'rgba(110,231,183,.85)');g.addColorStop(1,'rgba(255,196,140,.95)');
  path(0,lo);cx.strokeStyle=g;cx.globalAlpha=.2;cx.lineWidth=5;cx.stroke();cx.globalAlpha=1;cx.lineWidth=1.6;cx.stroke();
  if(!rm){const at=l=>{let a=0,b=lo;while(a<b){const m=(a+b)>>1;P[m].l<l?a=m+1:b=m}return P[a]};
    for(let k=0;k<4;k++){const dist=(t*.16+k*190)%760,q=at(h.l-dist);if(!q||!vis(q))continue;cx.fillStyle=`rgba(190,255,245,${(.75*Math.exp(-dist/300)).toFixed(3)})`;cx.beginPath();cx.arc(q.x,q.y-y0,1.5,0,7);cx.fill()}}
  for(let i=lo+2;i<P.length;i+=2){const b=P[i],d=b.l-h.l;if(d>1200)break;if(!vis(b))continue;
    const u=(t%2600)-d/.55-((i*37)%11)*7,ev=u<0?0:u<110?1-Math.pow(1-u/110,2):Math.exp(-(u-110)/520),k2=Math.exp(-d/380);
    cx.fillStyle=`rgba(${lp(70,170,ev)|0},${lp(205,255,ev)|0},${lp(235,250,ev)|0},${(.03+.22*k2+.75*ev*Math.exp(-d/650)).toFixed(3)})`;
    cx.beginPath();cx.arc(b.x,b.y-y0,.8+.9*ev,0,7);cx.fill()}
  const pu=.5+.5*Math.sin(t*.004),gd=cx.createRadialGradient(h.x,hy,0,h.x,hy,24+8*pu);
  gd.addColorStop(0,'rgba(255,196,140,.55)');gd.addColorStop(.4,'rgba(255,196,140,.12)');gd.addColorStop(1,'rgba(255,196,140,0)');
  cx.fillStyle=gd;cx.beginPath();cx.arc(h.x,hy,32,0,7);cx.fill();
  cx.fillStyle='#ffd9b0';cx.beginPath();cx.arc(h.x,hy,2.6+.6*pu,0,7);cx.fill()}
const loop=t=>{draw(rm?0:t);requestAnimationFrame(loop)};
// Rail de secciones (visible solo cerca del borde)
const sb=$('.sb'),tt=$('.sbt');let dr=0,off=0;
const tks=SEC.map(s=>{const b=document.createElement('button');b.className='tk';b.innerHTML=`<span>${s.dataset.n}</span>`;b.setAttribute('aria-label','Ir a '+s.dataset.n);
  b.onclick=()=>scrollTo({top:s.offsetTop,behavior:rm?'auto':'smooth'});sb.append(b);return b});
const sbu=()=>{const IH=innerHeight,dh=Math.max(1,R.scrollHeight-IH),th=Math.max(36,IH*IH/R.scrollHeight);let k=0;
  tt.style.height=th+'px';tt.style.transform=`translateY(${scrollY/dh*(IH-th)}px)`;
  SEC.forEach((s,i)=>{tks[i].style.top=(Math.min(1,s.offsetTop/dh)*(IH-th)+th/2)+'px';if(s.offsetTop<=scrollY+IH*.4)k=i});
  tks.forEach((b,i)=>b.classList.toggle('on',i===k))};
let tk=0;addEventListener('scroll',()=>{tk||(tk=requestAnimationFrame(()=>{tk=0;sbu()}))},{passive:true});
const re=()=>{sz();build();sbu()};addEventListener('resize',re);re();
if('ResizeObserver' in window)new ResizeObserver(()=>{build();sbu()}).observe(W);
const mv=e=>{const th=tt.offsetHeight,dh=R.scrollHeight-innerHeight;scrollTo({top:(e.clientY-off)/(innerHeight-th)*dh,behavior:'instant'})};
sb.addEventListener('pointerdown',e=>{if(e.target.closest('.tk'))return;off=e.target===tt?e.clientY-tt.getBoundingClientRect().top:tt.offsetHeight/2;dr=1;sb.classList.add('dr');sb.setPointerCapture(e.pointerId);mv(e)});
sb.addEventListener('pointermove',e=>dr&&mv(e));
sb.addEventListener('pointerup',()=>{dr=0;sb.classList.remove('dr')});
// Scroll: nativo; al frenar se centra la sección. A la 3.ª acción seguida, saltos rápidos entre secciones
let an=0,tgt=-1,kt=0,kn=0,wt2=0,tx2=0,lastEv=0,acts=0,hopped=0,lock=0,yS=0;
const stops=()=>{const IH=innerHeight,mx=Math.max(0,R.scrollHeight-IH),o=[];SEC.forEach(s=>{const t=s.offsetTop,h=s.offsetHeight;if(h<=IH*1.04)o.push(t-(IH-h)/2);else{o.push(t);o.push(t+h-IH)}});
  return [...new Set(o.map(v=>Math.round(Math.max(0,Math.min(mx,v)))))].sort((a,b)=>a-b)};
const stop=()=>{cancelAnimationFrame(an);an=0;tgt=-1};
const glide=(to,D)=>{cancelAnimationFrame(an);const y0=scrollY,d=to-y0,t0=performance.now();if(rm||Math.abs(d)<2){scrollTo({top:to,behavior:'instant'});return}
  (function k(t){const p=Math.min(1,(t-t0)/D),e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;scrollTo({top:y0+d*e,behavior:'instant'});an=p<1?requestAnimationFrame(k):0})(t0)};
if(!rm&&matchMedia('(pointer:fine)').matches){
  const settle=()=>{if(an||!R.classList.contains('ok'))return;const y=scrollY,IH=innerHeight,st=stops(),mv=y-yS;let t=null;
    if(Math.abs(mv)>=IH*.22){const f=mv>0?st.find(v=>v>y+4):[...st].reverse().find(v=>v<y-4);if(f!==undefined&&Math.abs(f-y)<=IH*.7)t=f}
    if(t===null){let bd=1e9;st.forEach(v=>{const d=Math.abs(v-y);if(d<bd){bd=d;t=v}});if(bd>IH*.45)t=null}
    if(t!==null&&Math.abs(t-y)>3)glide(t,420)};
  addEventListener('wheel',e=>{if(!R.classList.contains('ok')||e.ctrlKey)return;const n=performance.now(),dy=e.deltaY*(e.deltaMode===1?40:e.deltaMode===2?innerHeight:1);
    if(n<lock){e.preventDefault();return}
    if(n-lastEv>140){acts=n-lastEv<900?acts+1:1;hopped=0;yS=scrollY}
    lastEv=n;stop();clearTimeout(wt2);
    if(acts>=3){e.preventDefault();if(!hopped&&dy){hopped=1;const st=stops(),y=scrollY,t=dy>0?st.find(v=>v>y+10):[...st].reverse().find(v=>v<y-10);if(t!==undefined){glide(t,300);lock=n+320}}return}
    wt2=setTimeout(settle,150)},{passive:false});
  addEventListener('pointerdown',stop)}
addEventListener('keydown',e=>{
  const d={ArrowDown:1,PageDown:1,ArrowUp:-1,PageUp:-1}[e.key];
  if(!d||!R.classList.contains('ok')||e.altKey||e.ctrlKey||e.metaKey)return;
  e.preventDefault();const n=performance.now();if(e.repeat&&n-kt<140)return;kn=n-kt<650?kn+1:1;kt=n;
  const st=stops();if(tgt<0){const y=scrollY;let k=0,bd=1e9;st.forEach((v,i)=>{const dd=Math.abs(v-y);if(dd<bd){bd=dd;k=i}});tgt=k}
  tgt=Math.max(0,Math.min(st.length-1,tgt+d));glide(st[tgt],kn>=3?260:kn===2?380:620);
  clearTimeout(tx2);tx2=setTimeout(()=>tgt=-1,900)});
function show(){R.classList.add('ok');B.classList.add('on');build();sbu();requestAnimationFrame(loop);
  if('IntersectionObserver' in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -8% 0px'});SEC.forEach(s=>o.observe(s))}
  else SEC.forEach(s=>s.classList.add('in'))}
if(rm){[dot,amb].forEach(e=>e.remove());B.classList.add('lit');hd.classList.add('on');c.classList.remove('h');show();return}
// Tipeo con fade por carácter
const mk=()=>{const e=document.createElement('i');e.className='cur h';return e};
function prep(el,cur,d){const ch=[],ns=[],w=document.createTreeWalker(el,4);
  while(w.nextNode())if(w.currentNode.data.trim())ns.push(w.currentNode);
  ns.forEach(n=>{const f=document.createDocumentFragment();
    for(const k of n.data){const s=document.createElement('span');s.className='ch';s.textContent=k;f.append(s);ch.push(s)}
    n.replaceWith(f)});
  ch[0].before(cur);return{cur,ch,i:0,d}}
const S=[prep($('#t1'),c,0),prep($('#h1'),mk(),350),prep($('#sub'),mk(),1100)];
function go(L,cb){let last=performance.now();
  (function f(t){const dt=t-last;last=t;let a=0;
    for(const s of L){
      if(s.d>0){s.d-=dt;a++;continue}
      if(!s.on){s.on=1;s.cur.classList.remove('h');s.cur.classList.add('run')}
      if(s.i<s.ch.length){a++;let k=(2+(Math.random()*3|0))*Math.max(1,Math.round(dt/16));
        while(k--&&s.i<s.ch.length){const e=s.ch[s.i++];e.classList.add('v');e.after(s.cur)}}
      else if(!s.end){s.end=1;s.cur.classList.remove('run');if(s.cur!==c)setTimeout(()=>s.cur.classList.add('h'),1200)}}
    if(a&&!sk)requestAnimationFrame(f);else if(!sk)cb()})(last)}
// Gota de luz: sin piso visible, con resorte que la hace oscilar como un fluido
const H=innerHeight,W2=innerWidth,gr=H*.62,g=Math.max(2900,H*4.3),V0=Math.sqrt(2*g*gr),ZT=[.72,.84,.93,1],
col=w=>[255,lp(255,196,w)|0,lp(255,140,w)|0].join(',');
let ac;try{ac=new(window.AudioContext||window.webkitAudioContext)();ac.resume&&ac.resume().catch(()=>{})}catch(e){}
function snd(v,x){if(!ac||ac.state!=='running')return;const o=ac.createOscillator(),gn=ac.createGain(),t=ac.currentTime,k=Math.min(1,v/V0),
  pn=ac.createStereoPanner?ac.createStereoPanner():null;
  o.frequency.setValueAtTime(130+60*k,t);o.frequency.exponentialRampToValueAtTime(40,t+.22);
  gn.gain.setValueAtTime(.04+.3*k,t);gn.gain.exponentialRampToValueAtTime(.001,t+.35);
  o.connect(gn);if(pn){pn.pan.value=Math.max(-1,Math.min(1,(x-W2/2)/(W2/2)));gn.connect(pn);pn.connect(ac.destination)}else gn.connect(ac.destination);
  o.start(t);o.stop(t+.4)}
// Agua: charco de luz, columna de reflejo con brillos y anillos en perspectiva
const RP=[],WV=document.createElement('canvas'),WX=WV.getContext('2d');
WV.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none';WV.width=W2*dp;WV.height=H*dp;B.append(WV);
const GB=document.createElement('canvas');GB.width=GB.height=128;const GX=GB.getContext('2d');
function wr(t,x,hh,fd,bc){
  WX.setTransform(dp,0,0,dp,0,0);WX.clearRect(0,0,W2,H);WX.globalCompositeOperation='lighter';WX.lineCap='butt';
  const pr=Math.exp(-hh/(H*.2))*fd;
  if(pr>.01){WX.save();WX.translate(x,gr);WX.scale(1,.16);const R2=90+170*pr,g2=WX.createRadialGradient(0,0,0,0,0,R2);g2.addColorStop(0,`rgba(${bc},${.2*pr})`);g2.addColorStop(1,`rgba(${bc},0)`);WX.fillStyle=g2;WX.beginPath();WX.arc(0,0,R2,0,7);WX.fill();WX.restore()}
  let E=0;
  for(let i=RP.length-1;i>=0;i--){const o=RP[i],s=(t-o.t)/1000;if(s>3.2){RP.splice(i,1);continue}
    E=Math.max(E,o.a*Math.exp(-s*1.6)*Math.exp(-Math.abs(o.x-x)/220));
    if(s<.3){WX.fillStyle=`rgba(${o.c},${o.a*(1-s/.3)*.5})`;WX.beginPath();WX.ellipse(o.x,gr,10+40*s,3+10*s,0,0,7);WX.fill()}
    const R0=360*(1-Math.exp(-s*2.2))*(.5+.5*o.a);
    for(let j=0;j<4;j++){const r=R0*(1-j*.11);if(r<3)continue;
      const am=o.a*Math.exp(-s*1.5)*(1-j*.24)*Math.min(1,r/12)/(1+r/70);if(am<.004)continue;
      const cc=j>1?'45,212,191':o.c,ry=r*.14;
      for(let k=0;k<40;k++){const a0=k/40*6.2832,a1=(k+1)/40*6.2832,f=.2+.8*Math.pow(Math.max(0,Math.sin((a0+a1)/2)),1.4);
        WX.strokeStyle=`rgba(${cc},${(am*1.6*f).toFixed(3)})`;WX.lineWidth=(1.1+r/260-j*.15)*(.6+.4*f);
        WX.beginPath();WX.moveTo(o.x+r*Math.cos(a0),gr+ry*Math.sin(a0));WX.lineTo(o.x+r*Math.cos(a1),gr+ry*Math.sin(a1));WX.stroke()}}}
  const rf=Math.exp(-hh/(H*.13))*fd;
  if(rf>.012){GX.clearRect(0,0,128,128);const gg=GX.createRadialGradient(64,64,0,64,64,64);
    gg.addColorStop(0,`rgba(${bc},1)`);gg.addColorStop(.12,`rgba(${bc},.8)`);gg.addColorStop(.4,`rgba(${bc},.16)`);gg.addColorStop(1,`rgba(${bc},0)`);
    GX.fillStyle=gg;GX.fillRect(0,0,128,128);
    const cy=gr+hh,sy=1.35;WX.save();WX.beginPath();WX.rect(0,gr,W2,H-gr);WX.clip();WX.globalAlpha=Math.min(1,rf*.9);
    for(let y=0;y<128;y+=2){const dest=cy+(62-y)*sy,dd=Math.max(0,dest-gr),dx=Math.sin(dd*.28-t*.011)*(1.2+9*E)*Math.min(1,dd/25);
      WX.drawImage(GB,0,y,128,2,x-64+dx,dest,128,2*sy+.5)}
    WX.restore()}
  WX.globalCompositeOperation='source-over'}
let x=W2/2,y=-20,vy=0,vx=10,n=0,q=0,qv=0,ph=0,last=0,wm=0,wt=0,z=.72,t0,fx0,cy0,bs0,r,tw;
function f(t){
  if(sk)return;if(!last)last=t;const dt=Math.min(.033,(t-last)/1000);last=t;
  qv+=(-260*q-7*qv)*dt;q+=qv*dt;wm+=(wt-wm)*Math.min(1,dt*5);z+=(ZT[n]-z)*Math.min(1,dt*4);
  const bc=col(wm),bs=14*z;let w=bs,h=bs,rad=bs/2,sh=1,p=0,v=Math.abs(vy);
  if(!ph){vy+=g*dt;y+=vy*dt;x+=vx*dt;
    if(y>=gr){const vi=vy;y=gr;n++;q=Math.min(.75,vi/V0*.8+.15);qv=0;wt=n/3;snd(vi,x);RP.push({x,t,a:Math.min(1,vi/V0),c:bc});
      if(n==3){ph=1;wt=1;fx0=x;cy0=y-bs/2;bs0=bs;t0=t;r=c.getBoundingClientRect();tw=Math.max(2,parseFloat(getComputedStyle(c).fontSize)*.1)}
      else vy=-vi*.56}}
  else{p=Math.min(1,(t-t0)/900);const e=1-Math.pow(1-p,3);
    x=lp(fx0,r.left+1+tw/2,e);w=lp(bs0,tw,e);h=lp(bs0,r.height,e);rad=lp(bs0/2,1,e);sh=1-e;
    y=lp(cy0,r.top+r.height/2,e)+h/2;v=(1-p)*(1-p)*V0}
  const st=Math.min(.3,v/V0*.3),sx=(1+q*.5)*(1-st*.3),sy=(1-q*.45)*(1+st),bl=Math.min(2,v/V0*2.2);
  dot.style.cssText=`width:${w}px;height:${h}px;border-radius:${rad}px;background:rgb(${bc});box-shadow:0 0 ${26*sh}px ${6*sh}px rgba(${bc},.5);filter:blur(${bl}px);transform:translate(${x}px,${y}px) translate(-50%,-100%) scale(${sx},${sy})`;
  amb.style.transform=`translate(${x}px,${y-h/2}px)`;amb.style.opacity=Math.min(1,.35+.65*wm+Math.abs(q)*.3);
  R.style.setProperty('--lc',bc);wr(t,x,Math.max(0,gr-y+h/2),1,bc);
  if(ph&&p>=1){dot.remove();amb.style.transition='opacity 1.5s';amb.style.opacity=0;setTimeout(()=>amb.remove(),1600);
    B.classList.add('lit');hd.classList.add('on');go(S,show);requestAnimationFrame(function k(t){wr(t,-999,1e4,0,bc);RP.length?requestAnimationFrame(k):WV.remove()});return}
  requestAnimationFrame(f)}
let sk=0;const skip=()=>{if(sk)return;sk=1;removeEventListener('pointerdown',skip);removeEventListener('keydown',skip);dot.remove();amb.remove();WV.remove();B.classList.add('lit');hd.classList.add('on');S.forEach(s=>{s.ch.forEach(e=>e.classList.add('v'));if(s.cur!==c)s.cur.classList.add('h')});S[0].ch[S[0].ch.length-1].after(c);c.classList.remove('h','run');show()};
addEventListener('pointerdown',skip);addEventListener('keydown',skip);
setTimeout(()=>requestAnimationFrame(f),900);
})();
}
