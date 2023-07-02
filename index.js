//
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: '*'
}));

const empresas = [
    {
        id: 1,
        razonSocial: "RAZ SOC 1",
        rut: "11.111.111",
        digitoVerificador: "1",
        estado: "VIGENTE",
        nombreFantasia: "NOM FAN 1",
        giro: "GIRO 1",
        direccionFacturacion: "DIR FACT 1",
        region: "1",
        comunaFacturacion: "COM FAC 1",
        nombreContactoFacturacion: "NOM CON FAC 1",
        telefonoContactoFacturacion: "+561111111",
        emailContactoFacturacion: "MAIL CON FAC 1",
        cargoContactoFacturacion: "CAR CON FAC 1",
        nombreContactoCobranza: "NOM CON COB 1",
        telefonoContactoCobranza: "+561111111",
        emailContactoCobranza: "MAIL CON COB 1",
        cargoContactoCobranza: "CAR CON COB 1",
        usuarioCreador: "1",
        fechaCreacion: "01/01/2023 01:01",
        usuarioUltimaModificacion: "2",
        fechaUltimaModificacion: "01/01/2023 01:11"
    },

    {
        id: 2,
        razonSocial: "RAZ SOC 2",
        rut: "22.222.222",
        digitoVerificador: "2",
        estado: "VIGENTE",
        nombreFantasia: "NOM FAN 2",
        giro: "GIRO 2",
        direccionFacturacion: "DIR FACT 2",
        region: "2",
        comunaFacturacion: "COM FAC 2",
        nombreContactoFacturacion: "NOM CON FAC 2",
        telefonoContactoFacturacion: "+562222222",
        emailContactoFacturacion: "MAIL CON FAC 2",
        cargoContactoFacturacion: "CAR CON FAC 2",
        nombreContactoCobranza: "NOM CON COB 2",
        telefonoContactoCobranza: "+562222222",
        emailContactoCobranza: "MAIL CON COB 2",
        cargoContactoCobranza: "CAR CON COB 2",
        usuarioCreador: "2",
        fechaCreacion: "02/02/2023 02:02",
        usuarioUltimaModificacion: "1",
        fechaUltimaModificacion: "02/2/2023 01:12"
    }


];




app.get('/', (req, res) => {
    res.send('Node JS API');
});


app.get('/api/empresas', (req, res) => {
    res.send(empresas);
});


app.get('/api/empresas/:id', (req, res) => {
    const empresa = empresas.find(c => c.id === parseInt(req.params.id));
    if (!empresa) return res.status(404).send('Empresa no encontrada');
    else res.send(empresa);

});


app.post('/api/empresas', (req, res) => {
    const empresa = {
        id: empresas.length + 1,
        razonSocial: req.body.razonSocial,
        rut: req.body.rut,
        digitoVerificador: req.body.digitoVerificador,
        estado: req.body.estado,
        nombreFantasia: req.body.nombreFantasia,
        giro: req.body.giro,
        direccionFacturacion: req.body.direccionFacturacion,
        region: req.body.region,
        comunaFacturacion: req.body.comunaFacturacion,
        nombreContactoFacturacion: req.body.nombreContactoFacturacion,
        telefonoContactoFacturacion: req.body.telefonoContactoFacturacion,
        emailContactoFacturacion: req.body.emailContactoFacturacion,
        cargoContactoFacturacion: req.body.cargoContactoFacturacion,
        nombreContactoCobranza: req.body.nombreContactoCobranza,
        telefonoContactoCobranza: req.body.telefonoContactoCobranza,
        emailContactoCobranza: req.body.emailContactoCobranza,
        cargoContactoCobranza: req.body.cargoContactoCobranza,
        usuarioCreador: req.body.usuarioCreador,
        fechaCreacion: req.body.fechaCreacion,
        usuarioUltimaModificacion: "",
        fechaUltimaModificacion: ""
    };

    empresas.push(empresa);
    res.send(empresa);
});


app.put('/api/empresas/:id', (req, res) => {
    const empresa = empresas.find(c => c.id === parseInt(req.params.id));
    if (!empresa) return res.status(404).send('Empresa no encontrada');

    //const index = empresas.indexOf(empresa);

    empresa.razonSocial = req.body.razonSocial;
    empresa.rut = req.body.rut;
    empresa.digitoVerificador = req.body.digitoVerificador;

    empresa.estado = req.body.estado;

    empresa.nombreFantasia = req.body.nombreFantasia;
    empresa.giro = req.body.giro;
    empresa.direccionFacturacion = req.body.direccionFacturacion;
    empresa.region = req.body.region;
    empresa.comunaFacturacion = req.body.comunaFacturacion;
    empresa.nombreContactoFacturacion = req.body.nombreContactoFacturacion;
    empresa.telefonoContactoFacturacion = req.body.telefonoContactoFacturacion;
    empresa.emailContactoFacturacion = req.body.emailContactoFacturacion;
    empresa.cargoContactoFacturacion = req.body.cargoContactoFacturacion;
    empresa.nombreContactoCobranza = req.body.nombreContactoCobranza;
    empresa.telefonoContactoCobranza = req.body.telefonoContactoCobranza;
    empresa.emailContactoCobranza = req.body.emailContactoCobranza;
    empresa.cargoContactoCobranza = req.body.cargoContactoCobranza;


    empresa.usuarioUltimaModificacion = req.body.usuarioUltimaModificacion;

    empresa.fechaUltimaModificacion = req.body.fechaUltimaModificacion;




    res.send(empresa);

});






