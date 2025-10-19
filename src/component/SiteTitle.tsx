type SiteTitleProps = {
  title: string;
  subtitle?: string;
};

const SiteTitle = ({ title, subtitle }: SiteTitleProps) => {
  return (
    <h1 className="flex flex-col items-center my-4 text-orange-600">
      <span className="text-4xl font-bold">{title}</span>
      <span className="text-xl">{subtitle}</span>
    </h1>
  );
};



export default SiteTitle;