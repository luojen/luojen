import { motion } from "framer-motion";
import { ReactNode } from "react";

const Layout = ({ children, className }: { children: ReactNode, className?: string }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
  >
    {children}
  </motion.div>
);
export default Layout;