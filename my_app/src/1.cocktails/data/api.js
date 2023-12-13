







export const fetchDrinks = async(url) => {
    const resp = await fetch(url)
    try {
        const data = await resp.json()
        if(!resp.ok) {
            throw {
                message:'Failed to fetch drinks.',
                status: resp.status
            }
        }
        return data
    } catch (error) {
        console.log(error)
    }
}






