import{_ as n,r,o as s,c as l,a as e,b as a,F as i,d as t}from"./app.55b1b60c.js";const c={},h=e("p",null,"WIP - This is a work in progress",-1),d=e("h1",{id:"how-to-auto-approve-transaction-for-fast-game-play-and-great-ux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-auto-approve-transaction-for-fast-game-play-and-great-ux","aria-hidden":"true"},"#"),t(" How to auto approve transaction for fast game play and great ux")],-1),p=e("p",null,"To have a fluid game play for on-chain games it is beneficial to have an auto approve wallet.",-1),u=e("ol",null,[e("li",null,"Solflare wallet offers auto-approve functionality with burner wallets, but this limits your players to only one wallet.")],-1),_={href:"https://twitter.com/solflare_wallet/status/1625950688709644324",target:"_blank",rel:"noopener noreferrer"},f=t("Burner Auto Approve Wallets"),m=e("br",null,null,-1),y=e("ol",{start:"2"},[e("li",null,"Another way to do it is to create a key pair in your game and let the player transfer some sol to that wallet and then use it to pay for transaction fees. Only problem with this is that you need to handle the security for this wallet and the players would need to have access to their seed phrase.")],-1),g={href:"https://github.com/Woody4618/SolPlay_Unity_SDK/blob/main/Assets/SolPlay/Scripts/Services/WalletHolderService.cs",target:"_blank",rel:"noopener noreferrer"},w=t("Example Source Code"),b=e("br",null,null,-1),k={href:"https://solplay.de/SolHunter/index.html",target:"_blank",rel:"noopener noreferrer"},v=t("Example Game"),x=e("br",null,null,-1),S={start:"3"},A=e("li",null,[e("p",null,"You can pay the fees yourself, by creating and signing the transactions in the backend and interact with it via an API. For that you send parameters to your backend and sign the transaction there and send a confirmation to the client as soon as it is done.")],-1),E=t("There is a protocol called @gumisfunn and they released a feature called session keys. Session Keys are ephemeral keys with fine-grained program/instruction scoping for tiered access in your @solana programs. They allow users to interact with apps under particular parameters like duration, max tokens, amount of posts or any other function specific to an app. "),T={href:"https://twitter.com/gumisfunn/status/1642898237395972097?s=20",target:"_blank",rel:"noopener noreferrer"},B=t("Link");function I(P,W){const o=r("ExternalLinkIcon");return s(),l(i,null,[h,d,p,u,e("p",null,[e("a",_,[f,a(o)]),m]),y,e("p",null,[e("a",g,[w,a(o)]),b,e("a",k,[v,a(o)]),x]),e("ol",S,[A,e("li",null,[e("p",null,[E,e("a",T,[B,a(o)])])])])],64)}var H=n(c,[["render",I]]);export{H as default};
