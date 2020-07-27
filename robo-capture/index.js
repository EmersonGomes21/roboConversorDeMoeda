const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function roboCapture(){
  const browser = await puppeteer.launch( {headless: true}); //substitua "true" por "false" para visualizar 
 const page = await browser.newPage();
 let numBase = readlineSync.question('Quantidade da moeda para converter:') || '1';
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') ||'real';


  const qualquerUrl = `https://www.google.com/search?sxsrf=ALeKk01uzyfjRnYTQCj2PJHe3aRGJ-Cdhw%3A1595858807234&ei=d98eX-j5Dc3Q5OUP7ZK12Ao&q=${numBase}+${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=CgZwc3ktYWIQDFAAWABg9ZI6aABwAHgAgAEAiAEAkgEAmAEAqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiokcSqze3qAhVNKLkGHW1JDasQ4dUDCAw`; //endereço desejado para efetuar a captura de dados

  await page.goto(qualquerUrl);
  //await page.screenshot({path: 'example.png'}); //tira print da tela
  //await browser.close(); // fecha o navegador
    let num = await page.evaluate(() =>{
    return document.querySelector('.ZEB7Fb.vk_gy.vk_sh.Hg3mWc').value; //valor da classe do input de quantidade da moeda 
  });

  
  const resultado = await page.evaluate(() =>{
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value; //valor da conversão da moeda
  });


  console.log(`O valor de ${num} ${moedaBase} em ${moedaFinal} é ${resultado}`); 

}

roboCapture();

