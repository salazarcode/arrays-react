import { createStore } from 'redux'
import MainRedurcer from './reducer'

const INITIAL_STATE = {
    users:[
        {nombre:"Andrés", apellido:"Salazar"},
        {nombre:"Ricardo", apellido:"Bejarano"},
        {nombre:"Sergio", apellido:"Onix"}
    ],
    token: "slfjalifukj94837u3q4tial"
};

export default createStore(MainRedurcer, INITIAL_STATE);
