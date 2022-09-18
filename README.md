# queroserdev
<h1 align="center">
    <img alt="QueroSerDev" title="QueroSerDev - Paulo Sérgio" src=".github/logo.png" width="50%" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [JavaScript]
- [HTML5]
- [CSS3]
- [Bootsrap]
- [Axios]


## 💻 Projeto
O projeto foi desenvolvido em teste de emprego para a empresa Ammo Varejo, tendo como requisitos desenvolver o ambiente front-end e back-end de um site de ecommerce.

## 🔧 Instalação

Para executar o projeto em sua máquina/dispostivo, serão necessários os seguintes recursos instalados:

- [MySql Workbench](https://dev.mysql.com/downloads/)
- [Node.js](https://nodejs.org/en/)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Para realizar uma cópia deste projeto em sua máquina utilize o seguinte comando na pasta desejada atráves do prompt/terminal de comando do seu sistema:

```git clone https://github.com/psergiojrr/QueroSerDev```


Para instalar o Node, execute no terminal o seguinte comando:

```npm install```

Para utilizar a extensão live-server:

Basta apertar o comando Crtl+Shift+X no Visual Studio Code e selecionar a extensão "Live Server" de "Ritwick Dey"

O banco de dados utilizado nesse projeto foi o MySQL Workbench. Com o Workbench instalado, para importar o servidor siga os passos abaixo:

1-Com o MySQL aberto, realize o login do seu servidor local.

2-Na aba "Navigator", selecione lá embaixo a coluna "Administration".

3-Em "Management", selecione a opção "Data Import/Restore".

4-Nas opções de importação, selecione a opção Import Self-Contained File e selecione o arquivo "BD_queroserdev_18092022" que se encontra na pasta "sql".

5-Após informar o caminho do arquivo, selecione "Start Import".

## 🔖 Abrindo o projeto

Com todo os arquivos instalados, abra a pasta do arquivo no Visual Studio Code.

Abra a pasta "js" > "api" > "config" e abra o arquivo "config.json". 

Nesse arquivo altere as opções em "development:
 
 "username": "insira seu usuario utilizado para acessar o mysql no passo anterior"
 
 "password": "insira sua senha utilizada para acessar o mysql" (caso não tenha senha, deixe esse campo preenchido com null).

Abra o terminal utilizando o comando Ctrl + "

Execute o comando: ```cd js```

Estando na pasta do js, execute o comando: ```npm start```

Após o servidor ficar online, inicie o aplicativo Live Server para visualizar o site completo.

## Informações importantes

Apenas o usuário administrador possui permissão para realizar o cadastro de produtos. Realize o login utilizando os seguintes dados:

email: admin@admin.com

senha: admin123

---

Projeto desenvolvido por Paulo Sérgio em teste para a [Ammo Varejo](https://www.linkedin.com/company/ammo-varejo-ltda/) :wave:
