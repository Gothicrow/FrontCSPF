import React from 'react'
import fn from '../js/fn'
import Card from '../componentes/Card'

const ListCards = ({ store, setStore }) => {

  switch (store.pantalla) {
    case "buyProductos": return (
      <div className='cardContainer'>
        {
          store.listProductos.map(producto => {
            return <Card key={producto.id*Math.random()} element={producto} store={store} setStore={setStore} />
          })
        }
      </div>
    )
    case "misProductos": return (
      <div className='cardContainer'>
        {
          store.listProductos.map(producto => {
            return <Card key={producto.id*Math.random()} element={producto} store={store} setStore={setStore} />
          })
        }
      </div>
    )
    case "misCompras": return (
      <div className='cardContainer'>
        {
          store.listProductos.map(producto => {
            return <Card key={producto.id*Math.random()} element={producto} store={store} setStore={setStore} />
          })
        }
      </div>
    )
    case "misVentas": return (
      <div className='cardContainer'>
        {
          store.listProductos.map(producto => {
            return <Card key={producto.id*Math.random()} element={producto} store={store} setStore={setStore} />
          })
        }
      </div>
    )
  }
}

export default ListCards