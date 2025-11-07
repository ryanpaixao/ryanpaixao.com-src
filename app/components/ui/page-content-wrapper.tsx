interface WrapperProps {
  children: React.ReactNode;
}

export default function PageContentWrapper({ children }: WrapperProps) {
  return (
    <div className="font-sans grid grid-rows-[56px_1fr_20px] mx-3 md:mx-[18%] items-center justify-items-center min-h-screen gap-4 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        {children}
      </main>
    </div>
  )
}