'use client';
import { IconPin, IconUsers } from '@tabler/icons-react';

const nftData = [
  {
    title: '프로젝트1',
    author: '이것은 프로젝트1 입니다.',
  },
  {
    title: '프로젝트2',
    author: '이것은 프로젝트2 입니다.',
  },
  {
    title: '프로젝트3',
    author: '이것은 프로젝트3 입니다.',
  },
];

export default function MainContent() {
  return (
    <div className="h-full">
      <div className="text-xl font-semibold mb-4">참여중인 프로젝트</div>
      <div className="flex flex-wrap gap-4">
        {nftData.map((nft, index) => (
          <div
            key={index}
            className="relative hover:border hover:border-l-4 hover:border-primary-600 w-80 h-64 bg-white p-4 rounded-2xl border border-l-4 border-gray-100 border-l-primary-400 flex flex-col gap-3"
          >
            <div className="cursor-pointer flex item justify-end absolute right-4">
              <IconPin
                size={32}
                className="stroke-gray-300 stroke-1 fill-gray-200"
              />
            </div>
            <div className="flex items-center justify-start gap-1.5 py-2">
              <span className="bg-yellow-300/40 text-yellow-800 px-3 py-1 text-xs font-semibold rounded-xl">
                UX Design
              </span>
              <span className="bg-secondary-500/25 text-blue-900 px-3 py-1 text-xs font-semibold rounded-xl">
                UX Research
              </span>
            </div>
            <div className="grow text-neutral-1 text-headline_1 font-semibold px-1.5 leading-6">
              {nft.title}
              <p className="text-body_medium leading-6 text-gray-700">설명</p>
            </div>
            <div className="w-full flex items-center justify-end gap-1 text-gray-500 pr-2">
              100K+
              <IconUsers size={23} className="stroke-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
