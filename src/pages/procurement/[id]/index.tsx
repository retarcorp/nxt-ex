import { useRouter } from 'next/router'
import ProcurementDescription from '@/components/ProcurementDescription'; 

export default function ProcurementDescriptionPage({ data }: { data: any }) {
    const router = useRouter();
    const { id } = router.query;

    return <> 
        <ProcurementDescription data={data}></ProcurementDescription>
    </>;
}

export async function getServerSideProps({ params }: {params: { id: string }}) {
    
    // Fetch data from external API
    const res = await fetch('https://tenders.guru/api/hu/tenders/' + params.id);
    const data = (await res.json());
  
    // Pass data to the page via props
    return { props: { data } }
  }