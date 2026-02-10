import { useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Counter({
    value,
    direction = "up",
    prefix = "",
    suffix = "",
    decimals = 0,
    delay = 0,
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
            }
        });
    }, [springValue, decimals, prefix, suffix]);

    return <span ref={ref} />;
}
