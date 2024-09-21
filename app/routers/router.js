let express = require('express');
let router = express.Router();

const customers = require('../controllers/controller.js');
const products = require('../controllers/controller.js');
const suppliers = require('../controllers/controller.js');
const employees = require('../controllers/controller.js');
const automovilController = require('../controllers/controller');

// Rutas para Customer
router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

// Rutas para Product
router.post('/api/products/create', products.createProduct);
router.get('/api/products/all', products.retrieveAllProducts);
router.get('/api/products/onebyid/:id', products.getProductById);
router.get('/api/products/filterbyprice', products.filterProductsByPrice);
router.get('/api/products/pagination', products.paginationProducts);
router.get('/api/products/pagefiltersort', products.pagingFilteringSortingProducts);
router.put('/api/products/update/:id', products.updateProductById);
router.delete('/api/products/delete/:id', products.deleteProductById);

// Rutas para Supplier
router.post('/api/suppliers/create', suppliers.createSupplier);
router.get('/api/suppliers/all', suppliers.retrieveAllSuppliers);
router.get('/api/suppliers/onebyid/:id', suppliers.getSupplierById);
router.put('/api/suppliers/update/:id', suppliers.updateSupplierById);
router.delete('/api/suppliers/delete/:id', suppliers.deleteSupplierById);

// Rutas para Employee
router.post('/api/employees/create', employees.createEmployee);
router.get('/api/employees/all', employees.retrieveAllEmployees);
router.get('/api/employees/onebyid/:id', employees.getEmployeeById);
router.put('/api/employees/update/:id', employees.updateEmployeeById);
router.delete('/api/employees/delete/:id', employees.deleteEmployeeById);


router.post('/automoviles', automovilController.create);

module.exports = router;
