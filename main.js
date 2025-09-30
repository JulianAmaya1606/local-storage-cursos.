    const form = document.getElementById('formulario-curso');
    const inputCurso = document.getElementById('curso');
    const inputProfesor = document.getElementById('profesor');
    const inputPrecio = document.getElementById('precio');
    const inputCiudad = document.getElementById('ciudad');
    const inputCupo = document.getElementById('cupo');

    const msjCurso = document.getElementById('msjCurso');
    const btnEliminar = document.getElementById('borrarCurso');



        form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const Curso = inputCurso.value.trim();
        const Profesor = inputProfesor.value.trim();
        const precio = inputPrecio.value.trim();
        const ciudad = inputCiudad.value.trim();
        const cupo = inputCupo.value.trim();

        if(Curso==="" || Profesor==="" || precio==="" || ciudad==="" || cupo===""){
            alert("Por favor completa todos los campos");
            return;
        }
        //en ele ejeercicio anteripr era un solo valor ahora esamos construyendo un objeto con varios valores, por eso usamos {}
        const newCurso = {
            nombre: Curso,
            profesor: Profesor,
            precio: precio,
            ciudad: ciudad,
            cupo: cupo
        }





        localStorage.setItem('curso', JSON.stringify(newCurso));
                 const cursoCreado = localStorage.getItem('curso')
                const objetoCurso = JSON.parse(cursoCreado);
                msjCurso.innerHTML = "curso :" + objetoCurso.nombre  + "<br>" +
                 "profesor: " + objetoCurso.profesor + "<br>" + 
                 "precio: " + objetoCurso.precio + "<br>" +
                 "ciudad: " + objetoCurso.ciudad + "<br>" +
                "cupo: " + objetoCurso.cupo;
        form.reset();
        })

        document.addEventListener('DOMContentLoaded', ()=>{
            const cursoCreado = localStorage.getItem('curso')
            if(cursoCreado){
                const objetoCurso = JSON.parse(cursoCreado);
                msjCurso.innerHTML = "curso :" + objetoCurso.nombre  + "<br>" +
                 "profesor: " + objetoCurso.profesor + "<br>" + 
                 "precio: " + objetoCurso.precio + "<br>" +
                 "ciudad: " + objetoCurso.ciudad + "<br>" +
                "cupo: " + objetoCurso.cupo;
            }
        })

        btnEliminar.addEventListener('click', ()=>{
                
            msjCurso.innerHTML = "no hay cursos";
        })
