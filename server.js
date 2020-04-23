const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const cursos = require('./data')

nunjucks.configure("views", {
    express:server
})

server.use(express.static('public'))
server.use(express.static('images'))
server.set("view engine", "njk")

server.get("/", function(req, res) {

const about = {
        img: "/pp.jpg",
        nome: "Elves Brito",
        funcao: "Aluno - Rocketseat",
        links: [
            {url: "https://www.github.com/elvesbd", image:"/github (1).png"},
            {url: "https://www.instagram.com/elvesbd", image:"/instagram.png"},
            {url: "https://www.linkedin.com/in/elvesbd", image:"/linkedin.png"}
        ]
    }
    return res.render("about" , {about})
})

server.get("/portifolio", function(req, res) {
    return res.render("portifolio", {items: cursos})
})

server.get("/contato", function(req, res) {
    return res.render("contato")
})

server.use(function(req, res) {
    res.status(404).render("notfound")
})
server.listen(5000, function(){
    console.log("server running")
})