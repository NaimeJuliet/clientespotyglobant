//PASOS PARA CONSUMIR DATOS DE UN API(RECETA) CON JS PURO

//1.Para a donde voy (la URI del servicio)

const URI="https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/top-tracks?market=US"

//2. Necesito permisos

const TOKEN="Bearer BQCwVpd5UhxcD14_S1L7yOxBkApj_8fHrNeMCdwgsg0ZuWRU4FN0zlLXpzqQPfomS6M7__hj9qy-8w6LtDjYNIdCG2x7ss_YCKc1fUMkPMKe2am5_wEWu2nxH4oaBEf5olNtCFnIjLKijdp_a8Go35sRnfVzfz7mfkk"

//3. configuro metodos, cabeceras y cuerpo de la peticion

let parametrosPeticion={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//4. Arranco para el restaurante (consumo el API, Le toco la puerta al servidor)

fetch(URI,parametrosPeticion)
.then(respuesta=>{
    return respuesta.json()
})
.then(respuestaJSON=>{
    console.log(respuestaJSON)
})
.catch(respuestaERROR=>{
    console.log(respuestaERROR)
})

