import React from 'react'
import { motion } from 'framer-motion'

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">ℹ️ Sobre o Projeto</h2>
      <p className="text-gray-700">
        Esta aplicação demonstra um dashboard de cotações de moedas fiduciárias em
        tempo real e um conversor interativo. Desenvolvido com React, Tailwind CSS
        e Framer Motion para uma experiência de usuário fluida e agradável.
      </p>
    </motion.section>
  )
}