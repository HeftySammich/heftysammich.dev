import { Footer } from '../components/Footer';

interface BlogPost {
  title: string;
  author: string;
  date: string;
  tag: string;
  excerpt: string;
  slug: string;
  logo: string;
}

const posts: BlogPost[] = [
  {
    title: 'SLIME + Starfall V',
    author: 'HEFTYSAMMICH',
    date: 'OCT 31, 2025',
    tag: 'HEDERA',
    excerpt: 'Two months ago, Silent Architect—founder of Starfall V—reached out with an exciting proposal: partner up for the Hedera Hackathon to build an infinite runner game from scratch. We agreed on a 50/50 split for any prize winnings and dove right in.',
    slug: 'slime-starfall-v',
    logo: '/images/projects/Starfall.jpg'
  },
  {
    title: 'SLIME + ħBUDS',
    author: 'HEFTYSAMMICH',
    date: 'SEPT 1, 2025',
    tag: 'HEDERA',
    excerpt: 'NoGrave, founder of ħBUDS, had already launched ScribbleXRB - a sleek, minimal note-taking app live on iOS and Android with a growing user base. After diving into the Hedera ecosystem, he saw the perfect upgrade: store notes immutably on the Hedera File Service (HFS).',
    slug: 'slime-hbuds',
    logo: '/images/projects/buds.jpg'
  },
  {
    title: 'SLIME + Wild Tigers',
    author: 'HEFTYSAMMICH',
    date: 'JUL 15, 2025',
    tag: 'HEDERA',
    excerpt: 'Mauii - core builder behind Wild Tigers - was one of my first friends in the Hedera community. After months of vibing in the Wild Tigers Discord, he opened up about Wild Tigers World, the central dApp hub for the ecosystem.',
    slug: 'slime-wild-tigers',
    logo: '/images/projects/Wild. Tigers.jpg'
  }
];

function BlogPostCard(post: BlogPost): string {
  return `
    <article class="mb-12 glass-card p-8">
      <div class="flex flex-col md:flex-row gap-6 items-start">

        <!-- Project Logo -->
        <div class="flex-shrink-0">
          <img src="${post.logo}"
               alt="${post.title}"
               class="w-32 h-32 rounded-full object-cover"
               style="border: 3px solid rgba(0, 255, 64, 0.3); box-shadow: 0 0 30px rgba(0, 255, 64, 0.2);">
        </div>

        <!-- Content -->
        <div class="flex-1">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 hover:opacity-80 transition-opacity" style="font-family: system-ui, -apple-system, sans-serif;">
            <a href="/${post.slug}" style="color: white">
              ${post.title}
            </a>
          </h2>

          <div class="flex flex-wrap gap-4 mb-4 text-sm" style="color: #9ca3af">
            <span style="color: white; font-medium">${post.author}</span>
            <span>•</span>
            <span style="color: white; font-medium">${post.date}</span>
            <span>•</span>
            <span class="text-glow" style="color: #00ff40; font-weight: 600;">${post.tag}</span>
          </div>

          <p class="text-lg mb-6 leading-relaxed" style="color: #d1d5db">
            ${post.excerpt}
          </p>

          <a href="/${post.slug}"
             class="glass-button inline-block px-6 py-3 rounded-lg font-medium">
            READ MORE
          </a>
        </div>

      </div>
    </article>
  `;
}

export function BlogPage(): string {
  return `
    <div class="min-h-screen pb-12 px-4">
      <div class="max-w-4xl mx-auto">

        <div class="text-center mb-16 mt-8">
          <h1 class="text-5xl md:text-6xl font-bold mb-4 text-glow">DEVELOPER LOG</h1>
        </div>

        <div class="max-w-3xl mx-auto">
          ${posts.map(post => BlogPostCard(post)).join('')}
        </div>

        <!-- Back to Home -->
        <div class="mt-8 max-w-3xl mx-auto">
          <a href="/"
             class="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-200 text-sm font-medium">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            HOME
          </a>
        </div>

        ${Footer()}

      </div>
    </div>
  `;
}

