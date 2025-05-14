*** RESUME ***
  
  Aplicacion que se crea para visualizar un carro de compra que se puede modificar adicionando elementos desde un listado de productos y modificar las cantidades con botones dentro del mismo carrito.

  Tambien se implemento un fetch con el cual se extrae desde firebase el listado de productos.

  Una vez agregados los productos en el carrito, se almacenan en localStore del computador para que el usuario pueda tener su propio resguardo y recuperar lo que tenia en caso de cerrar la ventana.

*** DETALLES DE IMPLEMENTACION ***

Proyecto desarrollado para aplicar conocimientos de: 
  * REACT-REDUX: Libreria que permite relacionar react con la utilizacion de redux (o redux-toolkit)

    Hooks utilizados:
       - useDispatch: Permite ejecutar las diferentes acciones exportadas en el archivo slice que se crea.
  
        * CREACION *
        const dispatch = useDispatch();
      
        * USO *
        dispatch(actionsImoprted.nameFunctionAction(parameters));

      - useSelector: Permite acceder a una parte del estado manejado en un slice configurado en "configureStore".

            const stateSlice = useSelector(state => state.nameAccessReducer_1.nameSliceStateProperty);
    
* REDUXJS/TOOLKIT: Es una libreria que te permite manejar diferentes estados y funciones que modifican los estados manejados en diferentes slice y que se puedan controlar de manera mas segura en toda la aplicacion.

 Dentro de @reduxjs/toolkit tenemos:
  - createSlice: Permite seccionar los diferentes conjuntos de funciones y estados.

        const nameSlice = createSlice({
          name: "referenceName",
          initialState: {objeto con los diferentes estados a manejar},
          reducers: { funciones que modifican los estados, cada funcion recibe el ultimo estado "state" y el conjunto de datos pasados a la funcion "payload" como parametros},
          }
        });
    
  - configureStore: Permite crear un archivo "store" que une los diferentes sliceReducer que se quieran manejar.

        const nameStore = configureStore({
        reducer: {nameAccessReducer_1: nameImportedReducer_1, nameAccessReducer_1: nameImportedReducer_1, ... }
        });
    
