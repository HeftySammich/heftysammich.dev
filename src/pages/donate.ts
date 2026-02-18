import { Footer } from '../components/Footer';

export function DonatePage(): string {
  return `
    <div class="min-h-screen pb-12 px-4">
      <div class="max-w-2xl mx-auto">

        <div class="mt-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-12 text-glow">DONATE</h1>

          <div class="max-w-3xl mx-auto">

            <!-- Crypto Section -->
            <div class="glass-card p-8">

              <div class="space-y-6 text-left">
                <div>
                  <div class="text-base mb-2 font-medium" style="color: #9ca3af">Hedera (HBAR)</div>
                  <code class="text-sm p-3 rounded block break-all" style="background-color: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 255, 64, 0.2);">
                    0.0.10022142
                  </code>
                </div>

                <div>
                  <div class="text-base mb-2 font-medium" style="color: #9ca3af">Monero (XMR)</div>
                  <code class="text-sm p-3 rounded block break-all" style="background-color: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 255, 64, 0.2);">
                    88r6sT4UnwDgWYbNLGyp3W7W2boJykWovjBFZCCKSZ2scMHpnXZSQoahfiuJhjKoT6NjbGUXWs2QaB3MBxKvp8VT9L4WadD
                  </code>
                </div>
              </div>
            </div>

          </div>

          <p class="mt-8" style="color: #9ca3af">
            Thank you for your support! 🙏
          </p>
        </div>

        <!-- Back to Home -->
        <div class="mt-8">
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

