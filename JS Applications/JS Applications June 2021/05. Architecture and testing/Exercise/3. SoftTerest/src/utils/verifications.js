import constants from "../constants/constants.js";


export const ifIsInvalidThrow = (arr) => {
    if (arr.some(e => e.trim() === '')) {
        throw new Error(constants.FIELDS_ALERT);
    }
};
export const verifyLengthInput = (title,description,img) => {
    if(title.length < 6){
        throw new Error(constants.INVALID_TITLE);
    }
    if(description.length < 10){
        throw new Error(constants.INVALID_DESCRIPTION);
    }
    if(img.length < 5){
        throw new Error(constants.INVALID_IMG);
    }
};
export const getFormDataLog = (arrData) => {
    ifIsInvalidThrow(arrData);


    if (arrData.length === 3 && arrData[1] !== arrData[2]) {
        throw new Error(constants.PASSWORD_ALERT);
    }

    return {
        email: arrData[0],
        password: arrData[1]
    }
}