import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/static-generation/blogs">
        <a>Static Generation with Blogs and posts</a>
      </Link>
      <br />
      <br />
      <Link href="/cms-authentication">
        <a>Static Generation</a>
      </Link>
      <br />
      <br />
      <Link href="/static-client-generation">
        <a>Static Client Generation</a>
      </Link>
      <br />
      <br />
      <Link href="/static-server-generation">
        <a>Static Server Generation</a>
      </Link>
      <br />
      <br />
      <Link href="/blueprint-components">
        <a>BluePrint Component Library Demo</a>
      </Link>
      <br />
      <br />
      <Link href="/cms-authentication">
        <a>Static Generation with Revalidate</a>
      </Link>
      <br />
      <br />
      <Link href="/api/preview?slug=albums">
        <a>Preview Mode Example</a>
      </Link>
    </div>
  )
}
