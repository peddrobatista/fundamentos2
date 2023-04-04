import Navegador from "@/components/Navegador";
import Link from "next/link";

export default function Home() {
  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }}>
        <Navegador texto="texto" destino="/texto"/>
        <Navegador texto="exemplo" destino="/exemplo" cor="crimson"/>
        <Navegador texto="Navagação 01" destino="/navegacao" cor="#27ae60"/> 
        <Navegador texto="Navegação 02" destino="/cliente/123" cor="#8e44ad"/>
      </div>
  )
}
