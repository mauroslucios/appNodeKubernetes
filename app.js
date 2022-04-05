const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');


    //swagger
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //Public static
    app.use(express.static(path.join(__dirname,"/public")))

     //Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //rotas admin
        
    app.get("/", (req,res)=>{
        res.json({ message: "Hello API"});
    })

   
    

const PORT = 3003;
app.listen(PORT,()=>{
    console.log(`app running on url http://localhost:${PORT}`);
})