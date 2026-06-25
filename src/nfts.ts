import './style.css'
import { NFTsPage } from './pages/nfts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = NFTsPage()

const API_BASE = 'https://api.sentx.io'
const API_KEY = import.meta.env.VITE_SENTX_API_KEY

const collections = [
  { name: 'SLIME', tokenId: '0.0.9474754' },
  { name: 'Brainz', tokenId: '0.0.10050196' },
  { name: 'Cringle', tokenId: '0.0.10190112' },
]

function resolveImage(url: string): string {
  if (!url) return ''
  if (url.startsWith('ipfs://')) return 'https://ipfs.io/ipfs/' + url.slice(7)
  return url
}

interface SentxNFT {
  serialId: number
  name: string
  image: string
}

async function fetchAllNFTs(tokenId: string): Promise<SentxNFT[]> {
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
  return all
}

async function loadCollection(tokenId: string) {
  const grid = document.getElementById('nft-grid')!
  grid.innerHTML = '<div class="nft-loading">Loading collection...</div>'

  try {
    const nfts = await fetchAllNFTs(tokenId)

    if (!nfts.length) {
      grid.innerHTML = '<div class="nft-loading">No NFTs found.</div>'
      return
    }

    grid.innerHTML = `
      <p class="nft-count">${nfts.length} NFTs</p>
      <div class="nft-grid-inner">
        ${nfts.map(nft => `
          <div class="nft-card">
            <div class="nft-img-wrap">
              <img
                src="${resolveImage(nft.image)}"
                alt="${nft.name}"
                class="nft-img"
                loading="lazy"
              />
            </div>
            <div class="nft-serial">${nft.name || '#' + nft.serialId}</div>
          </div>
        `).join('')}
      </div>
    `
  } catch {
    grid.innerHTML = '<div class="nft-loading">Failed to load collection. Please try again.</div>'
  }
}

// Tab click handling
document.querySelectorAll('.nft-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nft-tab').forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    loadCollection((tab as HTMLElement).dataset.token!)
  })
})

// Load first collection on page load
loadCollection(collections[0].tokenId)
