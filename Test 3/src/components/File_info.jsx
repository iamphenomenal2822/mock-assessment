export default function File({
  full_name,
  language,
  stargazers_count,
  forks_count 
}){
    return(
        <div className="details">
            <h1>{full_name}</h1>
            <h2>{language}</h2>
            <p>{stargazers_count}  {forks_count}</p>
        </div>
    )
}