export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `maria${codigo}@gmail.com`
    })
}
// Pegando valores pela URL