import "./MoodSlider.css";
import { Slider } from "@mui/material";
import { NewsData } from "../../utils/getNews";
import { changeMood } from "../../utils/moodHandle";
import { useState } from "react";

type MoodSliderProps = {
  update: React.Dispatch<
    React.SetStateAction<
      Pick<NewsData, "title" | "description" | "mood"> | undefined
    >
  >;
  desiredNews: NewsData;
};

export default function MoodSlider({ update, desiredNews }: MoodSliderProps) {
  const [desiredMood, setDesiredMood] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSliderChange(_: Event, value: number | number[]) {
    const moodValue = value as number;
    setDesiredMood(moodValue);
  }

  return (
    <div>
      <Slider
        defaultValue={2}
        onChange={handleSliderChange}
        className="mood-slider"
        step={1}
        min={1}
        max={10}
        color={
          desiredMood < 5
            ? "success"
            : desiredMood >= 5 && desiredMood <= 7
            ? "warning"
            : "error"
        }
        marks={[
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
          { value: 4, label: "4" },
          { value: 5, label: "5" },
          { value: 6, label: "6" },
          { value: 7, label: "7" },
          { value: 8, label: "8" },
          { value: 9, label: "9" },
          { value: 10, label: "10" },
        ]}
      />
      <button
        onClick={async () => {
          setIsLoading(true);
          const less = await changeMood(desiredNews, desiredMood);
          update(less);
          setIsLoading(false);
        }}
      >
        {isLoading ? "Loading..." : `Update mood`}
      </button>
    </div>
  );
}
