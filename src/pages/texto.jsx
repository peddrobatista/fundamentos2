import styles from '../styles/texto.module.css'
export default function Texto() {
    const a = 3
    const b = 4
    return (
        <div className={styles.vermelho}>
            <h1>Jsx é um conceito central</h1>
            <p>A soma de {a} e {b} é {a + b}</p>
        </div>
    )
}