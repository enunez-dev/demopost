const express = require('express');
const routes = express.Router();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3050;

routes.get('/', (req, res)=>{  
    res.json({message:'ok'});
  });

routes.post('/', (req, res)=>{  
    const { body } = req;
    console.log(JSON.stringify(body));
    res.send('ok');
  });

app.use(routes);

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto:${port}` )
});
