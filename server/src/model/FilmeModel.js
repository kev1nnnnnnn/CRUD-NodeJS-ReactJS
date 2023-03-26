const database = require('../database');

module.exports = {
    
    // Listar dados
    listAll: () => {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM tb_filmes",
            (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    // Listar por id
    show: (id) => {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM tb_filmes WHERE id = ?",
            [id],
            (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    // Inserir dados
    insert: (autor, title, description, image) => {
        return new Promise((resolve, reject) => {
            database.query("INSERT INTO tb_filmes(autor, title, description, image) VALUES (?,?,?,?)",
            [autor, title, description, image],
            (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });    
        });
    },
    
    // Atualizar dados
    update: (id, autor, title, description, image) => {
        return new Promise((resolve, reject) => {
            database.query("UPDATE tb_filmes SET autor = ?, title = ?, description = ?, image = ? WHERE id = ?",
            [autor, title, description, image, id],
            (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },
    
    // Excluir dados
    delete: (id) => {
        return new Promise((resolve, reject) => {
            database.query("DELETE FROM tb_filmes WHERE id = ?",
            [id],
            (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },
}