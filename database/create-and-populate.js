import sqlite3 from "sqlite3"; sqlite3.verbose()

import {
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'
const filePath = dirname(fileURLToPath(
    import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath)

const POUSADA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "POUSADA" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "email" varchar(64),
    "telefone" varchar (64),
    "senha" varchar (64)
  );`;

const ADD_POUSADA_DATA = `
INSERT INTO POUSADA (id, nome, email, telefone, senha)
VALUES 
    (1, 'Maria', 'maria@gmail.com', '(21) 985258745', 'cD@bJ12345')
    
`

function criaTabelaPousada() {
    db.run(POUSADA_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela pousada");
    });
}

function populaTabelaPousada() {
    db.run(ADD_POUSADA_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela pousada");
    });
}

db.serialize(() => {
    criaTabelaPousada();
    populaTabelaPousada();
})