export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sapiente nam asperiores cum perferendis eius fuga dolorum inventore quisquam consequatur minima corrupti officia animi, optio assumenda ea suscipit ullam labore.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Consectetur adipisicing elit. Voluptatibus sapiente nam asperiores cum perferendis eius fuga dolorum inventore quisquam consequatur minima corrupti officia animi, optio assumenda ea suscipit ullam labore.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Voluptatibus sapiente nam asperiores cum perferendis eius fuga dolorum inventore quisquam consequatur minima corrupti officia animi, optio assumenda ea suscipit ullam labore.',
            picture: null
        },
    ]
})
