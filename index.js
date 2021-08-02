const express = require('express');
const routes = express.Router();
const app = express();
const fs = require('fs');
const { encrypt, decrypt } = require('./services/jweServices');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


routes.get('/', (req, res)=>{  
    res.json({message:'ok'});
});

routes.post('/', (req, res)=>{  
    const { body } = req;
    //console.log((body));
    res.send('ok');
});
routes.post('/v1', (req, res)=>{  
    const { body } = req;
    //console.log('v1-----------------------------------------');
    //console.log((body));
    res.send('ok');
});

routes.post('/v2', (req, res)=>{  
    const { body } = req;
    //console.log('v2-----------------------------------------');
    //console.log((body));
    res.send('ok');
});

routes.post('/demo',async (req, res)=>{
    const { body } = req;
    console.log('Body-----------------------------------------');
    console.log(body);
    const pemPrivate = fs.readFileSync('./assets/pemPrivate.txt', 'utf8');
    const result = await decrypt(pemPrivate, body);
    console.log('Result-----------------------------------------');
    console.log(result)
    res.send('ok');
})

app.use(routes);

const port = process.env.PORT || 3050;

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto:${port}` )
});