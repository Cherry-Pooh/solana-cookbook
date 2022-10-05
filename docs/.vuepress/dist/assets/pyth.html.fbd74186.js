import{_ as l,r as o,o as u,c as i,a as n,b as a,w as t,F as r,d as s}from"./app.c241040b.js";const k={},b=n("h1",{id:"pyth",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pyth","aria-hidden":"true"},"#"),s(" Pyth")],-1),m=n("p",null,"Pyth est un Oracle utilis\xE9 pour obtenir des donn\xE9es financi\xE8res et des donn\xE9es sur le march\xE9 des crypto-monnaies dans le monde r\xE9el. L'Oracle de Pyth peut \xEAtre utilis\xE9 par les programmes on-chain afin d'utiliser des donn\xE9es dans divers cas d'utilisation.",-1),d=n("h2",{id:"comment-utiliser-pyth-dans-le-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#comment-utiliser-pyth-dans-le-client","aria-hidden":"true"},"#"),s(" Comment utiliser Pyth dans le Client")],-1),h=s("Pyth fournit une biblioth\xE8que JavaScript/TypeScript appel\xE9e "),y=n("strong",null,"@pythnetwork/client",-1),_=s(". Cette biblioth\xE8que peut \xEAtre utilis\xE9e pour lire les donn\xE9es on-chain de Pyth pour des applications off-chain, comme l'affichage du prix du jeton Pyth sur un site web. Plus d'informations \xE0 ce sujet "),f={href:"https://www.npmjs.com/package/@pythnetwork/client",target:"_blank",rel:"noopener noreferrer"},g=s("ici"),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" web3 "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" pyth "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@pythnetwork/client"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"web3"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    web3`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clusterApiUrl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" pythConnection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"pyth"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PythConnection"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    pyth`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPythProgramKeyForCluster"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPriceChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"&&"),s(" price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": $"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \\xB1$"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": price currently unavailable. status is "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br")])],-1),x=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" pythConnection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"pyth"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PythConnection"),n("span",{class:"token punctuation"},"("),s(`
  connection`),n("span",{class:"token punctuation"},","),s(`
  pyth`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPythProgramKeyForCluster"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPriceChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"&&"),s(" price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": $"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \\xB1$"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": price currently unavailable. status is "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),C=n("h2",{id:"comment-utiliser-pyth-dans-anchor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#comment-utiliser-pyth-dans-anchor","aria-hidden":"true"},"#"),s(" Comment utiliser Pyth dans Anchor")],-1),P=n("p",null,"Pyth fournit un Crate Rust qui peut \xEAtre utilis\xE9 par des programmes on-chain ou des applications off-chain pour utiliser les donn\xE9es de Pyth.",-1),v=n("div",{class:"language-rust ext-rs line-numbers-mode"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("anchor_lang"),n("span",{class:"token punctuation"},"::"),s("prelude"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("pyth_client"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"self"),n("span",{class:"token punctuation"},","),s(" load_price"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Price"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token macro property"},"declare_id!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"6B7XgKFmo73geJY8ZboSpLhkTumvwXeCXBpeP7nCT35w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token attribute attr-name"},"#[program]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"mod"),s(),n("span",{class:"token module-declaration namespace"},"pyth_test"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_sol_price"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Context"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"SolPrice"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" pyth_price_info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ctx"),n("span",{class:"token punctuation"},"."),s("accounts"),n("span",{class:"token punctuation"},"."),s("pyth_account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" pyth_price_data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("pyth_price_info"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"try_borrow_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" price_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Price"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"load_price"),n("span",{class:"token punctuation"},"("),s("pyth_price_data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price_account .. {:?}"'),n("span",{class:"token punctuation"},","),s(" pyth_price_info"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price_type ... {:?}"'),n("span",{class:"token punctuation"},","),s(" price_account"),n("span",{class:"token punctuation"},"."),s("ptype"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price ........ {}"'),n("span",{class:"token punctuation"},","),s(" price_account"),n("span",{class:"token punctuation"},"."),s("agg"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"Ok"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token attribute attr-name"},"#[derive(Accounts)]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token type-definition class-name"},"SolPrice"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token attribute attr-name"},"#[account(mut)]"),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" user_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Signer"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" pyth_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"UncheckedAccount"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" system_program"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"UncheckedAccount"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" rent"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Sysvar"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Rent"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br")])],-1),$=n("div",{class:"language-rust ext-rs line-numbers-mode"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" pyth_price_info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ctx"),n("span",{class:"token punctuation"},"."),s("accounts"),n("span",{class:"token punctuation"},"."),s("pyth_account"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" pyth_price_data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("pyth_price_info"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"try_borrow_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" price_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Price"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"load_price"),n("span",{class:"token punctuation"},"("),s("pyth_price_data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),S=n("h2",{id:"autres-ressources",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autres-ressources","aria-hidden":"true"},"#"),s(" Autres Ressources")],-1),A={href:"https://docs.pyth.network/consumers/client-libraries",target:"_blank",rel:"noopener noreferrer"},B=s("Biblioth\xE8ques du Client"),j={href:"https://github.dev/solana-labs/solana/tree/master/web3.js/examples",target:"_blank",rel:"noopener noreferrer"},E=s("Exemple de code JS"),F={href:"https://github.com/project-serum/anchor/tree/master/tests/pyth",target:"_blank",rel:"noopener noreferrer"},R=s("Exemple de code Rust"),T={href:"https://github.com/0xPratik/pyth-anchor-example",target:"_blank",rel:"noopener noreferrer"},q=s("Exemple de code Anchor");function G(I,L){const e=o("ExternalLinkIcon"),c=o("SolanaCodeGroupItem"),p=o("SolanaCodeGroup");return u(),i(r,null,[b,m,d,n("p",null,[h,y,_,n("a",f,[g,a(e)])]),a(p,null,{default:t(()=>[a(c,{title:"TS",active:""},{default:t(()=>[w]),preview:t(()=>[x]),_:1})]),_:1}),C,P,a(p,null,{default:t(()=>[a(c,{title:"Anchor",active:""},{default:t(()=>[v]),preview:t(()=>[$]),_:1})]),_:1}),S,n("ul",null,[n("li",null,[n("a",A,[B,a(e)])]),n("li",null,[n("a",j,[E,a(e)])]),n("li",null,[n("a",F,[R,a(e)])]),n("li",null,[n("a",T,[q,a(e)])])])],64)}var K=l(k,[["render",G]]);export{K as default};
