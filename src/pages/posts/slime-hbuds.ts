import { Footer } from '../../components/Footer';

export function HbudsPost(): string {
  return `
    <div class="min-h-screen py-12 px-4">
      <div class="max-w-4xl mx-auto">

        <article class="max-w-3xl mx-auto">
          
          <!-- Post Header -->
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
              <img src="/images/projects/buds.jpg" 
                   alt="ħBUDS" 
                   class="w-24 h-24 rounded-full object-cover"
                   style="border: 3px solid rgba(0, 255, 64, 0.3); box-shadow: 0 0 30px rgba(0, 255, 64, 0.2);">
              <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-2" style="font-family: system-ui, -apple-system, sans-serif; color: white;">
                  SLIME + ħBUDS
                </h1>
                <div class="flex flex-wrap gap-4 text-sm" style="color: #9ca3af">
                  <span style="color: white; font-medium">HEFTYSAMMICH</span>
                  <span>•</span>
                  <span style="color: white; font-medium">OCT 1, 2025</span>
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
                <strong>Date:</strong> September 2025<br>
                <strong>Project:</strong> ScribbleXRB<br>
                <strong>Partners:</strong> NoGrave (Founder, ħBUDS) & HeftySammich (SLIME)
              </p>

              <p style="margin-bottom: 1.5rem;">
                NoGrave, founder of ħBUDS, had already launched ScribbleXRB - a sleek, minimal note-taking app live on iOS and Android with a growing user base. After diving into the Hedera ecosystem, he saw the perfect upgrade: store notes immutably on the Hedera File Service (HFS), encrypted with the user's wallet private key for true ownership and privacy. He brought me on board to make it happen.
              </p>

              <p style="margin-bottom: 1.5rem;">
                My role: integrate the Hedera SDK into both native apps, enable encrypted file storage on HFS, and ensure secure retrieval/overwrites - all tied to the user's wallet. Notes are encrypted client-side using the wallet's private key, meaning only the owner can decrypt and read them in-app. No middlemen, no servers, pure decentralization.
              </p>

              <p style="margin-bottom: 1.5rem;">
                Beyond the hashgraph layer, we leveled up the app:<br>
                Added Dark Mode (finally!)<br>
                Built native sharing (text, PDFs, images)<br>
                Replaced local storage with a robust SQLite + sync layer for offline resilience and cross-device continuity
              </p>

              <p style="margin-bottom: 1.5rem;">
                The integration is live, lean, and lightning-fast—HFS transactions cost fractions of a cent, and everything stays on-chain forever.
              </p>

              <p style="margin-bottom: 1.5rem;">
                <strong>Next steps:</strong><br>
                Submit Scribble XRB to HashPack's dApp directory for seamless wallet-connected access.<br><br>
                Push updated native apps to App Store & Google Play with full Hedera branding and onboarding flows.
              </p>

              <p style="margin-bottom: 1.5rem;">
                Privacy-first notes, powered by Hedera—on your phone, in your control.
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

