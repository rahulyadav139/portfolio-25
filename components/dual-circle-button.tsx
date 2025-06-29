import { cn } from '@/lib/utils';
import Link from 'next/link';

interface DualCircleButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  highlightedIcon: React.ElementType;
  unHighlightedIcon: React.ElementType;
  href: string;
  classNames?: {
    root?: string;
    highlightedIcon?: string;
    unHighlightedIcon?: string;
  };
}

export const DualCircleButton = ({
  classNames,
  highlightedIcon: HighlightedIcon,
  unHighlightedIcon: UnHighlightedIcon,
  ...props
}: DualCircleButtonProps) => {
  return (
    <Link
      {...props}
      className={cn(
        'items-center group transition-all duration-300 inline-flex',
        classNames?.root
      )}
    >
      <span className="flex items-center justify-center gap-2 border border-muted-foreground/30 size-12 rounded-full transition-all duration-300 group-hover:border-foreground/50">
        <UnHighlightedIcon
          className={cn(
            'w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground',
            classNames?.unHighlightedIcon
          )}
        />
      </span>
      <span className="flex items-center justify-center gap-2 bg-foreground text-background size-12 rounded-full z-1 transition-all duration-300 group-hover:bg-foreground/90 group-hover:-translate-x-2 -translate-x-3">
        <HighlightedIcon
          className={cn('w-5 h-5', classNames?.highlightedIcon)}
        />
      </span>
    </Link>
  );
};
