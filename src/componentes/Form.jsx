import React, { useEffect, useState } from 'react'
import fn from '../js/fn';

const Form = ({ store, setStore }) => {

  const [loginFormStatus, setLoginFormStatus] = useState(true);

  useEffect(() => {
    if(store.pantalla == "logRegister"){
      if (loginFormStatus) {
        document.getElementById('mail').value = ""
        document.getElementById('pw').value = ""
      } else {
        document.getElementById('name').value = ""
        document.getElementById('lname').value = ""
        document.getElementById('user').value = ""
        document.getElementById('mail').value = ""
        document.getElementById('pw').value = ""
      }
    }else if(store.pantalla == "formUsuario"){
      document.getElementById('name').value = store.usuarioLogin.nombre
      document.getElementById('lname').value = store.usuarioLogin.apellido
      document.getElementById('user').value = store.usuarioLogin.nombreUsuario
      document.getElementById('mail').value = store.usuarioLogin.email
      document.getElementById('pw').value = store.usuarioLogin.password
    }
  }, [loginFormStatus])

  switch (store.pantalla) {
    case 'logRegister': return (
      <div className='divCenter'>
        <label className='formTitle'>{loginFormStatus ? "Iniciar sesión" : "Registrarse"}</label>
        <div className='inputsContainer'>
          {
            loginFormStatus ?
              <>
                <label className='labelInput'>Correo electrónico:</label>
                <input className='input' type="text" name="" id="mail" />
                <label className='labelInput'>Contraseña:</label>
                <input className='input' type="password" name="" id="pw" />
              </>
              :
              <>
                <label className='labelInput'>Nombre:</label>
                <input className='input' type="text" name="" id="name" />
                <label className='labelInput'>Apellido:</label>
                <input className='input' type="text" name="" id="lname" />
                <label className='labelInput'>Nombre de usuario:</label>
                <input className='input' type="text" name="" id="user" />
                <label className='labelInput'>Correo electrónico:</label>
                <input className='input' type="text" name="" id="mail" />
                <label className='labelInput'>Contraseña:</label>
                <input className='input' type="password" name="" id="pw" />
              </>
          }
        </div>
        <div className='buttonContainer'>
          <button className='button' onClick={() => loginFormStatus ? fn.login({ store, setStore }) : fn.register({ store, setStore })}>{loginFormStatus ? "Ingresar" : "Registrarse"}</button>
        </div>
        <div className='buttonRegisterContainer'>
          <label className='buttonRegister' onClick={() => setLoginFormStatus(!loginFormStatus)}>{loginFormStatus ? "Registrarse" : "Iniciar sesión"}</label>
        </div>
      </div>
    )
    case 'formUsuario': return (
      <div className='divCenter'>
        <label className='formTitle'>Editar usuario</label>
        <div className='inputsContainer'>
          <label className='labelInput'>Nombre:</label>
          <input className='input' type="text" name="" id="name" />
          <label className='labelInput'>Apellido:</label>
          <input className='input' type="text" name="" id="lname" />
          <label className='labelInput'>Nombre de usuario:</label>
          <input className='input' type="text" name="" id="user" />
          <label className='labelInput'>Correo electrónico:</label>
          <input className='input' type="text" name="" id="mail" readOnly disabled />
          <label className='labelInput'>Contraseña:</label>
          <input className='input' type="password" name="" id="pw" />
        </div>
        <div className='buttonContainer'>
          <button className='button' onClick={() => fn.updateUsuario({ store, setStore })}>Confirmar</button>
        </div>
      </div>
    )
    case 'formProducto': return (
      <div className='divCenter'>
        <label className='formTitle'>Publicar producto</label>
        <div className='inputsContainer'>
          <label className='labelInput'>Descripción:</label>
          <input className='input' type="text" name="" id="descripcion" />
          <label className='labelInput'>Costo:</label>
          <input className='input' type="text" name="" id="costo" />
          <label className='labelInput'>Precio de venta:</label>
          <input className='input' type="text" name="" id="precioVenta" />
          <label className='labelInput'>Stock:</label>
          <input className='input' type="text" name="" id="stock" />
        </div>
        <div className='buttonContainer'>
          <button className='button' onClick={() => fn.createProducto({ store, setStore })}>Publicar</button>
        </div>
      </div>
    )
  }
}

export default Form