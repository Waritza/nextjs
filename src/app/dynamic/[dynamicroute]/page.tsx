export default function Dynamicroute({params } :  {
    params: {
        dynamicroute: string  | number
    }
}

) {
  return (
    <div>This is Dynamic params {params.dynamicroute}</div>
  )
}
