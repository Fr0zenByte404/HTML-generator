async function generateHTMLCompletion(content) {
    const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": "Hello!" }
        ],
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
}