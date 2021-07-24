import ideas from "../services/ideasService.js";
import viewPort from "../runners/viewPort.js";
import {ifIsInvalidThrow,verifyLengthInput} from "../utils/verifications.js";

let container = undefined;

const init = (domElement) =>{
    container = domElement;
    let form = container.querySelector('form');
    form.addEventListener('submit',createMyIdea)
};

const getPage = () => {
  return container;
};

const createMyIdea = async (e) =>{
    e.preventDefault();
    const currForm = e.currentTarget;
    let formData = new FormData(currForm);


    try {
        ifIsInvalidThrow([formData.get('title'),formData.get('description'),formData.get('imageURL')]);
        verifyLengthInput(formData.get('title'),formData.get('description'),formData.get('imageURL'));
        let data = {
            title:formData.get('title'),
            description:formData.get('description'),
            img:formData.get('imageURL')
        }
        await ideas.createIdea(data);
        await viewPort.navigateTo('dashboard');
    }catch (err) {
        alert(err);
    }finally {
        currForm.reset();
    }
};

let createPage = {
    init,getPage
};

export default createPage;
