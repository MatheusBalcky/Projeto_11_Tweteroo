import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json(), cors());

let user = { };

const users = [];


// * RECURSO QUE SALVA O USUÁRIO NO BACK
app.post('/sign-up', (req, resp) =>{
    user = req.body;
    users.push(user)
    resp.send('Ok')
});





app.listen(5000, () => console.log('Running on http://localhost:5000') )