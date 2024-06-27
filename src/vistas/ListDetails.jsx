import React from 'react'
import RowDetail from '../componentes/RowDetail'

const ListDetails = ({ store, setStore }) => {

  switch (store.pantalla) {
    case "verUsuarios":
      const usuarioHeaders = {
        id: "id",
        nombre: "nombre",
        apellido: "apellido",
        nombreUsuario: "nombreUsuario",
        password: "password",
        email: "email",
      }

      return (
        <div className='listContainer'>
          <RowDetail element={usuarioHeaders} />
          {
            store.listUsuarios.map(usuario => {
              return <RowDetail key={usuario.id} element={usuario} store={store} setStore={setStore} />
            })
          }
        </div>
      )
      case "verProductos":
        const productoHeaders = {
          id: "id",
          descripcion: "descripcion",
          costo: "costo",
          precioVenta: "precioVenta",
          stock: "stock",
          idUsuario: "idUsuario",
        }
  
        return (
          <div className='listContainer'>
            <RowDetail element={productoHeaders} />
            {
              store.listProductos.map(producto => {
                return <RowDetail key={producto.id} element={producto} store={store} setStore={setStore} />
              })
            }
          </div>
        )
  }
}

export default ListDetails