export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Grok Vision",
    description: "Advanced multimodal model with vision and text capabilities",
  },
  {
    id: "openai/gpt-5",
    name: "GPT 5",
    description:
      "Uses advanced chain-of-thought reasoning for complex problems",
  },
  {
    id: "google/gemini-2.5-flash",
    name: "Gemini 2.5 flash",
    description:
      "The fastest google model",
  },
];
