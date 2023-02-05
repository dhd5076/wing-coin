export default async (req, res) => {
    const { method } = req;
    switch(method) {
        case 'GET':
            try {
                res.status(200).json({
                    err: false,
                    data: 'PONG'
                })
            } catch (error) {
                console.log(error.message)
                res.status(500).json({
                    err: true,
                    data: null
                })
            }
    }
}