export default function ProcDescription(props: { data: any }) {
    const data = props.data;

    return (<div>
        <h4>Procurement id: {data.id}</h4>
        <h1>{data.title}</h1>
        <h2>{data.place}</h2>
        <h4>{data.awarded_value} {data.awarded_currency} | {data.awarded_value_eur} EUR</h4>
        <p>{data.description}</p>
        <hr/>
        <div>Phase: {data.phase}</div>
        <div><i>Category: {data.category}</i></div>
    </div>);
}