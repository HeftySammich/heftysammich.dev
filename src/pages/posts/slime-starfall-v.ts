import { Footer } from '../../components/Footer';

export function StarfallVPost(): string {
  return `
    <div class="min-h-screen py-12 px-4">
      <div class="max-w-4xl mx-auto">

        <article class="max-w-3xl mx-auto">
          
          <!-- Post Header -->
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
              <img src="/images/projects/Starfall.jpg" 
                   alt="Starfall V" 
                   class="w-24 h-24 rounded-full object-cover"
                   style="border: 3px solid rgba(0, 255, 64, 0.3); box-shadow: 0 0 30px rgba(0, 255, 64, 0.2);">
              <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-2" style="font-family: system-ui, -apple-system, sans-serif; color: white;">
                  SLIME + Starfall V
                </h1>
                <div class="flex flex-wrap gap-4 text-sm" style="color: #9ca3af">
                  <span style="color: white; font-medium">HEFTYSAMMICH</span>
                  <span>•</span>
                  <span style="color: white; font-medium">NOV 1, 2025</span>
                  <span>•</span>
                  <span class="text-glow" style="color: #00ff40; font-weight: 600;">HEDERA</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Post Content -->
          <div class="glass-card p-8 md:p-12">
            <div class="prose prose-invert prose-lg max-w-none" style="color: #d1d5db">

              <p style="margin-bottom: 1.5rem;">
                <strong>Date:</strong> October 2025<br>
                <strong>Project:</strong> Skaterz<br>
                <strong>Partners:</strong> Silent Architect (Lead Dev) & HeftySammich (DevOps & Hedera Integration)
              </p>

              <p style="margin-bottom: 1.5rem;">
                Two months ago, Silent Architect—founder of Starfall V—reached out with an exciting proposal: partner up for the Hedera Hackathon to build an infinite runner game from scratch. We agreed on a 50/50 split for any prize winnings and dove right in.
              </p>

              <p style="margin-bottom: 1.5rem;">
                Silent took the reins as lead developer, crafting the core gameplay mechanics, UI, custom sprites, and the primary codebase. I handled DevOps duties—including repo management, server setup on Railway (keeping costs under $5/mo), and all Hedera integrations like wallet connectivity, token association flows, NFT-based character unlocking, and treasury-driven reward distribution.
              </p>

              <p style="margin-bottom: 1.5rem;">
                The result? A polished, ad-free play-to-earn mobile game blending infinite runner action with platformer elements, boss battles, and reward challenges. Players collect STAR tokens (Starfall V's protocol token) in-game and can claim them directly to a connected Hedera wallet. Unlockable characters come via NFTs or by spending earned STAR—adding real ownership and utility.
              </p>

              <p style="margin-bottom: 1.5rem;">
                We submitted on time and crushed it. Post-hackathon (once winners are announced), we'll iterate with new levels, mechanics, and features.
              </p>

              <p style="margin-bottom: 1.5rem;">
                <strong>Long-term goal:</strong> use the game as an onboarding powerhouse to bring 500 new users into the Hedera ecosystem by end of 2027.
              </p>

            </div>
          </div>

          <!-- Back to Dev Log -->
          <div class="mt-8">
            <a href="/blog.html" 
               class="glass-button inline-block px-6 py-3 rounded-lg font-medium">
              ← BACK TO DEV LOG
            </a>
          </div>

        </article>

        ${Footer()}

      </div>
    </div>
  `;
}

