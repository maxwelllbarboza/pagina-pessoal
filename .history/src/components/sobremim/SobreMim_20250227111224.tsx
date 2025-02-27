'use client'
import { animate, motion } from "framer-motion"

export default function SobreMim(){
    return(
        <section className="min-h-screen bg-gray-950 text-white pt-20">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col-reverse lg:flex-row items-center 
                justify-between gap-8 lg:gap-16">
                    <motion.div
                    initial={{opacity: 0, y:20}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 0.5}}
                    >
                        <span className="text-gray-400 mb-4 block text lg:text-left">Desenvolvedor FullStack</span>
                        <h1 className="text-5xl font-bold mb-4 text-center lg:text-left">
                            Olá, Eu sou 
                            <span className="block text-emerald-400 mt-2">Maxwell Barboza</span>                      
                        </h1>
                        <p className="text-gray-400 mb-8 text-center lg:text-left">
                            Especializado em criar experiências digitais elegantes e 
                            proficiente em diversas linguagens de programação e tecnologia.
                        </p>
                        <div className="flex flex-col items-center gap-4 lg: flew-row">
                            <motion.a
                                href="/curriculo.pdf"
                                
                            >

                            </motion.a>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}