export function Hero() {
  return (
    <section className="flex w-full flex-col items-center px-6 pb-[80px] pt-[100px] sm:pb-[100px] sm:pt-[120px] md:px-16 lg:px-[120px]">
      <div className="flex w-full max-w-[920px] flex-col items-center gap-[24px]">
        <div className="flex w-full flex-col items-center gap-[12px]">
          <p className="shrink-0 text-[14px] font-semibold uppercase tracking-[1.12px] text-[#7a8a7f]">
            About me
          </p>
          <h1 className="shrink-0 text-center text-[36px] font-bold text-[#2f332f] sm:text-[48px]">
            Marius Cheng
          </h1>
        </div>
        <p className="w-full text-balance text-center text-[16px] leading-[1.6] text-[#5f665f] sm:text-[18px]">
          My name is Marius Cheng. I study Higher-Diploma of Computer Study in
          Lingnan University. My interest is landscape photography and
          web-design. I like to get idea from negative mind. This is my
          photographe Profile.
        </p>
      </div>
    </section>
  )
}
