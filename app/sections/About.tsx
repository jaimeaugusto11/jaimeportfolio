import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[100%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"CRIANDO VISUAIS IMPRESSIONANTES DESDE 2013."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Minha paixão está em criar software que seja bonito e funcional. Venho projetando há mais de 4 anos" />

                        <AnimatedBody
                            delay={0.1}
                            text="Quer esteja projetando uma interface de usuário elegante ou codificando um aplicativo complexo, estou sempre me esforçando para criar algo único e inovador. Adoro experimentar novas tecnologias e me manter atualizado com as últimas tendências do mundo da tecnologia."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="No momento, estou trabalhando em alguns projetos interessantes que mal posso esperar para compartilhar com vocês. Mas estou sempre aberto a novas oportunidades e colaborações."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