// USUARIOS

const usuarios = [
    {
        id: 1,
        usuario: "USER",
        contrasena: "nof",
        nombre: "NOMBRE APELLIDO",
        telefono: "+56123456789",
        email: "USER@MAIL.COM",
        cargo: "CARGO 1",
        obs: "OBSERVACION 1",
        estado: "VIGENTE",
        botsUsuario: [1,3],
        usuarioCreador: "1",
        fechaCreacion: "01/01/2023 01:01",
        usuarioUltimaModificacion: "2",
        fechaUltimaModificacion: "01/01/2023 01:11"
        
    }
    
    



];



app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

app.get('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuario no encontrado');
    else res.send(usuario);

});

app.post('/api/usuarios', (req, res) => {
    const usuario = {
        id: usuarios.length + 1,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        cargo: req.body.cargo,
        obs: req.body.obs,
        estado: req.body.estado,
        botsUsuario: req.body.botsUsuario,
        usuarioCreador: req.body.usuarioCreador,
        fechaCreacion: req.body.fechaCreacion,
        usuarioUltimaModificacion: "",
        fechaUltimaModificacion: ""
    };

    usuarios.push(usuario);
    res.send(usuario);
});


app.put('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuario no encontrado');

    //const index = empresas.indexOf(empresa);

    usuario.usuario = req.body.usuario;
    usuario.contrasena = req.body.contrasena;
    usuario.nombre = req.body.nombre;
    usuario.telefono = req.body.telefono;
    usuario.email = req.body.email;
    usuario.cargo = req.body.cargo;
    usuario.obs = req.body.obs;
    usuario.estado = req.body.estado;
    usuario.botsUsuario = req.body.botsUsuario;
    usuario.usuarioUltimaModificacion = req.body.usuarioUltimaModificacion;
    usuario.fechaUltimaModificacion = req.body.fechaUltimaModificacion;


    res.send(usuario);

});





// BOTS


const bots = [
    {
        id: 1,
        codBot: "11111",
        descripcionBot: "DESCRIPCION 1",
        estado: "VIGENTE",
        tipoEjecucion: "SIEMPRE",
        nombreEmpresa: "RAZON SOCIAL 1",
        observacion: "OBSERVACION 1",
        rutaCarpetasBot: "RUTA/CARPETA/1",
        inicio: "01-01-2023",
        termino: "02-02-2023",
        usuarioCreador: "1",
        fechaCreacion: "01/01/2023 01:01",
        usuarioUltimaModificacion: "2",
        fechaUltimaModificacion: "01/01/2023 01:11"
    }


];



app.get('/api/bots', (req, res) => {
    res.send(bots);
});


app.get('/api/bots/:id', (req, res) => {
    const bot = bots.find(c => c.id === parseInt(req.params.id));
    if (!bot) return res.status(404).send('Bot no encontrada');
    else res.send(bot);

});


app.post('/api/bots', (req, res) => {
    const bot = {
        id: bots.length + 1,
        codBot: req.body.codBot,
        descripcionBot: req.body.descripcionBot,
        estado: req.body.estado,
        tipoEjecucion: req.body.tipoEjecucion,
        nombreEmpresa: req.body.nombreEmpresa,
        observacion: req.body.observacion,
        rutaCarpetasBot: req.body.rutaCarpetasBot,
        inicio: req.body.inicio,
        termino: req.body.termino,
        usuarioCreador: req.body.usuarioCreador,
        fechaCreacion: req.body.fechaCreacion,
        usuarioUltimaModificacion: "",
        fechaUltimaModificacion: ""
    };

    bots.push(bot);
    res.send(bot);
});


app.put('/api/bots/:id', (req, res) => {
    const bot = bots.find(c => c.id === parseInt(req.params.id));
    if (!bot) return res.status(404).send('Bot no encontrada');

    //const index = empresas.indexOf(empresa);

    bot.codBot = req.body.codBot;
    bot.descripcionBot = req.body.descripcionBot;
    bot.estado = req.body.estado;
    bot.tipoEjecucion = req.body.tipoEjecucion;
    bot.nombreEmpresa = req.body.nombreEmpresa;
    bot.observacion = req.body.observacion;
    bot.rutaCarpetasBot = req.body.rutaCarpetasBot;
    bot.inicio = req.body.inicio;
    bot.termino = req.body.termino;
   


    bot.usuarioUltimaModificacion = req.body.usuarioUltimaModificacion;

    bot.fechaUltimaModificacion = req.body.fechaUltimaModificacion;




    res.send(bot);

});







const port = process.env.port || 3002;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));