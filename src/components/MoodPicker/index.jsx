import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const moods = ["Happy", "Sad", "Excited", "Calm", "Angry", "Relaxed"];

export default function MoodPicker() {
  const [selectedMood, setSelectedMood] = useState("Pick a mood");

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-40">
            {selectedMood}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          {moods.map((mood) => (
            <DropdownMenuItem key={mood} onClick={() => setSelectedMood(mood)}>
              {mood}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// TODO: modify MoodPicker and build my own dropdown
