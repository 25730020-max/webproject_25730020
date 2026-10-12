// Interview Question Explorer Logic
console.log("Interview Explorer JS Initialized");

async function loadQuestionsData() {
    try {
        const res = await fetch('data/questions.json');
        const data = await res.json();
        return data;
    } catch (e) {
        console.warn("Using fallback local data", e);
    }
}

function generateAIQuestions() {
    alert("AI 면접 질문을 도출합니다.");
}
