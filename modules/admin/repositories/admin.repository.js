const dbConnection = require('../../../config/database');

const functions = {
  getImage: (req, res) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM slider';
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        
        let data = [];
        if (results.length > 0) {
          data = results;
        }
        
        resolve(data);
      });
    });
  },

  getAbout:(req,res)=>{
    return new Promise((resolve,reject)=>{
      const query = 'SELECT * FROM about';
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
      const query = 'SELECT * FROM products';
      dbConnection.query(query,(error,results,fields)=>{
        if(error){
          console.log(error);
          return reject(error)
        }else{
         
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

  deactivate: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE slider SET status=0 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
       
        let data = [];
        if (results.length > 0) {
          data = results;
        }
      
        resolve(data);
      });
    });
  },

  activate: (id) => {
    return new Promise((resolve, reject) => {
        console.log('ccccccccc');;
      const query = `UPDATE slider SET status=1 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  getImageCondition: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM slider where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        
        let data = [];
        if (results.length > 0) {
          data = results;
        }
      
        resolve(data);
      });
    });
  },

  insertSlider: (img) => {
    return new Promise((resolve, reject) => {
      
      const query = `INSERT INTO slider(img) VALUES('${img}')`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }

        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },
  deleteSlider: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `DELETE FROM slider WHERE id = ${id};`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
       
        let data = [];
        if (results.length > 0) {
          data = results;
        }
  
        resolve(data);
      });
    });
  },

  getCategory: (req,res) => {
    return new Promise((resolve, reject) => {

      const query = `SELECT * FROM category`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },

  activeCategory: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE category SET status=1 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  deactiveCategory: (id) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE category SET status=0 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  deleteCategory: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM category WHERE id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
  
        resolve(results);
      });
    });
  },

  insertCategory: (req,res) => {
    return new Promise((resolve, reject) => {
      
      const query = `INSERT INTO category(category,category_details) VALUES('${req.body.category}','${req.body.category_details}')`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }

        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },

  activePoduct: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE products SET status=1 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  deactivePoduct: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE products SET status=0 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM products WHERE id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
  
        resolve(results);
      });
    });
  },

  insertProduct: (req,res) => {
    return new Promise((resolve, reject) => {
      
      const query = `INSERT INTO products(product,img) VALUES('${req.body.product}','${req.files[0].filename}')`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }

        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },

  getPopularProduct: (req,res) => {
    return new Promise((resolve, reject) => {

      const query = `SELECT * FROM popular_products`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },

  deactivePopular: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE popular_products SET status=0 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  activePopular: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE popular_products SET status=1 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  deletePopular: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM popular_products WHERE id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
  
        resolve(results);
      });
    });
  },

  insertPopular: (req,res) => {
    return new Promise((resolve, reject) => {
      
      const query = `INSERT INTO popular_products(product,img) VALUES('${req.body.product}','${req.files[0].filename}')`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }

        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },

  getAboutShop: (req,res) => {
    return new Promise((resolve, reject) => {

      const query = `SELECT * FROM about`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },

  deactiveAbout_Shop: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE about SET status=0 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  activeAbout_Shop: (id) => {
    return new Promise((resolve, reject) => {
        
      const query = `UPDATE about SET status=1 where id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
    
        let data = [];
        if (results.length > 0) {
          data = results;
        }
     
        resolve(data);
      });
    });
  },

  deleteAbout_Shop: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM about WHERE id=${id}`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
  
        resolve(results);
      });
    });
  },

  insertAboutShop: (req,res) => {
    return new Promise((resolve, reject) => {
      
      const query = `INSERT INTO about(about_shop,worktime) VALUES('${req.body.about_shop}','${req.body.worktime}')`;
      dbConnection.query(query, (error, results, fields) => {
        if (error) {
          return reject(error);
        }

        let data = [];
        if (results.length > 0) {
          data = results;
        }
       
        resolve(data);
      });
    });
  },
  

};

module.exports = functions;