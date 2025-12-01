"use client"
import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    const headerSelector = "header"
    const getHeaderHeight = () => {
      const header = document.querySelector(headerSelector)
      return header ? header.getBoundingClientRect().height : 0
    }

    function handleClick(e) {
      // only handle left-clicks without modifier keys
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = e.target.closest("a[href^='#']")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || href === "#") return
      const id = href.slice(1)
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      const headerHeight = getHeaderHeight()
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 12)
      window.scrollTo({ top, behavior: "smooth" })
      // update URL hash without jumping
      try {
        history.pushState(null, "", href)
      } catch (err) {
        // ignore
      }
    }

    document.addEventListener("click", handleClick, { capture: true })

    // handle initial load with a hash
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const target = document.getElementById(id)
      if (target) {
        // delay until layout stabilizes
        setTimeout(() => {
          const headerHeight = getHeaderHeight()
          const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 12)
          window.scrollTo({ top, behavior: "smooth" })
        }, 60)
      }
    }

    return () => document.removeEventListener("click", handleClick, { capture: true })
  }, [])

  return null
}
