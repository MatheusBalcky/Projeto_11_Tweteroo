import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json(), cors());

let user = { };

const users = [];
const tweets = [
    { username: 'Pessoa01', tweet: 'Mensagem01', avatar: 'https://cdn.pixabay.com/photo/2016/02/25/16/33/fruit-1222438__340.png'},
    { username: 'Pessoa02', tweet: 'Mensagem02', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/200px-PNG_transparency_demonstration_1.png'},
    { username: 'Pessoa03', tweet: 'Mensagem03', avatar: 'https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png'},
];

// * RECURSO QUE SALVA O USUÁRIO NO BACK
app.post('/sign-up', (req, resp) =>{
    user = req.body;
    users.push(user)
    resp.send('Ok')
});

// * RECURSO QUE RESPONDE AO FRONT COM OS TWEETS
app.get('/tweets', (req, resp) =>{

    const lastestTweets = [];

    for(let i = tweets.length - 1; ; i--){

        if(lastestTweets.length === 10 || i === 0){break;}

        lastestTweets.push(tweets[i]);
    }

    resp.send(lastestTweets)

});

// * POSTAR TWEET RECURSO;
app.post('/tweets', (req, resp) =>{

    const bodyTweet = {
        ...req.body,
        avatar: user.avatar,
    }

    tweets.push(bodyTweet)
    
    resp.send('OK')
});






app.listen(5000, () => console.log('Running on http://localhost:5000') )