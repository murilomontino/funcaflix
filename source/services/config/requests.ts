const OAuth = {
  generateOAuthToken: 'generate-oauth-token',
  verifyOAuthToken: 'verify-oauth-token',
  refreshOAuthToken: 'refresh-oauth-token',
}

const Product = {
  fetchByCategory: (category) => 'products/' + category,
}

const Book = {
  fetchByID: (id) => 'books/v2/' + id,
}

const TVPrograms = {
  fetchPlaylistByID: (id) => 'tv-programs/playlist/' + id,
  fetchPlaylist: 'tv-programs/playlist',
  fetchNewestVideos: 'tv-programs',
  fetchPlaylistItems: 'tv-programs/items',
}

export default {
  OAuth,
  TVPrograms,
  Product,
  Book,
}
