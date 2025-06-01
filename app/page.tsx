"use client";

import { useState } from "react";
import { words_01_05 } from "@/lib/words_01_05";
import { words_06_10 } from "@/lib/words_06_10";
import { words_11_15 } from "@/lib/words_11_15";
import { words_16_20 } from "@/lib/words_16_20";
import { words_21_25 } from "@/lib/words_21_25";
import { words_26_30 } from "@/lib/words_26_30";
import { words_31_35 } from "@/lib/words_31_35";
import { words_36_40 } from "@/lib/words_36_40";
import { words_41_45 } from "@/lib/words_41_45";
import { words_46_48 } from "@/lib/words_46_48";
import { words_49_53 } from "@/lib/words_49_53";
import { words_54_58 } from "@/lib/words_54_58";
import QuizPage from "@/components/quizpage";

const units = {
  "Unit 01~05": words_01_05,
  "Unit 06~10": words_06_10,
  "Unit 11~15": words_11_15,
  "Unit 16~20": words_16_20,
  "Unit 21~25": words_21_25,
  "Unit 26~30": words_26_30,
  "Unit 31~35": words_31_35,
  "Unit 36~40": words_36_40,
  "Unit 41~45": words_41_45,
  "Unit 46~48": words_46_48,
  "Unit 49~53": words_49_53,
  "Unit 54~58": words_54_58,
};

export default function HomePage() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  if (selectedUnit) {
    return (
      <QuizPage
        words={units[selectedUnit]}
        onBack={() => setSelectedUnit(null)}
      />
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">JLPT N4 퀴즈</h1>
      <p className="mb-4 text-center text-gray-600">풀고 싶은 유닛을 선택하세요:</p>
      <div className="space-y-2">
        {Object.keys(units).map((unitName) => (
          <button
            key={unitName}
            onClick={() => setSelectedUnit(unitName)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {unitName}
          </button>
        ))}
      </div>
    </div>
  );
}
