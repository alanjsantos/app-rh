import { useState } from "react";

//Iniciando os valores do objeto
const initialValue = {
  nome: '',
  email: '',
  anexo: ''
}

const SendDocuments = () => {

//criando estado do obejto
const [values, setValues] = useState(initialValue);
console.log(values);

//funcao para setar o valor nos campos
const onChange = (event) =>{

// capturando o valor no input: nome e valor
const { name, value } = event.target;

  //Atualizando o objeto
  setValues({ ...values, [name]: value })
}

//funcao subMIt
function onSubmit(event) {
  //tirando o comportamento default do submit
  //console.log(values);
  event.preventDefault();
}

return (
 
  <div className="row justify-content-center">
    
    <form onSubmit={onSubmit} className="form-container col-12 col-sm-6 col-md-5">

      <div className="form-group">
          <label htmlFor="nome"><i className="fas fa-user">&nbsp;</i>Nome</label>
          <input type="text" name="nome" className="form-control" id="nome" placeholder="Digite seu nome" onChange={onChange}/>
      </div>

      <div className="form-group">
          <label htmlFor="email"><i className="fas fa-envelope-square">&nbsp;</i>Email</label>
          <input type="text" name="email" className="form-control" id="email" placeholder="Digite o email de destino" onChange={onChange}/>
      </div>

      <div className="form-group">
          <label htmlFor="file">Anexar arquivo</label>
          <input type="file"  name="anexo" className="form-control-file" id="anexo" onChange={onChange}/>
      </div>

      <div className="form-group">
          <button type="submit" className="btn btn-secondary col-12" >Enviar</button>
      </div>
        
    </form>
    
  </div>

  );
}

export default SendDocuments;
