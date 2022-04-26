export default function SearchResults({results}) {
    return (
        <div style={{backgroundColor: "#E8E7E7", marginTop: 5, marginBottom: 5, padding: 10}}>
            {results?.map((value) => {
                return(
                    <div key={value.id}>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                )
            })}
        </div>
    );
}