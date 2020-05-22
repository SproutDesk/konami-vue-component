export default {
    name: 'KonamiEvent',
    render: (h) => h(),
    mounted() {
        const SEQUENCE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
        let position = 0
        this.listener = document.addEventListener('keydown', (event) => {
            if (event.keyCode === SEQUENCE[position]) {
                position += 1
                if (SEQUENCE.length === position) {
                    this.$emit('konami')
                    position = 0
                }
            } else {
                position = 0
            }
        })
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.listener)
    },
}
