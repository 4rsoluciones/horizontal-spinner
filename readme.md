# SPINNER HORIZONTAL PARA IONIC 2

Componente para ionic que muestra botones horizontales con scroll para seleccionar. Se devuelve el indice del boton seleccionado.

- Instalar:

```
npm install --save github:4rsoluciones/horizontal-spinner
```

- Recordar que para que compile las dependencia propias (librerías de 4r) se debe modificar eel archivo *tsconfig.json*:
```
...
"include": [
    "src/**/*.ts",
    "node_modules/@4r/**/*.ts"
  ],
  "exclude":[
    "/node_modules(?!(\/|\\)@4r)/"
  ],
  ...
]
...
```

- Importar el módulo en cada módulo en el que se quiera utilizar

```
import {HorizontalSpinnerModule} from "@4r/horizontal-spinner/horizontal-spinner.module";

@NgModule({
	...
    imports: [
		  HorizontalSpinnerModule,
    ]
	...
})
```

- Modo de uso:

```
<ion-content>
  <horizontal-spinner [options]="options" width="100" align="left" textTop="true" [(ngModel)]="selectedOption"></horizontal-spinner>
</ion-content>
```

## Input Properties

Attr | Type | Details
--- | --- | ---
options | `Array<{title?: string, subtitle?: string, icon?: string, img?: string}>` | Detalles de los botones a mostrar
width | `number` | Ancho fijo que tendra cada botón
align | `string` | `'left'`, `'center'`, o `'right'`. La alineación del título y subtítulo con respecto a ellos cuando ambos existen
textTop | `boolean` | Si es true el texto va por encima de la imagen o icono
disabled | `boolean` | Default `false`

## Output
Indice de la opción seleccionada
