const cartRouter = require('./cart.routes')

const router = express.Router()




router.use('v1/', cartRouter)


module