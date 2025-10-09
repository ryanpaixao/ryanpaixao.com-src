interface PageHeaderTitleProps {
  children: React.ReactNode;
};

export default function PageHeaderTitle({ children }: PageHeaderTitleProps) {
  return (
    <h1 className="text-4xl mb-5 font-extrabold dark:text-gray-400 text-gray-600">
      {`<${children}>`}
    </h1>
  )
};
