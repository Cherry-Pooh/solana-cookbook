import{_ as o,r as t,o as d,c as l,a as e,b as s,w as a,F as c,d as n,e as h}from"./app.f70ed2c6.js";var u="/assets/account-matrix.c3a79f80.png",m="/assets/pda-curve.7c0b9307.png";const g={},p=e("h1",{id:"programm-eigene-adressen-pdas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#programm-eigene-adressen-pdas","aria-hidden":"true"},"#"),n(" Programm-eigene-Adressen (PDAs)")],-1),_=n("Program-eigene-Adressen (PDAs) sind das zu Hause von Accounts die dazu designed sind, um von einem bestimmten Programm kontrolliert bzw. gesteuert zu werden. Mit PDAs k\xF6nnen Programme programmgesteuert f\xFCr bestimmte Adressen signieren, ohne einen privaten Schl\xFCssel zu ben\xF6tigen. PDAs dienen als Grundlage f\xFCr "),f={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},b=n("Cross-Program Invocation"),A=n(", wodurch Solana-Apps miteinander kombinierbar sind."),v=e("h2",{id:"fakten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fakten","aria-hidden":"true"},"#"),n(" Fakten")],-1),P={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"Fact Sheet",-1),w=e("li",null,"PDAs sind 32-Byte-Strings, die wie \xF6ffentliche Schl\xFCssel aussehen, aber keine entsprechenden privaten Schl\xFCssel haben",-1),D=e("li",null,[e("code",null,"findProgramAddress"),n(" wird einen PDA deterministisch aus einer programId und Seeds (Sammlung von Bytes) ableiten")],-1),z=e("li",null,"Ein Bump (ein Byte) wird verwendet, um einen potenziellen PDA von der elliptischen Kurve ed25519 zu schieben",-1),S=n("Programme k\xF6nnen f\xFCr ihre PDAs signieren, indem sie die Seeds und Bump bereitstellen "),x={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts",target:"_blank",rel:"noopener noreferrer"},B=n("invoke_signed"),E=e("li",null,"Ein PDA kann nur von dem Programm signiert werden, von dem es abgeleitet wurde",-1),K=n("PDAs erm\xF6glichen es Programmen nicht nur, verschiedene Anweisungen zu signieren, sondern bieten auch eine Hashmap-\xE4hnliche Schnittstelle um "),y=n("Accounts zu indexieren"),I=h('<h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive" aria-hidden="true">#</a> Deep Dive</h2><p>PDAs sind ein wesentlicher Baustein f\xFCr die Entwicklung von Programmen auf Solana. Mit PDAs k\xF6nnen Programme f\xFCr Accounts signieren und gleichzeitig sicherstellen, dass kein externer Benutzer auch eine g\xFCltige Signatur f\xFCr dasselbe Konto erstellen kann. Zus\xE4tzlich zum Signieren von Accounts k\xF6nnen bestimmte Programme auch Accounts \xE4ndern, die auf ihren PDAs gef\xFChrt werden.</p><p><img src="'+u+'" alt="Accounts matrix"></p><p><small style="text-align:center;display:block;">Bildausschnit von <a href="https://twitter.com/pencilflip">Pencilflip</a></small></p><h3 id="generating-pdas" tabindex="-1"><a class="header-anchor" href="#generating-pdas" aria-hidden="true">#</a> Generating PDAs</h3><p>Um das Konzept hinter PDAs zu verstehen, kann es hilfreich sein zu bedenken, dass PDAs nicht technisch erstellt, sondern eher gefunden werden. PDAs werden aus einer Kombination von Seeds (z. B. der Zeichenfolge \u201Evote_account\u201C\u201C) und einer Programm-ID generiert. Diese Kombination aus Seeds und Programm-ID wird dann durch eine sha256-Hash-Funktion geleitet, um zu sehen, ob sie einen \xF6ffentlichen Schl\xFCssel generieren, der auf der elliptischen Kurve ed25519 liegt.</p><p><img src="'+m+'" alt="PDA on the ellipitic curve"></p><h3 id="interaktion-mit-pdas" tabindex="-1"><a class="header-anchor" href="#interaktion-mit-pdas" aria-hidden="true">#</a> Interaktion mit PDAs</h3>',8),L=n("Wenn ein PDA generiert wird, gibt "),F=e("code",null,"findProgramAddress",-1),N=n(" sowohl die Adresse als auch den Bump zur\xFCck, der verwendet wird, um die Adresse aus der elliptischen Kurve zu entfernen. Mit diesem Bump bewaffnet, kann ein Programm dann f\xFCr jede Anweisung, die seinen PDA erfordert, "),V=n("signieren"),C=n('. Um zu signieren, sollten Programme die Anweisung, die Liste der Accounts und die Seeds und Bump, die verwendet werden, um den PDA abzuleiten, an \u201Einvoke_signed\u201C \xFCbergeben. Zus\xE4tzlich zum Signieren von Anweisungen m\xFCssen PDAs auch f\xFCr ihre eigene Erstellung \xFCber "invoke_signed" signieren.'),H=n("Beim Bauen mit PDAs ist es \xFCblich, "),M={href:"https://github.com/solana-labs/solana-program-library/blob/78e29e9238e555967b9125799d7d420d7d12b959/token-swap/program/src/state.rs#L100",target:"_blank",rel:"noopener noreferrer"},Z=n("den Bump Seed in den Kontodaten selbst zu speichern"),q=n(". Auf diese Weise k\xF6nnen Entwickler einen PDA einfach validieren, ohne den Bump als Anweisungsargument \xFCbergeben zu m\xFCssen.having to pass in the bump as an instruction argument."),G=e("h2",{id:"andere-quellen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#andere-quellen","aria-hidden":"true"},"#"),n(" Andere Quellen")],-1),R={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses",target:"_blank",rel:"noopener noreferrer"},U=n("Offizielle Dokumentation"),W={href:"https://www.brianfriel.xyz/understanding-program-derived-addresses/",target:"_blank",rel:"noopener noreferrer"},j=n("Programmeigene Accounts verstehen");function O(Q,T){const r=t("ExternalLinkIcon"),i=t("RouterLink");return d(),l(c,null,[p,e("p",null,[_,e("a",f,[b,s(r)]),A]),v,e("div",P,[k,e("ul",null,[w,D,z,e("li",null,[S,e("a",x,[B,s(r)])]),E,e("li",null,[K,s(i,{to:"/de/guides/account-maps.html"},{default:a(()=>[y]),_:1})])])]),I,e("p",null,[L,F,N,s(i,{to:"/de/references/accounts.html#sign-with-a-pda"},{default:a(()=>[V]),_:1}),C]),e("p",null,[H,e("a",M,[Z,s(r)]),q]),G,e("ul",null,[e("li",null,[e("a",R,[U,s(r)])]),e("li",null,[e("a",W,[j,s(r)])])])],64)}var X=o(g,[["render",O]]);export{X as default};
