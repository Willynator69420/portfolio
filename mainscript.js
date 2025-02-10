// Importing the animate function from the motion library
import { animate, stagger} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// Applying the animation to the .box element
animate(".circle", { rotate: 360}, { duration: 180, repeat: Infinity });

animate(".nav-main li", { opacity: 1, y: [50, 0] }, { delay: stagger(0.15) })

animate(".body-main p", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 })

animate(".holographic-card p", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 })

animate(".holographic-container", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 })