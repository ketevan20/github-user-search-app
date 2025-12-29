import { motion } from "motion/react"

const Loader = () => {
  return (
    <motion.div animate={{rotate:360}} transition={{duration:1, repeat:Infinity, ease:'linear'}} className="w-16 h-16 my-auto rounded-full border-4 border-[rgba(0,121,255,1)] border-t-white"></motion.div>
)
}

export default Loader