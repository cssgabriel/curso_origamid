import React from "react";

interface Props {
  indexQuestion: number;
  questions: Perguntas[];
  [key: string]: unknown;
}

const Question = ({ indexQuestion, questions }: Props) => {
  return (
    <div>
      <h2>{questions[indexQuestion].pergunta}</h2>
      {questions[indexQuestion].options.map((opt) => (
        <label key={opt}>
          <input type="radio" name="questions" />
          {opt}
        </label>
      ))}
    </div>
  );
};

export default Question;
