import { Footer } from '../components/Footer';

export function DonatePage(): string {
  return `
    <div class="min-h-screen py-12 px-4">
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
                  <div class="text-base mb-2 font-medium" style="color: #9ca3af">Ripple (XRP)</div>
                  <code class="text-sm p-3 rounded block break-all" style="background-color: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 255, 64, 0.2);">
                    rp7LnGnzGpbSbLViUdKDaaaeJCmcwGXTJ7
                  </code>
                </div>

                <div>
                  <div class="text-base mb-2 font-medium" style="color: #9ca3af">Dogecoin (DOGE)</div>
                  <code class="text-sm p-3 rounded block break-all" style="background-color: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 255, 64, 0.2);">
                    D7Y8cdeYpkuQKMDK42XzZVgL3mbGVFWsYX
                  </code>
                </div>

                <div>
                  <div class="text-base mb-2 font-medium" style="color: #9ca3af">Bitcoin (BTC)</div>
                  <code class="text-sm p-3 rounded block break-all" style="background-color: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 255, 64, 0.2);">
                    bc1qghvp9astsl56cl23aqdza8jclqm4h4x689qkph
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
        <div class="mt-8 text-center">
          <a href="/"
             class="glass-button inline-block px-6 py-3 rounded-lg font-medium">
            ← BACK TO HOME
          </a>
        </div>

        ${Footer()}

      </div>
    </div>
  `;
}

