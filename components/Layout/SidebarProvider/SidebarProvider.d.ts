import { ReactNode } from 'react'

export type IsSidebarOpenType = boolean
export type OpenSidebarType = () => void
export type CloseSidebarType = () => void

export interface SidbarContext {
  isSidebarOpen: IsSidebarOpenType
  openSidebar: OpenSidebarType | undefined
  closeSidebar: CloseSidebarType | undefined
}

export interface SidebarProviderProps {
  children: ReactNode
}
