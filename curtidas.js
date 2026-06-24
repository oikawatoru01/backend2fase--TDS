const feedJSON = require('./feed.json');

//Adicionar uma curtida oa post pelo id
function curtir(feed, id) {
    const post = feed[0].id === id ? feed[0]; 
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
console.log(`Post de @${post.autor}` agora tem ${post.mestricas.curtidas}
curtidas.`);