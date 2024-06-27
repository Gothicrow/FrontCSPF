import React from 'react'
import fn from '../js/fn'

const ScreenSelects = ({ store, setStore }) => {


    switch (store.pantalla) {
        case 'screenUser': return (
            <div className='selectsContainer'>
                <button className='select' onClick={() => fn.buyProductos({ store, setStore })}>Comprar productos</button>
                <button className='select' onClick={() => fn.screenCreateP({ store, setStore })}>Publicar un producto</button>
                <button className='select' onClick={() => fn.misProductos({ store, setStore })}>Mis productos</button>
                <button className='select' onClick={() => fn.misCompras({ store, setStore })}>Mis compras</button>
                <button className='select' onClick={() => fn.misVentas({ store, setStore })}>Mis ventas</button>
                <button className='select' onClick={() => fn.screenUpdate({ store, setStore })}>Configurar usuario</button>
                <button className='select' onClick={() => fn.logout({ store, setStore })}>Cerrar sesión</button>
            </div>
        )
        case 'screenAdmin': return (
            <div className='selectsContainer'>
                <button className='select' onClick={() => fn.verUsuarios({ store, setStore })}>Ver usuarios</button>
                <button className='select' onClick={() => fn.verProductos({ store, setStore })}>Ver productos</button>
                <button className='select' onClick={() => fn.logout({ store, setStore })}>Cerrar sesión</button>
            </div>
        )
    }
}

export default ScreenSelects