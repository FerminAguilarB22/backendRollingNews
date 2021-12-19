import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
app.set('port', process.env.PORT || 3005);
app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto ' + app.get('port'));
})

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req,res)=>{
    res.send('hola desde el servidor')
})
