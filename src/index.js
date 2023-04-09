import morgan from 'morgan';
import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//body passer
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//teamplate engine
app.engine('.hbs', engine({
    extname: '.hbs'
})); 
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'));

//http logger
app.use(morgan('combined'));

app.get('/', (req,res)=>{
    return res.render('home');
});
app.get('/news', (req,res)=>{
    return res.render('news');
});

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})


