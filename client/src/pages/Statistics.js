import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import prueba from '../imgs/no-image.png'

export default function Statistics() {
    return (
        <div>
            <NavBar />
            <br />
            <div className="Contenido container" >
                <div className="col-12"><h3>Estadisticas</h3> <p>Total de ventas: Ventas</p></div>
                <button className="btn btn-primary w-100"> Fecha Inicial - Fecha Final</button>
                <br />
                <div className="row d-flex flex-wrap rowEspaciado w-100">
                    <div className="col-6">
                        <input type="date" id="FechaIni" name="FechaIni" className="form-control fecha" />
                    </div>
                    <div className="col-6">
                        <input type="date" id="FechaFin" name="FechaFin" className="form-control fecha" />
                    </div>
                </div>
                <div className="tablanoticias w-100">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre de producto</th>
                                <th scope="col">Mes-Año</th>
                                <th scope="col">Ventas</th>
                            </tr>
                        </thead>
                        <tbody id="listaresultadosnoticias">
                            <tr>
                                <td id="NombreSecc">1</td>
                                <td id="txtFecha">Vestido Rojo</td>
                                <td id="txtFecha">Octubre 2022</td>
                                <td id="Ventas">15</td>
                            </tr>
                            <tr>
                                <td id="NombreSecc">5</td>
                                <td id="txtFecha">Blusa de cuadros con cremallera</td>
                                <td id="txtFecha">Octubre 2022</td>
                                <td id="Ventas">15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="flex-row w-100" >
                    <hr className="m-0 mb-1" />
                </div>

                <h4 className="text-left col-12">Pedidos por enviar</h4>

                <div className="tablanoticias w-100">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID de pedido</th>
                                <th scope="col">Lista de productos</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Confirmar Envio</th>
                            </tr>
                        </thead>
                        <tbody id="listaresultadosnoticias">
                            <tr>
                                <td id="NombreSecc">1</td>
                                <td id="txtFecha">
                                    <ul>
                                        <li>Vestido Rojo x 1</li>
                                        <li>Anime Falda fruncido unicolor con cadena x 2</li>
                                    </ul>
                                </td>
                                <td id="txtFecha"><button className="btn btn-primary mx-4"><i class="fa-solid fa-file"></i></button></td>
                                <td id="Ventas"><button className="btn btn-success mx-4"><i class="fa-solid fa-check"></i></button></td>
                            </tr>
                            <tr>
                                <td id="NombreSecc">2</td>
                                <td id="txtFecha">
                                    <ul>
                                        <li>Blusa de cuadros con cremallera x 1</li>
                                    </ul>
                                </td>
                                <td id="txtFecha"><button className="btn btn-primary mx-4"><i class="fa-solid fa-file"></i></button></td>
                                <td id="Ventas"><button className="btn btn-success mx-4"><i class="fa-solid fa-check"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex-row w-100" >
                    <hr className="m-0 mb-1" />
                </div>

                <br></br>

                <div className="container bootstrap snippets bootdey">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-comment">
                                <ul className="comments">
                                    <li className="clearfix">
                                        <img src={prueba} className="avatar" alt="" />
                                        <div className="post-comments">
                                            <div className="row mb-0">
                                                <div className="meta col-6 mb-0"> fecha - autor </div>
                                            </div>
                                            <p>
                                                Texto comentario
                                            </p>

                                        </div>
                                    </li>

                                </ul>

                                <form id="formComentarioNuevo" name="formComentarioNuevo">
                                    <div className="form-group">
                                        <h5 htmlFor="txtComentarioNuevo">Agrega un comentario</h5>
                                        <textarea className="form-control" id="txtComentarioNuevo" name="txtComentarioNuevo" rows="3"></textarea>
                                    </div>
                                    <p align="right"><button className="btn btn-outline-success mt-2" type="submit">Aceptar</button></p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}
