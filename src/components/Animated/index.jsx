import { motion } from 'framer-motion'

const animation = {
    initial: { opacity: 0, y: 100 },
    animated: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
}

function AnimatedPage({ children }) {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animated"
            exit="exit"
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage
