export const database = [
    { name: 'Avatar : The Way of Water', imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600…D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg" },
    { name: 'Cirkus', imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600…D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00145851-wbbeyryctv-portrait.jpg"  },
    { name: 'Drishyam 2', imgUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600…D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331997-lmpkuaycqf-portrait.jpg" },
    { name: 'Bhediya', imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600…D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312739-eqyattwrye-portrait.jpg"  },
    { name: '22 Jump Street', imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaoamRKQDYxVXvXg6LUl6brQmMdFbpZvOQ2G_nD6u5uq16tiVh' },
    { name: 'Cars 2', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg' },
   // { name: 'Cars 3', imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars3_19643_3ab8aca1.jpeg' }

]
export const availibility = {
    'Avatar : The Way of Water': [1, 2, 5, 8, 9,22,20,11],
    '22 Jump Street': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Cirkus': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Drishyam': [1,  3, 4, 5, 6,15,16,17,18,19,20,,22,23,24],
    'Bhediya': [1, 2, 3, 4, 5, ,15,16,17,18,19,20,21,23,24],
    'Cars 2': [4, 6, 8,10,11,12,13,14,15,16],
    //'Cars 3': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }