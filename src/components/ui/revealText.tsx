// import { useEffect, useRef } from "react";
// import React from "react";
// import {motion, useInView, useAnimation} from "framer-motion";
// interface Props {
//     children: JSX.Element; 
//     width?: "fit-content" | "100%"
// }
// export const RevealText = ({ children, width="fit-content" }: Props) =>{
//     const ref = useRef(null);
//     const iiv=useInView(ref, {once: true});
//     const mainControls = useAnimation();
//     const slideControls = useAnimation();
//     useEffect(()=>{
//         if(iiv){
//             mainControls.start("visible");
//             slideControls.start("visible");
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
//             <motion.div
//                 variants={{
//                     hidden: {left:0},
//                     visible: {left: "100%"},
//                 }}
//                 initial="hidden"
//                 animate={slideControls}
//                 transition={{duration:0.5, ease: "easeIn"}}
//                 style={{
//                     position:"absolute",
//                     top:4,
//                     bottom:4,
//                     left:0,
//                     right:0,
//                     background: "#bb0230",
//                     zIndex: "#bb0230",
//                 }}
            
//             />
//         </div>
//     );
// };
import { useEffect, useRef, ReactNode, Children, isValidElement, cloneElement } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: ReactNode; // accept JSX too
  width?: "fit-content" | "100%";
}

export const RevealText = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const iiv = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (iiv) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [iiv]);

  // Flatten children into array of lines or elements
  const childArray = Children.toArray(children);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      {childArray.map((child, index) => {
        const content = typeof child === "string" ? child.split("\n") : [child];

        return content.map((line, i) => (
          <div key={`${index}-${i}`} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {isValidElement(line) ? cloneElement(line) : line}
            </motion.div>

            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControls}
              transition={{
                duration: 0.8,
                ease: "easeIn",
                delay: i * 0.15,
              }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: "#bb0230",
                zIndex: 10,
              }}
            />
          </div>
        ));
      })}
    </div>
  );
};
