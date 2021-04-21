(function(){

    var contenedor_menu = document.querySelector('.navbar-collapse');
	var barra_menu = document.querySelector('button.redondo_ergonomico');
	var contador = 1;
	barra_menu.addEventListener('click', function(){
		
		if(contador % 2 == 0){
            contenedor_menu.style.cssText = 'margin-left: -92.5rem;';
			
			
		}else{
			contenedor_menu.style.cssText = 'margin-left: 0;';
		}
		contador++;
	});
	//fin del diseño respondivo con js

    // fecha actual con javascript
    // mostrar fecha creacion
        var fecha = document.querySelector('#fecha span');

        var actual = new Date();
        var año = actual.getFullYear();

        fecha.textContent = año;

        // desarrollado por Francisco M. Charris C. 2021
}());