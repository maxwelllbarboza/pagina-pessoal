'use client'
import { socialLinks } from "@/lib/constants"
import { animate, motion } from "framer-motion"
import { Download } from "lucide-react"

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
                                download={}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="w-full lg:w-auto bg-emerald-400 text-gray-900 py-3 rounded-full 
                                flex items-center justify-center gap-2 hover:bg-emerald-300"
                            >
                                <Download size={20}/>
                                Download
                            </motion.a>
                            <div className="flex items-center gap-4">
                                {socialLinks.map}

                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}