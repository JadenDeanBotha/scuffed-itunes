//
//

async function fetchMusic() {
    try{
        //This first fetch deals with the music endpoint from the api
      const response = await fetch(`https://itunes.apple.com/search?term=bob&media=music&limit=100`)
      return response.status;

}catch(error){
    throw error
}}

test('Api status check', async () => {
    const data = await fetchMusic();
    expect(data).toBe(200)
})