// import { useEffect, useRef } from "react";
// import React from "react";
// import {motion, useInView, useAnimation} from "framer-motion";
// interface Props {
//     children: JSX.Element; 
//     width?: "fit-content" | "100%"
// }
// export const Reveal = ({ children, width="fit-content" }: Props) =>{
//     const ref = useRef(null);
//     const iiv=useInView(ref, {once: true});
//     const mainControls = useAnimation();
//     useEffect(()=>{
//         if(iiv){
//             mainControls.start("visible");
//         }
//     }, [iiv]);
//     return (
//         <div ref={ref} style={{ position:"relative", width, overflow:"hidden"}}>
//             <motion.div
//                 variants={{
//                     hidden: {opacity:0, y:75},
//                     visible: {opacity:1, y:0},
//                 }}
//                 initial="hidden"
//                 animate={mainControls}
//                 transition={{duration:0.5, delay: 0.25}}
            
//             >
//                 {children}
//             </motion.div>
//         </div>
//     );
// };
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      style={{
        display: getComputedStyle(ref.current || document.body).display || "contents",
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
