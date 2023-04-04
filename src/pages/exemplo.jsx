import Layout from "@/components/Layout";
import Cabecalho from "../components/cabecalho";
import Link from 'next/link'
export default function Exemplo() {
    return (
        <>
            <Layout titulo="Usando Componentes">
                <Cabecalho titulo="Nextjs e React"/>
                <Cabecalho titulo="Aprenda Next na prática"/>
            </Layout>
        </>
    )
}