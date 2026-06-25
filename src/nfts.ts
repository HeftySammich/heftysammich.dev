import './style.css'
import { NFTsPage } from './pages/nfts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = NFTsPage()

const API_BASE = 'https://api.sentx.io'
const API_KEY = import.meta.env.VITE_SENTX_API_KEY
const PAGE_SIZE = 50

const GATEWAYS = [
  'https://dweb.link/ipfs/',
  'https://w3s.link/ipfs/',
  'https://ipfs.io/ipfs/',
]

const collections = [
  { name: 'SLIME', tokenId: '0.0.9474754' },
  { name: 'Brainz', tokenId: '0.0.10050196' },
  { name: 'Cringle', tokenId: '0.0.10190112' },
]

function resolveImage(url: string, gatewayIndex = 0): string {
  if (!url) return ''
  if (url.startsWith('ipfs://')) return GATEWAYS[gatewayIndex] + url.slice(7)
  return url
}

interface SentxNFT {
  serialId: number
  name: string
  image: string
}

// Cache fetched collections so tab switches are instant
const cache: Record<string, SentxNFT[]> = {}
let currentNFTs: SentxNFT[] = []
let currentPage = 1

async function fetchAllNFTs(tokenId: string): Promise<SentxNFT[]> {
  if (cache[tokenId]) return cache[tokenId]
  const all: SentxNFT[] = []
  let page = 1
  let total = Infinity
  while (all.length < total) {
    const url = `${API_BASE}/v1/public/token/nfts?apikey=${API_KEY}&token=${tokenId}&limit=200&page=${page}&sortBy=serial&sortDirection=ASC`
    const res = await fetch(url)
    if (!res.ok) break
    const data = await res.json()
    if (!data.success) break
    all.push(...data.nfts)
    total = data.total
    if (data.nfts.length < 200) break
    page++
  }
  cache[tokenId] = all
  return all
}

function renderPage(nfts: SentxNFT[], page: number, total: number) {
  const grid = document.getElementById('nft-grid')!
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const slice = nfts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  grid.innerHTML = `
    <p class="nft-count">${total} NFTs — Page ${page} of ${totalPages}</p>
    <div class="nft-grid-inner">
      ${slice.map(nft => `
        <div class="nft-card">
          <div class="nft-img-wrap">
            <img
              src="${resolveImage(nft.image, 0)}"
              data-raw="${nft.image}"
              data-gw="0"
              alt="${nft.name}"
              class="nft-img"
              loading="lazy"
              onerror="
                var next = parseInt(this.dataset.gw) + 1;
                var gws = ${JSON.stringify(GATEWAYS)};
                if(next < gws.length && this.dataset.raw.startsWith('ipfs://')) {
                  this.dataset.gw = next;
                  this.src = gws[next] + this.dataset.raw.slice(7);
                }
              "
            />
          </div>
          <div class="nft-serial">${nft.name || '#' + nft.serialId}</div>
        </div>
      `).join('')}
    </div>
    <div class="nft-pagination">
      <button class="nft-page-btn" id="nft-prev" ${page <= 1 ? 'disabled' : ''}>← Prev</button>
      <button class="nft-page-btn" id="nft-next" ${page >= totalPages ? 'disabled' : ''}>Next →</button>
    </div>
  `

  document.getElementById('nft-prev')?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderPage(currentNFTs, currentPage, currentNFTs.length) }
  })
  document.getElementById('nft-next')?.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderPage(currentNFTs, currentPage, currentNFTs.length) }
  })
}

async function loadCollection(tokenId: string) {
  const grid = document.getElementById('nft-grid')!
  currentPage = 1
  grid.innerHTML = '<div class="nft-loading">Loading collection...</div>'
  try {
    currentNFTs = await fetchAllNFTs(tokenId)
    if (!currentNFTs.length) {
      grid.innerHTML = '<div class="nft-loading">No NFTs found.</div>'
      return
    }
    renderPage(currentNFTs, currentPage, currentNFTs.length)
  } catch {
    grid.innerHTML = '<div class="nft-loading">Failed to load collection. Please try again.</div>'
  }
}

document.querySelectorAll('.nft-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nft-tab').forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    loadCollection((tab as HTMLElement).dataset.token!)
  })
})

loadCollection(collections[0].tokenId)
