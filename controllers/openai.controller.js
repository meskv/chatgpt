const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getAllModelsController = async (req, res) => {
    try {
        const response = await openai.listEngines();
        return res.status(200).json({
            models: response.data,
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
}


const promptController = async (req, res) => {
    try {
        const { message, currentModel } = req.body;
        console.log("currentModel: ", currentModel),
        console.log("message: ", message);

        const response = await openai.createCompletion({
            // model: `${currentModel}`, // "text-davinci-003"
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 50,
            temperature: 0.3,
        });

        console.log(response.data.choices[0].text);

        if (response) {
            if (response.data.choices[0].text) {
                return res.status(200).json({
                    data: response.data.choices[0].text,
                });
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
}


const summaryController = async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);

    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided");
        }
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            // maxTokens: 1024,
            temperature: 0.5,
        });
        const completion = response.data.choices[0].text;
        return res.status(200).json({
            success: true,
            message: completion,
        });
    } catch (error) {
        console.log(error.message);
    }
}

const chatbotController = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        console.log(prompt);

        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                prompt: `Answer question similar to how yoda from star war would.
        Me: 'what is your name?'
        yoda: 'yoda is my name'
        Me: ${prompt}`,
            }],
        });

        if (response) {
            if (response.choices[0].text) {
                return res.status(200).json(response.choices[0].text);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
}

module.exports = {
    getAllModelsController,
    promptController,
    summaryController,
    chatbotController,
};





