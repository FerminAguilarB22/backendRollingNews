import mongoose , {model,Schema} from 'mongoose';

const noticiaSchema = new Schema({
    autor : {
        type: String,
        
        maxlength:50
    },
    titulo : {
        type: String,
        
    },
    bajadanoticia :{
        type: String,
        
    },
    imagen:{
        type: String,
        
    },
    leadnoticia:{
        type: String,
        
    },
    cuerponoticia:{
        type: String,
        
    },
    fechanoticia:{
        type: Date,
        
    },
    destacada:{
        type: Boolean,
        
    },
    principal:{
        type: Boolean,
        
    },  
    categoria:{
        type: String,
        
    },
})

const Noticia = mongoose.model('noticia',noticiaSchema);

export default Noticia;