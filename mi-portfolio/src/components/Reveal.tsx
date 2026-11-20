import type { ReactNode } from 'react'
import useReveal from '../hooks/useReveal'

interface Props {
  children: ReactNode
  className?: string
}

const Reveal = ({ children, className = '' }: Props) => {
  const { ref, visible } = useReveal<HTMLDivElement>()

  const stateClass = visible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-6'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${stateClass} ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal
