// What are Decorators? they are attributes that we apply to our classes and its members and with this we can change how they behave.

// decorators are frequently used in frameworks like angular and vue like @component in angular but under the hood these decorators are a just a function that get called by js runtime (js engin). and in this functions we have a chance to modify a class, we can add new properties or methods or change the implementation of the existing the methods.

// // @Component - angular decoration to convert a class to component in web application
// class ProfileComponent {}

// To create a decorators, because it is a experimental features, we need to enable this setting in tsconfig.json:
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
