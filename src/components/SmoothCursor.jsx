"use client"
import React, { useEffect, useRef, useState } from "react"

export default function SmoothCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    // allow a local opt-out: set localStorage.setItem('cursor','off') to disable
    try {
      if (localStorage && localStorage.getItem && localStorage.getItem('cursor') === 'off') return
    } catch (err) {}
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return
    const id = requestAnimationFrame(() => setEnabled(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(null)
  const target = useRef({ x: -9999, y: -9999 })
  const pos = useRef({ x: -9999, y: -9999 })
  const ringPos = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    if (!enabled) return

    const lerp = (a, b, n) => (1 - n) * a + n * b

    function animate() {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.18)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.18)

      ringPos.current.x = lerp(ringPos.current.x, target.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, target.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`
        dotRef.current.style.top = `${pos.current.y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const onPointerMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (dotRef.current) dotRef.current.style.opacity = "1"
      if (ringRef.current) ringRef.current.style.opacity = "1"
    }

    const onPointerLeaveWindow = () => {
      target.current.x = -9999
      target.current.y = -9999
      if (dotRef.current) dotRef.current.style.opacity = "0"
      if (ringRef.current) ringRef.current.style.opacity = "0"
    }

    const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"], [data-cursor], [data-cursor-hover]'

    const onPointerOver = (e) => {
      const el = e.target && e.target.closest ? e.target.closest(interactiveSelector) : null
      if (!el) return
      const mode = el.getAttribute("data-cursor") || (el.hasAttribute("data-cursor-hover") ? "hover" : "hover")
      if (mode === "zoom") {
        ringRef.current?.classList.add("cursor-zoom")
        dotRef.current?.classList.add("cursor-zoom")
      } else {
        ringRef.current?.classList.add("cursor-hover")
        dotRef.current?.classList.add("cursor-hover")
      }
    }

    const onPointerOut = (e) => {
      const el = e.target && e.target.closest ? e.target.closest(interactiveSelector) : null
      if (!el) return
      ringRef.current?.classList.remove("cursor-hover", "cursor-zoom")
      dotRef.current?.classList.remove("cursor-hover", "cursor-zoom")
    }

    const onPointerDown = () => {
      ringRef.current?.classList.add("cursor-click")
      dotRef.current?.classList.add("cursor-click")
    }

    const onPointerUp = () => {
      ringRef.current?.classList.remove("cursor-click")
      dotRef.current?.classList.remove("cursor-click")
    }

    // use passive listeners where appropriate for improved scrolling performance
    document.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("pointerover", onPointerOver, { passive: true })
    document.addEventListener("pointerout", onPointerOut, { passive: true })
    document.addEventListener("pointerleave", onPointerLeaveWindow, { passive: true })
    document.addEventListener("pointerdown", onPointerDown, { passive: true })
    document.addEventListener("pointerup", onPointerUp, { passive: true })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerover", onPointerOver)
      document.removeEventListener("pointerout", onPointerOut)
      document.removeEventListener("pointerleave", onPointerLeaveWindow)
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("pointerup", onPointerUp)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden>
        <svg className="cursor-zoom-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  )
}
