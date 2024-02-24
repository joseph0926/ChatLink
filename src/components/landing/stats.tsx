import { TabAnim } from '@/components/ui/tab-anim';

export default function Stats() {
  const tabs = [
    {
      title: 'Product',
      value: 'product',
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-black/50 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      )
    },
    {
      title: 'Services',
      value: 'services',
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-black/50 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Services tab</p>
          <DummyContent />
        </div>
      )
    },
    {
      title: 'Playground',
      value: 'playground',
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-black/50 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      )
    },
    {
      title: 'Content',
      value: 'content',
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-black/50 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Content tab</p>
          <DummyContent />
        </div>
      )
    },
    {
      title: 'Random',
      value: 'random',
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-black/50 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Random tab</p>
          <DummyContent />
        </div>
      )
    }
  ];

  return (
    <div className="b relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start  justify-start [perspective:1000px] md:h-[40rem]">
      <TabAnim tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <div />;
};
