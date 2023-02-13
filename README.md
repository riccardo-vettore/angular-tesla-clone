# Angular Tesla Clone - Tesla Components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

This project clone Tesla Web App with [Tesla Components](https://github.com/riccardo-vettore/tesla-components).

## Tesla Components Installation
install tesla components as a dependency.
```bash
npm i tesla-components
```

## How to use Tesla Components 
```js
// Import component
// ...
import 'tesla-components'

@NgModule({
    declarations: [/* ... */],
    imports: [/* ... */],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
```html
// Use the component
<tesla-button variant="dark"
              (click)="clickHandler()"
>
    Lorem ipsum
</tesla-button>
```
```js
clickHandler() {
    console.log('clicked');
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.