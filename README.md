El valor del porcentaje de descuento se calcula como: 100*(nightly_basis + base_rate + commission)/total

No estoy seguro de que sea esa la manera correcta, pero es la que me dió mejores resultados.

Dentro del JSON no encontré algo relacionado a cuantas noches son ni cuantas personas entran por lo que dejé puesto el "6 noches, 2 personas", pero supongo que debe cambiarse

Cada tanto la api tira un 429 porque el servidor solo acepta 50 peticiones por día, por lo que dejé el JSON en la carpeta ./public para poder hacer las peticiones necesarias
