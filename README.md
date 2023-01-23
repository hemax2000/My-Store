# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

this project is a store that display variety of products and you can view each products details. you can also add the wanted products with the chosen quantity.
and you can check the cart which will display all your added product, their quantities, and the total price. in the same page you can also fill out your personal information to checkout then we will take you to a confirmation page wher you can get back the product list to make additional purchases

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## install dependencies

run `npm install`

----------------------------------------

## changes after review:

- added condition to check if the product is already added

if product is not added it will add it then show this alert:

![image](https://user-images.githubusercontent.com/95032871/214104539-32a9d7fa-ae2c-4c12-9e8e-7e07af2909e4.png)


if the product is already there it will not add it and it will show this alert:

![image](https://user-images.githubusercontent.com/95032871/214104676-892e2aee-721a-4510-a9f9-f466bc3ca793.png)

--------------------------------------------

- added 3 interfaces for userinfo, product, and cart and adjusted the code accordingly

#### cart

![image](https://user-images.githubusercontent.com/95032871/214104980-31b31e68-4f66-4986-9a28-7cf99805e361.png)

#### product

![image](https://user-images.githubusercontent.com/95032871/214105372-2086a9dc-dbe7-4439-8498-d9db51adad98.png)

#### user info

![image](https://user-images.githubusercontent.com/95032871/214105128-b1bbd2dd-b46b-475b-b71a-3b0baa61c854.png)
