import SobreMim from "@/components/sobremim/SobreMim";
import Head from "next/head";

const skills = ['Kotlin', 'Node.js', 'Python', 'React', 'Next.js', 'AWS', 'SQL'];

const projects = [
  { title: 'Sistema de Frete', description: 'Gerenciamento de transportes e pagamentos.', image: '/frete.png' },
  { title: 'Naval Battle Game', description: 'Jogo de batalha naval interativo.', image: '/naval.png' },
  { title: 'Sistema de Estoque', description: 'Gestão de bebidas e inventário.', image: '/estoque.png' }
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <Head>
      <title>Portfólio de Maxwell</title>
      <meta name="description" content="Portfólio pessoal de Maxwell" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Sobre mim */}
    <SobreMim/>
  </div>
  );
}
