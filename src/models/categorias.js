import mongoose , {model,Schema} from 'mongoose';

const categoriaSchema = new Schema ({
    categoria:{
        type: String,
        required:true,
        unique: true
    }
})

const Categoria = mongoose.model ('categoria',categoriaSchema);

export default Categoria;