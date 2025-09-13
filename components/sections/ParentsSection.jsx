// 👨‍👩‍👧‍👦 ParentsSection - Sección de información de padres

import React, {useState,useEffect} from "react";
import Image from "next/image";
import { weddingData } from "../../data/weddingData";

export default function ParentsSection() {
  const { parents } = weddingData;
  const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
  
    const basicClass="font-script text-3xl text-secondary mb-4";
    const completeClass="font-script text-3xl text-secondary mb-4 scale-up-center";
  
    useEffect(() => {
      const handleScroll = () => {
        //console.log('Scroll position:', window.scrollY);
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if(scrollPosition >= 600 && scrollPosition < 1200) {
        setIsVisible(true);
      }
    },[scrollPosition])
  

  return (
    <section 
    style={{
      background: "url('/images/orquideas2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "scroll",
      backgroundRepeat: "no-repeat",
    }}
    id="parents" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* <Image
              src="/images/logoXV.png"
              alt="Decoración floral"
              fill
              className="opacity-20 object-cover"
              sizes="100vw"
            /> */}
            <div
              style={{
                //backgroundColor: "#C8BFE780",
              }}
              className="bg-slate-600 bg-opacity-50 relative p-6 rounded-2xl z-10 text-center space-y-8 py-12 text-white"
            >
              <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
                A nuestros queridos padres: gracias por darnos la vida, cuidarnos, guiarnos y prepararnos para este momento tan especial. Su amor y apoyo son la base sobre la que construiremos nuestro hogar.
              </p>

              <div 
              
              className="space-y-8">
                <div>
                  <h3 className={isVisible ? completeClass : basicClass}>
                    Papás de la Novia
                  </h3>
                  <div className="space-y-2">
                    <p className="text-xl font-medium">
                      Adrian Fuentes Salinas
                    </p>
                    <p className="text-xl font-medium">
                      Enedina Prado Duarte
                    </p>
                  </div>
                </div>

               <div>
                  <h3 className="font-script text-3xl text-secondary mb-4">
                    Papás del Novio
                  </h3>
                  <div className="space-y-2">
                    <p className="text-xl font-medium">Marcelina Barajas Prado</p>
                    <p className="text-xl font-medium">Gilberto Velázquez Avila</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
