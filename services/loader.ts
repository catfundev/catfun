import {ImageLoaderProps} from "next/image";

export function imageLoader({src}:  ImageLoaderProps): string {
    return `/assets/${src}`;
}

