const FACT_API = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
  const response = await fetch(FACT_API)
  const data = response ? await response.json() : undefined // TODO: Manage Error here
  if (data.fact) {
    return data.fact
  }
}
