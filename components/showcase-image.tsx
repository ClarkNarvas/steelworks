import Link from "next/link";

interface ShowcaseImageProps {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    linkHref?: string; // Optional link
    linkText?: string; // Optional link text
  }
  
  const ShowcaseImage: React.FC<ShowcaseImageProps> = ({
    title,
    description,
    imageUrl,
    altText,
    linkHref,
    linkText,
  }) => {
    return (
      <div className="mt-container">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-10 lg:p-0 flex">
            <div className="mt-auto mb-auto">
              <h1 className="text-3xl mb-3">{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: description }} /> {/* Render HTML safely */}
              {linkHref && linkText && (
                <Link href={linkHref} className="mt-button mt-button-red mt-5">
                  {linkText}
                </Link>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-3 pr-3 p-10 lg:p-0">
            <Image
              className="rounded-lg"
              src={imageUrl}
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              alt={altText}
            />
          </div>
        </div>
      </div>
    );
  };
  

export { ShowcaseImage };