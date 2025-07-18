

let articulos = document.querySelector(".layout__articles");

let date = new Date();

const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
const fullDate = `${day}/${month}/${year}`;

let posts = [
    {
        titulo: "Articulo de prueba 1",
        date: fullDate,
        cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis unde hic vel voluptates, at inventore itaque sint tempore nobis debitis, explicabo molestias sequi sunt rem omnis, maiores mollitia excepturi."
    },
    {
        titulo: "Articulo de prueba 2",
        date: fullDate,
        cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis unde hic vel voluptates, at inventore itaque sint tempore nobis debitis, explicabo molestias sequi sunt rem omnis, maiores mollitia excepturi."
    },
    {
        titulo: "Articulo de prueba 3",
        date: fullDate,
        cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis unde hic vel voluptates, at inventore itaque sint tempore nobis debitis, explicabo molestias sequi sunt rem omnis, maiores mollitia excepturi."
    },
    {
        titulo: "Articulo de prueba 4",
        date: fullDate,
        cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis unde hic vel voluptates, at inventore itaque sint tempore nobis debitis, explicabo molestias sequi sunt rem omnis, maiores mollitia excepturi."
    }
];


posts.forEach(object => {
    articulos.innerHTML += 
    `
    <article class="articles__article">
                <h3 class="article__title">${object.titulo}</h3>
                <span class="article__date">${object.date}</span>
                <p class="article__body">
                    ${object.cuerpo}
                </p>
                <button class="article__btn">
                    Leer Mas
                </button>
            </article>
    
    
    `;

})


