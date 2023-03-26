const express    = require('express');
const cors       = require('cors');
const routes     = require('./router');
const bodyParser = require("body-parser");
const path       = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Aciona que realiza as requisicões
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access.Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
    res.header("Access.Control-Allow-Headers", "X-PINGOTHER", "Content-Type", "Authorization");
    app.use(cors());
    next();
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// acessar imagens estáticas da requisição
app.use('/files', express.static(path.resolve(__dirname, "public", "upload")));


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', routes);

app.listen(port, () => {
    console.log(`server is running: http://localhost:${port}`);
});