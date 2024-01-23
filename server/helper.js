import OpenAI from "openai";
export async function generateHTMLCompletion(content) {
  try {
    const openai = new OpenAI({
      apiKey: process.env["OPENAI_API_KEY"],
    });
    console.log("log", process.env["OPENAI_API_KEY"]);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are HTML generator which return only HTML with tailwindCSS",
        },
        { role: "user", content },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
    const result =
      completion.choices[0] && completion.choices[0].message.content;
    return result;
  } catch (error) {
    console.log("Something went wrong!", error);
    return { error: "Nam pizda!" };
  }
}

//
