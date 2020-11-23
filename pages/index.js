import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/static-generation/blogs">
        <a>Static Generation</a>
      </Link>
      <br />
      <br />
      <Link href="/static-client-generation">
        <a>Static Client Generation</a>
      </Link>
      <br />
      <br />
      <Link href="/blueprint-components">
        <a>BluePrint Component Library Demo</a>
      </Link>
      <br />
      <br />
      <Link href="/cms-authentication">
        <a>Authentication Example</a>
      </Link>
    </div>
  )
}
