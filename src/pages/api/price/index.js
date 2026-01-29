export default function handler(req, res) {
    setTimeout(() => {
        res.status(200).json({ price: Math.round(Math.random() * 200) })
    }, 2500)
}