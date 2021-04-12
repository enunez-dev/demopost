const express = require('express');
const routes = express.Router();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


routes.get('/', (req, res)=>{  
    res.json({message:'ok'});
});

routes.post('/', (req, res)=>{  
    const { body } = req;
    console.log(JSON.stringify(body));
    res.send('ok');
});

app.use(routes);

const port = process.env.PORT || 3050;

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto:${port}` )
});
