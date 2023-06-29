import { createContext, useContext, useState } from 'react'
import { SidbarContext, SidebarProviderProps } from './SidebarProvider.d'

const SidbarContext = createContext<SidbarContext>({
  isSidebarOpen: false,
  openSidebar: undefined,
  closeSidebar: undefined,
})

export function useSidebar() {
  return useContext(SidbarContext)
}

export default function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  function openSidebar() {
    setSidebarOpen(true)
  }

  function closeSidebar() {
    setSidebarOpen(false)
  }

  const context = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  }

  return (
    <SidbarContext.Provider value={context}>{children}</SidbarContext.Provider>
  )
}
