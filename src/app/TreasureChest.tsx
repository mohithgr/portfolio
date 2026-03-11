'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence  } from "framer-motion"
import Pebble from './Pebble'

const TreasureChest = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showSkills, setShowSkills] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

const toggleChest = () => {
  if (isMobile) {
    const nextState = !isOpen
    setIsOpen(nextState)
    setShowSkills(nextState)
  } else {
    setIsOpen(prev => !prev)
  }
}

  const pebblesData = [
    { label: 'Next.js', x: '-40vh', y: '-40vh', scale: 1 },
    { label: 'React.js', x: '-60vh', y: '-50vh', scale: 0.9 },
    { label: 'Tailwind CSS', x: '-60vh', y: '-20vh', scale: 1.1 },
    { label: 'Shadcn/ui', x: '20vh', y: '-40vh', scale: 0.95 },
    { label: 'Gluestack', x: '60vh', y: '-80vh', scale: 1.05 },
    { label: 'Accessibility', x: '90vh', y: '-60vh', scale: 1.05 },
    { label: 'Responsive design', x: '60vh', y: '-20vh', scale: 1.05 },
    { label: 'CMS - Strapi', x: '100vh', y: '-35vh', scale: 1.05 },
  ]

  return (
    <div className="flex justify-center items-center perspective-[1000] relative">

      {/* MOBILE SKILLS */}
      <AnimatePresence>
      {isMobile && showSkills && (
<motion.div
  initial={{ x: 120, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 120, opacity: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="
  absolute left-1/2 -translate-x-1/2
  bottom-[115%] 
  sm:bottom-[120%] 
  max-h-[40vh]
  overflow-y-auto
  bg-[#001f3f]/95
  px-5 py-4
  rounded-xl
  text-white
  w-[220px]
  shadow-xl
  z-40
  text-sm
  "
>
          <ul className="space-y-2 list-disc list-inside text-sm">
            {pebblesData.map((skill, i) => (
              <motion.li
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                {skill.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence> 

      <div
        className="relative w-[250px] h-48 cursor-pointer transition-all duration-1000 preserve-3d"
        onClick={toggleChest}
        style={{ transform: 'rotateY(30deg) rotateX(-5deg)' }}
      >

        {/* CHEST BASE */}
        <div className="absolute bottom-0 w-full h-32 bg-amber-800 rounded-lg shadow-2xl border-t-4 border-amber-900">

          <div
            className="absolute top-0 left-0 w-full h-32 bg-amber-800 rounded-lg"
            style={{
              transform: 'perspective(1200px) rotateX(2deg)',
              transformOrigin: 'bottom',
            }}
          >

            <div className="absolute top-0 left-0 w-full h-4 bg-amber-700 rounded-t-lg"></div>
            <div className="absolute top-4 left-2 w-[92%] h-4 bg-amber-900 rounded-sm"></div>
            <div className="absolute top-8 left-6 w-[84%] h-4 bg-amber-700 rounded-sm"></div>
            <div className="absolute top-12 left-3 w-[90%] h-4 bg-amber-900 rounded-sm"></div>

            <div className="absolute top-6 left-0 w-full h-2 bg-gray-400"></div>
            <div className="absolute top-18 left-0 w-full h-2 bg-gray-400"></div>

            <div className="absolute top-1/2 left-[35%] transform -translate-y-1/2 w-12 h-16 bg-gray-300 rounded-sm border-2 border-gray-500">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-600"></div>
            </div>

          </div>

          {/* LEFT SIDE */}
          <div
            className="absolute top-0 left-0 h-32 w-16 bg-amber-700 origin-left"
            style={{
              transform: 'rotateY(-90deg) translateX(-16px) skewY(5deg)',
              background: 'linear-gradient(to right, #b45309, #92400e)',
            }}
          />

          {/* RIGHT SIDE */}
          <div
            className="absolute top-0 right-0 h-32 w-3 bg-amber-950 origin-right"
            style={{
              transform: 'rotateY(90deg) translateX(3px) skewY(-2deg)',
              background: 'linear-gradient(to left, #451a03, #1e0d00)',
              opacity: 0.5,
            }}
          />

        </div>

        {/* CHEST LID */}
        <div
          className="absolute top-0 left-0 w-full h-16 bg-amber-700 rounded-t-lg origin-[50%_100%] transition-transform duration-1000 ease-out"
          style={{
            transform: isOpen
              ? 'rotateX(120deg) translateZ(10px)'
              : 'rotateX(0deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 -5px 10px rgba(0,0,0,0.3)',
          }}
        >

          <div className="absolute bottom-0 left-0 w-full h-4 bg-amber-600 rounded-t-lg"></div>

          <div className="absolute top-0 left-0 w-full h-full bg-amber-700 rounded-t-lg">
            <div className="absolute top-2 left-4 w-[85%] h-2 bg-amber-800 rounded-sm"></div>
            <div className="absolute top-6 left-2 w-[92%] h-2 bg-amber-600 rounded-sm"></div>
            <div className="absolute top-10 left-5 w-[80%] h-2 bg-amber-800 rounded-sm"></div>
          </div>

          {/* HANDLE ATTACHED TO LID */}
          <div
            className="absolute bottom-[-6px] left-12 w-10 h-2 rounded-full
                       bg-gradient-to-b from-gray-400 to-gray-600 shadow-md"
          />

        </div>

        {/* TREASURE CONTENT */}
        {isOpen && (
          <>
            <div className="absolute inset-0 bg-yellow-400 rounded-lg opacity-20 blur-md animate-pulse"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-20 flex flex-wrap justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md m-1"></div>

              <div className="w-6 h-6 bg-red-500 rounded-full shadow-md m-1 rotate-45"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md m-1 rotate-45"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full shadow-md m-1 rotate-45"></div>

              <div className="w-10 h-10 bg-white rounded-full shadow-md m-1 border border-gray-200"></div>
            </div>
          </>
        )}

        {/* DESKTOP SKILLS */}
        {!isMobile && pebblesData.map((pebble, i) => (
          <Pebble
            key={i}
            label={pebble.label}
            delay={i * 0.15}
            isOpen={isOpen}
            x={pebble.x}
            y={pebble.y}
            scale={pebble.scale}
          />
        ))}

      </div>
    </div>
  )
}

export default TreasureChest