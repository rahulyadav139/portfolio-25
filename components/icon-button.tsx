import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IconButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
  classNames?: {
    label?: string;
    icon?: string;
    root?: string;
  };
}

export const IconButton = ({
  href,
  icon: Icon,
  label,
  classNames,
}: IconButtonProps) => {
  return (
    <Link href={href} className={cn('inline-flex group', classNames?.root)}>
      <span
        className={cn(
          'text-muted-foreground text-sm inline-flex items-center justify-center gap-2 px-12 border border-muted-foreground/30 rounded-full group-hover:border-foreground/50 group-hover:text-foreground transition-all duration-300',
          classNames?.label
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'inline-flex items-center justify-center gap-2 bg-foreground text-background w-12 h-12 aspect-square rounded-full z-1 -translate-x-4 group-hover:bg-foreground/90 transition-all duration-300 group-hover:-translate-x-3',
          classNames?.icon
        )}
      >
        <Icon className="w-5 h-5" />
      </span>
    </Link>
  );
};
