const dbConnection = require('../../config/database');

const functions = {
  getImage: (req, res) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT img FROM slider';
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        console.log('----------gfhghgfhgfyyyyyyyyyy-', results);
        let data = [];
        if (results.length > 0) {
          data = results;
        }
        console.log(data, 'ppppppppppppppppp');
        resolve(data);
      });
    });
  },

  getAbout:(req,res)=>{
    return new Promise((resolve,reject)=>{
      const query = 'SELECT * FROM about WHERE status=1';
      dbConnection.query(query,(error,results,fields)=>{
        if(error){  
          return reject(error)
        }else{
          resolve(results)
        }
      })
    })
  },

  getProduct:(req,res)=>{
    return new Promise((resolve,reject)=>{
      const query = 'SELECT * FROM products LIMIT 4';
      dbConnection.query(query,(error,results,fields)=>{
        if(error){
          console.log(error);
          return reject(error)
        }else{
          console.log(results);
          resolve(results)
        }
      })
    })
  },
  getBestProduct:(req,res)=>{
    return new Promise((resolve,reject)=>{
      const query = 'SELECT * FROM popular_products';
      dbConnection.query(query,(error,results,fields)=>{
        if(error){
          console.log(error);
          return reject(error)
        }else{
          console.log(results);
          resolve(results)
        }
      })
    })
  },

};

module.exports = functions;
