export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description?: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Grok Vision",
  },
  {
    id: "chat-model-reasoning",
    name: "Grok Reasoning",
  },
  {
    id: "openai/gpt-5",
    name: "GPT 5",
  },
  {
    id: "google/gemini-2.5-flash",
    name: "Gemini 2.5 flash",
  },
  {
    id: "google/gemini-2.5-pro",
    name: "Gemini 2.5 pro",
  },
];
