import useSWR from "swr"

async function fetcherFunc(url) {
    const res = await fetch(url);
    return res.json();
}

export default function Blog(props) {
  const url = "http://localhost:3000/api/posts";
  const {data, error} = useSWR(url, fetcherFunc, {initialData: props, revalidateOnMount: true });

  const {posts} = data;
  if (!posts) return <div>fetching</div>

  return (
    <div>
        Demo blog
        {
            posts.map((post) =>
                <div>
                    <h4>Article: {post.title}</h4>
                    <p>{post.content}</p>
                    <br/>
                </div>
            )
        }
    </div>
  )
}

export async function getStaticProps(context) {
    const res = fetch("http://localhost:3000/api/posts");
    const {posts} = await (await res).json()

    return {
        props: {
            posts
        }
    }
}