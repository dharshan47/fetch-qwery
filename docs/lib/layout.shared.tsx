import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Terminal } from 'lucide-react';


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
        <div className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-1.5 retro-shadow-sm border-2 border-primary group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-lg ml-1">
            FETCH <span className="text-muted-foreground">QWERY</span>
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
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
