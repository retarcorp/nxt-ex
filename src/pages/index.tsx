type ProcurementItem = {
  title: string; 
  place: string; 
  awarded_value_eur: string
  id: string
}

export default function Procurements(props: any & {data: ProcurementItem[]}) {
  const data = props.data;

  return <>
      {data && data?.map((item: ProcurementItem) => <div style={{marginBottom: 10}} key={item.id}>
          <h3>{item.title}</h3>
          <h4>{item.place} - {item.awarded_value_eur} EUR</h4>
          <button> <a href={'/item/'+item.id}>Go to procurement {item.id}</a></button>
          <button> <a href={'/procurement/'+item.id}>Go to procurement (SSR) {item.id}</a></button>
          <hr/>
      </div>)}
  </>;
}

export async function getStaticProps() {
  const res = await fetch('https://tenders.guru/api/hu/tenders');
  const data = (await res.json()).data; // as ProcurementItem[];
  return {
      props: {
          data
      }
  }
}