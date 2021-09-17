exports.proyectosHome =  (req, res) => {
    res.render('index', {
        nombrePagina : 'Proyectos'
    }
    
    );
}

exports.formularioProyecto = (req, res) =>{
    res.render('nuevoProyecto', {
        nombrePagina : 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) =>{
    //Enviar a la consola lo que el usuario escriba
    //console.log(req.body);

    const { nombre } = req.body;
    let errores =[];

    if(!nombre){
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }

    if(errores.length>0){
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    }else{
        //No hay errores
        // Insertar en BD
    }
}