import { useRouter } from 'next/router'

export default function ProcurementDescription({ data }: { data: any }) {
    const router = useRouter();
    const { id } = router.query;

    return <div>
        <h4>Procurement id: {id}</h4>
        <h1>{data.title}</h1>
        <h2>{data.place}</h2>
        <h4>{data.awarded_value} {data.awarded_currency} | {data.awarded_value_eur} EUR</h4>
        <p>{data.description}</p>
        <hr/>
        <div>Phase: {data.phase}</div>
        <div><i>Category: {data.category}</i></div>
    </div>;
}

export async function getStaticPaths() {
    const res = await fetch('https://tenders.guru/api/hu/tenders');
    const data = (await res.json()).data;
    const paths = data.map(({ id }: { id: string }) => ({ params: { id } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://tenders.guru/api/hu/tenders/${params.id}`)
    const data = await res.json()

    // Pass post data to the page via props
    return { props: { data } }
}