//по оси Х
export const numberDataset: number[] = Array.from({ length: 39 }, (_, i) => i + 1);
export const reactionDataset: number[] = Array.from({ length: 41 }, (_, i) => i * 25);
reactionDataset.shift();
export const verbalDataset: number[] = Array.from({ length: 31 }, (_, i) => i * 10);
verbalDataset.shift();
export const sequenceDataset: number[] = Array.from({ length: 45 }, (_, i) => i + 1);
export const typingDataset: number[] = Array.from({ length: 70 }, (_, i) => i * 2);
typingDataset.shift();
export const aimDataset: number[] = Array.from({ length: 41 }, (_, i) => i * 50);
aimDataset.shift();
