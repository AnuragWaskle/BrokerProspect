import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MasonryGrid({ children, columns = 3, gap = 24 }) {
    const [columnCount, setColumnCount] = useState(columns);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setColumnCount(1);
            else if (window.innerWidth < 1024) setColumnCount(2);
            else setColumnCount(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Distribute children into columns
    const cols = Array.from({ length: columnCount }, () => []);
    const childrenArray = Array.isArray(children) ? children : [children];

    childrenArray.forEach((child, i) => {
        cols[i % columnCount].push(child);
    });

    return (
        <div style={{ display: 'flex', gap: `${gap}px`, alignItems: 'start' }}>
            {cols.map((col, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px`, flex: 1 }}>
                    {col.map((child, j) => (
                        <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "50px" }}
                            transition={{ delay: j * 0.1 }}
                        >
                            {child}
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
}
