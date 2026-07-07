import Anthropic from "@anthropic-ai/sdk";
import type { BusinessProfile, Review } from "./types";

// Cheap + fast model is ideal for high-volume, short review replies.
const MODEL = "claude-haiku-4-5-20251001";

const toneGuide: Record<BusinessProfile["tone"], string> = {
  warm: "warm, personal and genuinely grateful; sound like a real human owner",
  professional: "polished, concise and professional",
  playful: "friendly and lightly playful, without being unprofessional",
};

export function buildPrompt(business: BusinessProfile, review: Review): string {
  return [
    `You are the owner of "${business.name}", a ${business.category}.`,
    `Write a public reply to the customer review below.`,
    ``,
    `Guidelines:`,
    `- Tone: ${toneGuide[business.tone]}.`,
    `- Keep it to 2-4 sentences. No corporate filler.`,
    `- Address the customer by name if provided.`,
    `- For negative reviews: acknowledge the specific issue, apologize sincerely, take responsibility, and invite them to make it right offline (do not offer specific compensation).`,
    `- For safety complaints (e.g. allergens), take it seriously and never be dismissive.`,
    `- For positive reviews: be specific about what they praised, don't be generic.`,
    `- Never invent facts. Never argue. Sign off with "${business.signature}".`,
    ``,
    `Review (${review.rating}/5 stars) from ${review.author}:`,
    `"${review.text}"`,
    ``,
    `Return ONLY the reply text, nothing else.`,
  ].join("\n");
}

// Deterministic, high-quality fallback so the product works end-to-end without
// an API key (demos, local dev, CI). Not as tailored as the model, but safe.
export function templateReply(
  business: BusinessProfile,
  review: Review,
): string {
  const name = review.author.split(/\s+/)[0] || "there";
  if (review.rating <= 2) {
    return `Hi ${name}, thank you for taking the time to share this — I'm genuinely sorry we let you down. This isn't the experience we want anyone to have, and I'd like to understand exactly what happened and make it right. Please reach out to us directly so we can follow up personally. ${business.signature}`;
  }
  if (review.rating === 3) {
    return `Thanks for the honest feedback, ${name}. We're glad some of it landed well, and we're taking your notes seriously as we keep improving. We'd love the chance to give you a better visit next time. ${business.signature}`;
  }
  return `Thank you so much, ${name}! Reviews like yours make our day and mean a lot to our whole team. We can't wait to welcome you back soon. ${business.signature}`;
}

export interface GenerateResult {
  reply: string;
  source: "ai" | "template";
}

export async function generateReply(
  business: BusinessProfile,
  review: Review,
): Promise<GenerateResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { reply: templateReply(business, review), source: "template" };
  }

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 400,
      messages: [{ role: "user", content: buildPrompt(business, review) }],
    });
    const text = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("")
      .trim();
    if (!text) throw new Error("Empty completion");
    return { reply: text, source: "ai" };
  } catch (err) {
    console.error("AI generation failed, using template fallback:", err);
    return { reply: templateReply(business, review), source: "template" };
  }
}
