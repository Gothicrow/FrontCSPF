import axios from "axios"

const fn = {
    login: async ({ store, setStore }) => {
        const mail = document.getElementById('mail').value
        const pw = document.getElementById('pw').value

        if (mail === "admin" && pw === "admin") {
            const admin = {
                nombre: "Admin",
                apellido: "",
                nombreUsuario: "Admin",
                email: mail,
                password: pw
            }

            setStore({ ...store, pantalla: "screenAdmin", usuarioLogin: admin })
        } else {
            const login = {
                nombre: "",
                apellido: "",
                nombreUsuario: "",
                email: mail,
                password: pw
            }

            try {
                const res = await axios.post('/api/Login', login)
                setStore({ ...store, pantalla: "screenUser", usuarioLogin: res.data })
            } catch (error) {
                document.getElementById("alert").style.display = "flex"
                document.getElementById("textAlert").innerText = error.response.data
            }
        }
    },
    register: async ({ store, setStore }) => {
        const name = document.getElementById('name').value
        const lname = document.getElementById('lname').value
        const user = document.getElementById('user').value
        const mail = document.getElementById('mail').value
        const pw = document.getElementById('pw').value

        const newUser = {
            nombre: name,
            apellido: lname,
            nombreUsuario: user,
            email: mail,
            password: pw
        }

        try {
            const res = await axios.post('/api/Usuario', newUser)
            setStore({ ...store, pantalla: "screenUser", usuarioLogin: res.data })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "Usuario creado correctamente."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    logout: ({ store, setStore }) => {
        setStore({ ...store, pantalla: "logRegister", usuarioLogin: null })
    },
    screenUpdate: ({ store, setStore }) => {
        setStore({ ...store, pantalla: "formUsuario" })
    },
    screenCreateP: ({ store, setStore }) => {
        setStore({ ...store, pantalla: "formProducto" })
    },
    updateUsuario: async ({ store, setStore }) => {
        const name = document.getElementById('name').value
        const lname = document.getElementById('lname').value
        const user = document.getElementById('user').value
        const pw = document.getElementById('pw').value

        const actUser = {
            id: store.usuarioLogin.id,
            nombre: name,
            apellido: lname,
            nombreUsuario: user,
            email: store.usuarioLogin.email,
            password: pw
        }

        try {
            const res = await axios.put('/api/Usuario', actUser)
            setStore({ ...store, pantalla: "screenUser", usuarioLogin: res.data })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "Usuario actualizado correctamente."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    createProducto: async ({ store, setStore }) => {
        const descripcion = document.getElementById('descripcion').value
        const costo = document.getElementById('costo').value
        const precioVenta = document.getElementById('precioVenta').value
        const stock = document.getElementById('stock').value

        const newProducto = {
            id: 0,
            descripcion,
            costo,
            precioVenta,
            stock,
            idUsuario: store.usuarioLogin.id
        }

        try {
            const res = await axios.post('/api/Producto', newProducto)
            setStore({ ...store, pantalla: "screenUser" })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "Producto creado correctamente."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    closeAlert: () => {
        document.getElementById("textAlert").innerText = ""
        document.getElementById("alert").style.display = "none"
    },
    verUsuarios: async ({ store, setStore }) => {
        try {
            const res = await axios.get('/api/Usuario')
            setStore({ ...store, pantalla: "verUsuarios", listUsuarios: res.data })
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    verProductos: async ({ store, setStore }) => {
        try {
            const res = await axios.get('/api/Producto')
            setStore({ ...store, pantalla: "verProductos", listProductos: res.data })
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    eliminarUsuario: async ({ store, setStore, id }) => {
        try {
            await axios.delete(`/api/Usuario/${id}`)
            const res = await axios.get('/api/Usuario')
            setStore({ ...store, pantalla: "verUsuarios", listUsuarios: res.data })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "Usuario eliminado correctamente."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    eliminarProducto: async ({ store, setStore, id }) => {
        try {
            await axios.delete(`/api/Producto/${id}`)
            const res = await axios.get('/api/Producto')
            setStore({ ...store, pantalla: "verProductos", listProductos: res.data })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "Producto eliminado correctamente."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    returnScreenAdmin: ({ store, setStore }) => {
        setStore({ ...store, pantalla: "screenAdmin", listProductos: [], listUsuarios: [] })
    },
    returnScreenUser: ({ store, setStore }) => {
        setStore({ ...store, pantalla: "screenUser", listProductos: [], listUsuarios: [] })
    },
    buyProductos: async ({ store, setStore }) => {
        try {
            const res = await axios.get('/api/Producto')
            const productos = res.data.filter(p => p.idUsuario != store.usuarioLogin.id)

            setStore({ ...store, pantalla: "buyProductos", listProductos: productos })
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    misCompras: async ({ store, setStore }) => {
        let misCompras = []

        try {
            const allVentas = await axios.get('/api/Venta')
            const compras = allVentas.data.filter(v => v.idUsuario == store.usuarioLogin.id)
            const allProductosVendidos = await axios.get("/api/ProductoVendido")

            for (let i = 0; i < compras.length; i++) {
                const productoComprado = allProductosVendidos.data.filter(pC => pC.idVenta == compras[i].id)

                for (let j = 0; j < productoComprado.length; j++) {
                    const producto = await axios.get(`/api/Producto/${productoComprado[j].idProducto}`)

                    misCompras.push(producto.data)
                }
            }

            setStore({ ...store, pantalla: "misCompras", listProductos: misCompras })

        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    misVentas: async ({ store, setStore }) => {
        let misVentas = []

        const allProductosVendidos = await axios.get("/api/ProductoVendido")
        const allProductos = await axios.get('/api/Producto')

        for (let i = 0; i < allProductosVendidos.data.length; i++) {
            const producto = allProductos.data.find(p => p.id == allProductosVendidos.data[i].idProducto)

            if(producto.idUsuario == store.usuarioLogin.id){
                misVentas.push(producto)
            }
        }

        setStore({ ...store, pantalla: "misVentas", listProductos: misVentas })

        try {
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    misProductos: async ({ store, setStore }) => {
        let misProductos = []

        try {
            const allProductos = await axios.get('/api/Producto')
            const productos = allProductos.data.filter(p => p.idUsuario == store.usuarioLogin.id)

            setStore({ ...store, pantalla: "misProductos", listProductos: productos })
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    eliminarMiProducto: async ({ store, setStore, id }) => {
        try {
            await axios.delete(`/api/Producto/${id}`)
            const allProductos = await axios.get('/api/Producto')
            const productos = allProductos.data.filter(p => p.idUsuario == store.usuarioLogin.id)

            setStore({ ...store, listProductos: productos })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "Producto eliminado."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
    comprarProducto: async ({ store, setStore, id }) => {
        const newVenta = {
            comentarios: "",
            idUsuario: store.usuarioLogin.id
        }

        try {
            await axios.post("/api/Venta", newVenta)
            const allVentas = await axios.get("/api/Venta")
            
            const lastVenta = allVentas.data[allVentas.data.length - 1]

            const productoVendido = {
                stock: 1,
                idProducto: id,
                idVenta: lastVenta.id
            }

            await axios.post("/api/ProductoVendido", productoVendido)

            setStore({ ...store, pantalla: "screenUser" })
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = "La compra se realizo con éxito."
        } catch (error) {
            document.getElementById("alert").style.display = "flex"
            document.getElementById("textAlert").innerText = error.response.data
        }
    },
}

export default fn