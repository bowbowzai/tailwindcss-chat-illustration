module.exports = {
    purge: [
        '*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'rubik': 'Rubik'
            },
            colors: {
                'light-magenta': 'hsl(293, 100%, 63%)',
                'light-violet': 'hsl(264, 100%, 61%)',
                'app-background': 'hsl(270, 20%, 96%)',
                'chat-left': 'hsl(276, 55%, 52%)',
                'chat-right': 'hsl(271, 15%, 43%)',
                'paragraph': ' hsl(270, 7%, 64%)',
                'heading': 'hsl(271, 36%, 24%)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}