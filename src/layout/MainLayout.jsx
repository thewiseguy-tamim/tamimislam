"use client"
import { useState, useEffect } from "react"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar"
import { Outlet, useLocation, useNavigate } from "react-router"
import Squares from "../../reactbits/Squares/Squares"
import { cn } from "../lib/utils"
import Footer from "./Footer"

const MainLayout = () => {
  const navItems = [
    { name: "Home", link: "#Home" },
    { name: "Projects", link: "#Projects" },
    { name: "Education", link: "#Education" },
    { name: "Blog", link: "#Blog" },
    { name: "Skills", link: "#Skills" },
    
    { name: "Contact", link: "#Contact" },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Dark mode setup
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    // Only set up intersection observer on home page
    if (location.pathname === "/" || location.pathname === "/home") {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries.reduce((mostVisible, entry) => {
            if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
              return entry
            }
            return mostVisible
          }, null)

          if (visibleEntry?.isIntersecting) {
            setActiveSection(visibleEntry.target.id)
            window.history.replaceState(null, null, `#${visibleEntry.target.id}`)
          }
        },
        {
          root: null,
          rootMargin: "-10% 0px -70% 0px",
          threshold: [0.1, 0.3, 0.5],
        },
      )

      const setupObserver = () => {
        const sections = document.querySelectorAll("section[id]")
        if (sections.length > 0) {
          sections.forEach((section) => observer.observe(section))

          const currentHash = window.location.hash.replace("#", "")
          if (currentHash) {
            setActiveSection(currentHash)
          } else {
            setActiveSection("Home")
          }
        }
      }

      const timeoutId = setTimeout(setupObserver, 100)

      const handleHashChange = () => {
        const hash = window.location.hash.replace("#", "")
        if (hash) {
          scrollToSection(hash)
        }
      }

      window.addEventListener("hashchange", handleHashChange)

      return () => {
        clearTimeout(timeoutId)
        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => observer.unobserve(section))
        window.removeEventListener("hashchange", handleHashChange)
      }
    }
  }, [location.pathname])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/" && location.pathname !== "/home") {
      navigate("/")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 80 // Account for fixed navbar
          const elementPosition = element.offsetTop - offset
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
          setActiveSection(sectionId)
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80 // Account for fixed navbar
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
        setIsMobileMenuOpen(false)
        setActiveSection(sectionId)
        window.history.replaceState(null, null, `#${sectionId}`)
      }
    }
  }

  const handleNavItemClick = (link) => {
    const sectionId = link.replace("#", "")
    scrollToSection(sectionId)
  }

  return (
    <div className="relative w-full">
      <Squares direction="diagonal" speed={0.5} borderColor="#19191A" squareSize={40} hoverFillColor="#222" />

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={handleNavItemClick} activeSection={activeSection} />
          <NavbarButton variant="primary" onClick={() => handleNavItemClick("#Contact")}>
            Get in touch
          </NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            <div className="space-y-1">
              {navItems.map((item, idx) => (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={() => handleNavItemClick(item.link)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                    activeSection === item.link.replace("#", "")
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleNavItemClick("#Contact")
                }}
                variant="primary"
                className="w-full justify-center py-3"
              >
                Hire me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Main content with proper top padding */}
      <div className="pt-16 lg:pt-0">
        <Outlet />
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
