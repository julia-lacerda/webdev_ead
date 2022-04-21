
# Para baixar:

1. Clique em <b>CODE</b> (o botão verdinho) 
2. Clique em <b>Download ZIP</b>. Assim que você clicar ele será baixado. 
3. Abra-o na pasta em que foi baixado (que geralmente é em Downloads) e <b>extraia os arquivos</b>

Prontinho! Agora vocês podem colocar essas pastas na pasta de estudo de vocês, e abrir no VS Code normalmente :)

Não esqueçam que para rodar o código no terminal, tem que digitar <code> node [nome do arquivo] </code>

<hr>

<h3> Obs.: O código do dia <b>19/03</b> está incompleto pq tem que dar npm i em algumas coisas:</h3>
<b> 1. </b> npm init (vão dando <i>enter</i> até acabar o processo) <br> 
<b> 2. </b> npm i express --save <br> 
<b> 3. </b> npm i ejs --save (aqui vai ter que dar um npm audit fix depois. O próprio terminal vai falar pra vcs fazerem isso) <br> 
<b> 4. </b> npm i nodemon --save-dev <br>
    <p> Após baixar, vcs precisam ir em <b>package.json</b> e dentro de "scripts", adicionar a dependência: "dev": "nodemon server.js" </p>
    <p> Vai ficar algo como: </p>

   
        "scripts": { 
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "nodemon server.js"
         }, 
   
     
  <b> 5. </b> npm i body-parser --save     
  <b> 6. </b> npm i mongodb --save 
  
  

     
