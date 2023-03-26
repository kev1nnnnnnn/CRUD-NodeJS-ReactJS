const FilmeModel = require('../model/FilmeModel');

module.exports = {

    // Listar dados
    listAll: async (req, res) => {

        let json = {error: '', results: [] };

        let item = await FilmeModel.listAll();
        //placa chasi cor marca ano
        for(let i in item) {
            json.results.push({
                id: item[i].id,    
                autor: item[i].autor,    
                title: item[i].title,    
                description: item[i].description,    
                image: item[i].image           
            });   
        }

        res.json(json);
    },

    // Listar dados por id
    show: async (req, res) => {

        let json = {error: '', results: [] };

        let { id } = req.params;

        let item = await FilmeModel.show(id);
        //placa chasi cor marca ano
        for(let i in item) {
            json.results.push({
                id: item[i].id,    
                autor: item[i].autor,    
                title: item[i].title,    
                description: item[i].description,    
                image: item[i].image,        
            });   
        }

        res.json(json);
    },

    // Inserir dados
    insert: async (req, res) => {
        let json = { error: '', results: [] };

        let { autor, title, description } = req.body;
        let image = req.file.filename;
        
        if( autor, title, description, image) {
            let clienteId = await FilmeModel.insert( autor, title, description, image);

            json.results = {
                id: clienteId,
                 autor, title, description, image
                }
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    // Atualizar dados
    update: async (req, res) => {
        let json = { error: '', results: [] };

        let { id } = req.params;
        let {  autor, title, description} = req.body;
        let image = req.file.filename;
        
        if(id,  autor, title, description, image) {
            await FilmeModel.update(id,  autor, title, description, image);

            json.results = { id,  autor, title, description, image }
        } else {
            json.error('Update não realizado!');
        }

        res.json(json);
    },

    // Deletar dados
    delete: async (req, res) => {
        let json = { error: '', results: [] };
        
        let { id } = req.params;
        
        await FilmeModel.delete(id);

        res.json(json);
    },
}













