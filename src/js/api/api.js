import axios from "axios";
class API {
     renderSection = async (sectionId)=>{
        try {
            const section = await axios.get(`/?section_id=${sectionId}`);
            const response = section.data;
            return response;
        } catch(error) {
            console.log(error);
        }

    }
    updateQuant = async (variantId,quant)=>{


        const formData = { 
            updates: 
                    {
                     [variantId]: quant
                    }   
                
        };
       
        try {
            const updateQuantResponse = await axios.post(`${routes.cart_update_url}.js`,formData);
            return updateQuantResponse.data;
        } catch(error) {
            console.log(error);
        }
    }
}

export default new API()