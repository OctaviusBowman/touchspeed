export default () => {
    const text =
        [
            'The quick fox jumped over the lazy brown dog',
            'If time could tell it\'s story, what a story it would tell',
            'They say a picture is worth a thousand words, but why speak when no one\'s around to listen',
            'Everything I said, messing with your head now, messing with your head'
        ]

    return (
        text[Math.floor(Math.random() * text.length)]
    )
}