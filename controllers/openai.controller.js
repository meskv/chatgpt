const dotenv = require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const summaryController = async (req, res, next) => {
    const prompt = req.body.prompt;
    console.log(prompt);

    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided");
        }
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
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
    summaryController,
    chatbotController
};