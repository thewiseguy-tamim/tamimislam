"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { cn } from "../../lib/utils"

export const Navbar = ({ children, className }) => {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100)
  })

  // Position (fixed top-0) is applied from MainLayout via className.
  return (
    <motion.header id="site-nav" className={cn("w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
      )}
    </motion.header>
  )
}

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "none",
        backgroundColor: visible ? "rgba(0, 0, 0, 0.05)" : "transparent",
        boxShadow: visible ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "hidden lg:flex w-full max-w-6xl mx-auto items-center justify-between px-6 py-4 rounded-full mt-4 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick, activeSection }) => {
  const [hovered, setHovered] = useState(null)

  return (
    <div onMouseLeave={() => setHovered(null)} className={cn("flex items-center space-x-1", className)}>
      {items.map((item, idx) => {
        const isActive = activeSection === item.link.replace("#", "")
        return (
          <button
            key={`link-${idx}`}
            onMouseEnter={() => setHovered(idx)}
            onClick={() => onItemClick(item.link)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-200",
              isActive
                ? "text-black bg-white dark:bg-white dark:text-black"
                : "text-white dark:text-gray-100 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
            )}
          >
            <span className="relative z-10">{item.name}</span>
          </button>
        )
      })}
    </div>
  )
}

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "none",
        backgroundColor: visible ? "rgba(0, 0, 0, 0.05)" : "transparent",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "lg:hidden w-full h-16 border-b border-gray-200/50 dark:border-gray-800/50",
        className,
      )}
    >
      <div className="w-full h-full mx-auto px-3 sm:px-4">{children}</div>
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }) => {
  return <div className={cn("flex items-center justify-between h-16", className)}>{children}</div>
}

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "fixed top-16 left-0 right-0 bg-white/5 backdrop-blur-xl border-b border-gray-200/50 shadow-xl z-50",
              "dark:bg-neutral-900/5 dark:border-gray-800/50",
              className,
            )}
          >
            <div className="w-full mx-auto px-3 sm:px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-gray-100/10 dark:hover:bg-gray-800/50 transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <IconX className="h-6 w-6 text-white dark:text-gray-100" />
      ) : (
        <IconMenu2 className="h-6 w-6 text-white dark:text-gray-100" />
      )}
    </button>
  )
}

export const NavbarLogo = () => {
  return (
    <a href="#Home" className="flex items-center space-x-2">
      <span className="font-bold text-lg text-gray-100 dark:text-gray-100 font-mono">Tamim</span>
    </a>
  )
}

export const NavbarButton = ({ href, as: Tag = "button", children, className, variant = "primary", ...props }) => {
  const variants = {
    primary:
      "bg-white text-black font-bold text-base hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    secondary:
      "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(
        "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 inline-flex items-center justify-center",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}