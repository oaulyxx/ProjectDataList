const Height90upController = require('./controllers/Height90upController')
const Height110upController = require('./controllers/Height110upController')
const Height130upController = require('./controllers/Height130upController')
const Height155upController = require('./controllers/Height155upController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Height90up
    app.get('/height90ups', Height90upController.index)
    
    app.post('/height90up', Height90upController.create)
    
    app.put('/height90up/:height90upId', Height90upController.put)
    
    app.delete('/height90up/:height90upId', Height90upController.delete)
    
    app.get('/height90up/:height90upId', Height90upController.show)

    
    // Height110up
    app.get('/height110ups', Height110upController.index)
    
    app.post('/height110up', Height110upController.create)
    
    app.put('/height110up/:height110upId', Height110upController.put)

    app.delete('/height110up/:height110upId', Height110upController.delete)
    
    app.get('/height110up/:height110upId',Height110upController.show)

    
    // Height130up
    app.get('/height130ups', Height130upController.index)
    
    app.post('/height130up', Height130upController.create) 
    
    app.put('/height130up/:height130upId', Height130upController.put)
    
    app.delete('/height130up/:height130upId', Height130upController.delete)
    
    app.get('/height130up/:height130upId', Height130upController.show)


    // Height155up
    app.get('/height155ups', Height155upController.index)
    
    app.post('/height155up', Height155upController.create)
    
    app.put('/height155up/:height155upId', Height155upController.put)
    
    app.delete('/height155up/:height155upId', Height155upController.delete)
    
    app.get('/height155up/:height155upId', Height155upController.show)
}