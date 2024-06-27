import React from 'react'
import fn from '../js/fn'

const Card = ({ element, store, setStore }) => {

  switch (store.pantalla) {
    case "buyProductos": return (
      <div className='card'>
        <div className='divInfo'>
          <label className='labelCard'>{element.descripcion}</label>
          <label className='labelCard'>${element.precioVenta}</label>
        </div>
        <label className='labelVer' onClick={() => fn.comprarProducto({ store, setStore, id: element.id})}>Comprar</label>
      </div>
    )
    case "misProductos": return (
      <div className='card'>
        <div className='divInfo'>
          <label className='labelCard'>{element.descripcion}</label>
          <label className='labelCard'>${element.precioVenta}</label>
        </div>
        <label className='labelVer' onClick={() => fn.eliminarMiProducto({ store, setStore, id: element.id})}>Eliminar</label>
      </div>
    )
    case "misCompras": return (
      <div className='card'>
        <label className='labelCard'>{element.descripcion}</label>
        <label className='labelCard'>${element.precioVenta}</label>
      </div>
    )
    case "misVentas": return (
      <div className='card'>
        <label className='labelCard'>{element.descripcion}</label>
        <label className='labelCard'>${element.precioVenta}</label>
      </div>
    )
  }
}

export default Card