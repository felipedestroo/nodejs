const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body = {nome: 'Nodejs', tipo: 'Backend' }

const cursos = ['NodeJS', 'TypeScript', 'JavaScript']

// localhost:3000/curso - Query
// server.get('/curso', (req, res) => {
//     const nome = req.query.nome

//     return res.json({curso: `Aprendendo: ${nome}`})
// })

// localhost:3000/curso/2 - params
    // server.get('/curso/:id', (req, res) => {
    //     const id = req.params.id;

    //     return res.json({curso: `Curso: ${id}`});
    // })

// localhost:3000/curso/index 
    server.get('/curso/:index', (req, res) => {
        const {index} = req.params;

        return res.json(cursos[index])
    })

server.listen(3000);