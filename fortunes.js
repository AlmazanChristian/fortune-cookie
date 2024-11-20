const getRandomMessage = () => {
    const messages = [
        "A journey of a thousand miles begins with a single step.",
        "Your dreams are closer than you think.",
        "The key to success lies within your heart.",
        "Good fortune will soon find its way to you.",
        "A fresh start brings new opportunities.",
        "You will soon be surrounded by good friends.",
        "Your kindness will lead you to unexpected rewards.",
        "Patience is the companion of wisdom.",
        "The next chapter of your life will be full of excitement.",
        "Success is within your reach; keep moving forward."
    ]

    return messages[Math.floor(Math.random() * 10)]
}

module.exports = getRandomMessage