import { Footer } from '../../components/Footer';

export function WildTigersPost(): string {
  return `
    <div class="min-h-screen py-12 px-4">
      <div class="max-w-4xl mx-auto">

        <article class="max-w-3xl mx-auto">
          
          <!-- Post Header -->
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
              <img src="/images/projects/Wild. Tigers.jpg" 
                   alt="Wild Tigers" 
                   class="w-24 h-24 rounded-full object-cover"
                   style="border: 3px solid rgba(0, 255, 64, 0.3); box-shadow: 0 0 30px rgba(0, 255, 64, 0.2);">
              <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-2" style="font-family: system-ui, -apple-system, sans-serif; color: white;">
                  SLIME + Wild Tigers
                </h1>
                <div class="flex flex-wrap gap-4 text-sm" style="color: #9ca3af">
                  <span style="color: white; font-medium">HEFTYSAMMICH</span>
                  <span>•</span>
                  <span style="color: white; font-medium">AUG 15, 2025</span>
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
                <strong>Date:</strong> August 2025<br>
                <strong>Project:</strong> Wild Tigers World<br>
                <strong>Partners:</strong> Mauii (Founder) & HeftySammich (Lead Developer)
              </p>

              <p style="margin-bottom: 1.5rem;">
                Mauii - core builder behind Wild Tigers - was one of my first friends in the Hedera community. After months of vibing in the Wild Tigers Discord, he opened up about Wild Tigers World, the central dApp hub for the ecosystem: custom user profiles, SentX marketplace integration, Wallet Connect, and a custom PAWS token marketplace—all wrapped in a sharp React frontend.
              </p>

              <p style="margin-bottom: 1.5rem;">
                He'd coded the whole thing solo on Replit. It worked… but barely.<br>
                Slow loads, wallet connect timeouts, API rate-limit crashes, UI glitches. Launch was stalled. He hired me to get it production-ready and bulletproof.
              </p>

              <p style="margin-bottom: 1.5rem;">
                <strong>Mission accomplished:</strong><br>
                Migrated from Replit → Git → clean CI/CD pipeline<br>
                Deployed live on Railway with auto-scaling and edge caching<br>
                Upgraded from single mirror node → cycling mirror node cluster (rate-limit proof)<br>
                Integrated full Hedera SDK, SentX API, and Wallet Connect v2 with fallback logic
              </p>

              <p style="margin-bottom: 1.5rem;">
                Optimized data queries: batched HCS calls, indexed PAWS balances, lazy-loaded profiles<br>
                Fixed UI bugs (mobile overflow, modal z-index, dark mode flicker)<br>
                Added enterprise-grade logging, error tracking, and uptime monitoring
              </p>

              <p style="margin-bottom: 1.5rem;">
                Result? Wild Tigers World now loads in &lt;1.2s globally, handles 100+ concurrent wallet connections without choking, and runs like a Tier-1 dApp—on a community budget.
              </p>

              <p style="margin-bottom: 1.5rem;">
                This is now the official base of operations for the Wild Tigers ecosystem - PAWS trading, NFT browsing, profile staking, and community quests - all in one place.
              </p>

              <p style="margin-bottom: 1.5rem;">
                <strong>Future with Mauii:</strong><br>
                Ongoing partnership. New features dropping quarterly: leaderboards, staking v2, cross-game PAWS utility, and mobile PWA support.
              </p>

              <p style="margin-bottom: 1.5rem;">
                From Replit chaos to Hedera-grade polish—SLIME strikes again.
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
              DEV LOG
            </a>
          </div>

        </article>

        ${Footer()}

      </div>
    </div>
  `;
}

