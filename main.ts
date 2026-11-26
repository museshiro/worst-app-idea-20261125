import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "PetStare is a $6.99/month app that uses your phone's front camera to log how many seconds " +
  "your dog stares at you while you sleep, then emails a weekly 'loyalty score' to your ex.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
