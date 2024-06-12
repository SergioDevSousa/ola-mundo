import styles from './Inicio.module.css';

import posts from 'json/post.json';
import Post from "Componentes/Post";

export default function Inicio() {
    return (
            <ul className={styles.post}>
                {posts.map((post)=> (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}

            </ul>
    )
}