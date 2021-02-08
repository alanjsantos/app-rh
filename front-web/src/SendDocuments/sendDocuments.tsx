function SendDocuments() {
  return (
 
<div className="row justify-content-center">
  <form className="form-container col-12 col-sm-6 col-md-5">
    
    <div className="form-group">
      <label htmlFor="formGroupExampleInput"><i className="fas fa-envelope-square">&nbsp;</i>Email</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite o email a ser enviado"/>
    </div>

    <div className="form-group">
      <label htmlFor="exampleFormControlFile1">Anexar arquivo</label>
      <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
    </div>

    <div className="form-group">
    <button type="button" className="btn btn-secondary col-12"><i className="fas fa-paper-plane">&nbsp;</i>Enviar arquivo</button>
    </div>
    
  </form>
  
</div>

  );
}

export default SendDocuments;
