const feed = require('./feed.json');

//Adiciona um comentário ao array do post
function AdicionarComentario(feed, idPost, usuario, texto) {
    const post = feed[0].id === idPost ? feed[0] : [1].id === idPost ? [1] : feed[2];

    if(post.comentarios.lenght === 0) {
        console.log(`Post ${idPost} não tem comentário.`);
        return;
    }
    
    console.log(`Comentários do post ${idPost} (@${post.autor}):`);
    console.log(`[0] @${post.comentarios[0].usuario} : ${post.comentarios[0].texto}`)

    if(post.comentarios.lenght > 1)
        console.log(`[1] @${post.comentarios[1].usuario} : ${post.comentarios[1].usuario}`);
}

AdicionarComentario(feed, 1, "Rosa", "Concordo demais!");
//listarComentario(feed, 1);