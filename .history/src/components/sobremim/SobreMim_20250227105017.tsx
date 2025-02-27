import { animate, motion } from "framer-motion"

export default function SobreMim(){
    return(
        <section className="min-h-screen bg-gray-950 text-white pt-20">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col-reverse lg:flex-row items-center 
                justify-between gap-8 lg:gap-16">
                    <motion.div
                    initial={{opacity}}
                    animate={}
                    >
                        TESTE
                    </motion.div>
                </div>
            </div>
        </section>
    )
}