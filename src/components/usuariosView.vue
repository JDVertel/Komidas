<template>
  <div class="container">
      <h3>pagina de productos </h3>
      <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Productos</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">+ Nuevo</button>
  
          </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
              <br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum corporis, unde sunt sequi fugit pariatur hic sapiente cumque, debitis at accusamus, facilis incidunt dolor dolorum odit maxime fuga culpa.</p>
              <div class="table-responsive">
                  <table class="table table-sm ">
                      <thead>
                          <tr>
                              <th scope="col">Nombre</th>
                              <th scope="col">Documento</th>
                              <th scope="col">Celular</th>
                              <th scope="col">Rol</th>
                              
                              <th scope="col">Opciones</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr  class="table-success">
                            <td>Mark</td>
                              <td>Mark</td>
                              <td>Otto</td>
                          
                              <td>@twitter</td>
                              <td><select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Seleccione</option>
                                <option value="0">bloquear</option>
                                <option value="1">Desbloquear</option>
                                <option value="2">Editar</option>
                                <option value="3">Eliminar</option>
                                <option value="3">Reset password</option>
                              </select></td>
                          </tr>
                          <tr class="table-danger">
                           
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td><select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Seleccione</option>
                                <option value="0">bloquear</option>
                                <option value="1">Desbloquear</option>
                                <option value="2">Editar</option>
                                <option value="3">Eliminar</option>
                                <option value="3">Reset password</option>
                              </select></td>
                          </tr>
                          <tr>
                          
                              <td>@twitter</td>
                              <td>@twitter</td>
                              <td>Thornton</td>
                              <td>@twitter</td>
                              <td><select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Seleccione</option>
                                <option value="0">bloquear</option>
                                <option value="1">Desbloquear</option>
                                <option value="2">Editar</option>
                                <option value="3">Eliminar</option>
                                <option value="3">Reset password</option>
                              </select></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
              <div class="container">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veritatis nulla quod, eum deserunt, ea iusto velit, magnam numquam est voluptatibus sunt repellat exercitationem? Sapiente nostrum fuga consectetur error architecto.</p>
              </div>
              <br>
  
              <div class="row">
                  <div class="col-12 col-md-6 mb-3"><select class="form-select form-select-sm" aria-label="Default select example">
                          <option selected>Rol</option>
                          <option value="1">Admin</option>
                          <option value="2">Mesero</option>
                          <option value="3">Caja</option>
                      </select>
                  </div>
  
                  <div class="col-12 col-md-6 mb-3"> <input class="form-control form-control-sm" type="number" placeholder="Documento" aria-label=".form-control-sm example"></div>
                  <div class="col-12 col-md-6 mb-3">
                      <input class="form-control form-control-sm" type="text" placeholder="Nombre" aria-label=".form-control-sm example">
                  </div>
                  <div class="col-12 col-md-6 mb-3">
                    <input class="form-control form-control-sm" type="number" placeholder="celular" aria-label=".form-control-sm example">
                  </div>
               
                 
              </div>
              <button type="button" class="btn btn-primary btn-sm">Guardar</button>
          </div>
  
      </div>
  </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  img {
      width: 40px;
      background-color: aqua;
  }
  </style>
  