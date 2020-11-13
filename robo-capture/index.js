let puppeteer = require('puppeteer');
let readlineSync = require('readline-sync');

async function roboCapture(){
 var browser = await puppeteer.launch( {headless: false}); //substitua "true" por "false" para visualizar 
 var page = await browser.newPage();
var textBase = readlineSync.question('Texto a ser convertido:') || 'I love you';
let idiomaBase = readlineSync.question('Informe o idioma do texto a ser traduzido (exem: Ingles ): ') || 'Ingles';
  let idiomaFinal = readlineSync.question('Informe o idioma que deseja a tradução (exem: Portugues ): ') ||'Portugues';
  

 var qualquerUrl = `https://context.reverso.net/traducao/${idiomaBase}-${idiomaFinal}/${textBase}`; //endereço desejado para efetuar a captura de dados
  

  await page.goto(qualquerUrl);
  //await page.screenshot({path: 'example.png'}); //tira print da tela
  //await browser.close(); // fecha o navegador

   
 var resultado = await page.evaluate(() =>{
  return document.querySelector('a.translation.ltr.dict.no-pos').innerHTML; //resultado da tradução
  //tw-data-text tw-text-large XcVN5d tw-ta
   //translation indication ltr dict no-pos
  });
  
   
  console.log(`A tradução do texto "${textBase}" para o ${idiomaFinal} é ${resultado}`); 

}

roboCapture();


