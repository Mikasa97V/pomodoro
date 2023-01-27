import React from "react";

export interface IDropdownProps {
  children: React.ReactNode
  onClose?: () => void
  coords?: {
    top: number
    left: number
  }
}
