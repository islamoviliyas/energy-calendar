/* Защита от передачи доступа: один аккаунт — одно активное устройство */
(function(){
  var TXT={
    ru:{
      kT:'⚠ Вход выполнен с другого устройства',
      kP:'В ваш аккаунт только что выполнен вход с другого устройства. Эта сессия завершена.',
      kW:'Если логин и пароль передали третьему лицу — система фиксирует это как нарушение. После 3 нарушений аккаунт блокируется навсегда: без возврата доступа, без возврата оплаты и без права повторного участия в сервисе.',
      kN:'Это были вы (сменили телефон или компьютер)? Просто войдите заново — между сменой устройств должно пройти 30 минут неактивности.',
      wT:'⚠ ПРЕДУПРЕЖДЕНИЕ О НАРУШЕНИИ',
      wP:'Система зафиксировала вход в этот аккаунт, пока он был активен на другом устройстве.',
      wC:function(n,l){return 'Нарушение '+n+' из 3. Осталось попыток до блокировки: '+l+'.';},
      wW:'Передача логина и пароля другим лицам запрещена. При следующем нарушении аккаунт будет заблокирован навсегда — без права повторного участия в сервисе, без возврата оплаты и без восстановления клиентских данных.',
      bT:'⛔ Аккаунт заблокирован',
      bP:'Система зафиксировала многократный одновременный вход с разных устройств. Это нарушение правил использования: доступ передавался третьим лицам.',
      bW:'Аккаунт заблокирован без права повторного участия в сервисе. Оплата не возвращается. Решение зафиксировано в журнале входов.',
      ok:'Понятно',relog:'Войти заново',
      rules:'Правило: один аккаунт — одно устройство. Работать с телефона и компьютера по очереди можно, если между ними 30 минут неактивности. Одновременный вход с разных устройств = нарушение. 3 нарушения = блокировка навсегда.'
    },
    en:{
      kT:'⚠ Signed in from another device',
      kP:'Your account was just signed in from another device. This session has been ended.',
      kW:'If your login and password were shared with a third party, the system records it as a violation. After 3 violations the account is blocked permanently: no access, no refund and no right to rejoin the service.',
      kN:'Was it you (new phone or computer)? Just sign in again — 30 minutes of inactivity must pass between switching devices.',
      wT:'⚠ VIOLATION WARNING',
      wP:'The system recorded a sign-in to this account while it was active on another device.',
      wC:function(n,l){return 'Violation '+n+' of 3. Attempts left before blocking: '+l+'.';},
      wW:'Sharing your login and password is prohibited. On the next violation the account will be blocked permanently — no right to rejoin, no refund and no recovery of client data.',
      bT:'⛔ Account blocked',
      bP:'The system recorded repeated simultaneous sign-ins from different devices. This violates the terms of use: access was shared with third parties.',
      bW:'The account is blocked with no right to rejoin the service. No refund. The decision is recorded in the sign-in log.',
      ok:'Understood',relog:'Sign in again',
      rules:'Rule: one account — one device. You may switch between phone and computer if 30 minutes of inactivity pass in between. Simultaneous sign-in from different devices is a violation. 3 violations = permanent block.'
    },
    kz:{
      kT:'⚠ Басқа құрылғыдан кіру орындалды',
      kP:'Аккаунтыңызға жаңа ғана басқа құрылғыдан кірілді. Бұл сеанс аяқталды.',
      kW:'Егер логин мен құпиясөз үшінші тұлғаға берілсе — жүйе мұны бұзушылық ретінде тіркейді. 3 бұзушылықтан кейін аккаунт мәңгілікке бұғатталады: қолжетімділіксіз, ақшаны қайтарусыз және қызметке қайта қатысу құқығынсыз.',
      kN:'Бұл сіз болдыңыз ба (телефон немесе компьютер ауыстырдыңыз)? Қайта кіріңіз — құрылғы ауыстыру арасында 30 минут белсенділіксіз уақыт өтуі керек.',
      wT:'⚠ БҰЗУШЫЛЫҚ ТУРАЛЫ ЕСКЕРТУ',
      wP:'Аккаунт басқа құрылғыда белсенді болған кезде осы аккаунтқа кіру тіркелді.',
      wC:function(n,l){return 'Бұзушылық '+n+' / 3. Бұғаттауға дейін қалған мүмкіндік: '+l+'.';},
      wW:'Логин мен құпиясөзді басқаларға беруге тыйым салынады. Келесі бұзушылықта аккаунт мәңгілікке бұғатталады — қайта қатысу құқығынсыз, ақшаны қайтарусыз және клиент деректерін қалпына келтірусіз.',
      bT:'⛔ Аккаунт бұғатталды',
      bP:'Жүйе әртүрлі құрылғылардан бір мезгілде бірнеше рет кіруді тіркеді. Бұл пайдалану ережесін бұзу: қолжетімділік үшінші тұлғаларға берілген.',
      bW:'Аккаунт қызметке қайта қатысу құқығынсыз бұғатталды. Төлем қайтарылмайды. Шешім кіру журналында тіркелген.',
      ok:'Түсінікті',relog:'Қайта кіру',
      rules:'Ереже: бір аккаунт — бір құрылғы. Телефон мен компьютерді кезекпен қолдануға болады, егер арасында 30 минут белсенділіксіз уақыт өтсе. Әртүрлі құрылғыдан бір мезгілде кіру — бұзушылық. 3 бұзушылық = мәңгілік бұғат.'
    }
  };
  function lang(){var l='ru';try{l=localStorage.getItem('lang')||'ru';}catch(e){}return TXT[l]?l:'ru';}
  function T(){return TXT[lang()];}
  function devId(){
    var k='dg_id',v=null;
    try{v=localStorage.getItem(k);}catch(e){}
    if(!v||v.length<16){
      var a=new Uint8Array(16);
      try{crypto.getRandomValues(a);}catch(e){for(var i=0;i<16;i++)a[i]=Math.floor(Math.random()*256);}
      v='';for(var j=0;j<a.length;j++)v+=('0'+a[j].toString(16)).slice(-2);
      try{localStorage.setItem(k,v);}catch(e){}
    }
    return v;
  }
  function esc(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  function overlay(kind,info,onClose){
    var t=T(),old=document.getElementById('dg-ov');if(old)old.remove();
    var red=kind!=='k';
    var title=kind==='b'?t.bT:kind==='w'?t.wT:t.kT;
    var body='<p>'+esc(kind==='b'?t.bP:kind==='w'?t.wP:t.kP)+'</p>';
    if(kind==='w'&&info)body+='<p class="dg-c">'+esc(t.wC(info.violations,info.left))+'</p>';
    body+='<p class="dg-w">'+esc(kind==='b'?t.bW:kind==='w'?t.wW:t.kW)+'</p>';
    if(kind==='k')body+='<p class="dg-n">'+esc(t.kN)+'</p>';
    var btn=kind==='b'?'':'<button id="dg-ok">'+esc(kind==='k'?t.relog:t.ok)+'</button>';
    var d=document.createElement('div');d.id='dg-ov';
    d.innerHTML='<style>#dg-ov{position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.94);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Outfit,Noto Sans,sans-serif}#dg-ov .dg-b{max-width:480px;width:100%;background:#0F0E09;border:2px solid '+(red?'#c0392b':'#C4922A')+';border-radius:16px;padding:28px 24px;color:#f1e7cf;text-align:center;box-shadow:0 0 60px '+(red?'rgba(192,57,43,.35)':'rgba(196,146,42,.25)')+'}#dg-ov h2{margin:0 0 14px;font-size:22px;color:'+(red?'#ff6b5b':'#E8B84B')+'}#dg-ov p{margin:0 0 12px;line-height:1.55;font-size:15px}#dg-ov .dg-c{font-weight:700;color:#ff6b5b;font-size:17px}#dg-ov .dg-w{color:#f5d98a}#dg-ov .dg-n{font-size:13px;opacity:.75}#dg-ov button{margin-top:8px;background:linear-gradient(135deg,#C4922A,#E8B84B);border:0;border-radius:10px;padding:12px 28px;font-size:15px;font-weight:600;color:#1a1200;cursor:pointer}</style><div class="dg-b" role="alertdialog"><h2>'+esc(title)+'</h2>'+body+btn+'</div>';
    document.body.appendChild(d);
    var b=document.getElementById('dg-ok');
    if(b)b.onclick=function(){d.remove();if(onClose)onClose();};
  }
  async function call(sb,claim){
    try{
      var r=await sb.rpc('device_heartbeat',{p_device:devId(),p_ua:navigator.userAgent||'',p_claim:!!claim});
      if(r.error||!r.data)return{status:'error'};
      return r.data;
    }catch(e){return{status:'error'};}
  }
  async function kickOut(sb,kind){
    try{await sb.auth.signOut();}catch(e){}
    overlay(kind,null,function(){location.href='login.html';});
  }
  var timer=null;
  window.DeviceGuard={
    rules:function(){return T().rules;},
    /* при входе: возвращает {status} ; blocked -> уже разлогинил */
    claim:async function(sb){
      var r=await call(sb,true);
      if(r.status==='blocked'){try{await sb.auth.signOut();}catch(e){}}
      return r;
    },
    showWarning:function(info,cb){overlay('w',info,cb);},
    showBlocked:function(){overlay('b');},
    watch:function(sb){
      async function tick(){
        var r=await call(sb,false);
        if(r.status==='kicked'){clearInterval(timer);kickOut(sb,'k');}
        else if(r.status==='blocked'){clearInterval(timer);kickOut(sb,'b');}
      }
      tick();
      timer=setInterval(tick,60000);
      document.addEventListener('visibilitychange',function(){if(!document.hidden)tick();});
    }
  };
})();
