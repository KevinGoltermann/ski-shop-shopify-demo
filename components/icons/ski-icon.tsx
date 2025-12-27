import clsx from 'clsx';

export default function SkiIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      className={clsx('h-7 w-7 text-black dark:text-white', props.className)}
    >
      {/* Mountain peaks */}
      <path d="M3 20L8 10L12 16L16 10L21 20H3Z" />
    </svg>
  );
}

