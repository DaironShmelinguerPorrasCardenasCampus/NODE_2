import getConnetion from "./../db/database.js"

const getCategorias = async (req, res)=>{
 const connetion = await getConnetion();
 const result = await connetion.query("SELECT * FROM CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
 console.log(result);
 res.json(result);
}


export const methodHTTP = {
    getCategorias
}