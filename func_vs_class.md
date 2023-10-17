## FUNCTIONAL vs CLASS <components>

### IoC - Inversion of Control
[COMPONENT] --- loose coupling --- [REACT-DOM]
    ^
    ^
   |me|                                 |X1|[Component][X2] [XN]
## Class Compon
   class Component {                        new Component()

    constructor(props) {
        ....
    }

    mount() {
        ...do something
    }

    unmount() {

    }
   }

   class    -> predefined methods
   function -> hooks

   <template>
    ...
    <Component />
   </template> 

   Fazele de baza a unei componente (lifecycle) : 
    1.initiere, 
    2.montarea, 
    3.updatarea x N,
    4.demontare

## Functional Comp
            pure components care are proprietati
    function Component(props) {
        STATE, EFFECTS
        return <JSX>
    }