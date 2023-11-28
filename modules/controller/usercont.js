const dbConnection = require('../../config/database')
const userRepo = require('../repositories/user.repositories')
class usercont {
    constructor() { }
    home = async(req, res) => {
        try {
            const query1 = 'SELECT * FROM slider'
            const query2 = 'SELECT * FROM userdata WHERE id=1'
            const query3 = 'SELECT * FROM category WHERE status=1 LIMIT 3'
            const about  = await userRepo.getAbout(req, res)
            const products= await userRepo.getProduct(req,res)
            const best_products=await userRepo.getBestProduct(req,res)
            console.log(about[0],'0000000000000000000000000000000000');
            console.log(products);
            dbConnection.query(query1, (error, results, fields) => {
                dbConnection.query(query2, (error, result2, fields) => {
                    dbConnection.query(query3, (error, result3, fields) => {
                       
                        res.render('../modules/views/home', {
                            slider: results,
                            userdata: result2[0],
                            category: result3,
                            about:about[0],
                            products:products,
                            popular:best_products
                        })
                    })

                })

            }
            )


        } catch (err) {
            throw err
        }
    }
    text = async (req, res) => {
        try {
            // const query='SELECT * FROM slider'
            // dbConnection.query(query,(error,results,fields)=>{
            let arr = []
            var results = []
            results = await userRepo.getImage(req, res)
            console.log(results);
            for (let val of results) {
                arr.push(val.img)
            }
            res.status(200).json({ msg: arr })
            // })


        } catch (err) {
            throw err
        }
    }

    about = async (req, res) => {
        try {
            var results = []
            results = await userRepo.getAbout(req, res)

            res.status(200).json({ msg: results })


        } catch (err) {
            throw err
        }
    }

}
module.exports = new usercont()
