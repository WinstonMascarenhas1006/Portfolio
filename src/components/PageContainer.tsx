import { cn } from '@/lib/utils'

type PageContainerProps = {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section'
}

export default function PageContainer({ children, className, as: Tag = 'div' }: PageContainerProps) {
  return (
    <Tag className={cn('page-container', className)}>
      {children}
    </Tag>
  )
}
