import { Footer } from '../../components/Footer';

export function GoodebaagsGamesPost(): string {
  return `
    <div class="min-h-screen py-12 px-4">
      <div class="max-w-4xl mx-auto">

        <article class="max-w-3xl mx-auto">

          <!-- Post Header -->
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
              <img src="/images/projects/Goodebags.jpg"
                   alt="Goodebags Games"
                   class="w-24 h-24 rounded-full object-cover"
                   style="border: 3px solid rgba(0, 255, 64, 0.3); box-shadow: 0 0 30px rgba(0, 255, 64, 0.2);">
              <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-2" style="font-family: system-ui, -apple-system, sans-serif; color: white;">
                  Goodebags Games
                </h1>
                <div class="flex flex-wrap gap-4 text-sm" style="color: #9ca3af">
                  <span style="color: white; font-medium">HEFTYSAMMICH</span>
                  <span>•</span>
                  <span style="color: white; font-medium">JUN 2026</span>
                  <span>•</span>
                  <span class="text-glow" style="color: #00ff40; font-weight: 600;">HEDERA + XRPL</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Post Content -->
          <div class="glass-card p-8 md:p-12">
            <div class="prose prose-invert prose-lg max-w-none" style="color: #d1d5db">

              <p style="margin-bottom: 1.5rem;">
                <strong>Date:</strong> June 2026<br>
                <strong>Project:</strong> Goodebags Games<br>
                <strong>Partners:</strong> Goodebags &amp; HeftySammich (SLIME)
              </p>

              <p style="margin-bottom: 1.5rem;">
                Goodebags reached out with a vision that instantly clicked: take his fun, family-friendly physical card game and bring it fully on-chain as a web experience. He already had two successful NFT collections - The Bees Knees on Hedera and Ape Mod X on XRPL - with each NFT representing a real playable card from the physical decks.
              </p>

              <p style="margin-bottom: 1.5rem;">
                The game itself is pure, simple joy: up to 5 players pick the strongest trait from their cards each round. Highest trait wins the hand. First to collect all the cards wins the game. Clean, strategic, and perfect for all ages.
              </p>

              <p style="margin-bottom: 1.5rem;">
                I built the complete digital version from the ground up at <a href="https://goodebags.xyz" target="_blank" style="color: #00ff40;">goodebags.xyz</a>.
              </p>

              <p style="margin-bottom: 1rem;">Key features delivered:</p>

              <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; list-style: disc;">
                <li style="margin-bottom: 0.5rem;">Full token-gated access using NFTs from either (or both) Hedera and XRPL collections</li>
                <li style="margin-bottom: 0.5rem;">Dual-chain wallet support: Wallet Connect (Hedera) + Xaman Connect (XRPL)</li>
                <li style="margin-bottom: 0.5rem;">Play against 1-4 AI opponents with smart, automated gameplay</li>
                <li style="margin-bottom: 0.5rem;">Player-controlled trait selection with smooth animations and card mechanics</li>
                <li style="margin-bottom: 0.5rem;">Live global leaderboard tracking wins and points</li>
                <li style="margin-bottom: 0.5rem;">Clean, responsive web experience built in TypeScript/JavaScript for long-term scalability</li>
              </ul>

              <p style="margin-bottom: 1.5rem;">
                The game stays true to the original physical rules while adding the magic of Web3 ownership. Your NFTs aren't just collectibles - they're your permanent keys to the arena.
              </p>

              <p style="margin-bottom: 1.5rem;">
                Result? Goodebags Games is now live and successfully bridging physical card gaming with blockchain. Players can collect on Hedera or XRPL, connect their wallets, and jump straight into competitive play. The dual-chain approach creates one interconnected universe across both networks.
              </p>

              <p style="margin-bottom: 1.5rem;">
                This project is a beautiful example of expanding real-world IP into Web3 without losing the soul of the original game. Simple, fun, and built to last.
              </p>

              <p style="margin-bottom: 1.5rem;">
                From kitchen-table card battles to on-chain leaderboard wars - Goodebags Games just leveled up.
              </p>

              <p style="margin-bottom: 0; font-weight: 700; color: #00ff40;">
                Collect. Play. Compete.
              </p>

            </div>
          </div>

          <!-- Back to Dev Log -->
          <div class="mt-8">
            <a href="/dev-log"
               class="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-200 text-sm font-medium">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              DEVELOPER LOG
            </a>
          </div>

          ${Footer()}

        </article>
      </div>
    </div>
  `;
}
