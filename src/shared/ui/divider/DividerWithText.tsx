const InternalDividerText = ({ text }: { text: string }) => (
  <div className="flex items-center w-full max-w-sm my-4">
    <div className="flex-1 h-px bg-gray-300"></div>
    <span className="px-2 text-gray-400 text-sm">{text}</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
);

export default InternalDividerText;
