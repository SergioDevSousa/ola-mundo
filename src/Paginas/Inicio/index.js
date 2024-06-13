import styles from './Inicio.module.css';

import posts from 'json/post.json';
import PostCard from "Componentes/PostCard";

export default function Inicio() {
    return (
            <ul className={styles.post}>
                {posts.map((post)=> (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}

            </ul>
    )
}