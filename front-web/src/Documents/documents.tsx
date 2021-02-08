
function Documents() {
  return (
    <div className="container-fluid">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Documento</th>
              <th scope="col">Downloads </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>documento_1</td>
              <a target="_blank" href="https://drive.google.com/file/d/1YuGk8xquNt7xl33qaNGScvl7LHlVQFmo/view?usp=sharing">
              <td><i className="fas fa-file-pdf"></i></td>
              </a>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>documento_2</td>
              <a target="_blank" href="">
              <td><i className="fas fa-file-pdf"></i></td>
              </a>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>documento_3</td>
              <a target="_blank" href="">
              <td><i className="fas fa-file-pdf"></i></td>
              </a>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>documento_4</td>
              <a target="_blank" href="">
              <td><i className="fas fa-file-pdf"></i></td>
              </a>
            </tr>
          </tbody>
        </table>
    </div>
   
  );
}

export default Documents;