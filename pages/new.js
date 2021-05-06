import Head from 'next/head'
import SnippetForm from '../components/SnippetForm'

function Home() {
  return (
    <div>
      <Head>
        <title>Create new snippet</title>
      </Head>
      <main className="max-w-lg mx-auto">
        <h1 className="text-red-100 text-2xl mb-4">
          New Snippet
        </h1>
        <SnippetForm />
      </main>
    </div>
  )
}

export default Home
