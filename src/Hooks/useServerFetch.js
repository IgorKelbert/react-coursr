import { useEffect, useState } from 'react';

const useServerFetch = () =>{

    const dataMethod = function getData(contentType, url, body, methodType) {
        const requestOptions = {
            method: methodType,
            headers: { 'Content-Type': contentType },
            body: body
        };
        return fetch(url, requestOptions)
        .then((response) => {
            if(response.status = '401')
                throw "Not Authorized";
            return response.json();
            })
        .then((result) => 
            {   
                return result;
            }
            );
    }
    return dataMethod;
}

export default useServerFetch