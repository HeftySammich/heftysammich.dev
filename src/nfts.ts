import './style.css'
import { NFTsPage } from './pages/nfts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = NFTsPage()

const API_BASE = 'https://api.sentx.io'
const API_KEY = import.meta.env.VITE_SENTX_API_KEY
const IPFS_GATEWAY = import.meta.env.VITE_IPFS_GATEWAY || 'https://ipfs.io/ipfs/'
const PAGE_SIZE = 50

const collections = [
  { name: 'SLIME', tokenId: '0.0.9474754' },
  { name: 'BrainZ', tokenId: '0.0.10050196' },
  { name: 'Cringle', tokenId: '0.0.10190112' },
]

const collectionMeta: Record<string, { description: string; royalty: string }> = {
  '0.0.9474754': {
    description: 'SLIME is my flagship project. Created to fund infrastructure for creators on Hedera.',
    royalty: '5%',
  },
  '0.0.10050196': {
    description: 'A zombie-themed limited edition drop - rare, spooky, and never to be minted again.',
    royalty: '2.5%',
  },
  '0.0.10190112': {
    description: 'A holiday-themed bounty collection - holders of serials 1-10 were rewarded with prizes from projects across the Hedera ecosystem.',
    royalty: 'None',
  },
}

function toImageUrl(image: string): string {
  if (!image) return ''
  // Private Pinata gateway → rewrite to configured gateway
  if (image.includes('.mypinata.cloud/ipfs/')) {
    const cid = image.split('/ipfs/')[1] || ''
    return IPFS_GATEWAY + cid
  }
  // ipfs:// protocol → rewrite to HTTP gateway, encoding # in filenames
  if (image.startsWith('ipfs://')) {
    const path = image.replace('ipfs://', '')
    const slash = path.lastIndexOf('/')
    const dir = path.substring(0, slash + 1)
    const file = path.substring(slash + 1).replace(/%23/g, '#').replace(/#/g, '%23')
    return IPFS_GATEWAY + dir + file
  }
  return image
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
let currentTokenId = collections[0].tokenId

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

function renderCollectionInfo(tokenId: string, count: number): string {
  const meta = collectionMeta[tokenId]
  return `
    <div class="collection-info">
      <div class="collection-info-item">
        <span class="collection-info-label">Network</span>
        <span class="collection-info-value">Hedera</span>
      </div>
      <div class="collection-info-item">
        <span class="collection-info-label">Collection Size</span>
        <span class="collection-info-value">${count.toLocaleString()} NFTs</span>
      </div>
      <div class="collection-info-item">
        <span class="collection-info-label">Royalty</span>
        <span class="collection-info-value">${meta.royalty}</span>
      </div>
      <div class="collection-info-item collection-info-wide">
        <span class="collection-info-label">Description</span>
        <span class="collection-info-value">${meta.description}</span>
      </div>
    </div>
  `
}

function renderPage(nfts: SentxNFT[], page: number, total: number, tokenId: string) {
  const grid = document.getElementById('nft-grid')!
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const slice = nfts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  grid.innerHTML = `
    ${renderCollectionInfo(tokenId, total)}
    <p class="nft-count">Page ${page} of ${totalPages}</p>
    <div class="nft-grid-inner">
      ${slice.map(nft => `
        <div class="nft-card">
          <div class="nft-img-wrap">
            <img
              src="${toImageUrl(nft.image)}"
              alt="${nft.name}"
              class="nft-img"
              crossorigin="anonymous"
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
    if (currentPage > 1) { currentPage--; renderPage(currentNFTs, currentPage, currentNFTs.length, currentTokenId) }
  })
  document.getElementById('nft-next')?.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderPage(currentNFTs, currentPage, currentNFTs.length, currentTokenId) }
  })
}

async function loadCollection(tokenId: string) {
  const grid = document.getElementById('nft-grid')!
  currentPage = 1
  currentTokenId = tokenId
  grid.innerHTML = '<div class="nft-loading">Loading collection...</div>'
  try {
    currentNFTs = await fetchAllNFTs(tokenId)
    if (!currentNFTs.length) {
      grid.innerHTML = '<div class="nft-loading">No NFTs found.</div>'
      return
    }
    renderPage(currentNFTs, currentPage, currentNFTs.length, tokenId)
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
