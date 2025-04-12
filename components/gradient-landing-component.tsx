import Link from "next/link";

interface gradientLandingProps {
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
    colour: string;
  }

  const GradientLanding: React.FC<gradientLandingProps> = ({
    title,
    description,
    linkHref,
    linkText,
    colour
  }) => {
    return (
      <div className="gradient-landing mt-parliament-gradient text-center flex">
        <div className="text-center mt-container mt-container-narrow pt-10 pb-10 h-[40vh] flex ">
          
          <div className="mt-auto mb-auto text-md p-4">
            <h1 className="text-4xl mb-3">{title}</h1>
            {description && <p>{description}</p>}
            
            {linkHref && <Link href="{linkHref}"className="mt-button mt-button-green mt-3">{linkText}</Link>}
          </div>
        </div>
      </div>
    );
  }

export { GradientLanding };