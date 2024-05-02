import {useState} from "react";
import Image from "next/image";

export default function BlurImage({image, alt, className}: { image: string, alt: string, className?: string }) {
    const [isLoading, setLoading] = useState(true);

    return (

        <div
            className={`${className} aspect-w-1 aspect-h-1 overflow-hidden  bg-gray-200 `}>
            <Image
                alt={alt}
                src={image}
                layout="fill"
                objectFit="cover"
                className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                })`}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>

    );
}


export function BlurImage2({image, alt, className}: { image: string, alt: string, className?: string }) {
    const [isLoading, setLoading] = useState(true);

    return (

        <div
            className={`${className} aspect-w-2 aspect-h-1  overflow-hidden  bg-gray-200 `}>
            <Image
                alt={alt}
                src={image}
                layout="fill"
                objectFit="fill"
                className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                })`}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>

    );
}
