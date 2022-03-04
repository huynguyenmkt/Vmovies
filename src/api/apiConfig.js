const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey:'1a33eb116cd097d1b8dd5ccabfb5a090',
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original${imagePath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`
}

export default apiConfig