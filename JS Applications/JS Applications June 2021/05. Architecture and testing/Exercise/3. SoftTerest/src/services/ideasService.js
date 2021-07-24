import httpRequest from "../httpLibrary/httpService.js";
import magic from "../constants/constants.js";


const getAllIdeas = async () => {
    return await httpRequest.get(`${magic.BASE_URL}${magic.endPoints.allIdeasPoint}`, false);
};
const getIdea= async (id) => {
    return await httpRequest.get(`${magic.BASE_URL}${magic.endPoints.getPoint}${id}`, false);
};
const createIdea = async (data) => {
    return await httpRequest.post(`${magic.BASE_URL}${magic.endPoints.createPoint}`, true, data);
};

const deleteIdea = async (ideaId) => {
    return await httpRequest.del(`${magic.BASE_URL}${magic.endPoints.deletePoint}${ideaId}`, true);
};

export default {
    getAllIdeas,getIdea,createIdea,deleteIdea
}