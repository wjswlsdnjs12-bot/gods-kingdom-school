
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const refineSchoolCopy = async (rawText: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        다음은 학교 소개서의 원문입니다. 
        이 내용을 '예수촌교회 하나님나라 학교'의 프리미엄 웹사이트에 어울리는 현대적이고 감동적인 문구로 다듬어 주세요.
        톤앤매너: 전문적인, 따뜻한, 권위있는, 생명력 넘치는.
        형식: 마크다운.

        원문:
        ${rawText}
      `,
    });
    return response.text || "문구를 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI 서비스 연결 중 오류가 발생했습니다.";
  }
};
