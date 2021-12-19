import mongoose , {model,Schema} from 'mongoose';

const noticiaSchema = new Schema({
    autor : {
        type: String,
        required: true,
        maxlength:25
    },
    titulo : {
        type: String,
        required: true
    },
    bajadanoticia :{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    leadnoticia:{
        type: String,
        required: true
    },
    cuerponoticia:{
        type: String,
        required: true
    },
    fechanoticia:{
        type: Date,
        required: true
    },
    destacada:{
        type: Boolean,
        required: true
    },
    principal:{
        type: Boolean,
        required: true
    },  
    categoria:{
        type: String,
        required: true
    },
})

const Noticia = mongoose.model('noticia',noticiaSchema);

export default Noticia;