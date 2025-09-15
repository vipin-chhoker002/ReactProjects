import React, { createContext, useState } from 'react';

export const Recipe = createContext(null);

function ContextProvider({ children }) {


    const [data, setdata] = useState([{
        id: 'ritk',
        tittle: 'Chole bhature',
        chef: "vaibhav ",
        disc: " most fev dis in north india , that was very testy ",
        intra: 'jaise margi bna lo yar',
        image: 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA',
        category: "lunch dinner bhot some in morning depends on your mood"
    }

    ]);


    return (
        <Recipe.Provider value={{ data, setdata }}>
            {children}
        </Recipe.Provider>
    );
}

export default ContextProvider;
