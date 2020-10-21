export default class ProductsService {

    getResource = () => {
        const res = require('./products.json');
        return res;
    }

    getProducts() {

        const data = this.getResource('/products.json');
        
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }
}