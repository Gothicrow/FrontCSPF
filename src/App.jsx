import './App.css';
import Form from './componentes/Form';
import ScreenSelects from './vistas/ScreenSelects.jsx';
import ListDetails from './vistas/ListDetails.jsx'
import ListCards from './vistas/ListCards.jsx'
import { useState } from 'react';
import fn from "./js/fn"

function App() {

  const [store, setStore] = useState({
    pantalla: "logRegister",
    usuarioLogin: null,
    alert: null,
    listUsuarios: [],
    listProductos: []
  })

  switch (store.pantalla) {
    case 'logRegister': return (
      <div className="App">
        <Form store={store} setStore={setStore} />
      </div>
    );
    case 'screenUser': return (
      <div className="App">
        <ScreenSelects store={store} setStore={setStore} />
      </div>
    );
    case 'screenAdmin': return (
      <div className="App">
        <ScreenSelects store={store} setStore={setStore} />
      </div>
    );
    case 'formUsuario': return (
      <div className="App">
        <div className='returnContainerS'>
          <button className='button' onClick={() => fn.returnScreenUser({ store, setStore })}>Volver</button>
        </div>
        <Form store={store} setStore={setStore} />
      </div>
    );
    case 'formProducto': return (
      <div className="App">
      <div className='returnContainerS'>
        <button className='button' onClick={() => fn.returnScreenUser({ store, setStore })}>Volver</button>
      </div>
        <Form store={store} setStore={setStore} />
      </div>
    );
    case 'verUsuarios': return (
      <div className="App">
        <div className='returnContainer'>
          <button className='button' onClick={() => fn.returnScreenAdmin({ store, setStore })}>Volver</button>
        </div>
        <ListDetails store={store} setStore={setStore} />
      </div>
    );
    case 'verProductos': return (
      <div className="App">
        <div className='returnContainer'>
          <button className='button' onClick={() => fn.returnScreenAdmin({ store, setStore })}>Volver</button>
        </div>
        <ListDetails store={store} setStore={setStore} />
      </div>
    );
    case 'buyProductos': return (
      <div className="App">
        <div className='returnContainerM'>
          <button className='button' onClick={() => fn.returnScreenUser({ store, setStore })}>Volver</button>
        </div>
        <ListCards store={store} setStore={setStore} />
      </div>
    );
    case 'misProductos': return (
      <div className="App">
        <div className='returnContainerM'>
          <button className='button' onClick={() => fn.returnScreenUser({ store, setStore })}>Volver</button>
        </div>
        <ListCards store={store} setStore={setStore} />
      </div>
    );
    case 'misCompras': return (
      <div className="App">
        <div className='returnContainerM'>
          <button className='button' onClick={() => fn.returnScreenUser({ store, setStore })}>Volver</button>
        </div>
        <ListCards store={store} setStore={setStore} />
      </div>
    );
    case 'misVentas': return (
      <div className="App">
        <div className='returnContainerM'>
          <button className='button' onClick={() => fn.returnScreenUser({ store, setStore })}>Volver</button>
        </div>
        <ListCards store={store} setStore={setStore} />
      </div>
    );
  }
}

export default App;
