import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '@/components/ui/text-reveal';

export default function CTA() {
  return (
    <div className="mb-40 mt-60 flex h-[40rem] w-full items-center justify-center rounded-2xl bg-[#0E0E10]">
      <TextRevealCard text="You know the business" revealText="I know the chemistry ">
        <TextRevealCardTitle>Sometimes, you just need to see it.</TextRevealCardTitle>
        <TextRevealCardDescription>This is a text reveal card. Hover over the card to reveal the hidden text.</TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
