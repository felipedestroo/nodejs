const express = require('express');

const server = express();

server.use(express.json());

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

    server.get('/cursos', (req, res) => {
        return res.json(cursos)
    })

    server.get('/cursos/:index', (req, res) => {
        const {index} = req.params;

        return res.json(cursos[index])
    })

    // Request body - criando um novo curso
    server.post('/cursos', (req, res) => {
        const { name } = req.body
        cursos.push(name)

        return res.json(cursos)
    }) 

    // Requsição do tipo Put - Atualizando um curso
    server.put('/cursos/:index', (req, res) => {
        const { index } = req.params
        const { name } = req.body

        cursos[index] = name
        
        return res.json(cursos);
    })

    // Excluindo algum curso
    server.delete('/cursos/:index', (req, res) => {
        const { index } = req.params;

        cursos.splice(index, 1);
        // return res.json(cursos);
        return res.send()
    })

server.listen(3000);