import{_ as r,r as n,o as a,c as i,a as e,b as o,F as l,d as t,e as d}from"./app.c241040b.js";var p="/assets/account_example.5b70d95a.jpeg";const c={},u=e("h1",{id:"comptes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comptes","aria-hidden":"true"},"#"),t(" Comptes")],-1),m=e("p",null,"Les comptes dans Solana sont utilis\xE9s pour stocker des \xE9tats. Ils constituent un \xE9l\xE9ment essentiel pour le d\xE9veloppement sur Solana.",-1),h=e("h2",{id:"faits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faits","aria-hidden":"true"},"#"),t(" Faits")],-1),_={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"Fiche d'Information",-1),g=e("li",null,"Les comptes sont utilis\xE9s pour stocker des donn\xE9es",-1),x=e("li",null,"Chaque compte a une adresse unique",-1),b=e("li",null,"Les comptes ont une taille maximale de 10MB (10 Mega Bytes)",-1),v=e("li",null,"Les comptes des adresses d\xE9riv\xE9es d'un programme (PDA) ont une taille maximale de 10KB (10 Kilo Bytes)",-1),L=e("li",null,"Les comptes des adresses d\xE9riv\xE9es d'un programme (PDA) peuvent \xEAtre utilis\xE9s pour signer au nom d'un programme",-1),k=t("La taille des comptes est fix\xE9e au moment de leur cr\xE9ation, mais elle peut \xEAtre ajust\xE9e en utilisant la fonctionnalit\xE9 "),q={href:"https://solanacookbook.com/references/programs.html#how-to-change-account-size",target:"_blank",rel:"noopener noreferrer"},y=t("realloc"),S=e("li",null,"Le stockage des donn\xE9es sur un compte est pay\xE9 par une rente",-1),z=e("li",null,"Le propri\xE9taire par d\xE9faut d'un compte est le programme syst\xE8me (System Program)",-1),I=d('<h2 id="examen-plus-approfondi" tabindex="-1"><a class="header-anchor" href="#examen-plus-approfondi" aria-hidden="true">#</a> Examen plus approfondi</h2><h3 id="le-modele-d-un-compte" tabindex="-1"><a class="header-anchor" href="#le-modele-d-un-compte" aria-hidden="true">#</a> Le mod\xE8le d&#39;un compte</h3><p>Il existe 3 types de comptes sur Solana :</p><ul><li>Les comptes de donn\xE9es pour le stockage des donn\xE9es</li><li>Les comptes de programmes pour le stockage des programmes ex\xE9cutables</li><li>Les comptes natifs pour les programmes natifs de Solana tels que System, Stake, et Vote</li></ul><p>Il existe deux types de comptes de donn\xE9es :</p><ul><li>Les comptes appartenant au syst\xE8me</li><li>Les comptes PDA (adresse d\xE9riv\xE9e du programme)</li></ul><p>Chaque compte a une adresse (g\xE9n\xE9ralement une cl\xE9 publique) et un propri\xE9taire (adresse d&#39;un compte de programme). La liste compl\xE8te des champs qu&#39;un compte stocke est \xE9num\xE9r\xE9 ci-dessous.</p><table><thead><tr><th>Champs</th><th>Description</th></tr></thead><tbody><tr><td>lamports</td><td>Le nombre de lamports appartenant \xE0 ce compte</td></tr><tr><td>owner</td><td>Le programme propri\xE9taire de ce compte</td></tr><tr><td>executable</td><td>Indique si ce compte peut traiter des instructions</td></tr><tr><td>data</td><td>Le tableau d&#39;octets de donn\xE9es brutes stock\xE9 par ce compte</td></tr><tr><td>rent_epoch</td><td>La prochaine \xE9poque \xE0 laquelle ce compte doit payer une rente</td></tr></tbody></table><p>Il existe quelques r\xE8gles importantes concernant la propri\xE9t\xE9 des comptes :</p><ul><li>Seul le propri\xE9taire d&#39;un compte de donn\xE9es peut modifier ses donn\xE9es et d\xE9biter les lamports</li><li>Tout le monde est autoris\xE9 \xE0 envoyer des lamports sur un compte de donn\xE9es</li><li>Le propri\xE9taire d&#39;un compte peut d\xE9signer un nouveau propri\xE9taire si les donn\xE9es de celui-ci sont mises \xE0 z\xE9ro</li></ul><p>Les comptes de programme ne stockent pas d&#39;\xE9tat.</p><p>Par exemple, si vous avez un programme de comptage qui permet d&#39;incr\xE9menter un compteur, vous devez cr\xE9er deux comptes, un compte pour stocker le code du programme, et un autre pour stocker le compteur.</p><p><img src="'+p+'" alt=""></p><p>Pour \xE9viter qu&#39;un compte soit supprim\xE9, vous devez payer une rente.</p><h3 id="rente" tabindex="-1"><a class="header-anchor" href="#rente" aria-hidden="true">#</a> Rente</h3><p>Le stockage des donn\xE9es sur les comptes co\xFBte des SOL, et il est financ\xE9 par ce qu&#39;on appelle une rente. Si vous maintenez un solde minimum \xE9quivalent \xE0 deux ann\xE9es de rente sur un compte, celui-ci sera exempt\xE9 du paiement de cette rente. Vous pouvez r\xE9cup\xE9rer la rente en fermant le compte et en renvoyant les lamports dans votre portefeuille.</p><p>La rente est pay\xE9e \xE0 deux moments diff\xE9rents :</p><ol><li>Lorsqu&#39;il est r\xE9f\xE9renc\xE9 par une transaction</li><li>Une fois par \xE9poque</li></ol><p>Un pourcentage des rentes collect\xE9es par les comptes est d\xE9truit, tandis que le reste est distribu\xE9 aux comptes de vote \xE0 la fin de chaque slot.</p><p>Si le compte ne dispose pas d&#39;assez d&#39;argent pour payer la rente, le compte sera supprim\xE9 ainsi que ses donn\xE9es.</p><p>Il est \xE9galement important de noter que les nouveaux comptes doivent \xEAtre exempts de rente.</p><h2 id="autres-ressources" tabindex="-1"><a class="header-anchor" href="#autres-ressources" aria-hidden="true">#</a> Autres Ressources</h2>',22),P={href:"https://solana.wiki/zh-cn/docs/account-model/#account-storage",target:"_blank",rel:"noopener noreferrer"},w=t("Mod\xE8le de compte de Solana"),B={href:"https://docs.solana.com/developing/programming-model/accounts",target:"_blank",rel:"noopener noreferrer"},C=t("Documentation officielle"),V={href:"https://twitter.com/pencilflip/status/1452402100470644739",target:"_blank",rel:"noopener noreferrer"},D=t("Thread Twitter sur les comptes par Pencilflip"),T=e("h3",{id:"credit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#credit","aria-hidden":"true"},"#"),t(" Cr\xE9dit")],-1),A=t("Ce concept de base est attribu\xE9 \xE0 Pencilflip. "),E={href:"https://twitter.com/intent/user?screen_name=pencilflip",target:"_blank",rel:"noopener noreferrer"},F=t("Suivez-le sur Twitter"),N=t(".");function M(j,K){const s=n("ExternalLinkIcon");return a(),i(l,null,[u,m,h,e("div",_,[f,e("ul",null,[g,x,b,v,L,e("li",null,[k,e("a",q,[y,o(s)])]),S,z])]),I,e("ul",null,[e("li",null,[e("a",P,[w,o(s)])]),e("li",null,[e("a",B,[C,o(s)])]),e("li",null,[e("a",V,[D,o(s)])])]),T,e("p",null,[A,e("a",E,[F,o(s)]),N])],64)}var U=r(c,[["render",M]]);export{U as default};
