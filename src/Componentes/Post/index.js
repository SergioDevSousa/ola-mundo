import styles from './post.module.css';

export default function Post({post}) {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/post/${post.id}/capa.png`}
                alt='imagem-de-capa'            
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}