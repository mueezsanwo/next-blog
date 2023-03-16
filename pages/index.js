import Head from 'next/head';
import { createClient } from 'contentful';
import PostCard from './api/components/PostCard';


export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {posts.map((post, index) => (
        <PostCard post={post} key={index} /> 
        ))}
      </div>
    </div>
  )
}

//getServerSideProps - SSR - request time 
//getStaticProps - SSG - build time

export async function getStaticProps(){
  const client = createClient({
    space: 'x964ga3vb0fz' ,
    accessToken: 'k4h5CHIc2lm442GXMIELjsDd5exCBv1_PENIWKs3_XM'
  })

  const res = await client.getEntries({content_type: 'blog'})

  return{
    props: {
      posts: res.items,
    },
    revalidate: 1,
  }
}
