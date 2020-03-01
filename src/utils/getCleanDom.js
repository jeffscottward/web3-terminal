import cheerio from 'cheerio'
import cleaner from 'clean-html'
import axios from 'axios'

export default async function getCleanDOM (url) {
  // Wrap in a recusive retry func
  async function retry() {
    try {
      // AJAX to get HTML
      this.siteRequest = await axios.get(url)
      this.siteURLHTML = this.siteRequest.data

      // Clean it for sanity
      cleaner.clean(this.siteURLHTML, html => {
        this.siteURLHTMLClean = html
      })

      // Send back page DOM
      this.siteURLDOM = cheerio.load(this.siteURLHTMLClean)
      return this.siteURLDOM
    } catch (err) {
      console.log(`ERROR - TRYING ${url} AGAIN`)
      if(!err.response.status === 404) {
        retry()
      } else {
        return '404'
      }
    }
  }
  return retry()
}
