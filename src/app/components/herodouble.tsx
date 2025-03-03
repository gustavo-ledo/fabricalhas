import WhatsappIcon from "./setIcons/whatsapp";
import Image from "next/image";

interface Props {
    cidade?: string;
}

export default function HeroDouble({cidade}: Props) {
    return (
        <section className="bg-amber-500 dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Excelência em Calhas e Rufos em {cidade}</h2>
                    <p className="mb-4 text-white">A Fabricalhas {cidade} é referência na fabricação e instalação de calhas e rufos, oferecendo soluções duráveis e personalizadas para proteger sua propriedade. Com materiais de alta qualidade e uma equipe experiente, garantimos resistência à corrosão, longa vida útil e um acabamento que combina com a estética do seu imóvel.
                    </p>
                    <p className="text-white">Atendemos clientes residenciais, comerciais e industriais, sempre focados na segurança, funcionalidade e visual da sua construção. Entre em contato e descubra como podemos atender às suas necessidades com excelência e profissionalismo.</p>
                    <a href="#" className="text-white bg-blue-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 lg:mt-0">
                     <Image src="/Calhas/2.webp" alt="fabricalhasaraucaria" className="w-full h-96 object-cover rounded-lg" height={1500} width={1500} />
                </div>
            </div>
        </section>
    )
}