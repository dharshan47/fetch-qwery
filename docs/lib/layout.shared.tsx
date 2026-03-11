import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';


// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'dharshan47',
  repo: 'fetch-qwery',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 md:w-9 md:h-9">
            {[
              { src: '/fq.png', alt: 'Fetch-Qwery Logo', className: 'dark:hidden' },
              { src: '/fqwhite.png', alt: 'Fetch-Qwery Logo Light', className: 'hidden dark:block' },
            ].map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.alt}
                width={36}
                height={36}
                className={`object-contain w-full h-full ${img.className}`}
                priority
              />
            ))}
          </div>
          <span className="font-semibold text-lg md:text-xl text-foreground">
            Fetch-Qwery
          </span>
        </div>
      ),
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}/tree/${gitConfig.branch}/docs`,
  };
}
