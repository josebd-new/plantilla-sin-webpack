//import '../styles.css';

export const saludar = (nombre) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);


}
export const pi = 3.1416;

export const saludar2 = (nombre) => {

    console.log('Creando etiqueta h2');

    const h2 = document.createElement('h2');
    h2.innerText = `Hola, ${nombre}`;

    document.body.append(h2);


}