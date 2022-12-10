import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { LilFooter } from '../components/LilFooter'
import uniqid from 'uniqid'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AddItem() {

  const params = useParams()

  let activeUser = sessionStorage.getItem('activeUser');
  activeUser = JSON.parse(activeUser);

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  function addItem() {
    var newItem = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
      idProducto: 'ITEM' + uniqid(),
      idTienda: params.idTienda,
      idU: activeUser.id
    }
    axios.post('/api/item/createitem', newItem).then(res => {
      alert(res.data)
      //console.log(res.data)
    }).then(err => { console.log(err) })
  }

  return (
    <div>
      <NavBar />
      <br />
      <div className='container mt-4 mb-5 pb-5'>
        <h3 className='text-center'>Añadir producto</h3>
        <hr />
        <br />
        <div className='row'>
          <div className='col-5 d-flex justify-content-center'>
            <img src='https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png' alt='' width={400}></img>
          </div>
          <div className='col-7'>
            <form>
              <div className="mb-3">
                <label for="nameProducto" className="form-label">Nombre</label>
                <input value={nombre} onChange={(e) => { setNombre(e.target.value) }}  type="text" className="form-control" id="nameProducto" />
              </div>
              <div className="mb-3">
                <label for="precioProducto" className="form-label">Precio</label>
                <input value={precio} onChange={(e) => { setPrecio(e.target.value) }}  type="text" className="form-control" id="precioProducto" />
              </div>
              <div className="mb-3">
                <label for="descripcionProducto" className="form-label">Descripcion</label>
                <textarea value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }}  className="form-control" id="descripcionProducto" />
              </div>
              <br />
              <div className='d-flex justify-content-end gap-2'>
                <button type="button" className="btn bg-thirdcolor">Agregar fotos</button>
                <button type="button" onClick={addItem} className="btn bg-secondcolor">Añadir producto</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LilFooter />
    </div>
  )
}
