import { Footer } from '../components/Footer';
import { SocialIcons } from '../components/SocialIcons';

interface Link {
  emoji?: string;
  emojiImage?: string;
  label: string;
  url: string;
  highlight?: boolean;
  disabled?: boolean;
  cyanBorder?: boolean;
}

const links: Link[] = [
  { emojiImage: '/images/emojis/splatemoji.png', label: 'SLIME Website', url: 'https://www.builtbyslime.org/' },
  { emojiImage: '/images/emojis/splatemoji.png', label: 'SLIME Tools (coming soon)', url: '#', disabled: true },
  { emojiImage: '/images/emojis/splatemoji.png', label: 'SLIME Discord Server', url: 'https://discord.gg/Gus2phUUfP' },
  { emojiImage: '/images/emojis/splatemoji.png', label: 'WRAPpDEX Website', url: 'https://www.wrappdex.com/', cyanBorder: true },
  { emojiImage: '/images/emojis/splatemoji.png', label: 'WRAPpDEX Discord Server', url: 'https://discord.com/invite/Xzcga4CzrC', cyanBorder: true },
  { emojiImage: '/images/emojis/splatemoji.png', label: 'Developer Log', url: '/dev-log' },
  { emojiImage: '/images/emojis/splatemoji.png', label: 'Donate', url: '/donate' },
];

function LinkCard(link: Link): string {
  let cardClass = 'link-card';
  if (link.cyanBorder) {
    cardClass += ' link-card-cyan';
  }

  let cardStyle = link.highlight
    ? 'background: rgba(0, 255, 64, 0.2); border-color: rgba(0, 255, 64, 0.8); box-shadow: 0 0 50px rgba(0, 255, 64, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15);'
    : '';

  // Add disabled styling
  if (link.disabled) {
    cardStyle += ' opacity: 0.5; cursor: not-allowed;';
  }

  const textColor = link.highlight ? '#00ff40' : (link.disabled ? '#9ca3af' : 'white');
  const arrowColor = link.highlight ? '#00ff40' : '#9ca3af';

  const emojiContent = link.emojiImage
    ? `<img src="${link.emojiImage}" alt="" class="inline-block" style="width: 22px; height: 22px; margin-right: 8px; vertical-align: middle; ${link.disabled ? 'opacity: 0.5;' : ''}" />`
    : link.emoji || '';

  // If disabled, use a div instead of an anchor
  if (link.disabled) {
    return `
      <div class="${cardClass}"
           style="${cardStyle}">
        <div class="flex items-center justify-between">
          <span class="font-medium text-lg flex items-center" style="color: ${textColor}">
            ${emojiContent}${link.label}
          </span>
          <span style="color: ${arrowColor}">→</span>
        </div>
      </div>
    `;
  }

  return `
    <a href="${link.url}"
       ${link.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}
       class="${cardClass}"
       style="${cardStyle}">
      <div class="flex items-center justify-between">
        <span class="font-medium text-lg flex items-center" style="color: ${textColor}">
          ${emojiContent}${link.label}
        </span>
        <span style="color: ${arrowColor}">→</span>
      </div>
    </a>
  `;
}

export function HomePage(): string {
  return `
    <div class="min-h-screen pb-12 px-4">
      <div class="max-w-2xl mx-auto">

        <!-- Bio Section -->
        <div class="text-center mb-10 mt-12">
          <img src="/images/profile/heftysammichdevpfp.png" alt="Dave's Profile Picture" class="mx-auto mb-6 rounded-full profile-glow" style="width: 150px; height: 150px; object-fit: cover;" />
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-glow">HEFTYSAMMICH</h1>
          <p class="text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style="color: #d1d5db">
            FOSS Developer | Building on Hedera | Founder and CTO of
            <span class="text-glow" style="color: #00ff40; font-weight: 600;">SLIME</span>
          </p>
        </div>

        <!-- Divider -->
        <hr class="my-8 max-w-md mx-auto" style="border-top: 1px solid rgba(0, 255, 64, 0.2); box-shadow: 0 0 10px rgba(0, 255, 64, 0.1);">

        <!-- Links -->
        <div class="space-y-4 max-w-md mx-auto mb-12">
          ${links.map(link => LinkCard(link)).join('')}
        </div>

        ${SocialIcons()}

        ${Footer()}

      </div>
    </div>
  `;
}

