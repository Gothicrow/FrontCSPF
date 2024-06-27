import React from 'react'
import fn from "../js/fn"

const RowDetail = ({ element, store, setStore }) => {

  const headersArray = Object.keys(element)

  return (
    <div className='row'>
      <label className={typeof element["id"] == 'string' ? "cell1" : 'cell3'}>{element[headersArray[0]]}</label>
      <label className={typeof element["id"] == 'string' ? "cell1" : 'cell3'}>{element[headersArray[1]]}</label>
      <label className={typeof element["id"] == 'string' ? "cell1" : 'cell3'}>{element[headersArray[2]]}</label>
      <label className={typeof element["id"] == 'string' ? "cell1" : 'cell3'}>{element[headersArray[3]]}</label>
      <label className={typeof element["id"] == 'string' ? "cell1" : 'cell3'}>{element[headersArray[4]]}</label>
      <label className={typeof element["id"] == 'string' ? "cell1" : 'cell3'}>{element[headersArray[5]]}</label>
      <div className={typeof element["id"] == 'string' ? "cell2" : 'cell4'}>
        <label className="deleteText" onClick={() => typeof element["id"] == 'string' ? {} : store.pantalla == "verUsuarios" ? fn.eliminarUsuario({ store, setStore, id: element.id }) : fn.eliminarProducto({ store, setStore, id: element.id })}>Eliminar</label>
      </div>
    </div>
  )
}

export default RowDetail