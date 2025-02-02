import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  author: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('/blog/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        author: frontmatter.author,
        desc: frontmatter.desc,
        url,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}