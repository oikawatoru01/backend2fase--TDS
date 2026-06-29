const feedJSON = require('./feed.json');

//Adicionar uma curtida oa post pelo id
function curtir(feed, id) {
    const post = feed[0].id === id ? feed[0] : //alterar a linha 5 inserindo :
}

if (!post) {
    console.log("Post nao encontrado.")
    return;
}

if(!post.publicado ) {
    console.log("Não é possível curtir um rascunho.");
    return;
}

post.metricas.curtidas++;
console.log(`Post de @${post.autor}` agora tem ${post.mestricas.curtidas} curtidas.`);


    function descurtir(feed, id) {
    const post = feed[0].id === id ? feed[0] :
                feed[1].id === id ? feed[1] : feed[2];
}


if(post.metricas.curtidas === 0) {
    console.log("Este post já está com")
}