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
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Sobre Mim</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência com diversas tecnologias e sempre busco aprender e aplicar boas práticas de desenvolvimento em todos os meus projetos.
      </p>
    </section>

    {/* Habilidades */}
    <section className="bg-white py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Habilidades</h2>
      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <li className="text-lg text-gray-700">Kotlin</li>
        <li className="text-lg text-gray-700">Node.js</li>
        <li className="text-lg text-gray-700">React e Next.js</li>
        <li className="text-lg text-gray-700">Python</li>
        <li className="text-lg text-gray-700">SQL e PostgreSQL</li>
        <li className="text-lg text-gray-700">AWS</li>
      </ul>
    </section>

    {/* Projetos */}
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Projetos</h2>
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Projeto 1</h3>
          <p className="mt-2 text-gray-600">Descrição do projeto 1.</p>
        </div>
        <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Projeto 2</h3>
          <p className="mt-2 text-gray-600">Descrição do projeto 2.</p>
        </div>
        <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Projeto 3</h3>
          <p className="mt-2 text-gray-600">Descrição do projeto 3.</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-blue-600 text-white text-center py-8">
      <p>&copy; 2025 Maxwell. Todos os direitos reservados.</p>
    </footer>
  </div>
   
  );
}
