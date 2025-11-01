import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function StarfallVPost(): string {
  return `
    <div class="min-h-screen py-12 px-4">
      <div class="max-w-4xl mx-auto">

        ${Header()}

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
              
              <!-- PASTE YOUR BLOG POST CONTENT HERE -->
              <p>
                The Hedera Network is home to some of the most innovative and successful NFT collections in the blockchain space. 
                From groundbreaking artwork to communities that redefine digital ownership, Hedera has proven to be a fertile ground 
                for creativity and innovation.
              </p>

              <p>
                [Add your full blog post content here - you can use HTML tags like &lt;p&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt;, etc.]
              </p>

              <!-- Example formatting:
              <h2>Section Title</h2>
              <p>Paragraph text...</p>
              
              <h3>Subsection</h3>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
              </ul>
              -->

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

