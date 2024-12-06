import axios from 'axios';

const chatbotEndpoint = 'https://maurifun.xyz/main/agent_milli/';

export const getChatbotResponse = async (userQuery) => {
  try {
    const response = await axios.post(chatbotEndpoint, { query: userQuery });
    return response.data.response || 'No response from the bot';
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    return 'Error: Unable to get response from chatbot. Please try again later.';
  }
};
