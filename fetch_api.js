const apikey = '8fa8fe67b5f6b84aedfe04b2350639db'
const peticion = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`)


peticion
// esto se conoce como promesa en cadena
    .then(resp => resp.json() )
    .then( data => {
        //const { url } = data.images.original
        //const { url } = data.poster_path

        const title = data.original_title;
        const description = data.overview;
        const posterPath = data.poster_path;
    
        // Construir la URL completa de la imagen
        const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

        // Crear elementos HTML para mostrar la información de la película
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        
        // Crear un elemento img para mostrar la imagen de la película
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        imgElement.alt = data.title;
        
        //// Agregar la imagen al cuerpo del documento
        //document.body.append(img);

        // Agregar elementos al cuerpo del documento
        document.body.appendChild(titleElement);
        document.body.appendChild(descriptionElement);
        document.body.appendChild(imgElement);
    })

    .catch(console.warn);

