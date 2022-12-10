import React, { useState} from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import prueba from '../imgs/no-image.png'
import { useParams } from 'react-router-dom'
import { GetAllSoldItems } from '../services.js/items'
import { GetAllItems } from '../services.js/items'
import { GetInsideComments } from '../services.js/comments'
import axios from 'axios'
import uniqid from 'uniqid'

export default function Statistics() {
    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);
    const params = useParams();
    const soldItems = GetAllSoldItems(params.idTienda);
    const itemStatistics = GetAllItems(params.idTienda);
    const insideComments = GetInsideComments(params.idTienda);
    console.log(insideComments)
    const [contenido, setContenido] = useState('');
    console.log(soldItems);
    console.log(activeUser.username);
    function addComment() {
        var newComment = {
          contenido:  contenido,
          idComment: 'Comment' + uniqid(),
          nombre: activeUser.username,
          idTienda: params.idTienda,
          idU: activeUser.id
        }
        axios.post('/api/comment/createcomment', newComment).then(res => {
          alert(res.data)
          //console.log(res.data)
        }).then(err => { console.log(err) })
      }
    return (
      <div>
        <NavBar />
        <br />
        <div className="Contenido container">
          {soldItems === 0 ? (
            <div className="col-12">
              <h3>Estadisticas</h3> <p>Total de ventas: 0</p>
            </div>
          ) : (
            <div className="col-12">
              <h3>Estadisticas</h3> <p>Total de ventas: {soldItems}</p>
            </div>
          )}
          <div className="row d-flex flex-wrap rowEspaciado w-100"></div>
          <div className="tablanoticias w-100">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre de producto</th>
                  <th scope="col">Ventas</th>
                </tr>
              </thead>
              <tbody id="listaresultadosnoticias">
                {itemStatistics === 0 ? (
                  <tr>
                    <td id="NombreSecc">Aún no se han registrado ventas</td>
                  </tr>
                ) : (
                  itemStatistics.map((itemRecord) => {
                    return (
                      <tr key={itemRecord._id}>
                        <th scope="col">{itemRecord.idProducto}</th>
                        <th scope="col">{itemRecord.nombre}</th>
                        <th scope="col">{itemRecord.cantidadVendida}</th>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="flex-row w-100">
            <hr className="m-0 mb-1" />
          </div>

          <br></br>

          <div className="container bootstrap snippets bootdey">
            <div className="row">
              <div className="col-md-12">
                <div className="blog-comment">
                  <ul className="comments">
                    {
                   
                    insideComments ===0 ? (
                      <li className="clearfix">
                        <img src={prueba} className="avatar" alt="" />
                        <div className="post-comments">
                          <div className="row mb-0">
                            <div className="meta col-6 mb-0"> </div>
                          </div>
                          <p>Aquí aparecerán los mensajes de tus compañeros</p>
                        </div>
                      </li>
                    ) : (
                      insideComments.map((commentList) => {
                        return(<li key={commentList._id} className="clearfix" >
                          <img src={prueba} className="avatar" alt="" />
                          <div className="post-comments">
                            <div className="row mb-0">
                              <div className="meta col-6 mb-0">
                                {" "}
                                {commentList.fecha.substring(0,10)} - {commentList.nombreUsuario}
                              </div>
                            </div>
                            <p>{commentList.contenido}</p>
                          </div>
                        </li>);
                      })
                    )}
                  </ul>

                  <form id="formComentarioNuevo" name="formComentarioNuevo">
                    <div className="form-group">
                      <h5 htmlFor="txtComentarioNuevo">Agrega un comentario</h5>
                      <textarea
                        className="form-control"
                        id="txtComentarioNuevo"
                        name="txtComentarioNuevo"
                        rows="3"
                        value={contenido}
                        onChange={(e) => {
                          setContenido(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <p align="right">
                      <button
                        onClick={addComment}
                        className="btn btn-outline-success mt-2"
                        type="submit"
                      >
                        Aceptar
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
}
