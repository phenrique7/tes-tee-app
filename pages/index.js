import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tes Tee App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Tes Tee App!</h1>
      </main>
    </div>
  )
}
