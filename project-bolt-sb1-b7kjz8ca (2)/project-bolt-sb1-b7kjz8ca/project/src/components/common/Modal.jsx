import React, { useEffect, useRef } from "react"

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity"></div>

        {/* Modal Content */}
        <div
          ref={modalRef}
          className="transform overflow-hidden transition-all max-w-lg w-full mx-auto z-10"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
