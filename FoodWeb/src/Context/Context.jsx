import React, { createContext, useState } from 'react';
import { UNSAFE_getPatchRoutesOnNavigationFunction } from 'react-router-dom';

export const Recipe = createContext(null);

function ContextProvider({ children }) {

    const getData = JSON.parse(localStorage.getItem("recipe")) || []
    const [data, setdata] = useState(getData)

    return (
        <Recipe.Provider value={{ data, setdata }}>
            {children}
        </Recipe.Provider>
    );
}

export default ContextProvider;
// {
//     id: 'ritk',
//         tittle: 'Chole bhature',
//             chef: "vaibhav ",
//                 disc: " most fev dis in north india , that was very testy ",
//                     intra: 'jaise margi bna lo yar',
//                         image: 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA',
//                             category: "lunch dinner bhot some in morning depends on your mood"
// }
