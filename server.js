const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {Manifestacao} = require("./manifestacaoSchema");
const port = 9000;

app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
console.log("seridor aberto na porta " + port);
});

app.get("/", ( req, res)=>{
res.send();
})

app.post("/", (req, res)=>{
    console.log(req.body)
const {nome, telefone, endereco, descricao, foto} = req.body;
insertManifestacao(nome,telefone, endereco, descricao, foto);
res.send(`<h1> Obrigado pelo manifestação, ${req.body.nome}!</h1>`)
});

app.get("/manifestacao", async (req,res)=>{
      const manifestacao= await getManifestacao();
      var ul="";
      manifestacao.forEach(manifestacao =>{
      ul = ul +`<li><h2>${manifestacao.nome}</h2><h3>${manifestacao.telefone}</h3><h3>${manifestacao.endereco}</h3><h3>${manifestacao.descricao}</h3></li>`
 });
res.send(`<ul>${ul}</Ul>`);
});

mongoose.connect("mongodb+srv://turma0046pmi:jhHSdqqtzCaqOAc5@clusterturma0046.yamifru.mongodb.net/?retryWrites=true&w=majority");


//mongodb+srv://gabriel:mW2s0BbFlzZAfBcm@cluster0.lnvstco.mongodb.net/?retryWrites=true&w=majority

function insertManifestacao(nome,telefone, endereco, descricao, foto){
 const dados = new Manifestacao({
       nome: nome,
       telefone: telefone,
       endereco: endereco,
       descricao: descricao,
       foto: foto,
});
 dados.save();
}

async function getManifestacao(){
const manifestacao = await Manifestacao.find();
return manifestacao;
}
//mongodb+srv://turma0046pmi:jhHSdqqtzCaqOAc5@clusterturma0046.yamifru.mongodb.net/?retryWrites=true&w=majority
//jhHSdqqtzCaqOAc5