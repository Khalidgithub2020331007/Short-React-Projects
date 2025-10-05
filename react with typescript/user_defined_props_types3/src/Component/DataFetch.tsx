type demoProp1={
    status:string
}
type deomProp2={
    status:number
}
type demoProp=demoProp1|deomProp2  // it show error but it works

type DatafetchProps={
    status:'loading'|'error'|'success'
}
const DataFetch = ({status}:DatafetchProps) => {
    if (status==='loading')
    {
        return <h2>Data is loading....</h2>
    }
    else if (status==='error'){
        return <h3>Error, no correction</h3>
    }
  return (
    <div>
        <h2>data fetched successfull</h2>
      
    </div>
  )
}
export default DataFetch