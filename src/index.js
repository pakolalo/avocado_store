/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('#app')
appNode.className = 'flex justify-center gap-1 items-center flex-wrap'

//intl
// 1 - format fechas
// 2 -format monedas

const formatPrice = (price) => {

    const newPrice = window.Intl.NumberFormat('en-En', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice;
}
//web api }
// conectarnos al server
window.fetch(`${baseUrl}/api/avo`)
// procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
// JSON --> Data --> renderizar info browser
.then((responseJson) => {
    const allItems = []
    responseJson.data.forEach(item => {
        //crear imagen
        const image = document.createElement('img');
        //url de la imagen
        image.src = `${baseUrl}${item.image}`;

        //crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = 'text-2xl'
        
        //crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);

        //creamos el contenedor que tendra los elementos
        const container = document.createElement('article');
        container.append(image, title , price);
        container.className = 'w-72 h-auto cursor-pointer'

        allItems.push(container);
    });

    appNode.append(...allItems);

});
