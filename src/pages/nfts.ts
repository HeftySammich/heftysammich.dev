import { Footer } from '../components/Footer';

const collections = [
  { name: 'SLIME', tokenId: '0.0.9474754' },
  { name: 'Brainz', tokenId: '0.0.10050196' },
  { name: 'Cringle', tokenId: '0.0.10190112' },
];

export function NFTsPage(): string {
  return `
    <div class="min-h-screen pb-12 px-4">
      <div class="max-w-4xl mx-auto">

        <div class="text-center mb-8 mt-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-2 text-glow">NFT COLLECTIONS</h1>
          <p style="color: #9ca3af; font-size: 0.875rem;">Built on Hedera Hashgraph</p>
        </div>

        <!-- Tabs -->
        <div class="flex gap-3 justify-center mb-8 flex-wrap">
          ${collections.map((c, i) => `
            <button class="nft-tab${i === 0 ? ' active' : ''}" data-token="${c.tokenId}">
              ${c.name}
            </button>
          `).join('')}
        </div>

        <!-- NFT Grid -->
        <div id="nft-grid">
          <div class="nft-loading">Loading collection...</div>
        </div>

        <!-- Back to Home -->
        <div class="mt-12">
          <a href="/" class="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm font-medium" style="color: #00ff40;">
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
